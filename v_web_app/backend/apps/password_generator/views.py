from password_generator import password

from django.http import JsonResponse

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny

from rest_framework_simplejwt.tokens import RefreshToken

from .models import SavedPasswords
from .serializers import SavedPasswordsSerializer


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


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def save_passwords(request):
    try:

        serializer = SavedPasswordsSerializer(data=request.data)

        if serializer.is_valid():
            print("Datos recibidos en el backend:", serializer.validated_data)  # Depuración
            serializer.save()

            passwords = SavedPasswords.objects.filter(
                user=serializer.data['user'])
            passwords.password_saved = serializer.data['password_saved']
            passwords.url = serializer.data['url']
            passwords.name_pages = serializer.data['name_pages']
            for password in passwords:
                password.save()

            return Response({
                'saved passwords': serializer.data
            }, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except KeyError:
        return Response({'error': 'Missing required fields.'}, status=status.HTTP_400_BAD_REQUEST)
    except SavedPasswords.DoesNotExist:
        return Response({'error': 'password does not exist after creation.'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def view_all_saved_passwords(request):
    try:
        user = request.user

        passwords = SavedPasswords.objects.filter(user=user)

        serializer = SavedPasswordsSerializer(passwords, many=True)

        return Response(
            {
                "message": f"Passwords saved by the user {user.username}: ",
                "passwords": serializer.data
            },
            status=status.HTTP_200_OK
        )

    except KeyError:
        return Response({'error': 'Missing required fields.'}, status=status.HTTP_400_BAD_REQUEST)
    except SavedPasswords.DoesNotExist:
        return Response({'error': 'password does not exist after creation.'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
