# SWAP Website - Stop Waste And Plastic

🌍 A bilingual (EN/JP) website for SWAP organization - High school students fighting plastic waste in Japanese supermarkets.

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Docker](https://img.shields.io/badge/Docker-ready-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📖 About SWAP

**SWAP** (Stop Waste And Plastic) is a high school student-led initiative addressing plastic waste from Japanese supermarket packaging. We promote sustainable alternatives, raise awareness, and collaborate with communities and businesses.

### Mission
Tackle plastic waste originating from packaging in Japanese supermarkets through education, advocacy, and practical solutions.

### Team
- **Annabelle Siddons** - Founder & President
- **Hayato Hoori** - Vice President & Translator
- **Ellen Tanabe** - Social Media Coordinator
- Plus volunteers from around the world!

### Contact
- 📧 Email: swapplastictogreen@gmail.com
- 📱 Instagram: [@swapplastictogreen](https://instagram.com/swapplastictogreen)
- ✍️ Petition: [Change.org](https://change.org/swap-petition)

---

## 🚀 Quick Start (Docker)

### Prerequisites
- Docker Desktop or Docker Engine installed
- Git (optional, for cloning)

### Get Started in 3 Steps

```bash
# 1. Clone repository (or create new)
git clone <your-repo> swap-website
cd swap-website

# 2. Setup environment
cp .env.example .env.local
# Edit .env.local with your EmailJS credentials

# 3. Start development server
docker compose up --build

# Open http://localhost:3000
```

That's it! 🎉

---

## 📁 Project Structure

```
swap-website/
├── 📄 Dockerfile                      # Docker configuration
├── 📄 docker-compose.yml              # Development environment
├── 📄 docker-compose.prod.yml         # Production build test
├── 📄 .dockerignore                   # Docker ignore rules
├── 📄 .env.example                    # Environment template
│
├── 📁 src/                            # Application source
│   ├── app/                           # Next.js App Router
│   │   └── [locale]/                 # Internationalized routes
│   │       ├── page.tsx              # Homepage
│   │       ├── about/                # About Us page
│   │       ├── progress/             # Progress page
│   │       ├── action/               # Action page
│   │       ├── research/             # Research page
│   │       └── goals/                # Accomplished Goals
│   ├── components/                    # React components
│   │   ├── layout/                   # Layout components
│   │   ├── ui/                       # UI components
│   │   └── ContactForm.tsx           # Contact form (EmailJS)
│   └── lib/                          # Utilities & helpers
│
├── 📁 content/                        # Markdown content
│   ├── en/                           # English content
│   └── ja/                           # Japanese content
│
├── 📁 data/                           # JSON data
│   ├── team.json                     # Team members
│   ├── goals.json                    # Achievements
│   └── links.json                    # External links
│
├── 📁 public/                         # Static assets
│   ├── images/                       # Images
│   │   ├── team/                     # Team photos
│   │   └── goals/                    # Achievement photos
│   └── locales/                      # Translation files
│       ├── en.json                   # English translations
│       └── ja.json                   # Japanese translations
│
└── 📁 docs/                           # Documentation
    ├── IMPLEMENTATION_GUIDE_OPTION1.md
    ├── DOCKER_SETUP_GUIDE.md
    ├── RECOMMENDED_TECH_STACK.md
    ├── BACKEND_ANALYSIS.md
    └── OPTION_COMPARISON.md
```

---

## 🛠️ Tech Stack (Option 1 - Pure Static)

### Frontend
- **Next.js 14** - React framework with App Router & SSG
- **React 18** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS with custom pastel colors
- **Framer Motion** - Smooth animations

### Internationalization
- **next-intl** - Bilingual support (EN/JP)

### Forms
- **EmailJS** - Contact form (no backend needed!)

### Deployment
- **Vercel** - Free static hosting with global CDN

### Development
- **Docker** - Containerized development environment
- **ESLint & Prettier** - Code quality

---

## 🎨 Design System

### Colors (Pastel Theme)
```css
/* Pastel Green - Primary */
--pastel-green: #B8E6B8;

/* Pastel Blue - Secondary */
--pastel-blue: #A7C7E7;

/* Cream - Accent */
--cream: #FFFDD0;

/* Nature accents */
--mint: #C1F0C1;
--sky: #B9D9EB;
```

### Typography
- **Primary Font**: Verdana, system-ui, sans-serif
- **Rounded Font**: Nunito, Quicksand, sans-serif (for headings)

### Design Principles
- Clean, soft, nature-inspired aesthetics
- Round corners and soft shadows
- Bilingual side-by-side layout
- Mobile-first responsive design

---

## 🐳 Docker Commands

### Development
```bash
# Start development server
docker compose up

# Start in background
docker compose up -d

# View logs
docker compose logs -f web

# Stop containers
docker compose down

# Rebuild after changes
docker compose up --build
```

### Install Packages
```bash
# Install new package
docker compose exec web npm install <package-name>

# Restart after install
docker compose restart web
```

### Production Build Test
```bash
# Test production build
docker compose -f docker-compose.prod.yml up --build

# Access at http://localhost:3000
```

See [DOCKER_SETUP_GUIDE.md](DOCKER_SETUP_GUIDE.md) for detailed Docker instructions.

---

## 📧 EmailJS Setup

### 1. Create Account
- Visit [EmailJS.com](https://www.emailjs.com/)
- Sign up (Free tier: 200 emails/month)

### 2. Configure Service
- Dashboard → Email Services → Add Gmail
- Connect: swapplastictogreen@gmail.com

### 3. Create Template
- Dashboard → Email Templates → Create New
- Copy template from [DOCKER_SETUP_GUIDE.md](DOCKER_SETUP_GUIDE.md)

### 4. Get Credentials
- Service ID: `service_xxxxxxx`
- Template ID: `template_xxxxxxx`
- Public Key: `xxxxxxxxxxxxxxx`

### 5. Update Environment
```bash
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### 6. Restart
```bash
docker compose restart web
```

---

## 📝 Content Management

### Update Homepage
```bash
# Edit English content
code content/en/homepage.md

# Edit Japanese content
code content/ja/homepage.md

# Hot reload automatically updates!
```

### Update Team Members
```bash
# Edit team data
code data/team.json

# Add new member:
{
  "id": 4,
  "name": "New Member",
  "nameJa": "新しいメンバー",
  "role": {
    "en": "Volunteer",
    "ja": "ボランティア"
  },
  "joinDate": "2024-12",
  "image": "/images/team/new-member.jpg"
}

# Add photo to: public/images/team/new-member.jpg
```

### Update Achievements
```bash
# Edit goals
code data/goals.json

# Add images to: public/images/goals/
```

---

## 🚀 Deployment

### Vercel (Recommended - FREE)

```bash
# 1. Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Visit https://vercel.com
# 3. Import GitHub repository
# 4. Add environment variables:
#    - NEXT_PUBLIC_EMAILJS_SERVICE_ID
#    - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
#    - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
# 5. Deploy! ✅

# Auto-deploy on every push to main
```

### Manual Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Production
vercel --prod
```

---

## 📚 Documentation

Detailed guides available:

1. **[IMPLEMENTATION_GUIDE_OPTION1.md](IMPLEMENTATION_GUIDE_OPTION1.md)**
   - Complete implementation guide
   - Architecture overview
   - Code examples
   - Timeline

2. **[DOCKER_SETUP_GUIDE.md](DOCKER_SETUP_GUIDE.md)**
   - Docker installation
   - Container management
   - Troubleshooting
   - EmailJS setup

3. **[RECOMMENDED_TECH_STACK.md](RECOMMENDED_TECH_STACK.md)**
   - Tech stack details
   - Dependencies
   - Configuration
   - Performance goals

4. **[BACKEND_ANALYSIS.md](BACKEND_ANALYSIS.md)**
   - Why no backend/DB needed
   - Architecture decisions
   - Content management

5. **[OPTION_COMPARISON.md](OPTION_COMPARISON.md)**
   - Option 1 vs Option 2
   - Detailed comparison
   - Recommendation rationale

---

## 🐛 Troubleshooting

### Port already in use
```bash
docker compose down
# Or change port in docker-compose.yml: "3001:3000"
```

### Hot reload not working
```bash
# Check WATCHPACK_POLLING=true in docker-compose.yml
docker compose restart web
```

### Container won't start
```bash
docker compose down -v
docker system prune -a
docker compose up --build
```

See [DOCKER_SETUP_GUIDE.md](DOCKER_SETUP_GUIDE.md) for more troubleshooting.

---

## 🎯 Development Roadmap

### Phase 1: Foundation (Week 1) ✅
- [x] Docker setup
- [x] Next.js project initialization
- [x] Tailwind configuration
- [ ] Component library

### Phase 2: Content (Week 2)
- [ ] Homepage
- [ ] About Us page
- [ ] Team members section
- [ ] Other pages

### Phase 3: Features (Week 3)
- [ ] i18n setup (EN/JP)
- [ ] Contact form (EmailJS)
- [ ] Image galleries
- [ ] Social media integration

### Phase 4: Polish (Week 4)
- [ ] Responsive design
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Testing
- [ ] Deployment to Vercel

---

## 🤝 Contributing

We welcome contributions from volunteers!

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m "Add your feature"
   ```
4. **Push** to your fork
   ```bash
   git push origin feature/your-feature
   ```
5. **Open** a Pull Request

### Content Updates

Non-technical members can update content via:
- Edit Markdown files in `content/`
- Edit JSON files in `data/`
- Commit via GitHub web interface

---

## 📊 Project Stats

- **Cost**: $0/month (Free hosting on Vercel)
- **Performance**: Lighthouse score 95+
- **Languages**: English + Japanese
- **Status**: In Development
- **Team**: 3 core + volunteers
- **Started**: 2024

---

## 📄 License

MIT License - feel free to use for educational purposes!

---

## 🌟 Achievements

- ✅ Inspired 6 supermarket locations to offer bag refusal option
- ✅ Gathered 98+ signatures on Change.org petition
- ✅ Growing volunteer community worldwide

---

## 💡 Support SWAP

### Ways to Help

1. **Sign** our [Change.org petition](https://change.org/swap-petition)
2. **Follow** us on Instagram [@swapplastictogreen](https://instagram.com/swapplastictogreen)
3. **Share** our mission with friends
4. **Volunteer** - Contact us at swapplastictogreen@gmail.com
5. **Spread awareness** about plastic waste

---

## 📞 Contact

- **Email**: swapplastictogreen@gmail.com
- **Instagram**: @swapplastictogreen
- **Website**: [Coming Soon]

---

## 🙏 Acknowledgments

- All SWAP volunteers
- Participating supermarkets
- ECC Volunteer Center
- Toyonaka City Hall
- Everyone who signed our petition!

---

<div align="center">

**Made with 💚 by SWAP Team**

*SWAP plastic for a better future!*

</div>
