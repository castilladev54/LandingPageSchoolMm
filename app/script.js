/* script.js - Reconstrucción de Alto Rendimiento 
   Enfoque: GSAP + ScrollTrigger + Optimized Loading
*/

// 1. Registro de Plugins (Crítico: Siempre al inicio)
gsap.registerPlugin(ScrollTrigger);

// 2. Configuración Global de GSAP para suavidad en móviles
gsap.config({
  force3D: true // Obliga el uso de GPU para evitar tirones
});

// 3. Función de Animación Hero (Entrada Triunfal)
function playHeroAnimation() {
  const tl = gsap.timeline({
    defaults: { ease: "power4.out", duration: 1.5 }
  });

  // Quitamos la visibilidad oculta del contenido justo al empezar
  tl.to(".hero-content-front", { autoAlpha: 1, duration: 0.1 })

    // Animación de escala del fondo (Efecto zoom out suave)
    .fromTo(".hero-background",
      { scale: 1.2 },
      { scale: 1, duration: 3, ease: "power2.out" },
      0
    )

    // Los textos gigantes "MARIA" y "MONTESSORI"
    .fromTo(".el-futuro",
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 },
      "-=2.5"
    )
    .fromTo(".se-construye",
      { x: 200, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 },
      "-=2"
    )

    // Contenido de texto (Staggered para elegancia)
    .from(".sub-text", { y: 30, opacity: 0, duration: 1 }, "-=1.5")
    .from(".main-title", { y: 40, opacity: 0, duration: 1 }, "-=1.2")
    .from(".slogan", { y: 20, opacity: 0, duration: 1 }, "-=1")
    .from(".cta-button-vibrant", { scale: 0.8, opacity: 0, duration: 0.8 }, "-=0.8");
}

// 4. Gestión del Loader y Ciclo de Vida
window.addEventListener("load", () => {
  const loader = document.getElementById("loader-wrapper");

  // Reducimos el tiempo de espera artificial a 1.2s para no castigar el UX
  setTimeout(() => {
    loader.style.opacity = "0";
    document.body.classList.add('loaded');

    setTimeout(() => {
      loader.remove();
      playHeroAnimation();
    }, 500); // Espera a que termine la transición de opacidad del CSS
  }, 600);
});

// 5. Animaciones de Scroll (Efectos de Galería y Parallax)
document.addEventListener("DOMContentLoaded", () => {

  // --- Parallax del Fondo Hero ---
  gsap.to(".hero-background", {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-container",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  // --- Animación de los Textos de Fondo (Se mueven al hacer scroll) ---
  gsap.to(".el-futuro", {
    xPercent: -15,
    scrollTrigger: {
      trigger: ".hero-container",
      scrub: 1
    }
  });

  gsap.to(".se-construye", {
    xPercent: 15,
    scrollTrigger: {
      trigger: ".hero-container",
      scrub: 1
    }
  });

  // --- Galería "Huellas" (Efecto de aparición desordenada) ---
  // Seleccionamos tanto los items como los textos flotantes
  const galleryItems = gsap.utils.toArray(".collage-item, .floating-text");

  galleryItems.forEach((item) => {
    gsap.from(item, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });
  });

  // --- Sección Premium (Spotlight de la imagen) ---
  gsap.from(".premium-img", {
    scale: 0.8,
    opacity: 0,
    duration: 2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: ".premium-card",
      start: "top 80%"
    }
  });
});