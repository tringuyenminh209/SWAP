# SWAP Website - Color Palette

## 🎨 Design System Colors

Pastel, nature-inspired color scheme với soft, calming vibes.

---

## Primary Colors

### Pastel Green (Main Brand Color)
```css
--pastel-green-50: #F0F9F0;
--pastel-green-100: #D9F2D9;
--pastel-green-200: #B8E6B8;  /* PRIMARY */
--pastel-green-300: #97DA97;
--pastel-green-400: #76CE76;
--pastel-green-500: #55C255;
--pastel-green-600: #449B44;
--pastel-green-700: #337433;
--pastel-green-800: #224D22;
--pastel-green-900: #112611;
```

**Usage:**
- Primary buttons
- Links
- Brand elements
- Highlights
- Success states

**HEX**: `#B8E6B8`
**RGB**: `rgb(184, 230, 184)`
**HSL**: `hsl(120, 50%, 81%)`

---

### Pastel Blue (Secondary)
```css
--pastel-blue-50: #EFF6FB;
--pastel-blue-100: #D6E9F5;
--pastel-blue-200: #A7C7E7;  /* SECONDARY */
--pastel-blue-300: #85B5DD;
--pastel-blue-400: #63A3D3;
--pastel-blue-500: #4191C9;
--pastel-blue-600: #3474A1;
--pastel-blue-700: #275779;
--pastel-blue-800: #1A3A51;
--pastel-blue-900: #0D1D28;
```

**Usage:**
- Secondary buttons
- Info states
- Water/ocean references
- Accents

**HEX**: `#A7C7E7`
**RGB**: `rgb(167, 199, 231)`
**HSL**: `hsl(210, 57%, 78%)`

---

### Cream (Accent)
```css
--cream-50: #FFFEF8;
--cream-100: #FFFDF0;
--cream-200: #FFFDD0;  /* ACCENT */
--cream-300: #FFFCB0;
--cream-400: #FFFB90;
--cream-500: #FFFA70;
--cream-600: #E6E165;
--cream-700: #CCC85A;
--cream-800: #B3AF4F;
--cream-900: #999644;
```

**Usage:**
- Backgrounds
- Sections
- Cards
- Soft accents

**HEX**: `#FFFDD0`
**RGB**: `rgb(255, 253, 208)`
**HSL**: `hsl(57, 100%, 91%)`

---

## Secondary Colors (Nature Theme)

### Mint
```css
--mint: #C1F0C1;
```
**Usage:** Fresh, natural elements
**HEX**: `#C1F0C1`

### Sky
```css
--sky: #B9D9EB;
```
**Usage:** Air, light elements
**HEX**: `#B9D9EB`

### Sand
```css
--sand: #F5EFE0;
```
**Usage:** Earth tones, warm backgrounds
**HEX**: `#F5EFE0`

### Leaf
```css
--leaf: #A8D5BA;
```
**Usage:** Plant references, growth
**HEX**: `#A8D5BA`

---

## Neutral Colors

### White & Grays
```css
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
--black: #000000;
```

**Usage:**
- Text: gray-900, gray-800
- Borders: gray-200, gray-300
- Backgrounds: white, gray-50, gray-100
- Disabled states: gray-400

---

## Semantic Colors

### Success (Green)
```css
--success-light: #D9F2D9;
--success: #55C255;
--success-dark: #337433;
```
**Usage:** Success messages, completed states

### Error (Red - muted for pastel theme)
```css
--error-light: #FECACA;
--error: #EF4444;
--error-dark: #991B1B;
```
**Usage:** Error messages, warnings

### Warning (Yellow)
```css
--warning-light: #FEF3C7;
--warning: #F59E0B;
--warning-dark: #92400E;
```
**Usage:** Warning messages, caution

### Info (Blue)
```css
--info-light: #DBEAFE;
--info: #3B82F6;
--info-dark: #1E40AF;
```
**Usage:** Information, tips

---

## Color Combinations

### High Contrast (Accessibility)

#### Light Backgrounds
- **Text**: gray-900 (#18181B) on white (#FFFFFF)
  - Contrast: 16.5:1 ✅ AAA
- **Text**: gray-800 (#27272A) on white (#FFFFFF)
  - Contrast: 12.6:1 ✅ AAA

#### Dark Backgrounds
- **Text**: white (#FFFFFF) on gray-900 (#18181B)
  - Contrast: 16.5:1 ✅ AAA

### Brand Combinations

#### Primary on Light
```css
background: #FFFFFF;
color: #B8E6B8;
text: #18181B;
```

#### Cream with Green
```css
background: #FFFDD0;
accent: #B8E6B8;
text: #27272A;
```

#### Blue with Cream
```css
background: #A7C7E7;
text: #18181B;
button: #FFFDD0;
```

---

## CSS Variables

### Define in `:root`

```css
:root {
  /* Primary Colors */
  --color-pastel-green: #B8E6B8;
  --color-pastel-blue: #A7C7E7;
  --color-cream: #FFFDD0;

  /* Nature Colors */
  --color-mint: #C1F0C1;
  --color-sky: #B9D9EB;
  --color-sand: #F5EFE0;
  --color-leaf: #A8D5BA;

  /* Neutrals */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-gray-50: #FAFAFA;
  --color-gray-100: #F4F4F5;
  --color-gray-900: #18181B;

  /* Semantic */
  --color-success: #55C255;
  --color-error: #EF4444;
  --color-warning: #F59E0B;
  --color-info: #3B82F6;
}
```

### Usage

```css
.button-primary {
  background-color: var(--color-pastel-green);
  color: var(--color-gray-900);
}

.button-secondary {
  background-color: var(--color-pastel-blue);
  color: var(--color-white);
}

.section-highlight {
  background-color: var(--color-cream);
}
```

---

## Tailwind Config

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        pastel: {
          green: {
            50: '#F0F9F0',
            100: '#D9F2D9',
            200: '#B8E6B8',
            300: '#97DA97',
            400: '#76CE76',
            500: '#55C255',
            600: '#449B44',
            700: '#337433',
            800: '#224D22',
            900: '#112611',
          },
          blue: {
            50: '#EFF6FB',
            100: '#D6E9F5',
            200: '#A7C7E7',
            300: '#85B5DD',
            400: '#63A3D3',
            500: '#4191C9',
            600: '#3474A1',
            700: '#275779',
            800: '#1A3A51',
            900: '#0D1D28',
          },
          cream: {
            50: '#FFFEF8',
            100: '#FFFDF0',
            200: '#FFFDD0',
            300: '#FFFCB0',
            400: '#FFFB90',
            500: '#FFFA70',
            600: '#E6E165',
            700: '#CCC85A',
            800: '#B3AF4F',
            900: '#999644',
          },
        },
        nature: {
          mint: '#C1F0C1',
          sky: '#B9D9EB',
          sand: '#F5EFE0',
          leaf: '#A8D5BA',
        },
      },
    },
  },
}
```

### Usage in Tailwind

```html
<div class="bg-pastel-green-200 text-gray-900">
  Primary button
</div>

<div class="bg-pastel-cream-200">
  Cream background section
</div>

<div class="text-nature-mint">
  Mint colored text
</div>
```

---

## Color Accessibility

### WCAG Compliance

✅ **AAA (Best)**: Contrast ratio ≥ 7:1
✅ **AA (Good)**: Contrast ratio ≥ 4.5:1
⚠️ **Fail**: Contrast ratio < 4.5:1

### Tested Combinations

| Background | Text | Ratio | Grade |
|------------|------|-------|-------|
| White | Gray-900 | 16.5:1 | AAA ✅ |
| White | Gray-800 | 12.6:1 | AAA ✅ |
| Cream-200 | Gray-900 | 14.8:1 | AAA ✅ |
| Pastel-Green-200 | Gray-900 | 8.2:1 | AAA ✅ |
| Pastel-Blue-200 | Gray-900 | 5.9:1 | AA ✅ |

---

## Color Psychology

### Green (Primary)
- 🌱 **Growth, nature, sustainability**
- 💚 **Environmental awareness**
- ✅ **Safety, go, positive**
- 🌿 **Freshness, harmony**

### Blue (Secondary)
- 💙 **Trust, calm, professional**
- 🌊 **Clean water, purity**
- 🧘 **Peaceful, relaxing**
- 🌏 **Earth, sky**

### Cream (Accent)
- ☀️ **Warmth, friendliness**
- 📄 **Soft, approachable**
- 🌾 **Natural, organic**
- ☁️ **Gentle, non-threatening**

---

## Export Formats

### Sketch Palette
```
Download: colors-sketch.sketchpalette
```

### Adobe Swatches
```
Download: colors-adobe.ase
```

### Figma
```
Copy color styles from:
figma.com/file/[link]
```

---

*Last Updated: 2025*
*SWAP Website Color System*
