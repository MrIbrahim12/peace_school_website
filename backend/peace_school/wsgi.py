"""
WSGI config for peace_school project.
"""
import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'peace_school.settings')
application = get_wsgi_application()
