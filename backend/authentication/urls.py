from django.urls import path

from .views import (
    RegisterView,
    LoginAPIView,
    RequestEmailVerificationView,
    VerifyEmailView,
    LogoutAPIView,
    PasswordTokenCheckAPIView,
    SetNewPasswordAPIView,
    RequestPasswordResetEmailAPIView
)


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('request-email-verification/', RequestEmailVerificationView.as_view(),
         name='request-email-verification'),
    path('email-verify/', VerifyEmailView.as_view(), name="email-verify"),
    path('logout/', LogoutAPIView.as_view(), name='logout'),
    path('request-reset-email/', RequestPasswordResetEmailAPIView.as_view(),
         name="request-reset-email"),
    path('password-reset/<uidb64>/<token>/',
         PasswordTokenCheckAPIView.as_view(), name='password-reset-confirm'),
    path('password-reset-complete', SetNewPasswordAPIView.as_view(),
         name='password-reset-complete')
]
