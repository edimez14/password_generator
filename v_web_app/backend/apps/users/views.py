from django.shortcuts import get_object_or_404

from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Users
from .serializers import UsersSerializer


@permission_classes([AllowAny])
class UsersData(viewsets.ModelViewSet):
    serializer_class = UsersSerializer
    queryset = Users.objects.all()


@api_view(['POST'])
@permission_classes([AllowAny])
def sign_in(request):
    try:
        user = get_object_or_404(Users, email=request.data.get('email'))

        if not user.check_password(request.data.get('password')):
            return Response({'error': 'Invalid password'}, status=status.HTTP_400_BAD_REQUEST)

        refresh = RefreshToken.for_user(user)
        serializer = UsersSerializer(instance=user)

        # print(f"token del inicio de sesion: {refresh}\n {refresh.access_token}")

        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user': serializer.data
        }, status=status.HTTP_200_OK)

    except KeyError:
        return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)
    except Users.DoesNotExist:
        return Response({'error': 'User does not exist.'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@permission_classes([AllowAny])
def sign_up(request):
    try:
        serializer = UsersSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            user = Users.objects.get(username=serializer.data['username'])
            user.email = serializer.data['email']
            user.set_password(serializer.data['password'])
            user.first_name = serializer.data['first_name']
            user.last_name = serializer.data['last_name']
            user.number_phone = serializer.data['number_phone']
            user.save()

            refresh = RefreshToken.for_user(user)

            # print(f"token del registro: {refresh}\n {refresh.access_token}")

            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': serializer.data
            }, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except KeyError:
        return Response({'error': 'Missing required fields.'}, status=status.HTTP_400_BAD_REQUEST)
    except Users.DoesNotExist:
        return Response({'error': 'User does not exist after creation.'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def profile(request):
    try:
        serializer = UsersSerializer(instance=request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    except Users.DoesNotExist:
        return Response({'error': 'The user cannot be found in the database.'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_profile(request, pk):
    try:
        data_instance = Users.objects.get(
            pk=pk, user=request.user)
        serializer = UsersSerializer(
            data_instance, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response("data saved", status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Users.DoesNotExist:
        return Response({'error': 'data not found.'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_user(request, pk):
    try:
        user_instance = Users.objects.get(
            pk=pk, user=request.user)
        user_instance.delete()
        return Response({"message": "user deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
    except Users.DoesNotExist:
        return Response({'error': 'user not found.'}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)