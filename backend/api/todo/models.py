from django.db import models

# Create your models here.
class Todo(models.Model):
    
    value = models.CharField(max_length=20, blank=True)
    isDone = models.BooleanField(default=False)