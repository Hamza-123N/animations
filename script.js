// PRODUCT DATA
const products = [
  {
    title: "blender",
    img: "assets/blender.jpeg",
    description: "A huge software, you can do anything with it. You can modle, sculpt, render and of cource animate with it",
    price: "free",
    link: "https://www.blender.org/download/"
  },
  {
    title: "harmony 24 (essentials)",
    img: "assets/toonboom.jpeg",
    description: "Toon Boom Harmony is a powerful animation software used by professionals. It offers a wide range of tools for 2D animation, including rigging, compositing, and special effects.",
    price: "28.50$ per month",
    link: "https://www.toonboom.com/products/harmony"
  },
  {
    title: "krita",
    img: "assets/krita.jpeg",
    description: "Krita is a digital painting software designed for artists. It offers a wide range of brushes, tools, and features for creating stunning artwork, and of course animations",
    price: "free",
    link: "https://krita.org/sv/download/"
  },
];

// CREATE PRODUCTS
const container = document.getElementById("product-container");
products.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.img}" alt="${product.title}">
    <h3>${product.title}</h3>
  `;
  card.addEventListener("click", () => showModal(index));
  container.appendChild(card);
});

// MODAL
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");

function showModal(index) {
  const p = products[index];
  modalImg.src = p.img;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.description;
  modalPrice.textContent = p.price;
  modal.classList.remove("hidden");
}
closeModal.onclick = () => modal.classList.add("hidden");

function scrollToContact() {
  const p = products.find(prod => prod.title === modalTitle.textContent);
  if (p && p.link) {
    window.open(p.link, "_blank");
  } else {
    alert("Download link not available.");
  }
  modal.classList.add("hidden");
}

// SCROLL ANIMATIONS
const fadeIns = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.2 });
fadeIns.forEach(el => observer.observe(el));

// THEME TOGGLE
const themeToggle = document.getElementById("themeToggle");
themeToggle.onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
};
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

// PARTICLES
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00f7ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: { enable: true, distance: 120, color: "#00f7ff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});