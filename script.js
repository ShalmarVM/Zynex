// script.js - Vintage Moderno | iPhone 14 al 17 con imágenes, videos y WhatsApp

// ======================== DATOS COMPLETOS DE PRODUCTOS (iPhone 14 al 17) ========================
const productsData = [
  {
    id: 14,
    model: "iPhone 14",
    fullName: "iPhone 14 · Nostalgia Azul",
    price: 799,
    image: "https://i.ibb.co/k8tvk0N/iphone14-blue.png",
    video: "https://videos.pexels.com/video-files/4065423/4065423-uhd_2560_1440_25fps.mp4",
    color: "Azul Medianoche",
    specs: { display: "6.1″ Super Retina XDR", chip: "A15 Bionic", camara: "Dual 12MP", battery: "Hasta 20h" }
  },
  {
    id: 15,
    model: "iPhone 15",
    fullName: "iPhone 15 · Rosa cálido",
    price: 899,
    image: "https://i.ibb.co/ZHyF6BY/iphone15-pink.png",
    video: "https://videos.pexels.com/video-files/7994458/7994458-uhd_2560_1440_25fps.mp4",
    color: "Rosa Paloma",
    specs: { display: "6.1″ Dynamic Island", chip: "A16 Bionic", camara: "48MP principal", battery: "Hasta 22h" }
  },
  {
    id: 16,
    model: "iPhone 16",
    fullName: "iPhone 16 · Verde Esmeralda",
    price: 1099,
    image: "https://i.ibb.co/LhhCms8/iphone16-green.png",
    video: "https://videos.pexels.com/video-files/6022636/6022636-uhd_2560_1440_30fps.mp4",
    color: "Verde Alga",
    specs: { display: "6.3″ Super Retina 120Hz", chip: "A17 Pro", camara: "48MP + 12MP tele", battery: "Hasta 27h" }
  },
  {
    id: 17,
    model: "iPhone 17 Pro",
    fullName: "iPhone 17 Pro · Titanio Retro",
    price: 1399,
    image: "https://i.ibb.co/YW47d4z/iphone-15-pro-mock.png",
    video: "https://videos.pexels.com/video-files/9659498/9659498-uhd_2560_1440_25fps.mp4",
    color: "Titanio Champán",
    specs: { display: "6.3″ ProMotion 144Hz", chip: "A18 Bionic Ultra", camara: "Triple 48MP + LiDAR", battery: "Hasta 30h" }
  }
];

// ======================== ESPECIFICACIONES PARA TABLA (adicional) ========================
const specsTableData = [
  { model: "iPhone 14", display: "6.1″ OLED", processor: "A15 Bionic", camera: "12MP+12MP", battery: "3279 mAh" },
  { model: "iPhone 15", display: "6.1″ OLED Dynamic Island", processor: "A16 Bionic", camera: "48MP+12MP", battery: "3349 mAh" },
  { model: "iPhone 16", display: "6.3″ OLED 120Hz", processor: "A17 Pro", camera: "48MP+12MP+12MP", battery: "3561 mAh" },
  { model: "iPhone 17 Pro", display: "6.3″ OLED 144Hz", processor: "A18 Bionic Ultra", camera: "48MP triple + LiDAR", battery: "3750 mAh" }
];

// ======================== VARIABLES GLOBALES ========================
let currentProductForWhatsapp = null;

// ======================== RENDERIZAR PRODUCTOS (con imagen y video miniatura) ========================
function renderProducts() {
  const container = document.getElementById('productsGridWarm');
  if (!container) return;
  container.innerHTML = '';

  productsData.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card-warm');
    card.setAttribute('data-id', product.id);

    // Dentro de la tarjeta: mostramos imagen principal y opcional video (thumbnail)
    card.innerHTML = `
      <div class="product-media">
        <img src="${product.image}" alt="${product.model}" class="product-img" loading="lazy">
        <div class="play-overlay" data-video="${product.video}" data-model="${product.model}" style="position: absolute; bottom: 10px; right: 10px; background: rgba(200,106,75,0.8); border-radius: 40px; padding: 6px 12px; cursor: pointer;">
          <i class="fas fa-play-circle"></i> Ver video
        </div>
      </div>
      <div class="product-info">
        <h3>${product.fullName}</h3>
        <div class="product-sub">${product.color}</div>
        <div class="product-price">$${product.price} USD</div>
        <button class="whatsapp-buy-btn" data-model="${product.model}" data-price="${product.price}">
          <i class="fab fa-whatsapp"></i> Comprar por WhatsApp
        </button>
      </div>
    `;
    container.appendChild(card);
  });

  // Asignar eventos a botones de compra y a los overlay de video
  attachBuyWhatsAppEvents();
  attachVideoPreviewEvents();
}

// ======================== EVENTOS WHATSAPP (comprar) ========================
function attachBuyWhatsAppEvents() {
  const buyBtns = document.querySelectorAll('.whatsapp-buy-btn');
  buyBtns.forEach(btn => {
    btn.removeEventListener('click', handleWhatsAppClick);
    btn.addEventListener('click', handleWhatsAppClick);
  });
}

function handleWhatsAppClick(event) {
  event.stopPropagation();
  const btn = event.currentTarget;
  const model = btn.getAttribute('data-model');
  const price = btn.getAttribute('data-price');
  
  // Mensaje predefinido con estilo cálido
  const message = `🍎✨ Hola! Me encanta el *${model}* ($${price} USD) de la colección Vintage Cellar. Quiero más información y realizar la compra. ¿Podemos coordinar? 📱`;
  const encodedMsg = encodeURIComponent(message);
  // Número de WhatsApp (simulado, cámbialo por tu número real)
  const phoneNumber = "573001234567";  // Reemplazar con número real
  const url = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
  window.open(url, '_blank');
}

// ======================== EVENTOS PREVISUALIZACIÓN DE VÍDEO (modal vintage) ========================
function attachVideoPreviewEvents() {
  const videoOverlays = document.querySelectorAll('.play-overlay');
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideoPlayer');
  const closeVideoSpan = document.querySelector('.close-video');
  
  if (!modal || !modalVideo) return;
  
  videoOverlays.forEach(overlay => {
    overlay.removeEventListener('click', handleVideoPreview);
    overlay.addEventListener('click', handleVideoPreview);
  });
  
  function handleVideoPreview(e) {
    e.stopPropagation();
    const videoSrc = this.getAttribute('data-video');
    const modelName = this.getAttribute('data-model') || 'iPhone';
    if (modalVideo) {
      modalVideo.querySelector('source')?.setAttribute('src', videoSrc);
      modalVideo.load();
      modalVideo.play().catch(e => console.log("Autoplay restringido", e));
    }
    if (modal) {
      modal.style.display = 'flex';
      // Agregar caption opcional
      const caption = modal.querySelector('p');
      if (caption) caption.innerText = `🎥 Vista previa: ${modelName} · Experiencia vintage`;
    }
  }
  
  // Cerrar modal
  if (closeVideoSpan) {
    closeVideoSpan.onclick = () => {
      modal.style.display = 'none';
      if (modalVideo) modalVideo.pause();
    };
  }
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      if (modalVideo) modalVideo.pause();
    }
  };
}

// ======================== RENDERIZAR TABLA DE ESPECIFICACIONES ========================
function renderSpecsTable() {
  const tbody = document.getElementById('specsTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  specsTableData.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="font-weight:600;">${item.model}</td>
      <td>${item.display}</td>
      <td>${item.processor}</td>
      <td>${item.camera}</td>
      <td>${item.battery}</td>
    `;
    tbody.appendChild(row);
  });
}

// ======================== SCROLL SUAVE Y NAVEGACIÓN ========================
function initSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
  
  const exploreBtn = document.getElementById('exploreWarmBtn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      const productsSection = document.getElementById('products');
      if (productsSection) productsSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // Video teaser del hero (abre modal con video)
  const videoTeaser = document.getElementById('videoTeaserBtn');
  if (videoTeaser) {
    videoTeaser.addEventListener('click', () => {
      const modal = document.getElementById('videoModal');
      const modalVideo = document.getElementById('modalVideoPlayer');
      if (modal && modalVideo) {
        modalVideo.querySelector('source').src = "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_30fps.mp4";
        modalVideo.load();
        modalVideo.play();
        modal.style.display = 'flex';
        const caption = modal.querySelector('p');
        if (caption) caption.innerText = "🎞️ Reel inspiración vintage · iPhone 14 al 17";
      }
    });
  }
}

// ======================== CART WARM: REDIRIGE A WHATSAPP PRINCIPAL ========================
function initCartWarm() {
  const cartWarmDiv = document.querySelector('.cart-warm');
  if (cartWarmDiv) {
    cartWarmDiv.addEventListener('click', () => {
      const mainWhatsBtn = document.getElementById('whatsappMainBtn');
      if (mainWhatsBtn) mainWhatsBtn.click();
      else {
        window.open("https://wa.me/573001234567?text=Hola%20quisiera%20información%20sobre%20iPhones%20vintage", '_blank');
      }
    });
  }
}

// ======================== ANIMACIONES DE ENTRADA SUAVE (INTERSECTION OBSERVER) ========================
function animateCardsOnScroll() {
  const cards = document.querySelectorAll('.product-card-warm, .feature-card, .contact-card-warm');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.4s ease';
    observer.observe(card);
  });
}

// ======================== BOTÓN "COMPRAR PRINCIPAL" WHATSAPP EN SECCIÓN CONTACTO ========================
function enhanceMainWhatsApp() {
  const mainWhatsBtn = document.getElementById('whatsappMainBtn');
  if (mainWhatsBtn) {
    // asegurar que tiene número correcto y mensaje predeterminado
    const phone = "573001234567"; // editar aquí tu número real
    const msg = "Hola%20quisiera%20adquirir%20un%20iPhone%20de%20la%20colección%20vintage%20moderna";
    mainWhatsBtn.href = `https://wa.me/${phone}?text=${msg}`;
  }
}

// ======================== PRE-CARGAR IMÁGENES CON FALLBACK (opcional, para evitar broken) ========================
function preloadImagesGracefully() {
  // las imágenes de i.ibb.co son funcionales, pero si fallan se ven sombreadas
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      this.src = 'https://i.ibb.co/YW47d4z/iphone-15-pro-mock.png';
    });
  });
}

// ======================== INICIALIZACIÓN COMPLETA ========================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();          // Genera cards iPhone 14,15,16,17
  renderSpecsTable();       // Tabla comparativa
  initSmoothScroll();       // Navegación suave
  initCartWarm();           // Clic en icono WhatsApp nav
  animateCardsOnScroll();   // Efecto fade up
  enhanceMainWhatsApp();    // Botón principal contacto
  preloadImagesGracefully();
  
  // Consola amigable
  console.log("📱✨ Vintage Cellar cargado | iPhones 14 · 15 · 16 · 17 | WhatsApp integrado");
});

// Si el modal de video no se cierra correctamente, evento extra
window.addEventListener('load', () => {
  const modalVideoElem = document.getElementById('modalVideoPlayer');
  if (modalVideoElem) {
    modalVideoElem.addEventListener('pause', () => {});
  }
});