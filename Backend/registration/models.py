from django.db import models

class User(models.Model):
    ROLE_CHOICES = (
        ('seller', 'Seller'),
        ('customer', 'Customer'),
        ('delivery', 'Delivery Person'),
    )

    name = models.CharField(max_length=25)
    email = models.EmailField(max_length=30, unique=True)
    password = models.CharField(max_length=128)
    contact = models.CharField(max_length=10)
    gender = models.CharField(max_length=6)
    address = models.CharField(max_length=50)
    dob = models.DateField()
    role = models.CharField(max_length=15, choices=ROLE_CHOICES)
    age = models.IntegerField(null=True, blank=True)
    vehicleNumber = models.CharField(max_length=20, null=True, blank=True)
    licenseNumber = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.email
