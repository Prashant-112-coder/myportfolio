# Academic Portfolio Website

A professional, responsive academic portfolio website showcasing your academic journey, resume, and projects.

## Features

### 📋 Three Main Sections

1. **About Me** - Personal introduction and key skills
   - Bio/Personal statement
   - Key skills displayed in interactive tags
   - Professional overview

2. **Resume** - Professional and educational background
   - Education section with GPA and coursework
   - Professional experience timeline
   - Certifications and awards

3. **Academic Projects** - Showcase of academic work
   - Project cards with descriptions
   - Project tags and dates
   - Links to project details

### ✨ Design Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern Styling** - Clean, professional aesthetic with smooth transitions
- **Smooth Navigation** - Sticky navigation bar with smooth scrolling
- **Animations** - Subtle animations and hover effects
- **Accessibility** - Semantic HTML and proper contrast ratios

## File Structure

```
myportfolio/
├── index.html      # Main HTML file with 3 sections
├── styles.css      # All styling and responsive design
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## Customization Guide

### 1. Update Personal Information in `index.html`

Replace placeholder text with your actual information:

- **Your Name**: Replace "Your Name" in the title and throughout
- **Education**: Update your degree, university, GPA, and dates
- **Experience**: Add your work experience and internships
- **Projects**: Update project titles, descriptions, and dates
- **Skills**: Modify the skill tags to match your expertise
- **Contact Links**: Update social media and email links in the footer

### 2. Customize Colors in `styles.css`

Edit the CSS variables at the top of the file:

```css
:root {
    --primary-color: #2c3e50;      /* Main dark color */
    --secondary-color: #3498db;    /* Accent blue */
    --accent-color: #e74c3c;       /* Highlight red */
    --light-bg: #ecf0f1;           /* Light background */
}
```

### 3. Add Resume PDF

1. Save your resume as a PDF file in the portfolio directory
2. Update the button href in `index.html`:
   ```html
   <a href="your-resume.pdf" class="btn btn-primary" download>Download Full Resume (PDF)</a>
   ```

### 4. Add Profile Photo

1. Create an `images` folder
2. Add your profile photo as `profile.jpg`
3. Add to the About section in `index.html`:
   ```html
   <img src="images/profile.jpg" alt="Your Name" class="profile-photo">
   ```

## How to Use

### Local Testing
1. Open `index.html` directly in your web browser
2. Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   http-server
   ```
3. Visit `http://localhost:8000` in your browser

### Publishing Online

#### Option 1: GitHub Pages (Free)
1. Create a GitHub repository named `yourusername.github.io`
2. Upload all files to the repository
3. Your site will be live at `https://yourusername.github.io`

#### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Sign up and connect your GitHub repository
3. Netlify will automatically deploy your site
4. Get a custom domain or use Netlify's free domain

#### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Your site will be live instantly
4. Option to add custom domain

#### Option 4: Traditional Web Hosting
1. Use services like Bluehost, SiteGround, or AWS
2. Upload files via FTP
3. Point your domain to the hosting provider

## Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. Optimize images before uploading
2. Minify CSS and JavaScript for production
3. Use lazy loading for images
4. Enable browser caching

## SEO Optimization

Add metadata to `index.html` for better search engine visibility:

```html
<meta name="description" content="Academic portfolio showcasing my education, experience, and projects">
<meta name="keywords" content="academic, portfolio, resume, projects">
<meta name="author" content="Your Name">
```

## Future Enhancements

- Add contact form with email integration
- Implement blog section for articles
- Add image gallery for project demonstrations
- Create case studies for major projects
- Add testimonials section
- Implement dark mode toggle

## Support

For questions or issues, refer to the HTML comments in the code or customize further as needed.

---

**Last Updated**: December 2024
**Version**: 1.0
