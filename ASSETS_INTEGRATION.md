# Ironwood Creative Studio - Asset Integration Guide

## Adding Your Design Assets

Your design assets from the `website-development` branch need to be added to this project. Follow these steps:

### 1. Copy Assets to Public Folder

Create the `/public/images/` directory (if not already created) and copy these files:

**From your repository root:**
```bash
# Copy logo
cp "Ironwood logo  Idea.png" public/images/ironwood-logo.png

# Copy Facebook banner
cp Ironwood_Facebook_Banner_1200x628.png public/images/facebook-banner.png

# Copy other assets
cp "Ironwood Business Card.png" public/images/business-card.png
cp 1770925224501.png public/images/design-mockup.png
cp "Black Ironwood tee.pdf" public/images/black-tee.pdf
```

### 2. Assets Folder Structure

```
public/
└── images/
    ├── ironwood-logo.png                    # Header logo
    ├── facebook-banner.png                  # Hero section background
    ├── business-card.png                    # For portfolio/showcase
    ├── design-mockup.png                    # For portfolio/showcase
    └── black-tee.pdf                        # For portfolio/showcase
```

### 3. Where Assets Are Used

- **ironwood-logo.png**: `components/Header.js` - Displayed in header navigation
- **facebook-banner.png**: `components/sections/Hero.js` - Hero section background
- **Other assets**: Ready for portfolio/showcase pages

### 4. File Naming Convention

All image filenames have been converted to lowercase with hyphens (kebab-case):
- `Ironwood logo Idea.png` → `ironwood-logo.png`
- `Ironwood_Facebook_Banner_1200x628.png` → `facebook-banner.png`
- `Ironwood Business Card.png` → `business-card.png`

### 5. Image Optimization

Next.js automatically optimizes your images:
- Converts to WebP/AVIF formats
- Responsive image serving
- Lazy loading support
- Compression

### 6. Running Locally

Once you've copied the assets:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your site with integrated branding!

## Next Steps for Deployment

1. Test locally with assets in place
2. Commit all files to `setup/initial-project-structure` branch
3. Create a Pull Request to merge into `website-development`
4. Once merged, deploy to Vercel (see README.md for deployment instructions)

