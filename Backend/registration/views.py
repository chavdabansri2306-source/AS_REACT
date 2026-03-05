from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer

@api_view(['POST'])
def register(request):
    try:
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {
                    'message': 'Registration Successful',
                    'role': serializer.data.get('role'),
                    'name': serializer.data.get('name')
                }, 
                status=status.HTTP_201_CREATED
            )
        return Response(
            {'message': 'Registration failed', 'errors': serializer.errors}, 
            status=status.HTTP_400_BAD_REQUEST
        )
    except Exception as e:
        return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def login(request):
    try:
        email = request.data.get('email')
        password = request.data.get('password')
        
        if not email or not password:
            return Response({'message': 'Email and Password are required'}, status=status.HTTP_400_BAD_REQUEST)
            
        user = User.objects.filter(email=email).first()
        if user is None:
            return Response({'message': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
            
        if user.password != password:
            return Response({'message': 'Incorrect Password'}, status=status.HTTP_401_UNAUTHORIZED)
            
        return Response({
            'message': 'Login Successful',
            'role': user.role,
            'name': user.name
        }, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# from django.db import models

# class User(models.Model):
#     ROLE_CHOICES = (
#         ('seller', 'Seller'),
#         ('customer', 'Customer'),
#         ('delivery', 'Delivery Person'),
#     )

#     name = models.CharField(max_length=25)
#     email = models.EmailField(max_length=30, unique=True)
#     password = models.CharField(max_length=128)
#     contact = models.CharField(max_length=10)
#     gender = models.CharField(max_length=6)
#     address = models.CharField(max_length=50)
#     dob = models.DateField()
#     role = models.CharField(max_length=15, choices=ROLE_CHOICES)
#     age = models.IntegerField(null=True, blank=True)
#     vehicleNumber = models.CharField(max_length=20, null=True, blank=True)
#     licenseNumber = models.CharField(max_length=50, null=True, blank=True)

#     def __str__(self):
#         return self.email

