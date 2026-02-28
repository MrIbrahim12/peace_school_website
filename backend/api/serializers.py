from rest_framework import serializers
from .models import (
    ContactSubmission,
    Achievement,
    GalleryCategory,
    GalleryImage,
    FacultyMember,
    Announcement,
    AdmissionInquiry,
)


class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = ['id', 'name', 'email', 'phone', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']


class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = [
            'id', 'student_name', 'father_name', 'year', 'exam_type',
            'position', 'marks_obtained', 'total_marks', 'percentage',
            'photo', 'is_featured', 'created_at'
        ]


class GalleryCategorySerializer(serializers.ModelSerializer):
    image_count = serializers.SerializerMethodField()

    class Meta:
        model = GalleryCategory
        fields = ['id', 'name', 'slug', 'image_count']

    def get_image_count(self, obj):
        return obj.images.count()


class GalleryImageSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)

    class Meta:
        model = GalleryImage
        fields = ['id', 'title', 'description', 'image', 'category', 'category_name', 'is_featured', 'created_at']


class FacultyMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = FacultyMember
        fields = [
            'id', 'name', 'designation', 'department', 'qualification',
            'experience_years', 'bio', 'photo', 'order', 'is_active'
        ]


class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = ['id', 'title', 'content', 'image', 'is_important', 'is_active', 'created_at']


class AdmissionInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionInquiry
        fields = [
            'id', 'student_name', 'father_name', 'phone', 'email',
            'current_class', 'desired_class', 'previous_school',
            'message', 'created_at', 'status'
        ]
        read_only_fields = ['id', 'created_at', 'status']
