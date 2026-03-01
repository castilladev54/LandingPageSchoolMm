// 1. Registro de Plugins (Fuera de cualquier evento para evitar errores de referencia)
gsap.registerPlugin(ScrollTrigger);

// 2. Función de Animación Hero (La mantenemos separada para control total)
function playHeroAnimation() {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.fromTo(".hero-background",
    { scale: 1.15, transformOrigin: '70% 30%' },
    { scale: 1, duration: 2.5 }
  )
    .fromTo(".el-futuro",
      { x: -300, y: 150, opacity: 0, rotation: -2 },
      { x: 0, y: 0, opacity: 1, rotation: 0, duration: 2 },
      "-=1.5"
    )
    .fromTo(".se-construye",
      { x: 300, y: -150, opacity: 0, rotation: 2 },
      { x: 0, y: 0, opacity: 1, rotation: 0, duration: 2 },
      "-=2"
    )
    .from(".sub-text", { y: 20, opacity: 0, duration: 0.8 }, "-=1")
    .from(".main-title", { y: 30, opacity: 0, duration: 1 }, "-=0.6")
    .from(".slogan", { y: 20, opacity: 0, duration: 0.8 }, "-=0.8")
    .from(".cta-button-vibrant", { y: 50, opacity: 0, duration: 1 }, "-=0.5");
}

// 3. ÚNICO Evento de Carga (Aquí está el orden real)
window.addEventListener("load", function () {
  const loader = document.getElementById("loader-wrapper");

  // Tiempo de cortesía para que el spinner o video se vea (2.5 seg)
  setTimeout(() => {
    // Ocultamos el loader
    loader.style.opacity = "0";
    document.body.classList.add('loaded');

    // Eliminamos el loader del DOM y disparamos la magia
    setTimeout(() => {
      loader.remove();
      playHeroAnimation();
    }, 500); // 500ms es lo que dura la transición de opacidad del CSS

  }, 2500);
});

// 4. Animaciones de Scroll (Estas pueden vivir en el DOMContentLoaded)
document.addEventListener("DOMContentLoaded", () => {

  // --- Paralaje Hero ---
  gsap.to(".hero-background", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-container",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  });

  gsap.to(".el-futuro", {
    xPercent: 10,
    yPercent: -15,
    scrollTrigger: {
      trigger: ".hero-container",
      scrub: 1.5,
    }
  });

  // --- Galería (Staggered) ---
  gsap.from(".collage-item", {
    opacity: 0,
    y: 100,
    rotation: () => Math.random() * 20 - 10,
    duration: 1.2,
    stagger: 0.15,
    ease: "back.out(1.4)",
    scrollTrigger: {
      trigger: ".gallery-section",
      start: "top 70%",
    }
  });

  // Añade aquí el resto de tus animaciones de scroll siguiendo este patrón...
});