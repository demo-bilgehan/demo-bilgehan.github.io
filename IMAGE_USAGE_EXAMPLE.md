# Image Usage Example

This document shows you exactly how to use local images from the `images/` folder.

## Example: Adding a New Post with Image

### Step 1: Add Your Image
Place your image file in the `images/` folder:
```
images/
└── my-awesome-post.jpg
```

### Step 2: Create Your Markdown Post
Create `posts/my-awesome-post.md`:

```markdown
---
title: My Awesome Post
category: Wellness
date: 2024-01-25
readTime: 7
excerpt: This is an example of how to add a post with a local image.
image: images/my-awesome-post.jpg
featured: false
---

# My Awesome Post

This is the content of my post. The image path `images/my-awesome-post.jpg` 
will automatically load the image from the `images/` folder.

You can also reference images in the markdown content itself:
![Alt text](images/my-awesome-post.jpg)
```

### Step 3: Add to posts.json
Update `posts/posts.json`:

```json
{
  "posts": [
    {
      "filename": "my-awesome-post.md",
      "title": "My Awesome Post",
      "category": "Wellness",
      "date": "2024-01-25",
      "readTime": "7",
      "excerpt": "This is an example of how to add a post with a local image.",
      "image": "images/my-awesome-post.jpg",
      "featured": false
    }
  ]
}
```

## Current Image References

The website currently expects these images:

### Hero Image (Landing Page)
- **Path**: `images/hero-image.jpg`
- **Used in**: `index.html` hero section
- **Recommended size**: 1920x1080px (16:9 aspect ratio)

### Blog Post Images
- **Path**: `images/understanding-anxiety.jpg`
  - Used by: `understanding-anxiety.md`
  
- **Path**: `images/mindfulness-basics.jpg`
  - Used by: `mindfulness-basics.md`
  
- **Path**: `images/stress-management.jpg`
  - Used by: `stress-management.md`

## Image Path Format

Always use relative paths starting with `images/`:
- ✅ `images/post-name.jpg`
- ✅ `images/folder/subfolder/image.jpg` (if you organize in subfolders)
- ❌ `/images/post-name.jpg` (absolute path - won't work)
- ❌ `./images/post-name.jpg` (unnecessary)
- ❌ `https://example.com/image.jpg` (external URL - not recommended)

## Where Images Are Used

1. **Blog Listing Pages** (`blog.html`)
   - Featured post card
   - Post grid cards
   - Uses `image` field from `posts.json`

2. **Individual Post Pages** (`post.html`)
   - Featured image at top of post
   - Uses `image` field from frontmatter

3. **Homepage** (`index.html`)
   - Hero section background
   - Featured posts section
   - Uses `image` field from `posts.json`

4. **Markdown Content**
   - You can also reference images directly in markdown:
   ```markdown
   ![Description](images/image-name.jpg)
   ```

## Testing Your Images

After adding images:
1. Make sure the file exists in `images/` folder
2. Check the path in `posts.json` matches the filename
3. Check the path in markdown frontmatter matches
4. Open the website and verify images load correctly

## Troubleshooting

**Image not showing?**
- Check file exists in `images/` folder
- Verify filename matches exactly (case-sensitive)
- Check path in `posts.json` starts with `images/`
- Check path in markdown frontmatter matches
- Ensure image file is committed to git

**Image path errors?**
- Use relative paths: `images/filename.jpg`
- Don't use absolute paths: `/images/filename.jpg`
- Don't use external URLs unless necessary

