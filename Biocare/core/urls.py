from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DiseaseViewSet, RegisterView

# JWT AUTHENTICATION IMPORT
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

router = DefaultRouter()
router.register(r'diseases', DiseaseViewSet, basename='disease')

urlpatterns = [
    # JWT AUTHENTICATION ENDPOINT
    path('auth/token/', TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name="token_refresh"),
    path('auth/register/', RegisterView.as_view(), name='register'),
]
urlpatterns += router.urls