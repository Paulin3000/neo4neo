// Navbar functionality
class Navbar {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navbarToggle = document.getElementById('navbar-toggle');
        this.navbarOverlay = document.getElementById('navbar-overlay');
        this.navbarNav = document.getElementById('navbar-nav');
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.handleScroll();
    }
    
    bindEvents() {
        // Toggle mobile menu
        this.navbarToggle?.addEventListener('click', () => this.toggleMobileMenu());
        
        // Close mobile menu when clicking on overlay
        this.navbarOverlay?.addEventListener('click', (e) => {
            if (e.target === this.navbarOverlay) {
                this.closeMobileMenu();
            }
        });
        
        // Close mobile menu when clicking on nav links
        const mobileLinks = document.querySelectorAll('.nav-link-mobile');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });
        
        // Handle scroll for navbar background
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Close mobile menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.closeMobileMenu();
            }
        });
        
        // Close mobile menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeMobileMenu();
            }
        });
    }
    
    toggleMobileMenu() {
        const isActive = this.navbarOverlay?.classList.contains('active');
        
        if (isActive) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }
    
    openMobileMenu() {
        this.navbarOverlay?.classList.add('active');
        this.navbarToggle?.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    closeMobileMenu() {
        this.navbarOverlay?.classList.remove('active');
        this.navbarToggle?.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    handleScroll() {
        const scrolled = window.scrollY > 50;
        
        if (scrolled) {
            this.navbar?.classList.add('scrolled');
        } else {
            this.navbar?.classList.remove('scrolled');
        }
    }
}

// Initialize navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Navbar();
});