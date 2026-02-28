# The Peace Group of School & College, Haripur — Website

A professional, modern, and fully responsive website for **The Peace Group of School and College, Haripur Branch**.

## 🏫 About
The Peace Group of School and College is a renowned educational institution in Haripur, Hazara Division, KPK, Pakistan. Known for consistently producing board position holders in BISE Abbottabad examinations.

## 🛠️ Tech Stack

### Frontend (Next.js)
- **Next.js 14** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first CSS framework
- **Framer Motion** — Smooth animations
- **React Icons** — Beautiful icons
- **React CountUp** — Animated counters
- **React Intersection Observer** — Scroll-based animations

### Backend (Django)
- **Django 5** — Python web framework
- **Django REST Framework** — RESTful API
- **SQLite** — Database (upgradable to PostgreSQL)
- **Django CORS Headers** — Cross-origin support
- **WhiteNoise** — Static file serving

## 📁 Project Structure
```
peace-school-website/
├── frontend/                # Next.js Frontend
│   ├── src/
│   │   ├── app/            # App Router pages
│   │   │   ├── layout.tsx  # Root layout
│   │   │   ├── page.tsx    # Home page
│   │   │   └── globals.css # Global styles
│   │   └── components/     # React components
│   │       ├── Navbar.tsx
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── AcademicsSection.tsx
│   │       ├── AchievementsSection.tsx
│   │       ├── CampusSection.tsx
│   │       ├── GallerySection.tsx
│   │       ├── FacultySection.tsx
│   │       ├── TestimonialsSection.tsx
│   │       ├── ContactSection.tsx
│   │       └── Footer.tsx
│   ├── package.json
│   ├── tailwind.config.ts
│   └── tsconfig.json
│
├── backend/                 # Django Backend
│   ├── peace_school/       # Django project settings
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── api/                # REST API app
│   │   ├── models.py       # Database models
│   │   ├── serializers.py  # API serializers
│   │   ├── views.py        # API views
│   │   ├── urls.py         # API routes
│   │   └── admin.py        # Admin configuration
│   ├── manage.py
│   └── requirements.txt
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (for frontend)
- **Python** 3.10+ (for backend)

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend will be available at: http://localhost:3000

### Backend Setup
```bash
cd backend
python -m venv venv
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```
Backend will be available at: http://localhost:8000
Admin panel: http://localhost:8000/admin/

## ✨ Features

### Website Sections
1. **Hero Section** — Animated gradient hero with school branding
2. **About Us** — School history, mission, vision, core values
3. **Academics** — Programs from Primary to College (Matric, FSc, ICS, FA)
4. **Achievements** — Board position holders timeline with statistics
5. **Campus** — Haripur campus facilities and infrastructure
6. **Gallery** — Filterable photo gallery with lightbox
7. **Faculty** — Teacher profiles and qualifications
8. **Testimonials** — Student and parent testimonials
9. **Contact** — Contact form, map, and information
10. **Footer** — Links, social media, admission CTA

### Design Features
- ✅ Fully mobile responsive
- ✅ Smooth scroll animations (Framer Motion)
- ✅ Glass morphism effects
- ✅ Gradient backgrounds
- ✅ Animated counters
- ✅ Lightbox gallery
- ✅ Sticky navbar with active section detection
- ✅ Professional color scheme (Blue, Gold, Green)
- ✅ Google Fonts (Playfair Display + Inter)
- ✅ Custom scrollbar
- ✅ Back-to-top button

### Backend Features
- ✅ Contact form API
- ✅ Achievements management
- ✅ Gallery with categories
- ✅ Faculty management
- ✅ Announcements system
- ✅ Admission inquiry system
- ✅ Full Django Admin panel

## 📱 Responsive Design
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🎨 Color Palette
- **Primary**: Blue (#1a56db) — Trust, Education
- **Secondary**: Gold (#eab308) — Excellence, Achievement
- **Accent**: Green (#10b981) — Growth, Peace
- **Neutral**: Gray tones for text and backgrounds

---

**The Peace Group of School & College, Haripur**
*Excellence in Education — Position Holders Every Year*
