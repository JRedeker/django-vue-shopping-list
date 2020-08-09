from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from django_vue_shopping_list.users.api.views import UserViewSet  # isort:skip
from fruit.api.views import FruitViewSet  # isort:skip

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)
router.register("fruits", FruitViewSet)

app_name = "api"
urlpatterns = router.urls
