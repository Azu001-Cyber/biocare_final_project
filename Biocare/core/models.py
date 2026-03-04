from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid
from django.contrib.postgres.indexes import GinIndex

# Create your models here

"""
This model file contains the ORM for Biocare database 
structure
"""

# Users Data Structure
class CustomUser(AbstractUser):
    """
    ## This custom user model captures the following data 
    - username, 
    - email, 
    - first_name, 
    - last_name, 
    - password, 
    - date_joined, 
    - last_login, 
    - id(custom), 
    - gender

    This will handle user onboarding 
    """

    Male = 'ML'
    Female = 'FML'
    NonSpecify = 'NS'


    GENDER_CHOICES = [
        (Male, "MALE"), 
        (Female, "FEMALE"), 
        (NonSpecify,'Non Specify'),
]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False,)
    gender = models.CharField(max_length=3, choices=GENDER_CHOICES, default=NonSpecify, null=True)

    def __str__(self):
        return self.username
    ...


# Diseases Data Structure
class Disease(models.Model):
    """
    ## This Disease model captures the following disease data
    - id(custom)
    - name
    - symptoms
    - causes
    - prevention
    - treatment
    """
    id = models.UUIDField(verbose_name="Disease ID", primary_key=True, editable=False, default=uuid.uuid4,)
    name = models.CharField(verbose_name="Disease Name",max_length=150, unique=True,)
    symptoms = models.TextField(verbose_name="Disease Symptoms", null=True, blank=True)
    causes = models.TextField(verbose_name="Disease Causes", null=True, blank=True)
    prevention = models.TextField(verbose_name="Disease Prevention", null=True, blank=True)
    treatment = models.TextField(verbose_name="Disease Treatment", null=True, blank=True)
    created_on = models.DateTimeField(verbose_name="Date Created", auto_now_add=True, null=True)
    updated_on = models.DateTimeField(verbose_name="Updated On", auto_now=True)

    class Meta:
        ordering = ["name"]
        """
        ## GIN index
        - for large datasets this makes full-text search super fast 
        """
        indexes = [
            GinIndex(fields=['name', 'symptoms', 'causes', 'prevention', 'treatment']) # pass in the fields
        ]
    
    def __str__(self):
        return self.name
    ...
