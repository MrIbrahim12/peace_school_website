from django.contrib import admin
from .models import (
    ContactSubmission,
    Achievement,
    GalleryCategory,
    GalleryImage,
    FacultyMember,
    Announcement,
    AdmissionInquiry,
)


@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'is_read', 'created_at']
    list_filter = ['subject', 'is_read', 'created_at']
    search_fields = ['name', 'email', 'message']
    list_editable = ['is_read']
    readonly_fields = ['created_at']


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ['student_name', 'year', 'exam_type', 'position', 'percentage', 'is_featured']
    list_filter = ['year', 'exam_type', 'is_featured']
    search_fields = ['student_name', 'father_name']
    list_editable = ['is_featured']


@admin.register(GalleryCategory)
class GalleryCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'is_featured', 'created_at']
    list_filter = ['category', 'is_featured']
    search_fields = ['title', 'description']
    list_editable = ['is_featured']


@admin.register(FacultyMember)
class FacultyMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'designation', 'department', 'experience_years', 'is_active', 'order']
    list_filter = ['department', 'is_active']
    search_fields = ['name', 'designation']
    list_editable = ['is_active', 'order']


@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_important', 'is_active', 'created_at']
    list_filter = ['is_important', 'is_active']
    search_fields = ['title', 'content']
    list_editable = ['is_important', 'is_active']


@admin.register(AdmissionInquiry)
class AdmissionInquiryAdmin(admin.ModelAdmin):
    list_display = ['student_name', 'father_name', 'desired_class', 'phone', 'status', 'created_at']
    list_filter = ['status', 'desired_class', 'created_at']
    search_fields = ['student_name', 'father_name', 'phone']
    list_editable = ['status']
    readonly_fields = ['created_at']
