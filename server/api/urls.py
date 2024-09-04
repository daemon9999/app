from django.urls import path
from . import views
urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('spec/<int:pk>', views.get_spec, name='get_spec'),
    path('forecast/<int:pk>', views.get_forecast, name='get_forecast'),
    path('future/<int:pk>', views.get_future, name='get_future'),
    path('insights/<int:pk>', views.get_insights, name='get_insights'),
]