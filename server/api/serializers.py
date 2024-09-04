from rest_framework import serializers
from .models import Processor

class ProcessorSerializer(serializers.ModelSerializer):
    spec_image_url = serializers.SerializerMethodField()

    class Meta:
        model = Processor
        fields = ['field_id', 'device', 'spec_image_url']

    def get_spec_image_url(self, obj):
        spec_image = obj.get_spec()
        return spec_image.url  # Assuming the image is saved and has a URL