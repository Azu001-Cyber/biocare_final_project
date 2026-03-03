
from rest_framework import serializers
from .models import CustomUser,Disease
from django.contrib.auth.models import Group
from django.contrib.auth.password_validation import validate_password 
class CustomUserSerializer(serializers.ModelSerializer):
    """
    Handle the conversion of customuser data into json format
    """
    class Meta:
        model = CustomUser
        fields = [
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'gender',
            'password',
        ]

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = CustomUser(**validated_data)
        user.set_password(password)
        user.save()

        # Assigned default group

        group = Group.object.get(name='Regular User')
        user.groups.add(group)

        return user
        



class DiseaseSerializer(serializers.ModelSerializer):
    """
    Handle the conversion of disease data into json format
    """
    class Meta:
        model = Disease
        fields = [
            'id',
            'name',
            'symptoms',
            'causes',
            'prevention',
            'treatment',
        ]

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ('username','email', 'password', 'password2', 'first_name', 'last_name', 'gender')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn’t match."})
        return attrs
    
    def create(self, validated_data):
        validated_data.pop('password2')
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data.get('first_name', ''),
            last_name=validated_data.get('last_name', ''),
            gender=validated_data.get('gender', CustomUser.NonSpecify),
            # role=CustomUser.Regular
        )

        user.set_password(validated_data['password'])
        user.save()
        return user
