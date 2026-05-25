# 🎨 Customization Quick Reference

## Personal Information to Update

### 1. Name & Title
**Files**: `src/components/Hero.jsx`, `src/pages/Resume.jsx`, `index.html`
```javascript
// Hero.jsx - Line 31
<span className="gradient-text">Nitesh Kumar Chauhan</span>

// Resume.jsx - Line 51
<h1 className="text-5xl font-bold text-white mb-2">Nitesh Kumar Chauhan</h1>
```

### 2. Email & Contact
**Files**: `src/components/Contact.jsx`, `src/components/Footer.jsx`
```javascript
// Contact.jsx - Update email addresses
{
  icon: <FaEnvelope />,
  label: 'Email',
  value: 'nitesh@example.com',  // ← Change this
  href: 'mailto:nitesh@example.com',  // ← Change this
}

// Contact form mailto
href: 'mailto:nitesh@example.com'  // ← Change this
```

### 3. Phone Number
**Files**: `src/components/Contact.jsx`
```javascript
{
  icon: <FaPhone />,
  label: 'Phone',
  value: '+91 98765 43210',  // ← Change this
  href: 'tel:+919876543210',  // ← Change this
}
```

### 4. Location
**Files**: `src/components/Contact.jsx`
```javascript
{
  icon: <FaMapMarkerAlt />,
  label: 'Location',
  value: 'India',  // ← Change this
}
```

---

## Social Media Links

**Files**: `src/components/SocialLinks.jsx`, `src/components/Contact.jsx`, `src/components/Footer.jsx`

### Update URLs
```javascript
// SocialLinks.jsx - Line 10-31
const socials = [
  {
    url: 'https://github.com/nitesh',           // ← Your GitHub
    url: 'https://linkedin.com/in/nitesh',      // ← Your LinkedIn
    url: 'https://twitter.com/nitesh',          // ← Your Twitter
    url: 'mailto:nitesh@example.com',           // ← Your email
    url: 'tel:+919876543210',                   // ← Your phone
  }
]
```

---

## Content Sections

### Hero Section
**File**: `src/components/Hero.jsx`

| What | Where | Line |
|------|-------|------|
| Welcome badge | Hero.jsx | 24 |
| Your name | Hero.jsx | 31 |
| Your tagline | Hero.jsx | 36 |
| Your description | Hero.jsx | 42 |
| CTA buttons text | Hero.jsx | 50-54 |
| Quick stats | Hero.jsx | 73-75 |

### About Section
**File**: `src/components/About.jsx`

| What | Where | Line |
|------|-------|------|
| Bio paragraph 1 | About.jsx | 31 |
| Bio paragraph 2 | About.jsx | 37 |
| Bio paragraph 3 | About.jsx | 42 |
| Interests tags | About.jsx | 48-54 |
| Experience items | About.jsx | 68-94 |

### Skills Section
**File**: `src/components/Skills.jsx`

Replace the entire `skillCategories` array (lines 10-62):
```javascript
const skillCategories = [
  {
    category: 'Your Category',
    skills: [
      { name: 'Skill Name', level: 90, icon: <FaIcon /> },
      // Add more skills...
    ],
  },
  // Add more categories...
]
```

### Projects
**File**: `src/components/Projects.jsx`

Replace the `projects` array (lines 8-54):
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Your project description',
    image: '🎯',  // or use actual image path
    technologies: ['React', 'Tailwind', 'Node.js'],
    github: 'https://github.com/your-project',
    live: 'https://your-project.com',
    featured: true,
  },
  // Add your projects...
]
```

### Services
**File**: `src/components/Services.jsx`

Replace the `services` array (lines 9-44):
```javascript
const services = [
  {
    icon: <FaIcon />,
    title: 'Your Service',
    description: 'Description of your service',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      'Feature 4',
    ],
  },
  // Add more services...
]
```

### Resume/CV
**File**: `src/pages/Resume.jsx`

- **Experience**: Update lines 17-48
- **Education**: Update lines 53-68
- **Skills**: Update lines 77-86
- **Certifications**: Update lines 96-104

---

## Images & Assets

### Profile Picture
1. Add your image to `src/assets/` folder
2. Update Hero.jsx (remove emoji, add image):
   ```jsx
   <img src="/your-image.jpg" alt="Profile" className="rounded-2xl" />
   ```

### Project Images
1. Add project screenshots to `src/assets/projects/`
2. Update Projects.jsx:
   ```jsx
   image: '/projects/project1.png',  // Instead of emoji
   ```

### Favicon
1. Replace `public/favicon.svg` with your own
2. Update `index.html` if needed:
   ```html
   <link rel="icon" type="image/svg+xml" href="/your-favicon.svg" />
   ```

---

## Colors & Theme

**File**: `tailwind.config.js`

```javascript
// Line 6-12: Update colors
colors: {
  primary: '#0f172a',        // Main dark color
  secondary: '#64748b',      // Secondary color
  accent: '#3b82f6',         // Primary accent (blue)
}

// Line 18: Update gradients
'gradient-accent': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
'gradient-hot': 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
'gradient-cool': 'linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)',
```

---

## Resume PDF

1. Add your resume PDF to `public/resume.pdf`
2. Update download links:
   - **Hero.jsx** (Line 52): Add href to resume PDF
   - **Resume.jsx** (Line 178): Update download link

---

## Meta Tags & SEO

**File**: `index.html`

```html
<!-- Update these for better SEO -->
<meta name="description" content="Your professional description" />
<meta name="keywords" content="Your keywords" />
<title>Your Name - Your Title</title>
```

---

## Form Integration (Optional)

### Using EmailJS
1. Install: `npm install @emailjs/browser`
2. Sign up at [emailjs.com](https://www.emailjs.com)
3. Update Contact.jsx (lines 50-60):
   ```javascript
   import emailjs from '@emailjs/browser'
   
   emailjs.init('YOUR_PUBLIC_KEY')
   
   const handleSubmit = async (e) => {
     e.preventDefault()
     await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData)
   }
   ```

### Using Formspree
1. Update Contact.jsx form action:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## Navigation Links

**File**: `src/components/Navbar.jsx`

Update navigation items (lines 13-27):
```javascript
const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Your Section', id: 'your-section' },
  { label: 'Resume', path: '/resume' },
  // Add/modify navigation items
]
```

---

## Quick Find & Replace

Use your editor's Find & Replace (Ctrl+H / Cmd+H):

1. **Replace email**:
   - Find: `nitesh@example.com`
   - Replace: `your.email@example.com`

2. **Replace phone**:
   - Find: `+91XXXXXXXXXX`
   - Replace: `+91YOURPHONE`

3. **Replace GitHub URL**:
   - Find: `https://github.com`
   - Replace: `https://github.com/yourprofile`

4. **Replace LinkedIn URL**:
   - Find: `https://linkedin.com`
   - Replace: `https://linkedin.com/in/yourprofile`

---

## Environment Variables (Optional)

Create `.env.local` file:
```
VITE_GITHUB_URL=https://github.com/yourprofile
VITE_LINKEDIN_URL=https://linkedin.com/in/yourprofile
VITE_EMAIL=your.email@example.com
```

Access in components:
```javascript
const githubUrl = import.meta.env.VITE_GITHUB_URL
```

---

## Component-by-Component Checklist

- [ ] **Navbar.jsx**: Update navigation items and links
- [ ] **Hero.jsx**: Update name, tagline, description, stats
- [ ] **About.jsx**: Update bio and experience timeline
- [ ] **Skills.jsx**: Update skill categories and levels
- [ ] **Projects.jsx**: Replace with your projects
- [ ] **Services.jsx**: Update services offered
- [ ] **Contact.jsx**: Update contact info and email integration
- [ ] **Footer.jsx**: Verify social links
- [ ] **SocialLinks.jsx**: Update all social media URLs
- [ ] **Resume.jsx**: Update work history and education
- [ ] **index.html**: Update meta tags
- [ ] **tailwind.config.js**: Customize colors if needed
- [ ] **public/**: Add your favicon and resume PDF
- [ ] **src/assets/**: Add your profile image

---

## Tips for Better Results

1. **Profile Photo**: Use a professional headshot
2. **Project Images**: Show actual screenshots of projects
3. **Descriptions**: Be specific about your achievements
4. **Links**: Test all external links before deployment
5. **Mobile Test**: View on phone before deploying
6. **Content**: Keep descriptions concise and impactful
7. **Updates**: Regularly add new projects and skills

---

## Need Help?

- Check README.md for detailed documentation
- See SETUP_GUIDE.md for deployment instructions
- Review component files for inline comments
- Check Framer Motion docs for animation customization

**Good luck with your portfolio! 🚀**
