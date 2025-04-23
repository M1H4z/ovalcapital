# Oval Group Website

A bespoke, high-performing corporate website for the Oval Group of Companies, showcasing their diverse portfolio including Smart Construction (POSB), Advanced Agriculture (ORSB, ONSB), Agricultural Machinery (OMSSB), and other ventures.

## Features

- **Modern Design**: Clean, professional interface with gold-themed styling.
- **Image Logo Integration**: Uses the official Oval Group logo throughout the site and as a favicon.
- **Video Background**: Engaging video background for the hero section on the homepage.
- **Multi-Page Structure**: Dedicated pages for Home, About Us, Services, and Contact.
- **Responsive Layout**: Fully mobile optimized for all device sizes.
- **Interactive Elements**: Engaging animations, hover effects, and smooth scrolling.
- **Detailed Sections**: Comprehensive pages for About Us and Services.
- **Homepage Services Summary**: Horizontally scrollable and draggable summary of core services.
- **Styled Scrollbar**: Custom scrollbar styling for the services summary.
- **Contact Page**: Includes business hours and an embedded map.
- **Custom 404 Page**: User-friendly page for broken links.
- **Preloader**: Loading animation for a smoother initial experience.
- **Performance Optimized**: Includes image preloading and efficient code.

## Technologies Used

- HTML5
- CSS3 (with modern features like Flexbox, CSS variables, custom scrollbars)
- JavaScript (Vanilla JS for interactivity, animations, draggable scroll)
- Font Awesome (for icons)
- Google Fonts (Poppins and Playfair Display)

## Project Structure

```
oval-group-website/
├── index.html              # Main homepage
├── about.html              # About Us page
├── services.html           # Detailed Services page
├── contact.html            # Contact Us page
├── 404.html                # Custom 404 error page
├── video-resources.html    # Helper page for finding hero video
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   ├── images/
│   │   ├── logo.png        # Main company logo & favicon
│   │   ├── executive.jpg   # Testimonial image (generate via executive.html)
│   │   ├── about-image.jpg # Placeholder for homepage About section (if re-added)
│   │   ├── cta-bg.png      # Background for CTA section
│   │   ├── hero-bg.png     # Fallback/Poster image for hero video
│   │   ├── placeholder.html # Helper to generate placeholder images
│   │   └── executive.html  # Helper to generate executive image
│   └── videos/
│       └── hero-video.mp4  # Video for hero section background
└── README.md               # Documentation
```

## Setup Instructions

1. **Clone the repository** (if applicable)

   ```bash
   git clone <repository-url>
   cd oval-group-website
   ```

2. **Add Required Assets**:

   - Place the main company logo named `logo.png` (recommended 256x256px) in the `assets/images/` directory.
   - Place the hero section background video named `hero-video.mp4` in the `assets/videos/` directory. (Use `video-resources.html` for suggestions).
   - Generate the `executive.jpg` placeholder by opening `assets/images/executive.html` in a browser and saving the generated image to `assets/images/`.
   - Add suitable background images for the CTA section (`cta-bg.png`) and as a fallback/poster for the hero video (`hero-bg.png`) to `assets/images/`.

3. **Local Development**:
   - Open `index.html` in your web browser to view the site.
   - Use tools like the Live Server extension in VS Code for automatic reloading during development.

## Customization

### Changing Colors:

- Modify the CSS variables at the top of `assets/css/styles.css`:
  ```css
  :root {
    --primary-color: #d4af37; /* Gold */
    /* ... other colors ... */
  }
  ```

### Content Updates:

- **Homepage (`index.html`)**: Update hero text, business spotlight, services summary, testimonial, CTA.
- **About Page (`about.html`)**: Update company overview, subsidiary details, philosophy.
- **Services Page (`services.html`)**: Update detailed descriptions of each service.
- **Contact Page (`contact.html`)**: Update address, phone, email, map embed, business hours.

### Logo & Video:

- Replace `assets/images/logo.png` with your final logo.
- Replace `assets/videos/hero-video.mp4` with your chosen video.

## Deployment

The website consists of static files and can be deployed to any standard web hosting service (e.g., Netlify, Vercel, GitHub Pages, traditional hosting):

1. Upload all files and folders (`index.html`, `about.html`, `services.html`, `contact.html`, `404.html`, `assets/`, etc.) maintaining the directory structure.
2. Ensure the server is configured correctly (usually handles `index.html` automatically).

## Browser Compatibility

Optimized for the latest versions of modern browsers:

- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Android Chrome)

## License

This project is proprietary and belongs to the Oval Group of Companies.

## Contact

For any queries regarding the website or company:

- Email: info@ovalcapital.com.my (Update if different for Oval Group)
- Phone: +60 3 1234 5678 (Update with correct phone number)
