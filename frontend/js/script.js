document.addEventListener("DOMContentLoaded", function () {
    
    // Toggle Mode Terang/Gelap
    const themeBtn = document.getElementById("themeToggle");
    
    if (themeBtn) {
        const savedTheme = localStorage.getItem("ruangkuTheme");
        if (savedTheme === "light") {
            document.body.classList.add("light-mode");
            themeBtn.innerText = "☀️";
        }

        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");
            
            if (document.body.classList.contains("light-mode")) {
                themeBtn.innerText = "☀️";
                localStorage.setItem("ruangkuTheme", "light");
            } else {
                themeBtn.innerText = "🌙";
                localStorage.setItem("ruangkuTheme", "dark");
            }
        });
    }

    // Form Kontak
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const nameInput = contactForm.querySelector('input[type="text"]');
            const name = nameInput ? nameInput.value.trim() : "Pengguna";

            alert(`Terima kasih ${name}, pesan Anda telah berhasil terkirim! Tim RuangKu akan segera menghubungi Anda.`);
            
            contactForm.reset();
        });
    }

    // Smooth Scroll Navigation
    const navLinks = document.querySelectorAll('.nav-menu a, .btn-hero');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#') && targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});