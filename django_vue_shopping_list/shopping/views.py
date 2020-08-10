from django.views.generic import ListView
from shopping.models import Item


class ShoppingListView(ListView):
    model = Item
