# SWAP Website - Icons Guide

## 🎨 Icon System - Iconify

**Only use icons from**: https://icon-sets.iconify.design/

---

## 📚 About Iconify

Iconify là unified icon framework với:
- **200,000+** icons từ 150+ icon sets
- Single unified API
- No dependencies
- Modern, lightweight
- Free & open source

**Official Website**: https://iconify.design/
**Icon Sets**: https://icon-sets.iconify.design/

---

## 🚀 Installation & Usage

### Method 1: CDN (Recommended for Demo)

```html
<!-- Add Iconify script before closing </body> -->
<script src="https://code.iconify.design/iconify-icon/1.0.8/iconify-icon.min.js"></script>
```

**Usage:**
```html
<!-- Simple icon -->
<iconify-icon icon="mdi:leaf"></iconify-icon>

<!-- With size -->
<iconify-icon icon="mdi:leaf" width="24" height="24"></iconify-icon>

<!-- With color -->
<iconify-icon icon="mdi:leaf" style="color: #B8E6B8;"></iconify-icon>

<!-- With inline style -->
<iconify-icon
  icon="mdi:leaf"
  width="32"
  style="color: var(--pastel-green);">
</iconify-icon>
```

---

### Method 2: React Component (Next.js)

```bash
# Install for Next.js project
npm install --save @iconify/react
```

```tsx
// Import in React/Next.js
import { Icon } from '@iconify/react';

// Usage
<Icon icon="mdi:leaf" width="24" />
<Icon icon="mdi:leaf" color="#B8E6B8" />
<Icon icon="carbon:sustainability" className="text-pastel-green w-6 h-6" />
```

---

### Method 3: SVG (Offline)

Download SVG từ: https://icon-sets.iconify.design/

```html
<!-- Direct SVG embed -->
<svg>...</svg>
```

---

## 🌿 Recommended Icon Sets for SWAP

### 1. Material Design Icons (MDI)
**Prefix**: `mdi:` or `mdi-light:`

**Why**:
- Modern, clean
- Comprehensive set
- Good for nature/environmental themes

**Examples:**
```html
<iconify-icon icon="mdi:leaf"></iconify-icon>
<iconify-icon icon="mdi:recycle"></iconify-icon>
<iconify-icon icon="mdi:sprout"></iconify-icon>
<iconify-icon icon="mdi:earth"></iconify-icon>
<iconify-icon icon="mdi:shopping-outline"></iconify-icon>
```

**Browse**: https://icon-sets.iconify.design/mdi/

---

### 2. Carbon Icons (IBM)
**Prefix**: `carbon:`

**Why**:
- Professional, minimal
- Sustainability-focused set
- 16px, 20px, 24px, 32px sizes

**Examples:**
```html
<iconify-icon icon="carbon:sustainability"></iconify-icon>
<iconify-icon icon="carbon:earth"></iconify-icon>
<iconify-icon icon="carbon:tree"></iconify-icon>
<iconify-icon icon="carbon:recycle"></iconify-icon>
<iconify-icon icon="carbon:shopping-bag"></iconify-icon>
```

**Browse**: https://icon-sets.iconify.design/carbon/

---

### 3. Lucide Icons
**Prefix**: `lucide:`

**Why**:
- Beautiful, consistent
- Open source
- Modern design

**Examples:**
```html
<iconify-icon icon="lucide:leaf"></iconify-icon>
<iconify-icon icon="lucide:recycle"></iconify-icon>
<iconify-icon icon="lucide:sprout"></iconify-icon>
<iconify-icon icon="lucide:heart"></iconify-icon>
<iconify-icon icon="lucide:mail"></iconify-icon>
```

**Browse**: https://icon-sets.iconify.design/lucide/

---

### 4. Heroicons (Tailwind)
**Prefix**: `heroicons:` or `heroicons-outline:`

**Why**:
- Designed for Tailwind CSS
- Outline & Solid variants
- Modern, clean

**Examples:**
```html
<iconify-icon icon="heroicons:leaf"></iconify-icon>
<iconify-icon icon="heroicons-outline:leaf"></iconify-icon>
<iconify-icon icon="heroicons:heart"></iconify-icon>
<iconify-icon icon="heroicons:mail"></iconify-icon>
```

**Browse**: https://icon-sets.iconify.design/heroicons/

---

## 🎨 SWAP Icon Collection

### Environmental Icons

```html
<!-- Nature & Plants -->
<iconify-icon icon="mdi:leaf"></iconify-icon>
<iconify-icon icon="mdi:sprout"></iconify-icon>
<iconify-icon icon="mdi:tree"></iconify-icon>
<iconify-icon icon="mdi:flower"></iconify-icon>
<iconify-icon icon="carbon:tree"></iconify-icon>
<iconify-icon icon="lucide:sprout"></iconify-icon>

<!-- Earth & Environment -->
<iconify-icon icon="mdi:earth"></iconify-icon>
<iconify-icon icon="carbon:earth"></iconify-icon>
<iconify-icon icon="mdi:globe"></iconify-icon>
<iconify-icon icon="lucide:globe"></iconify-icon>

<!-- Recycling -->
<iconify-icon icon="mdi:recycle"></iconify-icon>
<iconify-icon icon="carbon:recycle"></iconify-icon>
<iconify-icon icon="mdi:recycle-variant"></iconify-icon>

<!-- Sustainability -->
<iconify-icon icon="carbon:sustainability"></iconify-icon>
<iconify-icon icon="mdi:heart-circle"></iconify-icon>
<iconify-icon icon="mdi:hand-heart"></iconify-icon>
```

---

### Shopping & Plastic Icons

```html
<!-- Shopping -->
<iconify-icon icon="mdi:shopping-outline"></iconify-icon>
<iconify-icon icon="carbon:shopping-bag"></iconify-icon>
<iconify-icon icon="heroicons:shopping-bag"></iconify-icon>
<iconify-icon icon="mdi:cart-outline"></iconify-icon>

<!-- Bags -->
<iconify-icon icon="mdi:bag-personal-outline"></iconify-icon>
<iconify-icon icon="carbon:shopping-bag"></iconify-icon>
<iconify-icon icon="lucide:shopping-bag"></iconify-icon>

<!-- Trash/Waste -->
<iconify-icon icon="mdi:delete-outline"></iconify-icon>
<iconify-icon icon="carbon:trash-can"></iconify-icon>
<iconify-icon icon="heroicons:trash"></iconify-icon>

<!-- Ban/Stop -->
<iconify-icon icon="mdi:cancel"></iconify-icon>
<iconify-icon icon="mdi:close-circle-outline"></iconify-icon>
<iconify-icon icon="carbon:misuse"></iconify-icon>
```

---

### UI & Navigation Icons

```html
<!-- Menu -->
<iconify-icon icon="mdi:menu"></iconify-icon>
<iconify-icon icon="heroicons:bars-3"></iconify-icon>
<iconify-icon icon="lucide:menu"></iconify-icon>

<!-- Close -->
<iconify-icon icon="mdi:close"></iconify-icon>
<iconify-icon icon="heroicons:x-mark"></iconify-icon>
<iconify-icon icon="lucide:x"></iconify-icon>

<!-- Arrows -->
<iconify-icon icon="mdi:arrow-right"></iconify-icon>
<iconify-icon icon="heroicons:arrow-right"></iconify-icon>
<iconify-icon icon="lucide:arrow-right"></iconify-icon>
<iconify-icon icon="mdi:chevron-down"></iconify-icon>

<!-- Links -->
<iconify-icon icon="mdi:open-in-new"></iconify-icon>
<iconify-icon icon="heroicons:arrow-top-right-on-square"></iconify-icon>
```

---

### Social Media Icons

```html
<!-- Email -->
<iconify-icon icon="mdi:email-outline"></iconify-icon>
<iconify-icon icon="heroicons:envelope"></iconify-icon>
<iconify-icon icon="lucide:mail"></iconify-icon>

<!-- Instagram -->
<iconify-icon icon="mdi:instagram"></iconify-icon>
<iconify-icon icon="ri:instagram-line"></iconify-icon>

<!-- External Link -->
<iconify-icon icon="mdi:link-variant"></iconify-icon>
<iconify-icon icon="heroicons:link"></iconify-icon>

<!-- Share -->
<iconify-icon icon="mdi:share-variant"></iconify-icon>
<iconify-icon icon="heroicons:share"></iconify-icon>
```

---

### Action Icons

```html
<!-- Check/Success -->
<iconify-icon icon="mdi:check"></iconify-icon>
<iconify-icon icon="heroicons:check"></iconify-icon>
<iconify-icon icon="mdi:check-circle"></iconify-icon>

<!-- Info -->
<iconify-icon icon="mdi:information-outline"></iconify-icon>
<iconify-icon icon="heroicons:information-circle"></iconify-icon>

<!-- Search -->
<iconify-icon icon="mdi:magnify"></iconify-icon>
<iconify-icon icon="heroicons:magnifying-glass"></iconify-icon>
<iconify-icon icon="lucide:search"></iconify-icon>

<!-- Heart/Like -->
<iconify-icon icon="mdi:heart-outline"></iconify-icon>
<iconify-icon icon="heroicons:heart"></iconify-icon>
<iconify-icon icon="lucide:heart"></iconify-icon>
```

---

## 🎨 Styling Icons

### Size

```html
<!-- Small (16px) -->
<iconify-icon icon="mdi:leaf" width="16"></iconify-icon>

<!-- Medium (24px) - Default for UI -->
<iconify-icon icon="mdi:leaf" width="24"></iconify-icon>

<!-- Large (32px) -->
<iconify-icon icon="mdi:leaf" width="32"></iconify-icon>

<!-- Extra Large (48px) -->
<iconify-icon icon="mdi:leaf" width="48"></iconify-icon>
```

---

### Color

```html
<!-- Using inline style -->
<iconify-icon
  icon="mdi:leaf"
  style="color: #B8E6B8;">
</iconify-icon>

<!-- Using CSS variable -->
<iconify-icon
  icon="mdi:leaf"
  style="color: var(--pastel-green);">
</iconify-icon>

<!-- Using CSS class -->
<iconify-icon
  icon="mdi:leaf"
  class="icon-green">
</iconify-icon>
```

```css
.icon-green {
  color: var(--pastel-green);
}

.icon-blue {
  color: var(--pastel-blue);
}
```

---

### Responsive Sizing

```html
<!-- Responsive with CSS -->
<iconify-icon
  icon="mdi:leaf"
  class="icon-responsive">
</iconify-icon>
```

```css
.icon-responsive {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .icon-responsive {
    width: 20px;
    height: 20px;
  }
}
```

---

### Alignment

```html
<!-- Vertical align with text -->
<span style="display: inline-flex; align-items: center; gap: 0.5rem;">
  <iconify-icon icon="mdi:leaf"></iconify-icon>
  <span>Eco-friendly</span>
</span>
```

```css
.icon-text {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
```

---

## 📦 Common Patterns

### Button with Icon

```html
<button class="btn-with-icon">
  <iconify-icon icon="mdi:leaf" width="20"></iconify-icon>
  <span>Join Movement</span>
</button>
```

```css
.btn-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--pastel-green);
  border: none;
  border-radius: var(--radius-round);
  cursor: pointer;
}
```

---

### Icon in Card

```html
<div class="card">
  <div class="card-icon">
    <iconify-icon icon="mdi:sprout" width="48"></iconify-icon>
  </div>
  <h3>Growth</h3>
  <p>We help businesses grow sustainably</p>
</div>
```

```css
.card-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--pastel-green);
  border-radius: 50%;
  margin-bottom: 1rem;
}

.card-icon iconify-icon {
  color: var(--gray-900);
}
```

---

### Navigation with Icons

```html
<nav>
  <a href="#" class="nav-link">
    <iconify-icon icon="mdi:home-outline" width="20"></iconify-icon>
    <span>Home</span>
  </a>
  <a href="#" class="nav-link">
    <iconify-icon icon="mdi:information-outline" width="20"></iconify-icon>
    <span>About</span>
  </a>
</nav>
```

---

## 🔍 How to Find Icons

### 1. Browse by Category
Visit: https://icon-sets.iconify.design/

Categories:
- Nature & Environment
- Sustainability
- Shopping & Commerce
- UI & Navigation
- Social Media

### 2. Search
Use search on Iconify:
- "leaf" → 100+ results
- "recycle" → 50+ results
- "earth" → 80+ results
- "shopping" → 200+ results

### 3. Compare Sets
View same icon across different sets:
- `mdi:leaf`
- `carbon:tree`
- `lucide:sprout`

### 4. Check Variants
Many icons have variants:
- `mdi:heart` (filled)
- `mdi:heart-outline` (outline)
- `heroicons:heart` (solid)
- `heroicons-outline:heart` (outline)

---

## ✅ Best Practices

### DO:
✅ Use consistent icon set (prefer 1-2 sets max)
✅ Use outlined icons for UI (lighter feel)
✅ Use filled icons for emphasis
✅ Keep sizes consistent (16px, 24px, 32px)
✅ Use semantic colors (green for success, etc.)
✅ Add aria-label for accessibility

### DON'T:
❌ Mix too many icon styles
❌ Use tiny icons (<16px on mobile)
❌ Use decorative icons without context
❌ Forget hover states on interactive icons
❌ Use low-contrast icon colors

---

## 🎯 Recommended Icons for SWAP

### Homepage
```html
<!-- Hero Section -->
<iconify-icon icon="mdi:leaf"></iconify-icon>  <!-- Logo/Brand -->
<iconify-icon icon="mdi:earth"></iconify-icon>  <!-- Global impact -->

<!-- Features -->
<iconify-icon icon="mdi:sprout"></iconify-icon>  <!-- Growth -->
<iconify-icon icon="mdi:book-open-outline"></iconify-icon>  <!-- Education -->
<iconify-icon icon="mdi:handshake-outline"></iconify-icon>  <!-- Collaboration -->
```

### About Page
```html
<iconify-icon icon="mdi:account-group"></iconify-icon>  <!-- Team -->
<iconify-icon icon="mdi:target"></iconify-icon>  <!-- Mission -->
<iconify-icon icon="mdi:calendar"></iconify-icon>  <!-- Timeline -->
```

### Progress Page
```html
<iconify-icon icon="mdi:chart-line"></iconify-icon>  <!-- Progress -->
<iconify-icon icon="mdi:check-circle"></iconify-icon>  <!-- Completed -->
<iconify-icon icon="mdi:clock-outline"></iconify-icon>  <!-- In Progress -->
```

### Action Page
```html
<iconify-icon icon="mdi:hand-heart"></iconify-icon>  <!-- Support -->
<iconify-icon icon="mdi:signature"></iconify-icon>  <!-- Sign Petition -->
<iconify-icon icon="mdi:share-variant"></iconify-icon>  <!-- Share -->
```

### Contact
```html
<iconify-icon icon="mdi:email-outline"></iconify-icon>  <!-- Email -->
<iconify-icon icon="mdi:instagram"></iconify-icon>  <!-- Instagram -->
<iconify-icon icon="mdi:map-marker"></iconify-icon>  <!-- Location -->
```

---

## 📋 Icon Checklist

```
✅ All icons from Iconify (icon-sets.iconify.design)
✅ Consistent icon set (MDI or Carbon preferred)
✅ Sizes: 16px, 20px, 24px, 32px, 48px
✅ Colors match SWAP palette
✅ Accessible (aria-label when needed)
✅ Optimized (lazy load if many icons)
✅ Documented (which icons where)
```

---

## 🔗 Resources

- **Iconify Main**: https://iconify.design/
- **Icon Sets**: https://icon-sets.iconify.design/
- **Documentation**: https://docs.iconify.design/
- **React Component**: https://docs.iconify.design/icon-components/react/
- **Figma Plugin**: https://www.figma.com/community/plugin/735098390272716381

---

## 💡 Pro Tips

1. **Search smart**: Use keywords like "outline", "filled", "circle"
2. **Preview before use**: Check how icon looks at different sizes
3. **Consider theme**: Outlined icons → modern, Filled icons → bold
4. **Performance**: Iconify lazy-loads icons automatically
5. **Offline**: Download SVG for offline use if needed

---

*Last Updated: 2025*
*SWAP Website - Icons powered by Iconify*
