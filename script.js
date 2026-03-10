const testimonials = document.querySelectorAll(".testimonial");

let index = 0;

function showTestimonials() {

    testimonials.forEach(t => t.classList.remove("active"));

    index++;

    if (index >= testimonials.length) {
        index = 0;
    }

    testimonials[index].classList.add("active");

}

setInterval(showTestimonials, 4000);


/* Smooth Reveal Animation */

const revealElements = document.querySelectorAll(
    ".feature, .product-card, .partners img"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", revealOnScroll);


/* Trigger reveal on load */

window.addEventListener("load", revealOnScroll);