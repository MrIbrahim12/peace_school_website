from django.db import models


class ContactSubmission(models.Model):
    """Contact form submissions from the website."""
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    subject = models.CharField(max_length=100, choices=[
        ('admission', 'Admission Inquiry'),
        ('fee', 'Fee Structure'),
        ('general', 'General Inquiry'),
        ('feedback', 'Feedback'),
        ('complaint', 'Complaint'),
    ])
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Contact Submission'
        verbose_name_plural = 'Contact Submissions'

    def __str__(self):
        return f"{self.name} - {self.subject} ({self.created_at.strftime('%Y-%m-%d')})"


class Achievement(models.Model):
    """Board position holders and achievements."""
    student_name = models.CharField(max_length=200)
    father_name = models.CharField(max_length=200, blank=True)
    year = models.IntegerField()
    exam_type = models.CharField(max_length=50, choices=[
        ('matric_science', 'Matric (Science)'),
        ('matric_arts', 'Matric (Arts)'),
        ('fsc_pre_eng', 'FSc Pre-Engineering'),
        ('fsc_pre_med', 'FSc Pre-Medical'),
        ('ics', 'ICS'),
        ('fa', 'FA'),
    ])
    position = models.CharField(max_length=50)
    marks_obtained = models.IntegerField(blank=True, null=True)
    total_marks = models.IntegerField(blank=True, null=True)
    percentage = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    photo = models.ImageField(upload_to='achievements/', blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-year', 'position']
        verbose_name = 'Achievement'
        verbose_name_plural = 'Achievements'

    def __str__(self):
        return f"{self.student_name} - {self.position} ({self.year})"


class GalleryCategory(models.Model):
    """Categories for gallery images."""
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    class Meta:
        verbose_name = 'Gallery Category'
        verbose_name_plural = 'Gallery Categories'

    def __str__(self):
        return self.name


class GalleryImage(models.Model):
    """Gallery images for the website."""
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='gallery/')
    category = models.ForeignKey(GalleryCategory, on_delete=models.CASCADE, related_name='images')
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Gallery Image'
        verbose_name_plural = 'Gallery Images'

    def __str__(self):
        return self.title


class FacultyMember(models.Model):
    """Faculty members of the school."""
    name = models.CharField(max_length=200)
    designation = models.CharField(max_length=100)
    department = models.CharField(max_length=100, blank=True)
    qualification = models.CharField(max_length=200)
    experience_years = models.IntegerField()
    bio = models.TextField(blank=True)
    photo = models.ImageField(upload_to='faculty/', blank=True, null=True)
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'name']
        verbose_name = 'Faculty Member'
        verbose_name_plural = 'Faculty Members'

    def __str__(self):
        return f"{self.name} - {self.designation}"


class Announcement(models.Model):
    """School announcements and news."""
    title = models.CharField(max_length=300)
    content = models.TextField()
    image = models.ImageField(upload_to='announcements/', blank=True, null=True)
    is_important = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Announcement'
        verbose_name_plural = 'Announcements'

    def __str__(self):
        return self.title


class AdmissionInquiry(models.Model):
    """Admission inquiries from interested parents/students."""
    student_name = models.CharField(max_length=200)
    father_name = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    email = models.EmailField(blank=True)
    current_class = models.CharField(max_length=20)
    desired_class = models.CharField(max_length=20)
    previous_school = models.CharField(max_length=200, blank=True)
    message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pending'),
        ('contacted', 'Contacted'),
        ('enrolled', 'Enrolled'),
        ('rejected', 'Rejected'),
    ], default='pending')

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Admission Inquiry'
        verbose_name_plural = 'Admission Inquiries'

    def __str__(self):
        return f"{self.student_name} - Class {self.desired_class}"
