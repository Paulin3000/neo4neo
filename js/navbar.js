// Navbar functionality
class Navbar {
  constructor() {
    this.navbar = document.getElementById('navbar')
    this.navbarToggle = document.getElementById('navbar-toggle')
    this.navbarOverlay = document.getElementById('navbar-overlay')
    this.dropdownItem = document.querySelector('.nav-item.has-sub')

    this.init()
  }

  init() {
    this.bindEvents()
    this.handleScroll()
  }

  bindEvents() {
    // Toggle mobile menu
    this.navbarToggle?.addEventListener('click', () => this.toggleMobileMenu())

    // Close mobile menu when clicking on nav links
    const mobileLinks = document.querySelectorAll('.mobile-nav-link')
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => this.closeMobileMenu())
    })

    // Handle dropdown functionality for desktop
    if (this.dropdownItem) {
      this.dropdownItem.addEventListener('click', (e) => {
        e.preventDefault()
        this.toggleDropdown()
      })
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar')) {
        this.closeDropdown()
      }
    })

    window.addEventListener('scroll', () => this.handleScroll())

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        this.closeMobileMenu()
      }
    })

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu()
        this.closeDropdown()
      }
    })
  }

  openDropdown() {
    this.dropdownItem?.setAttribute('aria-expanded', 'true')
  }

  closeDropdown() {
    this.dropdownItem?.setAttribute('aria-expanded', 'false')
  }

  toggleDropdown() {
    const isOpen = this.dropdownItem?.getAttribute('aria-expanded') === 'true'
    if (isOpen) {
      this.closeDropdown()
    } else {
      this.openDropdown()
    }
  }

  toggleMobileMenu() {
    const isActive = this.navbarOverlay?.classList.contains('active')

    if (isActive) {
      this.closeMobileMenu()
    } else {
      this.openMobileMenu()
    }
  }

  openMobileMenu() {
    this.navbarOverlay?.classList.add('active')
    this.navbarToggle?.classList.add('active')
    document.body.style.overflow = 'hidden'
  }

  closeMobileMenu() {
    this.navbarOverlay?.classList.remove('active')
    this.navbarToggle?.classList.remove('active')
    document.body.style.overflow = ''
  }

  handleScroll() {
    const scrolled = window.scrollY > 50

    // Mobile browsers will automatically hide the address bar when scrolling down if they have this 'scrolled'
    if (scrolled) {
      this.navbar?.classList.add('scrolled')
    } else {
      this.navbar?.classList.remove('scrolled')
    }

    this.closeDropdown()
  }
}

// Initialize navbar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Navbar()
})
