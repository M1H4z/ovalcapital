# Oval Capital Management Services Website

A bespoke, high-performing corporate website for Oval Capital Management Services SDN BHD, showcasing their diverse business portfolio including Oval Printing, Oval Rice, Oval Construction, and Warung Gita Restaurant.

## Features

- **Modern Design**: Clean, professional interface with gold-themed styling to complement the company logo
- **Responsive Layout**: Fully mobile optimized for all device sizes
- **Interactive Elements**: Engaging animations and smooth transitions
- **Business Showcase**: Dedicated sections for each business vertical
- **Contact Form**: User-friendly contact functionality
- **Performance Optimized**: Fast loading and smooth scrolling experience

## Technologies Used

- HTML5
- CSS3 (with modern features like Grid, Flexbox, and CSS variables)
- JavaScript (Vanilla JS, no frameworks)
- Font Awesome (for icons)
- Google Fonts (Poppins and Playfair Display)

## Project Structure

```
oval-capital-website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── images/             # Image assets
│       ├── hero-bg.jpg     # Hero section background
│       ├── about-image.jpg # About section image
│       └── cta-bg.jpg      # Call-to-action background
└── README.md               # Documentation
```

## Setup Instructions

1. **Clone the repository**

   ```
   git clone https://github.com/your-username/oval-capital-website.git
   cd oval-capital-website
   ```

2. **Setup Images**

   - Add your images to the `assets/images/` directory
   - Required images:
     - `hero-bg.jpg`: A high-quality background image for the hero section
     - `about-image.jpg`: An image showcasing the company office or team
     - `cta-bg.jpg`: Background for the call-to-action section

3. **Local Development**
   - Open `index.html` in your browser to view the site
   - For live reloading during development, you can use tools like Live Server extension in VS Code

## Customization

### Changing Colors

- The color scheme can be modified in `assets/css/styles.css` by updating the CSS variables at the top of the file:
  ```css
  :root {
    --primary-color: #d4af37; /* Gold */
    --primary-light: #f5e7aa;
    --secondary-color: #222;
    /* other variables */
  }
  ```

### Content Updates

- Company information, contact details, and business descriptions can be updated directly in `index.html`

### Adding New Sections

1. Create a new section in `index.html`
2. Add corresponding styles in `styles.css`
3. If needed, add JavaScript functionality in `main.js`

## Deployment

The website can be deployed to any standard web hosting service:

1. Upload all files maintaining the directory structure
2. Ensure the server is configured to serve `index.html` as the default page

## Browser Compatibility

The website is optimized for:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

This project is proprietary and belongs to Oval Capital Management Services SDN BHD.

## Contact

For any queries or support:

- Email: info@ovalcapital.com.my
- Phone: +60 3 1234 5678
