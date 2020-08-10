from django.db import models

# Admin Only Models
class Color(models.Model):
    """Table schema to store colors for categories"""
    name = models.CharField(max_length=12)
    hex_value = models.CharField(max_length=6)
    
    def __str__(self):
        return '%s' % self.hex_value

class Icon(models.Model):
    """Table schema to store icons for categories"""
    icon_name = models.CharField(max_length=10)
    
    def __str__(self):
        return '%s' % self.icon_name

# User Editable Models
class Category(models.Model):
    """Table schema to store categories"""
    name = models.CharField(max_length=10)
    color = models.ForeignKey('shopping.Color', default=1,on_delete=models.SET_DEFAULT)
    icon = models.ForeignKey('shopping.Icon', default=1, on_delete=models.SET_DEFAULT)
    
    def __str__(self):
        return '%s' % self.name
    
class Item(models.Model):
    """Table schema to store Item"""
    name = models.CharField(max_length=30)
    category = models.ForeignKey('shopping.Category', default=1, on_delete=models.SET_DEFAULT)
    notes = models.TextField(max_length=128)
    
    def __str__(self):
        return '%s' % self.name
