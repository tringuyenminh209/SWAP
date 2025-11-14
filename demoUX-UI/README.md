# SWAP Website - Demo UX/UI

Demo giao diện và thiết kế cho SWAP website.

---

## 📁 Cấu trúc thư mục

```
demoUX-UI/
├── README.md                      # File này
│
├── 📁 wireframes/                 # Wireframes (bản phác thảo low-fidelity)
│   ├── 01-homepage.png
│   ├── 02-about-us.png
│   ├── 03-progress.png
│   ├── 04-action.png
│   ├── 05-research.png
│   ├── 06-goals.png
│   └── mobile/                    # Mobile wireframes
│
├── 📁 mockups/                    # Mockups (bản thiết kế high-fidelity)
│   ├── desktop/
│   │   ├── homepage.png
│   │   ├── about-us.png
│   │   └── ...
│   ├── tablet/
│   └── mobile/
│
├── 📁 prototypes/                 # Interactive prototypes
│   ├── desktop-prototype.fig      # Figma file
│   ├── mobile-prototype.fig
│   └── prototype-links.md         # Links to online prototypes
│
├── 📁 style-guide/                # Design system & style guide
│   ├── colors.md                  # Color palette
│   ├── typography.md              # Fonts & text styles
│   ├── icons.md                   # ✅ Icons guide (Iconify only!)
│   ├── components.md              # UI components
│   └── spacing.md                 # Layout & spacing
│
├── 📁 pages/                      # Demos cho từng trang
│   ├── homepage.html
│   ├── about.html
│   ├── progress.html
│   ├── action.html
│   ├── research.html
│   └── goals.html
│
├── 📁 components/                 # Demo UI components
│   ├── header.html
│   ├── footer.html
│   ├── navigation.html
│   ├── contact-form.html
│   ├── team-card.html
│   └── goal-card.html
│
└── 📁 assets/                     # Assets cho demo
    ├── images/                    # Demo images
    ├── icons/                     # SVG icons
    └── fonts/                     # Web fonts
```

---

## 🎨 Design System

### Colors (Pastel Theme)

```css
/* Primary Colors */
--pastel-green: #B8E6B8;
--pastel-blue: #A7C7E7;
--cream: #FFFDD0;

/* Secondary Colors */
--mint: #C1F0C1;
--sky: #B9D9EB;
--sand: #F5EFE0;
--leaf: #A8D5BA;

/* Neutral Colors */
--white: #FFFFFF;
--gray-50: #FAFAFA;
--gray-100: #F4F4F5;
--gray-200: #E4E4E7;
--gray-300: #D4D4D8;
--gray-400: #A1A1AA;
--gray-500: #71717A;
--gray-600: #52525B;
--gray-700: #3F3F46;
--gray-800: #27272A;
--gray-900: #18181B;
```

### Typography

```css
/* Font Families */
--font-primary: 'Verdana', system-ui, sans-serif;
--font-rounded: 'Nunito', 'Quicksand', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
```

### Spacing

```css
/* Spacing Scale */
--space-1: 0.25rem;      /* 4px */
--space-2: 0.5rem;       /* 8px */
--space-3: 0.75rem;      /* 12px */
--space-4: 1rem;         /* 16px */
--space-5: 1.25rem;      /* 20px */
--space-6: 1.5rem;       /* 24px */
--space-8: 2rem;         /* 32px */
--space-10: 2.5rem;      /* 40px */
--space-12: 3rem;        /* 48px */
--space-16: 4rem;        /* 64px */
--space-20: 5rem;        /* 80px */
--space-24: 6rem;        /* 96px */
```

### Border Radius

```css
--radius-sm: 0.375rem;   /* 6px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px - "soft" */
--radius-xl: 1.25rem;    /* 20px - "round" */
--radius-full: 9999px;   /* Full round */
```

### Shadows

```css
--shadow-soft: 0 2px 8px rgba(0, 0, 0, 0.08);
--shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.12);
--shadow-large: 0 8px 24px rgba(0, 0, 0, 0.16);
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
--breakpoint-sm: 640px;   /* Small devices (phones) */
--breakpoint-md: 768px;   /* Medium devices (tablets) */
--breakpoint-lg: 1024px;  /* Large devices (desktops) */
--breakpoint-xl: 1280px;  /* Extra large devices */
--breakpoint-2xl: 1536px; /* 2X large devices */
```

---

## 🖼️ Pages Layout

### Homepage
- Hero section với motto
- Mission statement
- Quick links to actions
- Latest achievements
- Contact CTA

### About Us
- Team story
- SDGs alignment
- Team members (cards với photos)
- Join us CTA

### Progress
- Timeline of activities
- Statistics
- Links to 3 sub-pages

### Action
- Call to actions
- Toyonaka City Hall initiative
- ECC Volunteer Center
- How to help

### Research
- Supermarket research findings
- Links to Google Docs
- Data visualization

### Goals
- Achievement cards với images
- Supermarket initiative (6 locations)
- Change.org petition (100 signatures)
- Impact metrics

---

## 🎯 UI Components

### Header
- Logo (SWAP)
- Navigation menu (EN/JP)
- Language switcher
- Mobile hamburger menu

### Footer
- Contact info
- Social media links
- Quick links
- Copyright

### Cards
- Team member card
- Goal/achievement card
- Action card

### Forms
- Contact form với EmailJS
- Newsletter signup (optional)

### Buttons
- Primary (pastel green)
- Secondary (pastel blue)
- Outline
- Text link

---

## 🛠️ Tools được dùng

### Design Tools
- **Figma** - UI/UX design & prototyping
- **Adobe XD** - Alternative design tool
- **Sketch** - Mac design tool

### Wireframing
- **Figma** - Free tier OK
- **Balsamiq** - Quick wireframes
- **Excalidraw** - Simple sketches

### Prototyping
- **Figma Prototype** - Interactive prototypes
- **InVision** - Prototype & collaboration
- **ProtoPie** - Advanced interactions

### Assets
- **Unsplash** - Free stock photos
- **Pexels** - Free stock photos
- **Iconify** - ✅ **ONLY USE THIS** for icons! (200,000+ icons)
  - Website: https://icon-sets.iconify.design/
  - Preferred sets: Material Design Icons (mdi:), Carbon (carbon:), Lucide (lucide:)
- **Google Fonts** - Web fonts (Verdana, Nunito)

---

## 📝 Workflow

### 1. Wireframes (Week 1)
- Sketch low-fidelity layouts
- Define information architecture
- Plan user flows

### 2. Mockups (Week 2)
- Create high-fidelity designs
- Apply color palette
- Add typography
- Design UI components

### 3. Prototypes (Week 3)
- Add interactions
- Link pages together
- Test user flows
- Get feedback

### 4. Handoff (Week 4)
- Export assets
- Document components
- Provide style guide
- Support development

---

## 🎨 Design Principles

### 1. Clean & Minimal
- White space is your friend
- Don't overcrowd elements
- Focus on content

### 2. Nature-Inspired
- Pastel colors evoke nature
- Soft, round shapes
- Organic feel

### 3. Accessible
- High contrast for readability
- Clear typography
- Large touch targets (mobile)
- Alt text for images

### 4. Bilingual
- EN/JP side by side
- Clear language switcher
- Consistent layout across languages

### 5. Mobile-First
- Design for mobile first
- Scale up to desktop
- Touch-friendly interactions

---

## 📸 Screenshots & Examples

(Thêm screenshots vào đây khi có thiết kế)

---

## 🔗 Links

- **Figma File**: [Link to Figma]
- **Prototype**: [Link to prototype]
- **Style Guide**: See `/style-guide/` folder

---

## ✅ Checklist

### Wireframes
- [ ] Homepage wireframe
- [ ] About Us wireframe
- [ ] Progress wireframe
- [ ] Action wireframe
- [ ] Research wireframe
- [ ] Goals wireframe
- [ ] Mobile wireframes

### Mockups
- [ ] Desktop mockups (all pages)
- [ ] Tablet mockups
- [ ] Mobile mockups
- [ ] Component library

### Prototypes
- [ ] Desktop interactive prototype
- [ ] Mobile interactive prototype
- [ ] User testing completed

### Style Guide
- [ ] Color palette documented
- [ ] Typography guide
- [ ] Component documentation
- [ ] Spacing guide

### Assets
- [ ] Logo files (SVG, PNG)
- [ ] Icon set
- [ ] Stock photos
- [ ] Team photos (placeholder)

---

## 👥 Contributors

- **Design Lead**: [Name]
- **UX Designer**: [Name]
- **UI Designer**: [Name]

---

*Last Updated: 2025*
*SWAP Website Demo UX/UI*
