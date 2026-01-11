# Clinical Psychology Website

A modern, responsive clinical psychology website built with pure HTML, CSS (Tailwind), and JavaScript. Designed to be served as a GitHub Pages site.

## Features

- **Landing Page** (`index.html`) - Homepage with services overview and featured posts
- **Blog/Resources Page** (`blog.html`) - Dynamic blog listing that loads markdown posts
- **Contact Page** (`contact.html`) - Contact form and communication page
- **Individual Post Pages** (`post.html`) - Displays markdown blog posts with full content
- **Dark Mode Support** - Toggle between light and dark themes
- **Responsive Design** - Works on mobile, tablet, and desktop devices

## Project Structure

```
.
├── index.html          # Landing page
├── blog.html          # Blog listing page
├── contact.html       # Contact/communication page
├── post.html          # Individual blog post template
├── js/
│   └── utils.js       # JavaScript utilities (dark mode, post loading, services)
├── posts/
│   ├── posts.json     # List of all blog posts (metadata)
│   └── *.md           # Markdown blog post files
├── our-services/
│   └── services.json  # Dynamic services configuration
├── images/            # Image assets folder
└── examples/          # Design reference files
```

## Adding New Blog Posts

To add a new blog post:

1. **Create a markdown file** in the `posts/` directory (e.g., `my-new-post.md`)

2. **Add an image** to the `images/` folder:
   - Name it matching your post filename (e.g., `my-new-post.jpg` for `my-new-post.md`)
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

3. **Add frontmatter** at the top of your markdown file:
```markdown
---
title: Your Post Title
category: Wellness
date: 2024-01-20
readTime: 5
excerpt: A brief description of your post
image: images/my-new-post.jpg
featured: false
---

Your markdown content goes here...
```

4. **Add the post to `posts/posts.json`**:
```json
{
  "posts": [
    {
      "filename": "my-new-post.md",
      "title": "Your Post Title",
      "category": "Wellness",
      "date": "2024-01-20",
      "image": "images/my-new-post.jpg",
      "readTime": "5",
      "excerpt": "A brief description",
      "image": "https://example.com/image.jpg",
      "featured": false
    }
  ]
}
```

### Frontmatter Fields

- `title` (required): The post title
- `category`: One of "Wellness", "Anxiety", "Clinical", or any custom category
- `date`: Publication date (YYYY-MM-DD format)
- `readTime`: Estimated reading time in minutes
- `excerpt`: Short description shown in listings
- `image`: Path to image in `images/` folder (e.g., `images/my-post.jpg`)
- `featured`: Set to `true` to feature on homepage

### Image Paths

All images should be stored in the `images/` folder and referenced with relative paths:
- ✅ `images/post-name.jpg`
- ❌ `https://example.com/image.jpg` (external URLs)
- ❌ `/images/post-name.jpg` (absolute paths)

## Adding Services

Services are dynamically loaded from `our-services/services.json`. To add or modify services:

1. **Edit `our-services/services.json`**:
```json
{
  "services": [
    {
      "id": "service-id",
      "title": "Service Name",
      "description": "Service description",
      "icon": "material_symbol_name",
      "link": "contact.html",
      "order": 1
    }
  ]
}
```

2. **Service Properties**:
   - `id`: Unique identifier
   - `title`: Display name (required)
   - `description`: Brief description
   - `icon`: Material Symbols icon name (required)
   - `link`: URL to navigate to (defaults to `contact.html`)
   - `order`: Display order (lower numbers appear first)

3. See `our-services/README.md` for detailed documentation and icon reference.

## Categories

Posts can be filtered by category:
- **Wellness** - General mental wellness topics
- **Anxiety** - Anxiety management and related topics
- **Clinical** - Clinical psychology insights and research

## GitHub Pages Setup

### Automatic Deployment with GitHub Actions

The repository includes a GitHub Actions workflow that automatically deploys your site when you push to the `main` branch.

**Setup Steps:**

1. **Push your repository to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

3. **Automatic Deployment**
   - Every push to the `main` branch will automatically trigger deployment
   - You can also manually trigger deployment from the **Actions** tab
   - Your site will be available at `https://yourusername.github.io/repository-name/`

4. **Check Deployment Status**
   - Go to the **Actions** tab in your repository
   - You'll see the deployment workflow running
   - Once complete, your site will be live!

### Manual Deployment (Alternative)

If you prefer not to use GitHub Actions:

1. Go to **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose `main` branch and `/ (root)` folder
4. Click **Save**

**Note:** The GitHub Actions method is recommended as it provides better control and faster deployments.

## Technologies Used

- **HTML5** - Structure
- **Tailwind CSS** - Styling (via CDN)
- **JavaScript** - Dynamic functionality
- **Marked.js** - Markdown parsing (via CDN)
- **Material Symbols** - Icons (via Google Fonts)
- **Lexend Font** - Typography (via Google Fonts)

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- The website uses client-side JavaScript to load markdown files and services
- Posts are listed in `posts/posts.json` for easy management
- Services are configured in `our-services/services.json` and load dynamically
- Dark mode preference is saved in localStorage
- All styling uses Tailwind CSS classes
- **Images must be stored in the `images/` folder** - see `images/README.md` for details
- Image paths should be relative: `images/filename.jpg`

## License

This project is open source and available for personal and commercial use.
