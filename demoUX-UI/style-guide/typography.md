# SWAP Website - Typography Guide

## 🔤 Font System

Simple, rounded typography với Verdana và Nunito cho friendly, approachable feel.

---

## Font Families

### Primary Font (Body Text)
```css
--font-primary: 'Verdana', 'Geneva', 'Tahoma', system-ui, -apple-system, sans-serif;
```

**Characteristics:**
- Clean, legible
- Web-safe font (no download needed)
- Good for body text
- Available on all systems

**Usage:**
- Body text
- Paragraphs
- UI labels
- Form inputs

---

### Secondary Font (Headings)
```css
--font-rounded: 'Nunito', 'Quicksand', 'Comfortaa', 'Rounded', sans-serif;
```

**Characteristics:**
- Rounded, friendly appearance
- Modern, approachable
- Good for headings
- Google Fonts (free)

**Usage:**
- H1-H6 headings
- Buttons
- Callouts
- Brand elements

**Google Fonts Import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap" rel="stylesheet">
```

```css
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap');
```

---

## Font Sizes

### Desktop Scale (16px base)
```css
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
--text-7xl: 4.5rem;      /* 72px */
```

### Mobile Scale (14px base)
```css
--text-xs-mobile: 0.625rem;   /* 10px */
--text-sm-mobile: 0.75rem;    /* 12px */
--text-base-mobile: 0.875rem; /* 14px */
--text-lg-mobile: 1rem;       /* 16px */
--text-xl-mobile: 1.125rem;   /* 18px */
--text-2xl-mobile: 1.5rem;    /* 24px */
--text-3xl-mobile: 1.875rem;  /* 30px */
--text-4xl-mobile: 2.25rem;   /* 36px */
--text-5xl-mobile: 3rem;      /* 48px */
```

---

## Font Weights

```css
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

**Nunito Weights Available:**
- Light (300)
- Regular (400)
- SemiBold (600)
- Bold (700)
- ExtraBold (800)

---

## Line Heights

```css
--leading-none: 1;
--leading-tight: 1.25;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

**Usage:**
- Headings: 1.2 - 1.3
- Body text: 1.5 - 1.6
- UI text: 1.4 - 1.5

---

## Letter Spacing

```css
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0em;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

---

## Type Styles

### Headings

#### H1 - Main Page Title
```css
.h1 {
  font-family: var(--font-rounded);
  font-size: 3.75rem;        /* 60px */
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: var(--color-gray-900);
}

/* Mobile */
@media (max-width: 768px) {
  .h1 {
    font-size: 2.25rem;      /* 36px */
  }
}
```

**Example:**
```html
<h1 class="h1">SWAP</h1>
```

---

#### H2 - Section Headers
```css
.h2 {
  font-family: var(--font-rounded);
  font-size: 3rem;           /* 48px */
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.025em;
  color: var(--color-gray-900);
}

/* Mobile */
@media (max-width: 768px) {
  .h2 {
    font-size: 1.875rem;     /* 30px */
  }
}
```

**Example:**
```html
<h2 class="h2">Our Mission</h2>
```

---

#### H3 - Subsection Headers
```css
.h3 {
  font-family: var(--font-rounded);
  font-size: 2.25rem;        /* 36px */
  font-weight: 600;
  line-height: 1.3;
  color: var(--color-gray-900);
}

/* Mobile */
@media (max-width: 768px) {
  .h3 {
    font-size: 1.5rem;       /* 24px */
  }
}
```

---

#### H4 - Card Titles
```css
.h4 {
  font-family: var(--font-rounded);
  font-size: 1.5rem;         /* 24px */
  font-weight: 600;
  line-height: 1.4;
  color: var(--color-gray-800);
}

/* Mobile */
@media (max-width: 768px) {
  .h4 {
    font-size: 1.25rem;      /* 20px */
  }
}
```

---

#### H5 & H6
```css
.h5 {
  font-family: var(--font-primary);
  font-size: 1.25rem;        /* 20px */
  font-weight: 600;
  line-height: 1.5;
}

.h6 {
  font-family: var(--font-primary);
  font-size: 1rem;           /* 16px */
  font-weight: 600;
  line-height: 1.5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

---

### Body Text

#### Paragraph (Large)
```css
.text-lg {
  font-family: var(--font-primary);
  font-size: 1.125rem;       /* 18px */
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-gray-700);
}
```

**Usage:** Lead paragraphs, important text

---

#### Paragraph (Regular)
```css
.text-base {
  font-family: var(--font-primary);
  font-size: 1rem;           /* 16px */
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-gray-700);
}
```

**Usage:** Main body text

---

#### Small Text
```css
.text-sm {
  font-family: var(--font-primary);
  font-size: 0.875rem;       /* 14px */
  font-weight: 400;
  line-height: 1.5;
  color: var(--color-gray-600);
}
```

**Usage:** Captions, meta info

---

### UI Text

#### Button Text
```css
.button-text {
  font-family: var(--font-rounded);
  font-size: 1rem;           /* 16px */
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.025em;
  text-transform: none;
}
```

---

#### Label Text
```css
.label {
  font-family: var(--font-primary);
  font-size: 0.875rem;       /* 14px */
  font-weight: 600;
  line-height: 1.5;
  color: var(--color-gray-700);
}
```

---

#### Link Text
```css
.link {
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  color: var(--color-pastel-green-600);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  transition: color 0.2s ease;
}

.link:hover {
  color: var(--color-pastel-green-700);
  text-decoration-thickness: 2px;
}
```

---

## Bilingual Typography (EN/JP)

### Japanese Text Adjustments

```css
:lang(ja) {
  font-family: 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo',
               -apple-system, sans-serif;
  line-height: 1.8;  /* Increase for Japanese */
}

/* Headings in Japanese */
h1:lang(ja), h2:lang(ja), h3:lang(ja) {
  font-weight: 700;  /* Japanese fonts often need more weight */
  letter-spacing: 0.05em;
}

/* Body text in Japanese */
p:lang(ja) {
  line-height: 1.8;
  letter-spacing: 0.02em;
}
```

---

## Responsive Typography

### Fluid Typography (CSS clamp)

```css
/* H1 - Scales from 36px (mobile) to 60px (desktop) */
.h1-fluid {
  font-size: clamp(2.25rem, 4vw + 1rem, 3.75rem);
}

/* H2 - Scales from 30px to 48px */
.h2-fluid {
  font-size: clamp(1.875rem, 3vw + 1rem, 3rem);
}

/* Body - Scales from 14px to 16px */
.text-fluid {
  font-size: clamp(0.875rem, 1vw + 0.5rem, 1rem);
}
```

---

## Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Verdana', 'system-ui', 'sans-serif'],
        rounded: ['Nunito', 'Quicksand', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.25' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
  },
}
```

### Usage

```html
<h1 class="font-rounded text-6xl font-extrabold">
  SWAP
</h1>

<h2 class="font-rounded text-4xl font-bold text-gray-900">
  Our Mission
</h2>

<p class="font-sans text-base text-gray-700 leading-relaxed">
  Body text content...
</p>

<button class="font-rounded text-base font-semibold">
  Click Me
</button>
```

---

## Examples

### Homepage Hero

```html
<div class="hero">
  <h1 class="font-rounded text-6xl md:text-7xl font-extrabold text-gray-900">
    SWAP
  </h1>
  <p class="font-rounded text-2xl md:text-3xl font-medium text-gray-700 mt-4">
    Stop Waste And Plastic
  </p>
  <p class="font-sans text-lg md:text-xl text-gray-600 mt-6">
    SWAP plastic for a better future! 🌍
  </p>
</div>
```

### Card Component

```html
<div class="card">
  <h3 class="font-rounded text-2xl font-semibold text-gray-900">
    Annabelle Siddons
  </h3>
  <p class="font-sans text-sm font-medium text-gray-600 mt-1">
    Founder & President
  </p>
  <p class="font-sans text-base text-gray-700 mt-4 leading-relaxed">
    Annabelle founded SWAP to address plastic waste...
  </p>
</div>
```

---

## Accessibility

### Minimum Font Sizes
- Body text: 16px (desktop), 14px (mobile)
- Small text: 14px (desktop), 12px (mobile)
- Never below 12px

### Contrast
- Body text: 4.5:1 minimum (AA)
- Large text (18px+): 3:1 minimum (AA)

### Readable Line Lengths
- 45-75 characters per line (optimal)
- Max 90 characters (readable)

---

*Last Updated: 2025*
*SWAP Website Typography System*
