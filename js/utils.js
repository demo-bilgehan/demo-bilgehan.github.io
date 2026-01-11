// Utility functions for the clinical psychology website

// Dark mode functionality
function initDarkMode() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
        updateDarkModeIcon(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateDarkModeIcon(false);
    }
}

function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateDarkModeIcon(isDark);
}

function updateDarkModeIcon(isDark) {
    const icon = document.getElementById('darkModeIcon');
    if (icon) {
        icon.textContent = isDark ? 'light_mode' : 'dark_mode';
    }
}

// Fetch list of markdown posts from the posts directory
async function getPostsList() {
    try {
        // Since GitHub Pages doesn't support directory listing via fetch,
        // we'll need to maintain a posts.json file or use GitHub API
        // For now, let's try to fetch a posts.json file
        const response = await fetch('posts/posts.json');
        if (response.ok) {
            const data = await response.json();
            return data.posts || [];
        }
    } catch (error) {
        console.log('posts.json not found, trying alternative method');
    }
    
    // Fallback: Try to fetch common post filenames
    // This is a workaround since GitHub Pages doesn't support directory listing
    const commonPosts = [
        'understanding-anxiety.md',
        'mindfulness-basics.md',
        'stress-management.md'
    ];
    
    const posts = [];
    for (const filename of commonPosts) {
        try {
            const response = await fetch(`posts/${filename}`);
            if (response.ok) {
                const markdown = await response.text();
                const postData = parsePostFrontmatter(markdown);
                posts.push({
                    filename: filename,
                    ...postData
                });
            }
        } catch (error) {
            // Post doesn't exist, skip it
        }
    }
    
    return posts.sort((a, b) => {
        // Sort by date if available, otherwise by filename
        if (a.date && b.date) {
            return new Date(b.date) - new Date(a.date);
        }
        return b.filename.localeCompare(a.filename);
    });
}

// Parse frontmatter from markdown files
function parsePostFrontmatter(markdown) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
    const match = markdown.match(frontmatterRegex);
    
    if (!match) {
        // No frontmatter, extract title from first heading
        const titleMatch = markdown.match(/^#\s+(.+)$/m);
        return {
            content: markdown,
            title: titleMatch ? titleMatch[1] : 'Untitled',
            excerpt: markdown.substring(0, 150).replace(/#/g, '').trim()
        };
    }
    
    const frontmatter = match[1];
    const content = match[2];
    const metadata = {};
    
    frontmatter.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > 0) {
            const key = line.substring(0, colonIndex).trim();
            let value = line.substring(colonIndex + 1).trim();
            // Remove quotes if present
            value = value.replace(/^["']|["']$/g, '');
            metadata[key] = value;
        }
    });
    
    // Extract excerpt if not in frontmatter
    if (!metadata.excerpt && content) {
        const plainText = content.replace(/#{1,6}\s+/g, '').replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1').substring(0, 150);
        metadata.excerpt = plainText.trim() + '...';
    }
    
    return { ...metadata, content };
}

// Calculate reading time (approximate)
function calculateReadingTime(content) {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
}

// Fetch list of services from the our-services directory
async function getServicesList() {
    try {
        const response = await fetch('our-services/services.json');
        if (response.ok) {
            const data = await response.json();
            // Sort by order if available
            const services = data.services || [];
            return services.sort((a, b) => {
                if (a.order && b.order) {
                    return a.order - b.order;
                }
                return a.title.localeCompare(b.title);
            });
        }
    } catch (error) {
        console.error('Error loading services:', error);
    }
    
    // Return empty array if services.json not found
    return [];
}

