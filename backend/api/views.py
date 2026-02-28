from rest_framework import viewsets, status, generics
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .models import (
    ContactSubmission,
    Achievement,
    GalleryCategory,
    GalleryImage,
    FacultyMember,
    Announcement,
    AdmissionInquiry,
)
from .serializers import (
    ContactSubmissionSerializer,
    AchievementSerializer,
    GalleryCategorySerializer,
    GalleryImageSerializer,
    FacultyMemberSerializer,
    AnnouncementSerializer,
    AdmissionInquirySerializer,
)


class ContactSubmissionCreateView(generics.CreateAPIView):
    """Handle contact form submissions from the website."""
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {'message': 'Thank you for contacting us! We will get back to you soon.'},
            status=status.HTTP_201_CREATED,
        )


class AchievementListView(generics.ListAPIView):
    """List all achievements/board position holders."""
    serializer_class = AchievementSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        queryset = Achievement.objects.all()
        year = self.request.query_params.get('year', None)
        exam_type = self.request.query_params.get('exam_type', None)
        featured = self.request.query_params.get('featured', None)

        if year:
            queryset = queryset.filter(year=year)
        if exam_type:
            queryset = queryset.filter(exam_type=exam_type)
        if featured:
            queryset = queryset.filter(is_featured=True)

        return queryset


class GalleryCategoryListView(generics.ListAPIView):
    """List all gallery categories."""
    queryset = GalleryCategory.objects.all()
    serializer_class = GalleryCategorySerializer
    permission_classes = [AllowAny]


class GalleryImageListView(generics.ListAPIView):
    """List gallery images, optionally filtered by category."""
    serializer_class = GalleryImageSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        queryset = GalleryImage.objects.all()
        category = self.request.query_params.get('category', None)
        featured = self.request.query_params.get('featured', None)

        if category:
            queryset = queryset.filter(category__slug=category)
        if featured:
            queryset = queryset.filter(is_featured=True)

        return queryset


class FacultyMemberListView(generics.ListAPIView):
    """List all active faculty members."""
    queryset = FacultyMember.objects.filter(is_active=True)
    serializer_class = FacultyMemberSerializer
    permission_classes = [AllowAny]


class AnnouncementListView(generics.ListAPIView):
    """List active announcements."""
    queryset = Announcement.objects.filter(is_active=True)
    serializer_class = AnnouncementSerializer
    permission_classes = [AllowAny]


class AdmissionInquiryCreateView(generics.CreateAPIView):
    """Handle admission inquiry submissions."""
    queryset = AdmissionInquiry.objects.all()
    serializer_class = AdmissionInquirySerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(
            {'message': 'Your admission inquiry has been submitted. We will contact you shortly.'},
            status=status.HTTP_201_CREATED,
        )
