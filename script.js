document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target section
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Action for CTA buttons (simulating navigation/intent)
    document.querySelectorAll('.cta-primary, .cta-secondary, .nav-cta').forEach(button => {
        button.addEventListener('click', () => {
            // For the purpose of this demo, we'll just log an action.
            // In a real application, this would redirect to the pricing/order page.
            console.log("CTA clicked: Initiating server order process...");
            
            // Example: Smooth scroll to the pricing section on 'Get Started'/'View Plans' click
            if (button.classList.contains('cta-primary') || button.classList.contains('nav-cta')) {
                document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
