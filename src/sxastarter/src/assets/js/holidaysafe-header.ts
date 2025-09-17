// Holidaysafe Header Interactive Functionality
// This file adds interactive behaviors to match the Holidaysafe website

interface HolidaysafeHeaderConfig {
  stickyOffset: number;
  animationDuration: number;
  mobileBreakpoint: number;
}

class HolidaysafeHeader {
  private header: HTMLElement | null;
  private config: HolidaysafeHeaderConfig;
  private isSticky = false;
  private ticking = false;

  constructor(config: Partial<HolidaysafeHeaderConfig> = {}) {
    this.config = {
      stickyOffset: 100,
      animationDuration: 300,
      mobileBreakpoint: 992,
      ...config,
    };

    this.header = document.querySelector('.holidaysafe-header');
    this.init();
  }

  private init(): void {
    if (!this.header) return;

    this.setupStickyHeader();
    this.setupDropdownMenus();
    this.setupMobileMenu();
    this.setupAccessibility();
    this.setupButtonAnimations();
  }

  private setupStickyHeader(): void {
    if (!this.header) return;

    window.addEventListener('scroll', () => {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          this.handleScroll();
          this.ticking = false;
        });
        this.ticking = true;
      }
    });
  }

  private handleScroll(): void {
    if (!this.header) return;

    const currentScrollY = window.scrollY;
    const shouldBeSticky = currentScrollY > this.config.stickyOffset;

    if (shouldBeSticky && !this.isSticky) {
      this.makeSticky();
    } else if (!shouldBeSticky && this.isSticky) {
      this.removeSticky();
    }
  }

  private makeSticky(): void {
    if (!this.header) return;

    this.header.classList.add('sticky');
    this.isSticky = true;

    // Add padding to body to prevent content jump
    document.body.style.paddingTop = `${this.header.offsetHeight}px`;
  }

  private removeSticky(): void {
    if (!this.header) return;

    this.header.classList.remove('sticky');
    this.isSticky = false;
    document.body.style.paddingTop = '0';
  }

  private setupDropdownMenus(): void {
    const dropdownTriggers = document.querySelectorAll('.secondary-navigation li');

    dropdownTriggers.forEach((trigger) => {
      const dropdown = trigger.querySelector('.dropdown-menu');
      if (!dropdown) return;

      let hoverTimeout: number;

      trigger.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
        this.showDropdown(dropdown as HTMLElement);
      });

      trigger.addEventListener('mouseleave', () => {
        hoverTimeout = window.setTimeout(() => {
          this.hideDropdown(dropdown as HTMLElement);
        }, 150);
      });

      // Keyboard navigation
      const triggerLink = trigger.querySelector('a');
      if (triggerLink) {
        triggerLink.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggleDropdown(dropdown as HTMLElement);
          }
        });
      }
    });
  }

  private showDropdown(dropdown: HTMLElement): void {
    dropdown.style.opacity = '1';
    dropdown.style.visibility = 'visible';
    dropdown.style.transform = 'translateY(0)';
  }

  private hideDropdown(dropdown: HTMLElement): void {
    dropdown.style.opacity = '0';
    dropdown.style.visibility = 'hidden';
    dropdown.style.transform = 'translateY(-15px)';
  }

  private toggleDropdown(dropdown: HTMLElement): void {
    const isVisible = dropdown.style.opacity === '1';
    if (isVisible) {
      this.hideDropdown(dropdown);
    } else {
      this.showDropdown(dropdown);
    }
  }

  private setupMobileMenu(): void {
    // This would be implemented if there's a mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    if (!mobileToggle) return;

    mobileToggle.addEventListener('click', () => {
      this.toggleMobileMenu();
    });
  }

  private toggleMobileMenu(): void {
    // Implementation for mobile menu toggle
    const mobileNav = document.querySelector('.header-nav-bar');
    if (!mobileNav) return;

    mobileNav.classList.toggle('mobile-open');
  }

  private setupAccessibility(): void {
    // Add ARIA labels and roles
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach((dropdown, index) => {
      dropdown.setAttribute('role', 'menu');
      dropdown.setAttribute('aria-labelledby', `dropdown-trigger-${index}`);

      const trigger = dropdown.parentElement?.querySelector('a');
      if (trigger) {
        trigger.setAttribute('id', `dropdown-trigger-${index}`);
        trigger.setAttribute('aria-haspopup', 'true');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });

    // Add focus management
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllDropdowns();
      }
    });
  }

  private closeAllDropdowns(): void {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach((dropdown) => {
      this.hideDropdown(dropdown as HTMLElement);
    });
  }

  private setupButtonAnimations(): void {
    const buttons = document.querySelectorAll('.cta-buttons .btn');

    buttons.forEach((button) => {
      button.addEventListener('mouseenter', () => {
        this.animateButton(button as HTMLElement, 'enter');
      });

      button.addEventListener('mouseleave', () => {
        this.animateButton(button as HTMLElement, 'leave');
      });

      button.addEventListener('focus', () => {
        this.animateButton(button as HTMLElement, 'enter');
      });

      button.addEventListener('blur', () => {
        this.animateButton(button as HTMLElement, 'leave');
      });
    });
  }

  private animateButton(button: HTMLElement, action: 'enter' | 'leave'): void {
    const arrow = button.querySelector('.arrow');

    if (action === 'enter') {
      button.style.transform = 'translateY(-2px)';
      if (arrow) {
        (arrow as HTMLElement).style.transform = 'translateX(3px)';
      }
    } else {
      button.style.transform = 'translateY(0)';
      if (arrow) {
        (arrow as HTMLElement).style.transform = 'translateX(0)';
      }
    }
  }

  // Public methods for external control
  public destroy(): void {
    // Clean up event listeners and reset styles
    if (this.header) {
      this.header.classList.remove('sticky');
    }
    document.body.style.paddingTop = '0';
  }

  public refresh(): void {
    // Re-initialize after dynamic content changes
    this.init();
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Only initialize if the holidaysafe header exists
  if (document.querySelector('.holidaysafe-header')) {
    new HolidaysafeHeader();
  }
});

// Export for manual initialization if needed
export default HolidaysafeHeader;
