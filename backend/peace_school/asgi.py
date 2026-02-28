"""
ASGI config for peace_school project.
"""
import os
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'peace_school.settings')
application = get_asgi_application()
