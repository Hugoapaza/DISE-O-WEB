// JavaScript principal para el sitio web de la Municipalidad

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el carousel de Bootstrap
    var myCarousel = document.querySelector('#carouselExampleControls');
    if (myCarousel) {
        new bootstrap.Carousel(myCarousel, {
            interval: 5000,
            pause: 'hover'
        });
    }

    // Animación de scroll suave para los enlaces de navegación
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#' && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Añadir clase 'active' al elemento de navegación actual
    function setActiveNav() {
        const sections = document.querySelectorAll('section');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Detectar el scroll para activar elementos de navegación
    window.addEventListener('scroll', function() {
        setActiveNav();
        
        // Efecto de scroll para el header
        const header = document.querySelector('.main-header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Inicializar elementos con efecto hover en servicios
    const serviceBoxes = document.querySelectorAll('.service-box');
    serviceBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.querySelector('.icon i').classList.add('animated');
        });
        box.addEventListener('mouseleave', function() {
            this.querySelector('.icon i').classList.remove('animated');
        });
    });

    // Función para manejar los enlaces de "Ver más"
    const moreButtons = document.querySelectorAll('.btn-more');
    moreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Aquí se podría implementar la carga de más contenido mediante AJAX
            // o redirigir a una página con contenido completo
            alert('Próximamente: Ver más contenido en esta sección');
        });
    });
});
