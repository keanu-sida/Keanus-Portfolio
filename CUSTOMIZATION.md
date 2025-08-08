# Portfolio Customization Guide

## 🚀 Quick Setup

1. **Update Personal Information**
   - Replace `your-username` with your actual GitHub username
   - Update LinkedIn profile URL
   - Add your actual live website URLs
   - Update email address if needed

2. **Add Your Live Websites**
   - Edit `src/components/LiveProjects.svelte`
   - Replace placeholder URLs with your actual live websites
   - Add project screenshots to `static/images/`
   - Update project descriptions and tech stacks

3. **Update Project Information**
   - Edit the `steps` array in `src/components/Main.svelte`
   - Add your actual GitHub repository URLs
   - Update project descriptions and tech stacks
   - Add screenshots or demos

4. **Customize Resume Section**
   - Edit `src/components/Resume.svelte`
   - Update work experience, education, and certifications
   - Add your actual achievements and metrics

5. **Update Skills Section**
   - Modify the `skills` object in `src/components/Main.svelte`
   - Add or remove skills based on your expertise
   - Organize skills by category

## 📁 File Structure

```
src/components/
├── Main.svelte          # Main content layout
├── LiveProjects.svelte  # Live website showcase
├── Resume.svelte        # Experience & education
├── Header.svelte        # Navigation
├── Footer.svelte        # Footer content
└── Step.svelte          # Project cards
```

## 🎨 Customization Areas

### Colors & Styling
- Primary color: `violet-400` (purple theme)
- Background: `slate-950` (dark theme)
- Update colors in `src/app.css` and component files

### Content Sections
1. **Hero Section** - Introduction and call-to-action
2. **Skills Section** - Technical expertise showcase
3. **Projects Section** - GitHub projects with descriptions
4. **Live Projects** - Your deployed websites
5. **Resume Section** - Work experience and education
6. **About Section** - Personal background
7. **Contact Section** - Professional links

### Images
- Profile image: `static/images/profile.png`
- Project screenshots: `static/images/project1-preview.png`, etc.
- Add your own images to the `static/images/` directory

## 🔧 Technical Notes

- Built with SvelteKit and TailwindCSS
- Responsive design for all screen sizes
- Smooth scrolling navigation
- Font Awesome icons for visual elements
- SEO-friendly structure

## 📝 Content Guidelines

### Project Descriptions
- Keep descriptions concise (1-2 sentences)
- Highlight key technologies used
- Mention specific achievements or metrics
- Include links to live demos and GitHub repos

### Skills Organization
- Group skills by category (Frontend, Backend, etc.)
- Include proficiency levels if desired
- Focus on technologies relevant to your target roles

### Experience Section
- Use action verbs to describe achievements
- Include quantifiable results when possible
- Highlight relevant technical skills
- Keep descriptions focused and professional

## 🚀 Deployment

1. Build the project: `npm run build`
2. Deploy to your preferred platform (Vercel, Netlify, etc.)
3. Update domain and social links
4. Test all links and functionality

## 📞 Support

For questions or issues with customization, refer to the SvelteKit and TailwindCSS documentation.
