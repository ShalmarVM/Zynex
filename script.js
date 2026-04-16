// ============================================
// ZYNEX - TODOS LOS MODELOS iPhone 14 AL 17
// Pro, Pro Max, Plus, etc. con videos
// ============================================

// ======================== DATOS COMPLETOS ========================
const zynexProducts = [
    // iPhone 14 Series
    { id: 1401, model: "iPhone 14", full: "iPhone 14", price: 799, image: "https://i.ibb.co/k8tvk0N/iphone14-blue.png", video: "https://videos.pexels.com/video-files/4065423/4065423-uhd_2560_1440_25fps.mp4", chip: "A15 Bionic", display: "6.1″ Super Retina XDR", camera: "Dual 12MP", battery: "3279 mAh", color: "Azul Medianoche" },
    { id: 1402, model: "iPhone 14 Plus", full: "iPhone 14 Plus", price: 899, image: "https://i.ibb.co/k8tvk0N/iphone14-blue.png", video: "https://videos.pexels.com/video-files/4065423/4065423-uhd_2560_1440_25fps.mp4", chip: "A15 Bionic", display: "6.7″ Super Retina XDR", camera: "Dual 12MP", battery: "4325 mAh", color: "Púrpura" },
    { id: 1403, model: "iPhone 14 Pro", full: "iPhone 14 Pro", price: 1099, image: "https://i.ibb.co/ZHyF6BY/iphone15-pink.png", video: "https://videos.pexels.com/video-files/7994458/7994458-uhd_2560_1440_25fps.mp4", chip: "A16 Bionic", display: "6.1″ ProMotion 120Hz", camera: "48MP + 12MP + 12MP", battery: "3200 mAh", color: "Morado Oscuro" },
    { id: 1404, model: "iPhone 14 Pro Max", full: "iPhone 14 Pro Max", price: 1199, image: "https://i.ibb.co/ZHyF6BY/iphone15-pink.png", video: "https://videos.pexels.com/video-files/7994458/7994458-uhd_2560_1440_25fps.mp4", chip: "A16 Bionic", display: "6.7″ ProMotion 120Hz", camera: "48MP + 12MP + 12MP", battery: "4323 mAh", color: "Plateado" },
    
    // iPhone 15 Series
    { id: 1501, model: "iPhone 15", full: "iPhone 15", price: 899, image: "https://i.ibb.co/ZHyF6BY/iphone15-pink.png", video: "https://videos.pexels.com/video-files/7994458/7994458-uhd_2560_1440_25fps.mp4", chip: "A16 Bionic", display: "6.1″ Dynamic Island", camera: "48MP + 12MP", battery: "3349 mAh", color: "Rosa" },
    { id: 1502, model: "iPhone 15 Plus", full: "iPhone 15 Plus", price: 999, image: "https://i.ibb.co/ZHyF6BY/iphone15-pink.png", video: "https://videos.pexels.com/video-files/7994458/7994458-uhd_2560_1440_25fps.mp4", chip: "A16 Bionic", display: "6.7″ Dynamic Island", camera: "48MP + 12MP", battery: "4383 mAh", color: "Verde" },
    { id: 1503, model: "iPhone 15 Pro", full: "iPhone 15 Pro", price: 1199, image: "https://i.ibb.co/YW47d4z/iphone-15-pro-mock.png", video: "https://videos.pexels.com/video-files/9659498/9659498-uhd_2560_1440_25fps.mp4", chip: "A17 Pro", display: "6.1″ ProMotion 120Hz", camera: "48MP Triple", battery: "3274 mAh", color: "Titanio Natural" },
    { id: 1504, model: "iPhone 15 Pro Max", full: "iPhone 15 Pro Max", price: 1299, image: "https://i.ibb.co/YW47d4z/iphone-15-pro-mock.png", video: "https://videos.pexels.com/video-files/9659498/9659498-uhd_2560_1440_25fps.mp4", chip: "A17 Pro", display: "6.7″ ProMotion 120Hz", camera: "48MP + Teleobjetivo 5x", battery: "4422 mAh", color: "Titanio Azul" },
    
    // iPhone 16 Series
    { id: 1601, model: "iPhone 16", full: "iPhone 16", price: 999, image: "https://i.ibb.co/LhhCms8/iphone16-green.png", video: "https://videos.pexels.com/video-files/6022636/6022636-uhd_2560_1440_30fps.mp4", chip: "A17 Pro", display: "6.1″ OLED 90Hz", camera: "48MP + 12MP", battery: "3561 mAh", color: "Verde Alga" },
    { id: 1602, model: "iPhone 16 Plus", full: "iPhone 16 Plus", price: 1099, image: "https://i.ibb.co/LhhCms8/iphone16-green.png", video: "https://videos.pexels.com/video-files/6022636/6022636-uhd_2560_1440_30fps.mp4", chip: "A17 Pro", display: "6.7″ OLED 90Hz", camera: "48MP + 12MP", battery: "4674 mAh", color: "Azul Claro" },
    { id: 1603, model: "iPhone 16 Pro", full: "iPhone 16 Pro", price: 1299, image: "https://i.ibb.co/YW47d4z/iphone-15-pro-mock.png", video: "https://videos.pexels.com/video-files/9659498/9659498-uhd_2560_1440_25fps.mp4", chip: "A18 Pro", display: "6.3″ ProMotion 120Hz", camera: "48MP Triple + LiDAR", battery: "3355 mAh", color: "Titanio Negro" },
    { id: 1604, model: "iPhone 16 Pro Max", full: "iPhone 16 Pro Max", price: 1399, image: "https://i.ibb.co/YW47d4z/iphone-15-pro-mock.png", video: "https://videos.pexels.com/video-files/9659498/9659498-uhd_2560_1440_25fps.mp4", chip: "A18 Pro", display: "6.9″ ProMotion 120Hz", camera: "48MP Cuádruple", battery: "4676 mAh", color: "Titanio Plateado" },
    
    // iPhone 17 Series
    { id: 1701, model: "iPhone 17", full: "iPhone 17", price: 1099, image: "https://i.ibb.co/YW47d4z/iphone-15-pro-mock.png", video: "https://videos.pexels.com/video-files/9659498/9659498-uhd_2560_1440_25fps.mp4", chip: "A18 Bionic", display: "6.1″ OLED 120Hz", camera: "48MP + 12MP", battery: "3650 mAh", color: "Plata" },
    { id: 1702, model: "iPhone 17 Plus", full: "iPhone 17 Plus", price: 1199, image: "https://i.ibb.co/YW47d4z/iphone-15-pro-mock.png", video: "https://videos.pexels.com/video-files/9659498/9659498-uhd_2560_1440_25fps.mp4", chip: "A18 Bionic", display: "6.7″ OLED 120Hz", camera: "48MP + 12MP", battery: "4850 mAh", color: "Oro Rosa" },
    { id: 1703, model: "iPhone 17 Pro", full: "iPhone 17 Pro", price: 1399, image: "https://i.ibb.co/YW47d4z/iphone-15-pro-mock.png", video: "https://videos.pexels.com/video-files/9659498/9659498-uhd_2560_1440_25fps.mp4", chip: "A18 Bionic Ultra", display: "6.3″ ProMotion 144Hz", camera: "Triple 48MP LiDAR", battery: "3750 mAh", color: "Titanio Champán" },
    { id: 1704, model: "iPhone 17 Pro Max", full: "iPhone 17 Pro Max", price: 1599, image: "https://i.ibb.co/YW47d4z/iphone-15-pro-mock.png", video: "https://videos.pexels.com/video-files/9659498/9659498-uhd_2560_1440_25fps.mp4", chip: "A18 Bionic Ultra", display: "6.9″ ProMotion 144Hz", camera: "Cuádruple 48MP", battery: "5000 mAh", color: "Negro Espacial" }
];

// Datos para tabla de especificaciones (resumida)
const specsData = [
    { model: "iPhone 14", display: "6.1″ Super Retina XDR", chip: "A15 Bionic", camera: "Dual 12MP", battery: "3279 mAh" },
    { model: "iPhone 14 Plus", display: "6.7″ Super Retina XDR", chip: "A15 Bionic", camera: "Dual 12MP", battery: "4325 mAh" },
    { model: "iPhone 14 Pro", display: "6.1″ ProMotion 120Hz", chip: "A16 Bionic", camera: "48MP Triple", battery: "3200 mAh" },
    { model: "iPhone 14 Pro Max", display: "6.7″ ProMotion 120Hz", chip: "A16 Bionic", camera: "48MP Triple", battery: "4323 mAh" },
    { model: "iPhone 15", display: "6.1″ Dynamic Island", chip: "A16 Bionic", camera: "48MP+12MP", battery: "3349 mAh" },
    { model: "iPhone 15 Plus", display: "6.7″ Dynamic Island", chip: "A16 Bionic", camera: "48MP+12MP", battery: "4383 mAh" },
    { model: "iPhone 15 Pro", display: "6.1″ ProMotion", chip: "A17 Pro", camera: "48MP Triple", battery: "3274 mAh" },
    { model: "iPhone 15 Pro Max", display: "6.7″ ProMotion", chip: "A17 Pro", camera: "48MP + 5x Zoom", battery: "4422 mAh" },
    { model: "iPhone 16", display: "6.1″ OLED", chip: "A17 Pro", camera: "48MP+12MP", battery: "3561 mAh" },
    { model: "iPhone 16 Pro", display: "6.3″ ProMotion", chip: "A18 Pro", camera: "48MP Triple", battery: "3355 mAh" },
    { model: "iPhone 16 Pro Max", display: "6.9″ ProMotion", chip: "A18 Pro", camera: "48MP Cuádruple", battery: "4676 mAh" },
    { model: "iPhone 17 Pro", display: "6.3″ 144Hz", chip: "A18 Ultra", camera: "Triple 48MP", battery: "3750 mAh" },
    { model: "iPhone 17 Pro Max", display: "6.9″ 144Hz", chip: "A18 Ultra", camera: "Cuádruple", battery: "5000 mAh" }
];

// ======================== RENDERIZAR PRODUCTOS ========================
function renderProducts() {
    const container = document.getElementById('zynexProductsGrid');
    if (!container) return;
    container.innerHTML = '';
    
    zynexProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-media" data-video="${product.video}" data-model="${product.model}">
                <img src="${product.image}" alt="${product.model}" loading="lazy">
                <div class="video-overlay">
                    <i class="fas fa-play-circle"></i> Ver video
                </div>
            </div>
            <div class="product-info">
                <h3>${product.model}</h3>
                <div class="product-badge"><i class="fas fa-microchip"></i> ${product.chip}</div>
                <div class="specs-mini">
                    <span><i class="fas fa-mobile-alt"></i> ${product.display.split(' ')[0]}</span>
                    <span><i class="fas fa-camera"></i> ${product.camera.split(' ')[0]}</span>
                </div>
                <div class="product-price">$${product.price} USD</div>
                <button class="whatsapp-btn-card" data-model="${product.model}" data-price="${product.price}">
                    <i class="fab fa-whatsapp"></i> Comprar
                </button>
            </div>
        `;
        container.appendChild(card);
    });
    
    attachMediaEvents();
    attachWhatsappEvents();
}

// Eventos para abrir video al tocar imagen
function attachMediaEvents() {
    const mediaDivs = document.querySelectorAll('.product-media');
    mediaDivs.forEach(media => {
        media.addEventListener('click', (e) => {
            e.stopPropagation();
            const videoUrl = media.getAttribute('data-video');
            const modelName = media.getAttribute('data-model');
            openVideoModal(videoUrl, modelName);
        });
    });
}

// Eventos WhatsApp
function attachWhatsappEvents() {
    const btns = document.querySelectorAll('.whatsapp-btn-card');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const model = btn.getAttribute('data-model');
            const price = btn.getAttribute('data-price');
            const message = `🚀 ZYNEX - Quiero comprar el *${model}* por $${price} USD. ¿Me das información de envío?`;
            window.open(`https://wa.me/59169743131?text=${encodeURIComponent(message)}`, '_blank');
        });
    });
}

// ======================== MODAL VIDEO ========================
const modalVideo = document.getElementById('videoModalFuture');
const videoPlayer = document.getElementById('futureVideoPlayer');

function openVideoModal(videoUrl, modelName) {
    if (!modalVideo || !videoPlayer) return;
    const source = videoPlayer.querySelector('source');
    source.src = videoUrl;
    videoPlayer.load();
    videoPlayer.play().catch(e => console.log('Autoplay prevented'));
    const caption = document.querySelector('.video-caption');
    if (caption) caption.innerHTML = `<i class="fas fa-film"></i> ${modelName} · Experiencia Zynex`;
    modalVideo.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeVideoModal() {
    if (modalVideo) {
        modalVideo.style.display = 'none';
        document.body.style.overflow = '';
        if (videoPlayer) videoPlayer.pause();
    }
}

// ======================== TABLA ESPECIFICACIONES ========================
function renderSpecsTable() {
    const tbody = document.getElementById('specsBodyZynex');
    if (!tbody) return;
    tbody.innerHTML = '';
    specsData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="font-weight:600;">${item.model}</td>
            <td>${item.display}</td>
            <td>${item.chip}</td>
            <td>${item.camera}</td>
            <td>${item.battery}</td>
        `;
        tbody.appendChild(row);
    });
}

// ======================== NAVEGACIÓN Y OTROS ========================
function initNavigation() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
    document.getElementById('exploreZynex')?.addEventListener('click', () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
    document.getElementById('showReelBtn')?.addEventListener('click', () => {
        openVideoModal('https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_30fps.mp4', 'Zynex Teaser Oficial');
    });
    document.querySelector('.zynex-icon')?.addEventListener('click', () => {
        document.getElementById('mainWhatsZynex')?.click();
    });
    document.getElementById('mainWhatsZynex')?.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://wa.me/59169743131?text=Requiero%20más%20información%20sobre%20los%20iPhones.%20Me%20gustaría%20conocer%20precios%2C%20modelos%20disponibles%20y%20opciones%20de%20entrega', '_blank');
    });
}

// ======================== PARTÍCULAS ========================
function initParticles() {
    const container = document.querySelector('.particles-container');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(192, 192, 192, ${Math.random() * 0.3})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `floatParticle ${Math.random() * 15 + 10}s linear infinite`;
        container.appendChild(particle);
    }
}

// Agregar keyframes de partículas
const style = document.createElement('style');
style.textContent = `@keyframes floatParticle { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 0.5; } 90% { opacity: 0.3; } 100% { transform: translateY(-100vh); opacity: 0; } }`;
document.head.appendChild(style);

// ======================== SCROLL NAV EFFECT ========================
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.zynex-nav');
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ======================== EVENTOS MODAL ========================
document.querySelector('.close-modal')?.addEventListener('click', closeVideoModal);
modalVideo?.addEventListener('click', (e) => { if (e.target === modalVideo) closeVideoModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalVideo?.style.display === 'flex') closeVideoModal(); });

// ======================== INICIALIZAR ========================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderSpecsTable();
    initNavigation();
    initParticles();
    console.log('🚀 Zynex cargado | Todos los iPhone 14,15,16,17');
});