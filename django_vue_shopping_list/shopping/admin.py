from django.contrib import admin

# Register your models here.
from .models import Color
from .models import Icon

# register models to use in admin site
admin.site.register(Color)
admin.site.register(Icon)
