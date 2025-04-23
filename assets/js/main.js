// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const header = document.querySelector("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu li a");
  const businessCards = document.querySelectorAll(".business-card");
  const spotlightDetails = document.querySelectorAll(".spotlight-details");
  const contactForm = document.getElementById("contactForm");
  const counterElements = document.querySelectorAll(".count");
  const preloader = document.querySelector(".preloader");
  const heroVideo = document.getElementById("hero-video");

  // Video background handling
  if (heroVideo) {
    // Check for mobile devices to handle video loading efficiently
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // On mobile, load video only after page is fully loaded to improve performance
    if (isMobile) {
      window.addEventListener("load", function () {
        setTimeout(function () {
          heroVideo.play();
        }, 1000);
      });

      // Add poster attribute for mobile if needed
      if (!heroVideo.hasAttribute("poster")) {
        heroVideo.setAttribute("poster", "assets/images/hero-bg.jpg");
      }
    }

    // Handle video errors
    heroVideo.addEventListener("error", function () {
      const videoContainer = document.querySelector(".video-container");
      if (videoContainer) {
        videoContainer.style.backgroundImage =
          "url('assets/images/hero-bg.jpg')";
        videoContainer.style.backgroundSize = "cover";
        videoContainer.style.backgroundPosition = "center";
      }
    });
  }

  // Hide preloader after page loads
  window.addEventListener("load", function () {
    setTimeout(function () {
      preloader.classList.add("fade");
    }, 500);
  });

  // Scroll Event Listener
  window.addEventListener("scroll", function () {
    // Header scroll effect
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Animate elements when they come into view
    animateOnScroll();
  });

  // Mobile Menu Toggle
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    // Change icon based on menu state
    const icon = menuToggle.querySelector("i");
    if (navMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close mobile menu when a nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      // Reset icon
      const icon = menuToggle.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    });
  });

  // Business Card Click Event (for business spotlight)
  businessCards.forEach((card) => {
    card.addEventListener("click", function () {
      const businessType = this.getAttribute("data-business");

      // Hide all spotlight details
      spotlightDetails.forEach((detail) => {
        detail.classList.remove("active");
      });

      // Show the corresponding detail
      const targetDetail = document.querySelector(
        `.spotlight-details.${businessType}`
      );
      if (targetDetail) {
        targetDetail.classList.add("active");

        // Smooth scroll to the spotlight section
        const spotlightSection = document.querySelector(".business-spotlight");
        window.scrollTo({
          top: spotlightSection.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });

  // Show first business detail by default
  if (spotlightDetails.length > 0) {
    spotlightDetails[0].classList.add("active");
  }

  // Contact Form Submit Handler
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const formDataObj = {};

      formData.forEach((value, key) => {
        formDataObj[key] = value;
      });

      // Simulate form submission (replace with actual API call)
      console.log("Form Data:", formDataObj);

      // Show success message
      showNotification(
        "Message sent successfully! We will contact you soon.",
        "success"
      );

      // Reset form
      this.reset();
    });
  }

  // Initialize animations
  initializeAnimations();

  // Execute counter animation when in view
  initializeCounters();

  // Preload images for smooth transitions
  preloadImages();

  // Initialize AOS (if you decide to use it)
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }

  // Draggable Scrolling for Services Section
  const servicesSlider = document.querySelector(
    ".services-section .services-content"
  );
  if (servicesSlider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    // Mouse Events
    servicesSlider.addEventListener("mousedown", (e) => {
      isDown = true;
      servicesSlider.classList.add("active-drag");
      startX = e.pageX - servicesSlider.offsetLeft;
      scrollLeft = servicesSlider.scrollLeft;
    });

    servicesSlider.addEventListener("mouseleave", () => {
      isDown = false;
      servicesSlider.classList.remove("active-drag");
    });

    servicesSlider.addEventListener("mouseup", () => {
      isDown = false;
      servicesSlider.classList.remove("active-drag");
    });

    servicesSlider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault(); // Prevent text selection, etc.
      const x = e.pageX - servicesSlider.offsetLeft;
      const walk = (x - startX) * 2; // The '2' makes scrolling faster
      servicesSlider.scrollLeft = scrollLeft - walk;
    });

    // Touch Events
    servicesSlider.addEventListener(
      "touchstart",
      (e) => {
        isDown = true;
        // No class change needed for touch usually
        startX = e.touches[0].pageX - servicesSlider.offsetLeft;
        scrollLeft = servicesSlider.scrollLeft;
      },
      { passive: true }
    ); // Use passive for better scroll performance on touch

    servicesSlider.addEventListener("touchend", () => {
      isDown = false;
    });

    servicesSlider.addEventListener(
      "touchmove",
      (e) => {
        if (!isDown) return;
        // No preventDefault if passive: true
        const x = e.touches[0].pageX - servicesSlider.offsetLeft;
        const walk = (x - startX) * 2;
        servicesSlider.scrollLeft = scrollLeft - walk;
      },
      { passive: true }
    );
  }
});

// Function to animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".animate-on-scroll");

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.classList.add("animated");
    }
  });
}

// Function to display notification messages
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;

  // Add to the DOM
  document.body.appendChild(notification);

  // Show with animation
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Initialize animations for various elements
function initializeAnimations() {
  // Add animation classes to elements that should animate on scroll
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const elements = section.querySelectorAll(
      "h2, h3, p, .btn, .service-item, .business-card"
    );

    elements.forEach((element) => {
      if (!element.classList.contains("animate-text")) {
        element.classList.add("animate-on-scroll");
      }
    });
  });

  // Initial check for elements in view
  animateOnScroll();
}

// Initialize counters for statistics
function initializeCounters() {
  const counterElements = document.querySelectorAll(".count");
  let counted = false;

  function startCounting() {
    if (counted) return;

    const statsSection = document.querySelector(".stats-container");
    if (!statsSection) return;

    const statsSectionPosition = statsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (statsSectionPosition < windowHeight - 100) {
      counterElements.forEach((counter) => {
        const target = +counter.textContent.replace(/[^\d]/g, "");
        let count = 0;
        const duration = 2000; // 2 seconds
        const increment = Math.ceil(target / (duration / 20)); // Update every 20ms

        const timer = setInterval(() => {
          count += increment;
          if (count >= target) {
            counter.textContent = target + "+";
            clearInterval(timer);
          } else {
            counter.textContent = count + "+";
          }
        }, 20);
      });

      counted = true;
    }
  }

  // Check on scroll
  window.addEventListener("scroll", startCounting);
  // Initial check
  startCounting();
}

// Preload images for smooth transitions
function preloadImages() {
  const images = [
    "assets/images/hero-bg.png",
    "assets/images/about-image.jpg",
    "assets/images/cta-bg.png",
  ];

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Add CSS animation class for the business cards on hover
const businessCards = document.querySelectorAll(".business-card");
businessCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Add parallax effect to hero section
window.addEventListener("scroll", function () {
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    const scrollPosition = window.scrollY;
    heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  }
});

// Add notification styles via JavaScript (alternatively can be in CSS)
const style = document.createElement("style");
style.textContent = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 15px 25px;
        background: #333;
        color: #fff;
        border-radius: 5px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 9999;
    }
    
    .notification.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .notification.success {
        background: #28a745;
    }
    
    .notification.error {
        background: #dc3545;
    }
    
    .notification.info {
        background: var(--primary-color);
    }
`;

document.head.appendChild(style);
