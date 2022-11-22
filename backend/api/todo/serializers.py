from rest_framework import serializers
from api.todo.models import Todo

class GetTodoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Todo
        fields = ("id", "value", "isDone")
