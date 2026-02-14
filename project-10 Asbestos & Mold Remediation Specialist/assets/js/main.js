document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');

    // Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        lightIcon?.classList.remove('hidden');
        darkIcon?.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        darkIcon?.classList.remove('hidden');
        lightIcon?.classList.add('hidden');
    }

    themeToggle?.addEventListener('click', () => {
        // toggle icons inside button
        darkIcon.classList.toggle('hidden');
        lightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });

    // RTL Toggle
    const rtlToggle = document.getElementById('rtl-toggle');
    if (localStorage.getItem('dir') === 'rtl') {
        document.documentElement.setAttribute('dir', 'rtl');
    }

    rtlToggle?.addEventListener('click', () => {
        if (document.documentElement.getAttribute('dir') === 'rtl') {
            document.documentElement.setAttribute('dir', 'ltr');
            localStorage.setItem('dir', 'ltr');
        } else {
            document.documentElement.setAttribute('dir', 'rtl');
            localStorage.setItem('dir', 'rtl');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Mobile Login Dropdown Toggle
    const mobileLoginToggle = document.getElementById('mobile-login-toggle');
    const mobileLoginDropdown = document.getElementById('mobile-login-dropdown');

    mobileLoginToggle?.addEventListener('click', () => {
        mobileLoginDropdown.classList.toggle('active');
        const icon = mobileLoginToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('rotate-180');
        }
    });

    // Desktop Login Dropdown Toggle
    const desktopLoginToggle = document.getElementById('desktop-login-toggle');
    const desktopLoginDropdown = document.getElementById('desktop-login-dropdown');

    desktopLoginToggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        desktopLoginDropdown.classList.toggle('active');
        const icon = desktopLoginToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('rotate-180');
        }
    });

    // Desktop Home Dropdown Toggle
    const desktopHomeToggle = document.getElementById('desktop-home-toggle');
    const desktopHomeDropdown = document.getElementById('desktop-home-dropdown');

    desktopHomeToggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        desktopHomeDropdown.classList.toggle('active');
        const icon = desktopHomeToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('rotate-180');
        }
    });

    // Mobile Home Dropdown Toggle
    const mobileHomeToggle = document.getElementById('mobile-home-toggle');
    const mobileHomeDropdown = document.getElementById('mobile-home-dropdown');

    mobileHomeToggle?.addEventListener('click', () => {
        mobileHomeDropdown.classList.toggle('active');
        const icon = mobileHomeToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('rotate-180');
        }
    });

    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
        // Desktop Login dropdown
        if (desktopLoginDropdown && !desktopLoginDropdown.contains(e.target) && !desktopLoginToggle?.contains(e.target)) {
            desktopLoginDropdown.classList.remove('active');
            desktopLoginToggle?.querySelector('i')?.classList.remove('rotate-180');
        }

        // Desktop Home dropdown
        if (desktopHomeDropdown && !desktopHomeDropdown.contains(e.target) && !desktopHomeToggle?.contains(e.target)) {
            desktopHomeDropdown.classList.remove('active');
            desktopHomeToggle?.querySelector('i')?.classList.remove('rotate-180');
        }

        // Mobile dropdown - usually handled by menu close, but added for safety
        if (mobileLoginDropdown && !mobileLoginDropdown.contains(e.target) && !mobileLoginToggle?.contains(e.target)) {
            // We only close if it's not the toggle itself
            // Note: mobile menu usually hides the whole thing anyway
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Dynamic Service Details Loading
    const serviceData = {
        'mold': {
            title: 'Mold Remediation & Removal',
            description: 'Professional mold remediation is more than just cleaning up visible growth. It\'s about addressing the source of moisture and ensuring that spores are properly contained and filtered to prevent recurrence and health issues.',
            image: 'assets/img/mold_remediation_pro.png',
            imageAlt: 'Mold Remediation',
            features: [
                {
                    title: 'Inspection Phase',
                    description: 'Detailed moisture mapping and thermal imaging to identify hidden mold behind drywall or under cabinetry.'
                },
                {
                    title: 'Containment & Air Scrubbing',
                    description: 'Using negative air pressure and HEPA filtration to ensure spores don\'t migrate to other parts of the building.'
                }
            ],
            faqs: [
                {
                    question: 'How long does the remediation process take?',
                    answer: 'Typically, a standard residential mold remediation project takes 3 to 5 business days, including initial setup, remediation, and final verification testing.'
                },
                {
                    question: 'Is mold remediation covered by insurance?',
                    answer: 'In many cases, if the mold is a result of a sudden water intrusion (like a burst pipe), it may be covered. We work directly with all major insurance carriers.'
                }
            ]
        },
        'asbestos': {
            title: 'Asbestos Abatement & Removal',
            description: 'Safe and certified removal of asbestos-containing materials from your premises. Our licensed professionals follow strict EPA guidelines to ensure complete safety during the abatement process, protecting your health and property.',
            image: 'assets/img/asbestos_removal_pro.png',
            imageAlt: 'Asbestos Abatement',
            features: [
                {
                    title: 'Professional Assessment',
                    description: 'Comprehensive testing and identification of asbestos-containing materials using certified laboratory analysis.'
                },
                {
                    title: 'Safe Removal Process',
                    description: 'Complete containment and removal following EPA regulations with proper disposal at approved facilities.'
                }
            ],
            faqs: [
                {
                    question: 'How do I know if my building has asbestos?',
                    answer: 'Buildings constructed before 1980 are more likely to contain asbestos. We offer professional testing services to identify asbestos-containing materials in insulation, tiles, and other building materials.'
                },
                {
                    question: 'Is asbestos abatement required by law?',
                    answer: 'If asbestos-containing materials are damaged or will be disturbed during renovation, EPA regulations require professional abatement. We ensure full compliance with all federal and state regulations.'
                }
            ]
        },
        'air-quality': {
            title: 'Air Quality Testing & Analysis',
            description: 'Detailed laboratory analysis of indoor air to detect harmful spores, particles, and contaminants. Our comprehensive testing identifies potential health hazards and provides actionable recommendations for improving your indoor air quality.',
            image: 'assets/img/air_quality_testing_pro.png',
            imageAlt: 'Air Quality Testing',
            features: [
                {
                    title: 'Comprehensive Testing',
                    description: 'Advanced air sampling for mold spores, VOCs, particulates, and other airborne contaminants using state-of-the-art equipment.'
                },
                {
                    title: 'Detailed Reporting',
                    description: 'Laboratory-certified results with clear explanations and recommendations for remediation if issues are detected.'
                }
            ],
            faqs: [
                {
                    question: 'What does air quality testing detect?',
                    answer: 'Our testing identifies mold spores, bacteria, volatile organic compounds (VOCs), particulate matter, and other airborne contaminants that can affect your health and comfort.'
                },
                {
                    question: 'How long does testing take?',
                    answer: 'On-site sampling typically takes 1-2 hours. Laboratory analysis is completed within 3-5 business days, after which you\'ll receive a comprehensive report with findings and recommendations.'
                }
            ]
        }
    };

    // Load service details if on service-details page
    if (window.location.pathname.includes('service-details.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const serviceType = urlParams.get('service') || 'mold'; // Default to mold if no parameter

        const service = serviceData[serviceType];

        if (service) {
            // Update page title
            const titleElement = document.getElementById('service-title');
            if (titleElement) {
                titleElement.textContent = service.title;
            }

            // Update description
            const descElement = document.getElementById('service-description');
            if (descElement) {
                descElement.textContent = service.description;
            }

            // Update image
            const imageElement = document.getElementById('service-image');
            if (imageElement) {
                imageElement.src = service.image;
                imageElement.alt = service.imageAlt;
            }

            // Update features
            const featuresContainer = document.getElementById('service-features');
            if (featuresContainer && service.features) {
                featuresContainer.innerHTML = service.features.map(feature => `
                    <div class="card p-6 border-l-4 border-l-primary-600">
                        <h4 class="font-bold text-lg mb-4">${feature.title}</h4>
                        <p class="text-secondary-600 dark:text-secondary-400">${feature.description}</p>
                    </div>
                `).join('');
            }

            // Update FAQs
            const faqsContainer = document.getElementById('service-faqs');
            if (faqsContainer && service.faqs) {
                faqsContainer.innerHTML = service.faqs.map(faq => `
                    <details class="group card p-4 border border-secondary-100 dark:border-secondary-800 open:bg-primary-50 dark:open:bg-secondary-900/50">
                        <summary class="flex justify-between items-center font-bold cursor-pointer list-none">
                            ${faq.question}
                            <i class="fas fa-plus group-open:rotate-45 transition-transform"></i>
                        </summary>
                        <p class="mt-4 text-secondary-600 dark:text-secondary-400">${faq.answer}</p>
                    </details>
                `).join('');
            }

            // Update page meta title
            document.title = `${service.title} | SafeGuard Remediation`;
        }
    }
});

