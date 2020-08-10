from django.urls import path
from django.views.generic import TemplateView
from shopping.views import ShoppingListView

app_name = "app"

urlpatterns = [
    path(
        "shopping/",
        ShoppingListView.as_view(extra_context={"title": "Shopping List"}),
        name="list",
    ),
]
