from django.urls import path
from django.views.generic import TemplateView
from fruit.views import FruitList

app_name = "fruit"

urlpatterns = [
    path(
        "fruits/",
        FruitList.as_view(extra_context={"title": "Fruit Inspector"}),
        name="list",
    ),
    path(
        "fruit-counter/",
        TemplateView.as_view(
            template_name="fruit/counter.html",
            extra_context={"counter_message": "How many fruits could you eat?"},
        ),
        name="counter",
    ),
]
