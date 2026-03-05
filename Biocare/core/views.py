# from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated, IsAdminUser, AllowAny
from rest_framework import viewsets
from .models import Disease
from .serializers import DiseaseSerializer
from django.contrib.postgres.search import SearchQuery, SearchVector, SearchRank
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

from .utils import symptom_checker

# Create your views here.

class DiseaseViewSet(viewsets.ModelViewSet):
    """
    Allows admin to perform CRUD Operation
    regular user can only perform R operation.
    """
    queryset = Disease.objects.all()
    serializer_class = DiseaseSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve', 'search']:
            return [AllowAny()] #temporarily change permission access for testing.
        return [IsAdminUser()]
    
   # views.py
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import DiseaseSerializer

class DiseaseViewSet(viewsets.ModelViewSet):
    queryset = Disease.objects.all()
    serializer_class = DiseaseSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve', 'search', 'check_symptoms']:
            return [AllowAny()]  # no auth for MVP
        return [IsAdminUser()]

    @action(detail=False, methods=['get'])
    def search(self, request):
        q = request.query_params.get('q', '').strip()
        if not q:
            return Response([], status=200)

        # simple filter for SQLite
        qs = self.queryset.filter(name__icontains=q)
        serializer = DiseaseSerializer(qs, many=True)
        return Response(serializer.data)
    
    @action(detail=False, methods=['POST'])
    def check_symptoms(request):
        symptoms = request.data.get("symptoms")

        if not symptoms:
            return Response({"error": "No symptoms provided"},
                            status=status.HTTP_400_BAD_REQUEST)

        results = symptom_checker(symptoms)

        return Response({
            "matches": results[:3]  # return top 3
            })
    

# Registration Logic

from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import RegisterSerializer

class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        # Generate JWT for the new user
        refresh = RefreshToken.for_user(user)
        return Response({
            "user": RegisterSerializer(user).data,
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }, status=status.HTTP_201_CREATED)
