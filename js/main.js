// ============================================
// SNACKK — Agency Supermarket
// ============================================

// ============================================
// PRODUCT DATA
// ============================================
const PRODUCTS = [
  {
    id: 1, name: 'CRUNCH', service: 'Web Design',
    tagline: 'Pixel-perfect websites that load at the speed of light.',
    price: 499, sku: 'SNK-0001',
    badge: 'BEST SELLER', badgeType: 'best-seller',
    shape: 'box', size: [1.2, 0.8, 0.4],
    color: '#ff6b35', colorDark: '#cc4400',
    nutrition: [
      { label: 'Creativity', value: 40, color: '#00ff88' },
      { label: 'Strategy', value: 25, color: '#00d4ff' },
      { label: 'Code', value: 25, color: '#ff006e' },
      { label: 'UX Research', value: 10, color: '#b300ff' },
    ],
    desc: 'A full-service web design package. From wireframes to deployment — we build responsive, accessible, and performant websites.',
    icon: '📦', emoji: '🥣'
  },
  {
    id: 2, name: 'LUXE', service: 'Branding',
    tagline: 'Premium brand identity that demands attention.',
    price: 799, sku: 'SNK-0002',
    badge: 'LIMITED EDITION', badgeType: 'limited',
    shape: 'box', size: [0.6, 1.0, 0.3],
    color: '#b300ff', colorDark: '#7a00b3',
    nutrition: [
      { label: 'Creativity', value: 35, color: '#00ff88' },
      { label: 'Strategy', value: 35, color: '#00d4ff' },
      { label: 'Research', value: 20, color: '#ff006e' },
      { label: 'Magic', value: 10, color: '#ffe600' },
    ],
    desc: 'Comprehensive brand identity design including logo, color palette, typography, brand guidelines, and asset creation.',
    icon: '🎨', emoji: '🍫'
  },
  {
    id: 3, name: 'VOLT', service: 'UI/UX Design',
    tagline: 'Energizing interfaces that users love.',
    price: 399, sku: 'SNK-0003',
    badge: 'NEW', badgeType: 'new',
    shape: 'cylinder', size: [0.4, 1.2],
    color: '#00ff88', colorDark: '#00cc66',
    nutrition: [
      { label: 'UX Research', value: 30, color: '#00d4ff' },
      { label: 'UI Design', value: 30, color: '#ff006e' },
      { label: 'Testing', value: 25, color: '#00ff88' },
      { label: 'Caffeine', value: 15, color: '#ffe600' },
    ],
    desc: 'User experience and interface design that converts. Wireframes, prototypes, user testing, and pixel-perfect UI.',
    icon: '⚡', emoji: '🥫'
  },
  {
    id: 4, name: 'BOOST', service: 'SEO',
    tagline: 'Climb the ranks. Stay on top.',
    price: 299, sku: 'SNK-0004',
    badge: 'BEST SELLER', badgeType: 'best-seller',
    shape: 'cylinder', size: [0.35, 1.0],
    color: '#00d4ff', colorDark: '#0099cc',
    nutrition: [
      { label: 'Keywords', value: 35, color: '#00ff88' },
      { label: 'Content', value: 30, color: '#00d4ff' },
      { label: 'Links', value: 25, color: '#ff006e' },
      { label: 'Analytics', value: 10, color: '#ffe600' },
    ],
    desc: 'Search engine optimization that drives organic traffic. Keyword research, on-page SEO, link building, and performance tracking.',
    icon: '📈', emoji: '🧴'
  },
  {
    id: 5, name: 'SNAP', service: 'Marketing',
    tagline: 'Bold campaigns that stick.',
    price: 599, sku: 'SNK-0005',
    badge: 'LIMITED EDITION', badgeType: 'limited',
    shape: 'box', size: [0.8, 0.6, 0.2],
    color: '#ff006e', colorDark: '#cc0055',
    nutrition: [
      { label: 'Strategy', value: 35, color: '#00ff88' },
      { label: 'Creative', value: 30, color: '#ff006e' },
      { label: 'Media', value: 25, color: '#00d4ff' },
      { label: 'ROI', value: 10, color: '#ffe600' },
    ],
    desc: 'Full-stack marketing campaigns. Social media, content marketing, paid ads, email campaigns, and performance analytics.',
    icon: '📱', emoji: '🍿'
  },
  {
    id: 6, name: 'FRAME', service: 'Video Editing',
    tagline: 'Every frame tells a story.',
    price: 449, sku: 'SNK-0006',
    badge: 'NEW', badgeType: 'new',
    shape: 'box', size: [0.8, 0.8, 0.3],
    color: '#00d4ff', colorDark: '#0099aa',
    nutrition: [
      { label: 'Editing', value: 35, color: '#00ff88' },
      { label: 'Color Grading', value: 25, color: '#ff006e' },
      { label: 'Sound Design', value: 20, color: '#00d4ff' },
      { label: 'VFX', value: 20, color: '#b300ff' },
    ],
    desc: 'Professional video editing and post-production. From raw footage to polished content with color grading, sound design, and effects.',
    icon: '🎬', emoji: '🥟'
  },
  {
    id: 7, name: 'AURA', service: 'AI Automation',
    tagline: 'The future, automated.',
    price: 999, sku: 'SNK-0007',
    badge: 'LIMITED EDITION', badgeType: 'limited',
    shape: 'box', size: [0.5, 0.7, 0.3],
    color: '#b300ff', colorDark: '#7744bb',
    nutrition: [
      { label: 'Automation', value: 40, color: '#00ff88' },
      { label: 'AI/ML', value: 30, color: '#00d4ff' },
      { label: 'Integration', value: 20, color: '#ff006e' },
      { label: 'Future Tech', value: 10, color: '#ffe600' },
    ],
    desc: 'Custom AI automation solutions. Chatbots, workflow automation, predictive analytics, and intelligent process optimization.',
    icon: '🤖', emoji: '💊'
  }
];

// ============================================
// DOM REFERENCES
// ============================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {
  container: $('#three-container'),
  preloader: $('#preloader'),
  navbar: $('#navbar'),
  cartBtn: $('#cartBtn'),
  cartCount: $('.cart-count'),
  cartSidebar: $('#cartSidebar'),
  closeCart: $('#closeCart'),
  cartItems: $('#cartItems'),
  cartTotal: $('#cartTotal'),
  checkoutBtn: $('#checkoutBtn'),
  overlay: $('#overlay'),
  receiptModal: $('#receiptModal'),
  receiptItems: $('#receiptItems'),
  receiptTotal: $('#receiptTotal'),
  receiptDate: $('#receiptDate'),
  closeReceipt: $('#closeReceipt'),
  productModal: $('#productModal'),
  closeProductModal: $('#closeProductModal'),
  productDetail3D: $('#productDetail3D'),
  productDetailName: $('#productDetailName'),
  productDetailTagline: $('#productDetailTagline'),
  productDetailPrice: $('#productDetailPrice'),
  productBadge: $('#productBadge'),
  addToCartBtn: $('#addToCartBtn'),
  addToCartPrice: $('#addToCartPrice'),
  productSKU: $('#productSKU'),
  nut1: $('#nut1'), nut2: $('#nut2'), nut3: $('#nut3'), nut4: $('#nut4'), nut5: $('#nut5'),
  contactForm: $('#contactForm'),
  serviceSelect: $('#service'),
};

// ============================================
// STATE
// ============================================
const state = {
  cart: [],
  selectedProduct: null,
  hoveredProduct: null,
  sceneReady: false,
};

// ============================================
// TEXTURE GENERATOR
// ============================================
const TextureGenerator = {
  createFrontLabel(product) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const c = new THREE.Color(product.color);
    const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grad.addColorStop(0, `hsl(${c.getHSL({}).h * 360}, 80%, 25%)`);
    grad.addColorStop(0.5, `hsl(${c.getHSL({}).h * 360}, 70%, 35%)`);
    grad.addColorStop(1, `hsl(${c.getHSL({}).h * 360}, 80%, 20%)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 8;
    ctx.strokeRect(24, 24, canvas.width - 48, canvas.height - 48);

    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(0, 0, canvas.width, 100);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 100px "Space Mono", "IBM Plex Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(255,255,255,0.3)';
    ctx.shadowBlur = 20;
    ctx.fillText(product.name, canvas.width / 2, 70);
    ctx.shadowBlur = 0;

    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = '28px "IBM Plex Mono", monospace';
    ctx.fillText(product.service, canvas.width / 2, 140);

    ctx.font = '100px sans-serif';
    ctx.fillText(product.emoji, canvas.width / 2, 320);

    if (product.badge) {
      const badgeColors = {
        'best-seller': { bg: '#ffe600', text: '#000' },
        'new': { bg: '#00d4ff', text: '#000' },
        'limited': { bg: '#ff006e', text: '#fff' },
      };
      const bc = badgeColors[product.badgeType] || badgeColors['new'];
      ctx.fillStyle = bc.bg;
      ctx.font = 'bold 28px "IBM Plex Mono", monospace';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      ctx.fillText(product.badge, 60, 180);

      ctx.fillStyle = bc.text;
      ctx.fillText(product.badge, 60, 180);
    }

    ctx.fillStyle = '#00ff88';
    ctx.font = 'bold 72px "Space Mono", monospace';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';
    ctx.shadowColor = 'rgba(0,255,136,0.5)';
    ctx.shadowBlur = 30;
    ctx.fillText(`$${product.price}`, canvas.width - 60, canvas.height - 60);
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#ffffff';
    ctx.font = '20px "IBM Plex Mono", monospace';
    ctx.textAlign = 'left';
    ctx.fillText('|||| ' + product.sku + ' ||||', 60, canvas.height - 60);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  },

  createBackLabel(product) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#f5f0e8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#000';
    ctx.font = 'bold 40px "Space Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('NUTRITION FACTS', canvas.width / 2, 70);

    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(60, 110);
    ctx.lineTo(canvas.width - 60, 110);
    ctx.stroke();

    ctx.font = '24px "IBM Plex Mono", monospace';
    ctx.textAlign = 'left';
    ctx.fillText('Serving Size: 1 Project', 80, 170);

    const rowH = 90;
    const startY = 260;
    const barW = canvas.width - 200;

    product.nutrition.forEach((n, i) => {
      const y = startY + i * rowH;

      ctx.fillStyle = i % 2 === 0 ? 'rgba(0,0,0,0.05)' : 'transparent';
      ctx.fillRect(60, y - 15, canvas.width - 120, rowH - 8);

      ctx.fillStyle = '#000';
      ctx.font = 'bold 30px "IBM Plex Mono", monospace';
      ctx.textAlign = 'left';
      ctx.fillText(n.label, 100, y + 10);

      ctx.fillStyle = n.color;
      ctx.font = 'bold 24px "IBM Plex Mono", monospace';
      ctx.textAlign = 'right';
      ctx.fillText(`${n.value}%`, canvas.width - 60, y + 10);

      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fillRect(100, y + 28, barW, 10);

      ctx.fillStyle = n.color;
      ctx.fillRect(100, y + 28, (n.value / 100) * barW, 10);
    });

    const bottomY = startY + product.nutrition.length * rowH + 40;
    ctx.fillStyle = '#000';
    ctx.font = 'bold 28px "IBM Plex Mono", monospace';
    ctx.textAlign = 'left';
    ctx.fillText('INGREDIENTS:', 80, bottomY);

    ctx.font = '20px "IBM Plex Mono", monospace';
    ctx.fillStyle = '#333';
    const ings = product.nutrition.map(n => `${n.label} (${n.value}%)`).join(', ');
    ctx.fillText(ings + ', Passion, Experience, Coffee', 80, bottomY + 40);

    ctx.fillStyle = '#000';
    ctx.font = '32px "IBM Plex Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('||||||||||||||||||||||||||||||', canvas.width / 2, canvas.height - 40);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  },

  createSideLabel(product) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const c = new THREE.Color(product.color);
    const hue = c.getHSL({}).h * 360;

    ctx.fillStyle = `hsl(${hue}, 60%, 20%)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.font = 'bold 56px "Space Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(product.name, canvas.width / 2, canvas.height / 2 - 60);

    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.font = '28px "IBM Plex Mono", monospace';
    ctx.fillText(product.sku, canvas.width / 2, canvas.height / 2 + 40);

    ctx.fillStyle = '#00ff88';
    ctx.font = 'bold 40px "Space Mono", monospace';
    ctx.fillText(`$${product.price}`, canvas.width / 2, canvas.height / 2 + 140);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  },

  createCanLabel(product) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const c = new THREE.Color(product.color);
    const hue = c.getHSL({}).h * 360;

    const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
    grad.addColorStop(0, `hsl(${hue}, 80%, 15%)`);
    grad.addColorStop(0.3, `hsl(${hue}, 70%, 35%)`);
    grad.addColorStop(0.5, `hsl(${hue}, 60%, 50%)`);
    grad.addColorStop(0.7, `hsl(${hue}, 70%, 35%)`);
    grad.addColorStop(1, `hsl(${hue}, 80%, 15%)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.fillRect(0, 0, canvas.width, 100);
    ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 120px "Space Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    ctx.shadowBlur = 20;
    ctx.fillText(product.name, canvas.width / 2, canvas.height / 2 - 40);
    ctx.shadowBlur = 0;

    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = '32px "IBM Plex Mono", monospace';
    ctx.fillText(product.service, canvas.width / 2, canvas.height / 2 + 60);

    ctx.font = '160px sans-serif';
    ctx.fillText(product.emoji, canvas.width / 2, canvas.height / 2 - 200);

    ctx.fillStyle = '#00ff88';
    ctx.font = 'bold 48px "Space Mono", monospace';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';
    ctx.fillText(`$${product.price}`, canvas.width - 40, canvas.height - 40);

    ctx.fillStyle = '#ffffff';
    ctx.font = '18px "IBM Plex Mono", monospace';
    ctx.textAlign = 'left';
    ctx.fillText(product.sku, 40, canvas.height - 40);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  },

  createTopBottomLabel(product) {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const c = new THREE.Color(product.color);
    const hue = c.getHSL({}).h * 360;

    ctx.fillStyle = `hsl(${hue}, 60%, 25%)`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.font = '24px "IBM Plex Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(product.name, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }
};

// ============================================
// THREE.JS SCENE SETUP
// ============================================
let scene, camera, renderer, controls;
let productMeshes = [];
let shelfMeshes = [];
let raycaster, mouse;
let animationFrame;

function initScene() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0a0a);
  scene.fog = new THREE.Fog(0x0a0a0a, 15, 25);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 50);
  camera.position.set(0, 4, 10);
  camera.lookAt(0, 1.5, -4);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  renderer.outputEncoding = THREE.sRGBEncoding;

  if (dom.container) {
    dom.container.appendChild(renderer.domElement);
  }

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target.set(0, 1.5, -3);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI / 2.2;
  controls.minPolarAngle = Math.PI / 4;
  controls.minDistance = 4;
  controls.maxDistance = 16;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;
  controls.update();

  const ambientLight = new THREE.AmbientLight(0x222244, 0.4);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0xffeedd, 1.5);
  dirLight.position.set(5, 12, 8);
  dirLight.castShadow = true;
  dirLight.shadow.mapSize.width = 2048;
  dirLight.shadow.mapSize.height = 2048;
  scene.add(dirLight);

  const fillLight = new THREE.DirectionalLight(0x4444ff, 0.3);
  fillLight.position.set(-3, 4, -5);
  scene.add(fillLight);

  const hemiLight = new THREE.HemisphereLight(0x00d4ff, 0x002244, 0.6);
  scene.add(hemiLight);

  const neonPositions = [
    { pos: [-6, 5, -2], color: 0x00ff88 },
    { pos: [6, 5, -2], color: 0x00d4ff },
    { pos: [-6, 5, -8], color: 0x00ff88 },
    { pos: [6, 5, -8], color: 0x00d4ff },
    { pos: [0, 5, -5], color: 0xff006e },
  ];

  neonPositions.forEach((np) => {
    const light = new THREE.PointLight(np.color, 2, 8);
    light.position.set(np.pos[0], np.pos[1], np.pos[2]);
    scene.add(light);

    const stripGeo = new THREE.BoxGeometry(2, 0.08, 0.08);
    const stripMat = new THREE.MeshBasicMaterial({
      color: np.color,
      transparent: true,
      opacity: 0.6,
    });
    const strip = new THREE.Mesh(stripGeo, stripMat);
    strip.position.set(np.pos[0], np.pos[1], np.pos[2]);
    scene.add(strip);
  });

  createFloor();
  createShelves();
  createAllProducts();

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  window.addEventListener('resize', onResize);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('click', onClick);
  document.addEventListener('touchstart', onTouchStart, { passive: true });

  state.sceneReady = true;
}

function createFloor() {
  const geo = new THREE.PlaneGeometry(30, 30);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x111111,
    roughness: 0.3,
    metalness: 0.2,
  });
  const floor = new THREE.Mesh(geo, mat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.5;
  floor.receiveShadow = true;
  scene.add(floor);

  const grid = new THREE.GridHelper(30, 20, 0x00ff88, 0x003322);
  grid.position.y = -0.49;
  grid.material.transparent = true;
  grid.material.opacity = 0.3;
  scene.add(grid);
}

function createShelves() {
  const configs = [
    { x: -4.5, z: -2, height: 3.5, shelves: 3 },
    { x: 4.5, z: -2, height: 3.5, shelves: 3 },
    { x: -4.5, z: -6, height: 3.5, shelves: 3 },
    { x: 4.5, z: -6, height: 3.5, shelves: 3 },
    { x: -4.5, z: -10, height: 3.5, shelves: 3 },
    { x: 4.5, z: -10, height: 3.5, shelves: 3 },
  ];

  configs.forEach((cfg) => {
    const g = new THREE.Group();

    const backMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.8, metalness: 0.1 });
    const back = new THREE.Mesh(new THREE.BoxGeometry(2.2, cfg.height, 0.1), backMat);
    back.position.z = -0.3;
    back.castShadow = true;
    back.receiveShadow = true;
    g.add(back);

    const sideMat = new THREE.MeshStandardMaterial({ color: 0x222244, roughness: 0.7, metalness: 0.3 });
    const ls = new THREE.Mesh(new THREE.BoxGeometry(0.06, cfg.height, 0.6), sideMat);
    ls.position.set(-1.07, 0, 0);
    g.add(ls);
    const rs = new THREE.Mesh(new THREE.BoxGeometry(0.06, cfg.height, 0.6), sideMat);
    rs.position.set(1.07, 0, 0);
    g.add(rs);

    const shelfSpacing = cfg.height / cfg.shelves;
    const shelfMat = new THREE.MeshStandardMaterial({ color: 0x222244, roughness: 0.6, metalness: 0.4 });

    for (let i = 0; i < cfg.shelves; i++) {
      const y = -cfg.height / 2 + (i + 1) * shelfSpacing + 0.04;
      const shelf = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.08, 0.55), shelfMat);
      shelf.position.set(0, y, 0);
      shelf.receiveShadow = true;
      shelf.castShadow = true;
      g.add(shelf);

      const stripMat = new THREE.MeshBasicMaterial({
        color: i === 1 ? 0x00ff88 : 0x00d4ff,
        transparent: true,
        opacity: 0.4,
      });
      const strip = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.02, 0.02), stripMat);
      strip.position.set(0, y + 0.05, 0.28);
      g.add(strip);
    }

    g.position.set(cfg.x, 0.5 + cfg.height / 2, cfg.z);
    scene.add(g);
    shelfMeshes.push(g);
  });

  createNeonSign();
}

function createNeonSign() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  ctx.shadowColor = '#00ff88';
  ctx.shadowBlur = 40;
  ctx.fillStyle = '#00ff88';
  ctx.font = 'bold 120px "Space Mono", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('⟐ SNACKK', canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  const mat = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(mat);
  sprite.position.set(0, 6, -8);
  sprite.scale.set(6, 1.5, 1);
  scene.add(sprite);
}

function createAllProducts() {
  const positions = [
    { x: -4.3, z: -2,  y: 2.0, rot: 0.4 },
    { x: 4.3,  z: -2,  y: 3.6, rot: -0.4 },
    { x: -4.3, z: -2,  y: 3.6, rot: 0.4 },
    { x: 4.3,  z: -2,  y: 2.0, rot: -0.4 },
    { x: -4.3, z: -6,  y: 2.6, rot: 0.3 },
    { x: 4.3,  z: -6,  y: 2.6, rot: -0.3 },
    { x: 0,    z: -9,  y: 1.8, rot: 0 },
  ];

  PRODUCTS.forEach((product, i) => {
    const pos = positions[i] || { x: 0, z: -3 - i * 2, y: 1.5, rot: 0 };
    createProductMesh(product, pos);
  });
}

function createProductMesh(product, pos) {
  const group = new THREE.Group();
  let mesh;

  if (product.shape === 'cylinder') {
    const [radius, height] = product.size;
    const geo = new THREE.CylinderGeometry(radius, radius * 0.9, height, 32, 1, true);
    const mat = new THREE.MeshPhysicalMaterial({
      roughness: 0.2,
      metalness: 0.6,
      clearcoat: 0.3,
      side: THREE.DoubleSide,
      map: TextureGenerator.createCanLabel(product),
    });
    mesh = new THREE.Mesh(geo, mat);
    mesh.castShadow = true;

    const capMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(product.colorDark),
      roughness: 0.3,
      metalness: 0.7,
    });
    const topCap = new THREE.Mesh(new THREE.CircleGeometry(radius * 0.95, 32), capMat);
    topCap.position.y = height / 2;
    topCap.rotation.x = -Math.PI / 2;
    topCap.castShadow = true;
    group.add(topCap);

    const botCap = new THREE.Mesh(new THREE.CircleGeometry(radius * 0.95, 32), capMat);
    botCap.position.y = -height / 2;
    botCap.rotation.x = Math.PI / 2;
    botCap.castShadow = true;
    group.add(botCap);
  } else {
    const [w, h, d] = product.size;
    const geo = new THREE.BoxGeometry(w, h, d);

    const frontTex = TextureGenerator.createFrontLabel(product);
    const backTex = TextureGenerator.createBackLabel(product);
    const sideTex = TextureGenerator.createSideLabel(product);
    const topTex = TextureGenerator.createTopBottomLabel(product);

    const materials = [
      new THREE.MeshPhysicalMaterial({ map: sideTex, roughness: 0.3, metalness: 0.1 }),
      new THREE.MeshPhysicalMaterial({ map: sideTex, roughness: 0.3, metalness: 0.1 }),
      new THREE.MeshPhysicalMaterial({ map: topTex, roughness: 0.3, metalness: 0.1 }),
      new THREE.MeshPhysicalMaterial({ map: topTex, roughness: 0.3, metalness: 0.1 }),
      new THREE.MeshPhysicalMaterial({ map: frontTex, roughness: 0.2, metalness: 0.2 }),
      new THREE.MeshPhysicalMaterial({ map: backTex, roughness: 0.3, metalness: 0.1 }),
    ];

    mesh = new THREE.Mesh(geo, materials);
    mesh.castShadow = true;
  }

  mesh.receiveShadow = true;
  mesh.userData.productId = product.id;
  mesh.userData.isProduct = true;
  group.add(mesh);

  const ringMat = new THREE.MeshBasicMaterial({
    color: new THREE.Color(product.color),
    transparent: true,
    opacity: 0.3,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
  });
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.45, 32), ringMat);
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = -0.1;
  group.add(ring);

  const rotY = pos.rot || 0;
  group.position.set(pos.x, pos.y, pos.z);
  group.rotation.y = rotY;
  group.userData = { product, origRotY: rotY };

  scene.add(group);
  productMeshes.push({
    group,
    mesh,
    product,
    baseY: pos.y,
  });
}

// ============================================
// INTERACTION
// ============================================
let mouseX = 0, mouseY = 0;
let currentHover = null;

function onMouseMove(e) {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  mouse.set(mouseX, mouseY);

  const target = e.target;
  if (target.closest('button, a, input, select, textarea, .cart-sidebar, .receipt-modal, .product-modal')) {
    resetHover();
    return;
  }

  performRaycast();
}

function onTouchStart(e) {
  if (e.touches.length === 1) {
    const touch = e.touches[0];
    mouseX = (touch.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(touch.clientY / window.innerHeight) * 2 + 1;
    if (!e.target.closest('button, a, input, select, textarea')) {
      const closest = findClosestProduct();
      if (closest) openProductDetail(closest.product);
    }
  }
}

function resetHover() {
  if (currentHover !== null) {
    const prev = productMeshes.find(p => p.product.id === currentHover);
    if (prev) {
      prev._isHovered = false;
      gsap.to(prev.group.scale, { x: 1, y: 1, z: 1, duration: 0.3, ease: 'power2.out' });
      gsap.to(prev.group.rotation, { y: prev.group.userData?.origRotY || 0, duration: 0.3, ease: 'power2.out' });
    }
    currentHover = null;
    document.body.style.cursor = 'crosshair';
  }
}

function performRaycast() {
  if (!renderer || !scene || productMeshes.length === 0) return;

  raycaster.setFromCamera(mouse, camera);
  const meshes = productMeshes.map(p => p.mesh).filter(Boolean);
  if (meshes.length === 0) return;

  const intersects = raycaster.intersectObjects(meshes);

  if (intersects.length > 0) {
    const hit = intersects[0].object;
    if (hit.userData.isProduct) {
      const pd = productMeshes.find(p => p.product.id === hit.userData.productId);
      if (pd) {
        if (currentHover !== hit.userData.productId) {
          resetHover();
          currentHover = hit.userData.productId;
          pd._isHovered = true;
          gsap.to(pd.group.scale, { x: 1.15, y: 1.15, z: 1.15, duration: 0.3, ease: 'back.out(2)' });
          gsap.to(pd.group.rotation, { y: pd.group.rotation.y + 0.3, duration: 0.4, ease: 'power2.out' });
          document.body.style.cursor = 'pointer';
        }
        state.hoveredProduct = pd.product;
        return;
      }
    }
  }
  resetHover();
  state.hoveredProduct = null;
}

function onClick(e) {
  if (e.target.closest('button, a, input, select, textarea, .cart-sidebar, .receipt-modal, .product-modal')) return;
  if (state.hoveredProduct) {
    openProductDetail(state.hoveredProduct);
  } else {
    raycaster.setFromCamera(mouse, camera);
    const meshes = productMeshes.map(p => p.mesh).filter(Boolean);
    if (meshes.length === 0) return;
    const intersects = raycaster.intersectObjects(meshes);
    if (intersects.length > 0) {
      const hit = intersects[0].object;
      if (hit.userData.isProduct) {
        const pd = productMeshes.find(p => p.product.id === hit.userData.productId);
        if (pd) openProductDetail(pd.product);
      }
    }
  }
}

function findClosestProduct() {
  if (!camera || productMeshes.length === 0) return null;
  let closest = null, minDist = Infinity;
  productMeshes.forEach(p => {
    const d = camera.position.distanceTo(p.group.position);
    if (d < minDist) { minDist = d; closest = p; }
  });
  return closest;
}

// ============================================
// PRODUCT DETAIL MODAL
// ============================================
function openProductDetail(product) {
  state.selectedProduct = product;
  dom.productBadge.textContent = product.badge;
  dom.productBadge.className = `product-detail-badge badge-${product.badgeType}`;
  dom.productDetailName.textContent = `${product.emoji} ${product.name}`;
  dom.productDetailTagline.textContent = product.tagline;
  dom.productDetailPrice.textContent = `$${product.price}`;
  dom.productSKU.textContent = product.sku;
  dom.addToCartPrice.textContent = `$${product.price}`;

  const nutEls = [dom.nut1, dom.nut2, dom.nut3, dom.nut4, dom.nut5];
  product.nutrition.forEach((n, i) => {
    if (nutEls[i]) {
      nutEls[i].textContent = `${n.value}%`;
      nutEls[i].style.color = n.color;
    }
  });

  dom.productModal.classList.add('active');
  dom.overlay.classList.add('active');
  if (controls) controls.autoRotate = false;
  document.body.style.overflow = 'hidden';

  gsap.fromTo(dom.productModal.querySelector('.product-detail-content'),
    { opacity: 0, y: 40, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' }
  );
}

function closeProductDetail() {
  dom.productModal.classList.remove('active');
  dom.overlay.classList.remove('active');
  if (controls) controls.autoRotate = true;
  document.body.style.overflow = '';
}

// ============================================
// CART SYSTEM
// ============================================
function initCart() {
  dom.cartBtn.addEventListener('click', openCart);
  dom.closeCart.addEventListener('click', closeCart);
  dom.overlay.addEventListener('click', closeAllModals);
  dom.checkoutBtn.addEventListener('click', generateReceipt);
  dom.addToCartBtn.addEventListener('click', () => {
    if (state.selectedProduct) {
      addToCart(state.selectedProduct);
      closeProductDetail();
      showToast(`${state.selectedProduct.emoji} ${state.selectedProduct.name} added to cart!`);
    }
  });
}

function addToCart(product) {
  const existing = state.cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateQuantity(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    updateCartUI();
  }
}

function updateCartUI() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  dom.cartCount.textContent = count;

  if (state.cart.length === 0) {
    dom.cartItems.innerHTML = '<div class="cart-empty">YOUR CART IS EMPTY</div>';
    dom.checkoutBtn.disabled = true;
    dom.cartTotal.textContent = '$0';
    return;
  }

  dom.checkoutBtn.disabled = false;
  let html = '';
  let total = 0;

  state.cart.forEach((item) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    html += `
      <div class="cart-item">
        <div class="cart-item-icon" style="background:${item.color}22">${item.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">$${item.price} × ${item.qty} = $${itemTotal}</div>
        </div>
        <div class="cart-item-quantity">
          <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
        </div>
        <button class="cart-item-remove" data-id="${item.id}">✕</button>
      </div>
    `;
  });

  dom.cartItems.innerHTML = html;
  dom.cartTotal.textContent = `$${total}`;

  dom.cartItems.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateQuantity(parseInt(btn.dataset.id), parseInt(btn.dataset.delta));
    });
  });

  dom.cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeFromCart(parseInt(btn.dataset.id));
    });
  });
}

function openCart() {
  dom.cartSidebar.classList.add('open');
  dom.overlay.classList.add('active');
}

function closeCart() {
  dom.cartSidebar.classList.remove('open');
  dom.overlay.classList.remove('active');
}

function closeAllModals() {
  closeCart();
  closeProductDetail();
  dom.receiptModal.classList.remove('active');
}

// ============================================
// RECEIPT SYSTEM
// ============================================
function generateReceipt() {
  if (state.cart.length === 0) return;

  const now = new Date();
  dom.receiptDate.textContent = now.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  });

  let itemsHtml = '';
  let total = 0;

  state.cart.forEach((item) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    itemsHtml += `
      <div class="receipt-item">
        <div class="receipt-item-left">
          <span class="receipt-item-qty">${item.qty}×</span>
          <div>
            <span class="receipt-item-name">${item.emoji} ${item.name}</span>
            <span class="receipt-item-sku">${item.sku}</span>
          </div>
        </div>
        <span class="receipt-item-price">$${itemTotal}</span>
      </div>
    `;
  });

  dom.receiptItems.innerHTML = itemsHtml;
  dom.receiptTotal.textContent = `$${total}`;

  dom.cartSidebar.classList.remove('open');
  dom.receiptModal.classList.add('active');

  gsap.fromTo(dom.receiptModal.querySelector('.receipt'),
    { opacity: 0, y: 40, scale: 0.95 },
    { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' }
  );
}

// ============================================
// TOAST
// ============================================
function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="toast-icon">✓</span> ${msg}`;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ============================================
// RESIZE
// ============================================
function onResize() {
  if (!camera || !renderer) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// ============================================
// GSAP / SCROLL
// ============================================
function initScroll() {
  const LenisCls = window.Lenis;
  if (!LenisCls) return;

  const lenis = new LenisCls({
    wrapper: document.getElementById('lenis-wrapper'),
    content: document.getElementById('lenis-content'),
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.scrollerProxy('#lenis-wrapper', {
    scrollTop(value) {
      if (arguments.length) { lenis.scrollTo(value); }
      return lenis.scroll;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.getElementById('lenis-wrapper')?.style.transform ? 'transform' : 'fixed',
  });

  ScrollTrigger.defaults({ scroller: '#lenis-wrapper' });

  document.querySelectorAll('.section').forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        if (controls && state.sceneReady) {
          gsap.to(controls.target, {
            z: -3 - self.progress * 8,
            duration: 0.5,
            ease: 'power1.out',
            overwrite: 'auto',
          });
        }
      },
    });
  });

  let lastScroll = 0;
  lenis.on('scroll', (e) => {
    const scrollY = e.animatedScroll || e.scroll || 0;
    dom.navbar.classList.toggle('hidden', scrollY > lastScroll && scrollY > 100);
    lastScroll = scrollY;
  });

  document.querySelectorAll('.section').forEach((section) => {
    const header = section.querySelector('.section-header');
    const cards = section.querySelectorAll('.about-card, .step, .contact-form > *');

    if (header) {
      gsap.from(header, {
        scrollTrigger: { trigger: section, start: 'top 80%', toggleActions: 'play none none reverse' },
        y: 60, opacity: 0, duration: 0.8, ease: 'power3.out',
      });
    }
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: section, start: 'top 75%', toggleActions: 'play none none reverse' },
        y: 40, opacity: 0, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
      });
    });
  });

  gsap.from('.products-info', {
    scrollTrigger: { trigger: '#products', start: 'top 80%', toggleActions: 'play none none reverse' },
    y: 30, opacity: 0, duration: 0.6, ease: 'power2.out',
  });

  gsap.from('footer', {
    scrollTrigger: { trigger: 'footer', start: 'top bottom', toggleActions: 'play none none reverse' },
    opacity: 0, duration: 0.5,
  });
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
  document.querySelectorAll('.nav-link, .btn-primary').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  dom.closeReceipt.addEventListener('click', () => {
    dom.receiptModal.classList.remove('active');
    dom.overlay.classList.remove('active');
  });

  dom.closeProductModal.addEventListener('click', closeProductDetail);
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
  PRODUCTS.forEach((p) => {
    const opt = document.createElement('option');
    opt.value = p.service;
    opt.textContent = `${p.emoji} ${p.name} — ${p.service}`;
    dom.serviceSelect.appendChild(opt);
  });

  dom.contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✓ Message sent! We\'ll get back to you within 24 hours.');
    dom.contactForm.reset();
  });
}

// ============================================
// PRELOADER
// ============================================
function initPreloader() {
  setTimeout(() => {
    dom.preloader.classList.add('hidden');
    setTimeout(() => { dom.preloader.style.display = 'none'; }, 500);
  }, 1200);
}

// ============================================
// ANIMATION LOOP
// ============================================
function animate() {
  animationFrame = requestAnimationFrame(animate);
  if (!scene || !camera || !renderer || !controls) return;

  const time = Date.now() * 0.001;
  productMeshes.forEach((p, i) => {
    if (!p.group) return;
    const floatOffset = Math.sin(time * 0.5 + i * 1.5) * 0.03;
    if (!p._isHovered) {
      p.group.position.y = p.baseY + floatOffset;
    }
    const ring = p.group.children.find(c => c.isMesh && c.geometry.type === 'RingGeometry');
    if (ring) {
      ring.material.opacity = 0.2 + Math.sin(time * 0.8 + i) * 0.15;
      const s = 1 + Math.sin(time * 0.6 + i * 0.7) * 0.1;
      ring.scale.set(s, s, 1);
    }
  });

  controls.update();
  renderer.render(scene, camera);
}

// ============================================
// KEYBOARD
// ============================================
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      dom.receiptModal.classList.remove('active');
      closeProductDetail();
    }
  });
}

// ============================================
// INIT
// ============================================
function init() {
  try {
    initScene();
    initCart();
    initScroll();
    initNavigation();
    initContactForm();
    initPreloader();
    initKeyboard();
    animate();
    console.log('⟐ SNACKK loaded');
  } catch (err) {
    console.error('SNACKK init error:', err);
  }
}

document.addEventListener('DOMContentLoaded', init);
