from django.contrib import admin
from django.db import models
from .models import CustomUser, Disease
# Register your models here.
@admin.register(CustomUser)
class UserAdmin(admin.ModelAdmin):
    search_fields = ('username',)

@admin.register(Disease)
class Disease(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name', 'symptoms')
    list_filter = ('name',)