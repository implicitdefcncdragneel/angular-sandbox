from rest_framework.viewsets import ModelViewSet
from api.todo.serializers import GetTodoSerializer
from api.todo.models import Todo

# Create your views here.
class GetTodoView(ModelViewSet):
    serializer_class = GetTodoSerializer
    queryset = Todo.objects.all()
