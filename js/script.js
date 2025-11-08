// Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Contact form handling
        const contactForm = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Display message on page
            formMessage.innerHTML = `
            <div class="bg-white p-4 rounded-lg shadow-md">
                <h3 class="font-bold mb-2">Pesan Diterima:</h3>
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Pesan:</strong><br>${message}</p>
            </div>
            `;
            
            formMessage.className = 'mt-4 text-left';
            formMessage.classList.remove('hidden');
            
            // Reset form
            contactForm.reset();
            
            // Hide message after 10 seconds
            setTimeout(() => {
            formMessage.classList.add('hidden');
            }, 10000);
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80;
                    const targetPosition = target.offsetTop - offset;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });