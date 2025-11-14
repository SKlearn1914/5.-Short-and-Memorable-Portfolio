    (function(){
      emailjs.init("ViLLDCH04FYEntbfn"); // Replace with your EmailJS public key
    })();
  
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      emailjs.sendForm('service_p6l2a4v', 'template_n0k1j8p', this)
        .then(function() {
          alert('Message sent successfully!');
          form.reset();
        }, function(error) {
          alert('Failed to send message. Please try again later.');
          console.error('EmailJS error:', error);
        });
    });
    // Typing effect for the header
    const typingEl = document.querySelector('.typing');
    const phrases = ['Web Designer', 'Graphic Designer', 'Ethical Hacking', 'MS Office Specialist', 'Web Developer', 'C++ Developer', 'Python Developer'];
    let phraseIndex = 0;
    let letterIndex = 0;
    let typing = true;
  
    function type() {
      if (typing) {
        if (letterIndex < phrases[phraseIndex].length) {
          typingEl.textContent += phrases[phraseIndex][letterIndex];
          letterIndex++;
          setTimeout(type, 120);
        } else {
          typing = false;
          setTimeout(type, 1200);
        }
      } else {
        if (letterIndex > 0) {
          typingEl.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
          letterIndex--;
          setTimeout(type, 60);
        } else {
          typing = true;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, 200);
        }
      }
    }
    type();
  
    // Hamburger toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      const expanded = hamburger.classList.contains('active');
      hamburger.setAttribute('aria-expanded', expanded);
    });
  
    // Close menu on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          hamburger.classList.remove('active');
          hamburger.setAttribute('aria-expanded', false);
        }
      });
    });
  
    // Highlight nav links on scroll
    const sections = document.querySelectorAll('section, header');
    const navItems = document.querySelectorAll('nav ul li a');
  
    function onScroll() {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let currentId = 'home';
  
      sections.forEach(section => {
        if (scrollPos >= section.offsetTop) {
          currentId = section.id || 'home';
        }
      });
  
      navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentId) {
          link.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', onScroll);
    onScroll();
  