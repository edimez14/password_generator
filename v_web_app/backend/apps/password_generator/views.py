from password_generator import password

from django.http import JsonResponse

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.decorators import authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken

# from .serializers import SavedPasswordsSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def response_password(request):
    try:
        result = password()

        if isinstance(result, str) == False:
            return Response({"Error in script": result}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        return Response({"output": result}, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
