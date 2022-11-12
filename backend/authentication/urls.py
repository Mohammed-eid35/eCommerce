from django.urls import path

from .views import (
    RegisterView,
    LoginAPIView,
    RequestEmailVerificationView,
    VerifyEmailView
)


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('request-email-verification/', RequestEmailVerificationView.as_view(), name='request-email-verification'),
    path('email-verify/', VerifyEmailView.as_view(), name="email-verify"),
]
