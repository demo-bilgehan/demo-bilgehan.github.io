# Deployment Guide

This guide explains how to deploy the Clinical Psychology website to GitHub Pages.

## Prerequisites

- A GitHub account
- A GitHub repository (can be public or private)
- Git installed on your local machine

## Quick Start

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `demo-bilgehan.github.io` for a user site, or any name for a project site)
3. **Don't** initialize with README, .gitignore, or license (if you already have files)

### 3. Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. If you don't see "GitHub Actions" option, select **Deploy from a branch** → **main** → **/ (root)**
5. Click **Save**

### 5. Wait for Deployment

- Go to the **Actions** tab in your repository
- You should see a workflow running called "Deploy to GitHub Pages"
- Wait for it to complete (usually 1-2 minutes)
- Once complete, your site will be live!

## Your Site URL

- **User/Organization site**: `https://YOUR_USERNAME.github.io`
- **Project site**: `https://YOUR_USERNAME.github.io/REPO_NAME`

## How It Works

The `.github/workflows/deploy.yml` file contains the deployment configuration:

- **Triggers**: Automatically runs on every push to `main` branch
- **Manual trigger**: You can also manually trigger it from the Actions tab
- **Process**: 
  1. Checks out your code
  2. Configures GitHub Pages
  3. Uploads all files as an artifact
  4. Deploys to GitHub Pages

## Troubleshooting

### Site not updating?

1. Check the **Actions** tab for any errors
2. Ensure you pushed to the `main` branch
3. Verify GitHub Pages is enabled in Settings → Pages
4. Wait a few minutes for changes to propagate

### 404 Error?

1. Make sure `index.html` exists in the root directory
2. Check that `.nojekyll` file exists (prevents Jekyll processing)
3. Verify the repository is public (or you have GitHub Pro for private repos)

### Workflow not running?

1. Check that `.github/workflows/deploy.yml` exists
2. Verify the file has correct YAML syntax
3. Ensure you have write permissions to the repository

## Updating Your Site

Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update website"
git push origin main
```

The site will automatically redeploy within 1-2 minutes!

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the root with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use the custom domain

## File Structure for GitHub Pages

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── .nojekyll                   # Prevents Jekyll processing
├── index.html                  # Landing page
├── blog.html                   # Blog listing
├── contact.html                # Contact page
├── post.html                   # Post template
├── js/
│   └── utils.js                # JavaScript utilities
├── posts/                      # Blog posts
├── our-services/               # Services configuration
└── images/                     # Image assets
```

All files in the root directory will be served by GitHub Pages.

