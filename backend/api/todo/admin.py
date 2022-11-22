from django.contrib import admin
from api.todo.models import Todo

# Register your models here.

class TodoAdmin(admin.ModelAdmin):
    list_display = ("id","value","isDone")

admin.site.register(Todo,TodoAdmin)