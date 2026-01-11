# Images Folder

This folder contains all images used throughout the website.

## Image Usage

### Blog Posts
- Post images should be named after the post filename
- Example: For `understanding-anxiety.md`, use `understanding-anxiety.jpg`
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### Hero Image
- The landing page hero image: `hero-image.jpg`
- Recommended size: 1920x1080px or similar aspect ratio (16:9)
- Format: JPG or PNG

## Adding Images

1. **For Blog Posts:**
   - Add your image to this folder
   - Name it matching your post filename (e.g., `my-post.jpg` for `my-post.md`)
   - Update `posts/posts.json` with the image path: `"image": "images/my-post.jpg"`
   - Update the frontmatter in your markdown file: `image: images/my-post.jpg`

2. **For Hero Image:**
   - Add `hero-image.jpg` to this folder
   - The landing page will automatically use it

## Image Path Format

All image paths should be relative to the root directory:
- ✅ `images/post-name.jpg`
- ❌ `/images/post-name.jpg` (absolute path)
- ❌ `./images/post-name.jpg` (unnecessary relative)

## Example Structure

```
images/
├── hero-image.jpg          # Landing page hero
├── understanding-anxiety.jpg
├── mindfulness-basics.jpg
├── stress-management.jpg
└── your-new-post.jpg       # Your new post image
```

## Image Optimization Tips

- Compress images before uploading (use tools like TinyPNG or ImageOptim)
- Recommended max file size: 500KB per image
- Use JPG for photos, PNG for graphics with transparency
- Consider WebP format for better compression

