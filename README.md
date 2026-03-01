# 🎓 Maria Montessori - Landing Page Premium

![Maria Montessori Preview](https://img.shields.io/badge/Status-Completado-success?style=for-the-badge) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

Una **Landing Page de Alta Conversión** diseñada exclusivamente para el Centro Educativo Maria Montessori. Este proyecto no es solo una página web estática, sino una **experiencia interactiva** diseñada con principios avanzados de psicología del consumidor y UX/UI para transformar visitantes angustiados (padres buscando la mejor educación) en *leads* (clientes potenciales) altamente cualificados.

---

## 🧠 Psicología de Conversión y UX Aplicada

Cada elemento de esta landing page ha sido colocado estratégicamente para guiar al usuario hacia la acción (inscripción o contacto telefónico), utilizando los siguientes disparadores psicológicos:

### 1. Percepción de Alto Valor (Efecto *Premium*)
* **Diseño Dark Premium:** A diferencia de las guarderías tradicionales que abusan de colores primarios e infantiles, esta landing page utiliza un fondo **casi negro (#070707)** combinado con tipografías impactantes (*Archivo Black*). Esto comunica **autoridad, exclusividad y tecnología**, posicionando a la institución como una opción educativa de "élite".
* **Tipografía Extra-Large:** El uso de textos gigantes tipo "Antigravedad" de fondo subcomunica solidez institucional.

### 2. Retención por Asombro (Reducción del Porcentaje de Rebote)
* **Preloader Cinematográfico:** Un video inicial de impacto inmediato mantiene la atención del usuario durante los primeros 3 segundos vitales.
* **Scroll Interactivo (GSAP):** A medida que los padres hacen *scroll*, los elementos reaccionan de manera orgánica (efecto parallax, huellas que caminan, fotos que rebotan). Esto genera **"Gamificación visual"**: el usuario quiere seguir bajando solo para ver qué animación ocurre después.

### 3. Prueba Social Tangible (Sección *Huellas de Aprendizaje*)
* **Collage Interactivo:** En lugar de una aburrida galería de cuadrículas, se utiliza un efecto de "fotografías instantáneas/recortes tirados sobre una mesa". 
* **Efecto Psicológico:** Hace que la experiencia de los niños se sienta *real, táctil y humana*, acercando emocionalmente a los padres a la vivencia diaria en la escuela.

### 4. Fricción Cero e Impulso (CTAs estratégicos)
* **WhatsApp Omnipresente:** Un botón flotante verde (Color de permiso/avance) siempre visible en la parte inferior derecha. Para un padre ocupado, la fricción de llenar un formulario puede ser alta; un clic al WhatsApp es inmediato y conversacional.
* **Micro-Copy Orientado a la Seguridad:** En lugar de "Comprar" o "Pagar", los botones utilizan copies como **"Asegura Ahora"** o **"Forma Tu Futuro"**. Esto disminuye la ansiedad de la compra y eleva la percepción de que están haciendo una inversión vitalicia, no un gasto.

---

## 🏗️ Estructura Técnica del Proyecto

El proyecto está construido pensando en la máxima optimización de velocidad de carga (*Performance*) y compatibilidad.

### Tecnologías Utama:
- **HTML5 Semántico:** Arquitectura SEO-friendly (`<header>`, `<section>`, `<footer>`) para posicionamiento orgánico en Google.
- **CSS3 Vanilla Avanzado:** 
  - *Glassmorphism* (Bordes difuminados y desenfoques tipo cristal).
  - *CSS Grid & Flexbox* para alineaciones perfectas.
  - Diseño 100% *Mobile-First / Responsive* (Adaptable impecablemente hasta medidas estrictas de `414x736` como iPhone).
- **JavaScript (ES6):** Control de lógicas de pre-carga y eventos de DOM.
- **GreenSock (GSAP) + ScrollTrigger:** Motor de animaciones de grado industrial para garantizar 60 FPS (Frames por segundo) sin tirones al hacer scroll, superando cualquier límite de las animaciones nativas de CSS.

### Desglose de Secciones (Funnel de Ventas)
1. **Hero Intro:** Captación absoluta de atención (Velo de video y Promesa de Valor).
2. **Galería (Huellas):** Conexión Emocional (Fotografías dispuestas artísticamente).
3. **Dark Premium Features:** Racionalización de la Venta (Características técnicas del método Montessori).
4. **Localización Inmersiva:** Confianza y Presencia Física (Mapa interactivo y ubicación con video de fondo).
5. **Footer:** Navegación secundaria y barrido SEO.

---

## 🚀 Cómo Desplegar (Para Desarrolladores)

El proyecto no requiere dependencias de Node.js o compiladores complejos para poder visualizarlo o editarlo. 

1. Clona este repositorio o descarga la carpeta raíz.
   ```bash
   git clone https://github.com/tu-usuario/montessori-landing.git
   ```
2. Accede a la carpeta `/app`.
3. Abre el archivo `index.html` con la extensión **Live Server** de VSCode (Recomendado) o simplemente ábrelo en cualquier navegador web moderno (Chrome, Safari, Firefox, Edge).
4. *(Opcional)* Si hay problemas de caché, el HTML está configurado con un script `Cache-Buster` dinámico (`Date.now()`) para reflejar los cambios en el CSS instantáneamente en el entorno de desarrollo.

---

## 📱 Responsividad

El archivo `style.css` cuenta con una estructura intensiva de **Media Queries**. 
Específicamente, los redimensionamientos manejan caídas para **Tablets (`< 768px`)** mutando *grids* a arreglos en columnas, y adaptaciones ultra delgadas para **Móviles (`< 414px`)**, en los cuales características decorativas densas como tipografías gigantes y flotantes son suprimidas (`display: none !important`) para garantizar la accesibilidad y correcta lectura del pulgar.

---
*Diseñado con pasión analítica para convertir clics en matrículas.* 🚀
