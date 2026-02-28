from django.urls import path
from . import views

urlpatterns = [
    path('contact/', views.ContactSubmissionCreateView.as_view(), name='contact-submit'),
    path('achievements/', views.AchievementListView.as_view(), name='achievement-list'),
    path('gallery/categories/', views.GalleryCategoryListView.as_view(), name='gallery-categories'),
    path('gallery/images/', views.GalleryImageListView.as_view(), name='gallery-images'),
    path('faculty/', views.FacultyMemberListView.as_view(), name='faculty-list'),
    path('announcements/', views.AnnouncementListView.as_view(), name='announcement-list'),
    path('admission/', views.AdmissionInquiryCreateView.as_view(), name='admission-inquiry'),
]
