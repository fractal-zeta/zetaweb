// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS with enhanced settings
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: false,  // Allow animations to occur each time element scrolls into view
    offset: 120,
    delay: 100,
    mirror: true,  // Whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom'  // Defines which position of the element regarding to window should trigger the animation
  });
  
  // Initialize Scroll Reveal for additional animations
  const sr = ScrollReveal({
    duration: 1000,
    distance: '60px',
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    opacity: 0,
    mobile: true
  });
  
  // Add different animations for various elements
  sr.reveal('.slide-in-element', { 
    origin: 'bottom', 
    delay: 200 
  });
  
  sr.reveal('.fade-in-element', { 
    scale: 0.85, 
    distance: '0px', 
    delay: 300 
  });
  
  sr.reveal('.slide-up-element', { 
    origin: 'bottom', 
    delay: 400 
  });
  
  // Add staggered animations for service items
  sr.reveal('.bg-gray-100', { 
    origin: 'bottom', 
    interval: 200, 
    delay: 300, 
    duration: 800, 
    distance: '40px'
  });
  
  // Debug message to confirm scripts are loading correctly
  console.log('Initializing Swiper carousels...');
  
  // Initialize Testimonial Swiper
  try {
    const testimonialSwiper = new Swiper('.testimonialSwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      // Removed autoplay as requested
      effect: 'slide',
      speed: 800,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.testimonial-next',
        prevEl: '.testimonial-prev',
      },
      breakpoints: {
        // When window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // When window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
    });
    console.log('Testimonial Swiper initialized successfully');
  } catch (error) {
    console.error('Error initializing testimonial swiper:', error);
  }
  
  // Initialize Team Members Swiper
  try {
    const teamSwiper = new Swiper('.teamSwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      // Removed autoplay as requested
      effect: 'slide',
      speed: 800,
      pagination: {
        el: '.team-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.team-next',
        prevEl: '.team-prev',
      },
      breakpoints: {
        // When window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // When window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    });
    console.log('Team Swiper initialized successfully');
  } catch (error) {
    console.error('Error initializing team swiper:', error);
  }
  
  // Set current year in the footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Back to top button with enhanced animation
  const backToTopButton = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.remove('opacity-0', 'invisible');
      backToTopButton.classList.add('opacity-100', 'visible');
    } else {
      backToTopButton.classList.remove('opacity-100', 'visible');
      backToTopButton.classList.add('opacity-0', 'invisible');
    }
  });
  
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Navbar scroll effect with enhanced transition
  const navbar = document.getElementById('navbar');
  const logo = document.getElementById('logo');


  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 10) {
      navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
      navbar.classList.remove('bg-transparent');
      logo.src = 'img/logo.png'; // normal logo after scrolling
    } else {
      navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
      navbar.classList.add('bg-transparent');
      logo.src = 'img/logo-white.png'; // white version for initial load
    }
  });
  
  // Mobile menu with animation
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    if (!mobileMenu.classList.contains('hidden')) {
      // Apply animation when opening
      mobileMenu.style.animation = 'slideDown 0.3s ease forwards';
    } else {
      // Apply animation when closing
      mobileMenu.style.animation = 'slideUp 0.3s ease forwards';
    }
  });
  
  // Close mobile menu when clicking a link
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  
  mobileLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.style.animation = 'slideUp 0.3s ease forwards';
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    });
  });
  
  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Portfolio filtering with enhanced animation
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      filterButtons.forEach(function(btn) {
        btn.classList.remove('active', 'bg-secondary', 'text-white');
        btn.classList.add('bg-white', 'text-gray-700', 'hover:bg-gray-200');
      });
      
      // Add active class to clicked button
      this.classList.add('active', 'bg-secondary', 'text-white');
      this.classList.remove('bg-white', 'text-gray-700', 'hover:bg-gray-200');
      
      const filter = this.getAttribute('data-filter');
      
      // Show/hide portfolio items based on filter with animation
      portfolioItems.forEach(function(item) {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.animation = 'fadeIn 0.5s ease forwards';
          item.style.display = 'block';
        } else {
          item.style.animation = 'fadeOut 0.5s ease forwards';
          setTimeout(() => {
            item.style.display = 'none';
          }, 500);
        }
      });
      
      // Re-trigger AOS for visible items
      setTimeout(function() {
        AOS.refresh();
      }, 600);
    });
  });
  
  // Contact form submission with validation and animated feedback
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
      };
      
      // Validate form (simple validation example)
      let isValid = true;
      let errorMessage = '';
      
      if (!formData.name.trim()) {
        isValid = false;
        errorMessage = 'Please enter your name';
      } else if (!formData.email.trim() || !formData.email.includes('@')) {
        isValid = false;
        errorMessage = 'Please enter a valid email address';
      } else if (!formData.message.trim()) {
        isValid = false;
        errorMessage = 'Please enter your message';
      }
      
      if (!isValid) {
        // Show error with animation
        const errorDiv = document.createElement('div');
        errorDiv.className = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 slide-in-top';
        errorDiv.innerHTML = `<span class="block sm:inline">${errorMessage}</span>`;
        contactForm.prepend(errorDiv);
        
        // Remove error after 3 seconds
        setTimeout(() => {
          errorDiv.style.animation = 'slideOutTop 0.5s ease forwards';
          setTimeout(() => {
            errorDiv.remove();
          }, 500);
        }, 3000);
        
        return;
      }
      
      // In a real implementation, you would send this data to a server
      console.log('Form submitted:', formData);
      
      // Show success message with animation
      const successDiv = document.createElement('div');
      successDiv.className = 'bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4 slide-in-top';
      successDiv.innerHTML = '<span class="block sm:inline">Message sent successfully! We will get back to you soon.</span>';
      contactForm.prepend(successDiv);
      
      // Reset form
      contactForm.reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        successDiv.style.animation = 'slideOutTop 0.5s ease forwards';
        setTimeout(() => {
          successDiv.remove();
        }, 500);
      }, 5000);
    });
  }
});