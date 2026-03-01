/* script.js */

// Asegurarse de que el DOM esté cargado
document.addEventListener("DOMContentLoaded", (event) => {

  // Registrar el plugin ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // --- 1. Animación de Entrada "Premium" (Timeline Pospuesta post-carga) ---

  // Envolvemos la animación inicial en una función para llamarla TRAS el preloader
  function playHeroAnimation() {
    // Usamos 'power3.out' para una curva cinematográfica
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // a) El fondo generado por IA entra escalando hacia atrás suavemente
    tl.fromTo(".hero-background",
      { scale: 1.15, transformOrigin: '70% 30%' },
      { scale: 1, duration: 2.5 }
    )
      // b) Aparecen los Textos Gigantes en el fondo (efecto cinematográfico)
      .fromTo(".el-futuro",
        { x: -300, y: 150, opacity: 0, rotation: -2 },
        { x: 0, y: 0, opacity: 1, rotation: 0, duration: 2.5 },
        "-=2"
      )
      .fromTo(".se-construye",
        { x: 300, y: -150, opacity: 0, rotation: 2 },
        { x: 0, y: 0, opacity: 1, rotation: 0, duration: 2.5 },
        "-=2.5"
      )
      // c) Aparece la marca, textos y CTA en "stagger"
      .from(".sub-text", { y: 20, opacity: 0, duration: 0.8 }, "-=1")
      .from(".main-title", { y: 30, opacity: 0, duration: 1 }, "-=0.6")
      .from(".slogan", { y: 20, opacity: 0, duration: 0.8 }, "-=0.8")
      .from(".cta-button-vibrant", { y: 50, opacity: 0, duration: 1 }, "-=0.5");
  }

  // Lógica del Preloader Animado (Asegura que primero ruede el video)
  window.addEventListener('load', () => {
    // Si la web ya cargó todo su contenido (imágenes, scripts)
    // Agregamos un pequeñísimo margen de tiempo para que se luzca y entienda la animación del video
    setTimeout(() => {
      // Ocultar la cortina del video suavemente (+ overflow: auto)
      document.body.classList.add('loaded');

      // Una vez la cortina empieza a ponerse transparente, saltan las letras principales de la web
      setTimeout(() => {
        playHeroAnimation();
      }, 500); // Demora 500ms al disparo del timeline

    }, 2800); // Asumimos que quieres que el usuario vea unos 2.8 seg de la intro .mp4
  });


  // --- 2. Animación de Scroll / Paralaje Avanzado (Efecto Antigravedad) ---

  // A medida que bajamos con scroll, la foto de fondo hace un "Parallax" suave
  gsap.to(".hero-background", {
    yPercent: 20, // Se mueve el 20% de su propia altura (más lento que el scroll)
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-container",
      start: "top top",
      end: "bottom top",
      scrub: true, // Scrub = Sincronizado a la barra espaciadora o el scroll
    }
  });

  // El Texto Gigante de Fondo hace un movimiento opuesto
  gsap.to(".el-futuro", {
    xPercent: 10, // Se aleja hacia la derecha
    yPercent: -15,   // Y hacia arriba
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-container",
      start: "top top",
      end: "bottom top",
      scrub: 1.5, // 1.5 aporta inercia al scroll
    }
  });

  gsap.to(".se-construye", {
    xPercent: -10, // Se aleja hacia la izquierda
    yPercent: -20,   // Y hacia arriba aún más rápido para dar profundidad a la perspectiva
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-container",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    }
  });

  // Los textos de la izquierda se van "desvaneciendo" a medida que bajamos
  gsap.to(".hero-content-front", {
    y: -100, // Sube más rápido
    opacity: 0, // Se desvanece
    ease: "none",
    scrollTrigger: {
      trigger: ".hero-container",
      start: "top top",
      end: "bottom top",
      scrub: true,
    }
  });

  // --- 3. Animación de Scroll para la Galería (Aparición escalonada) ---

  // Animación del Title
  gsap.from(".section-title", {
    opacity: 0,
    scale: 0.8,
    y: 50,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".gallery-section",
      start: "top 75%",
    }
  });

  // Animación de las huellas caminando (staggered)
  gsap.to(".footprint", {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.4, // Caminan una tras de otra
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".gallery-section",
      start: "top 75%",
    }
  });

  // Hacemos aparecer cada trozo de periódico progresivamente
  gsap.from(".collage-item", {
    opacity: 0,
    y: 100,
    rotation: () => Math.random() * 20 - 10, // Rotación salvaje inicial
    duration: 1.2,
    stagger: 0.15, // Retardo entre cada imagen
    ease: "back.out(1.4)", // Rebote sutil
    scrollTrigger: {
      trigger: ".gallery-section",
      start: "top 70%",
    }
  });

  // Animación para que los textos flotantes se desvanezcan al aparecer
  gsap.from(".floating-text", {
    opacity: 0,
    scale: 0.8,
    duration: 2,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".gallery-section",
      start: "top 60%",
    }
  });

});