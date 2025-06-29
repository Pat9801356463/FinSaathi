// 🌱 FinSaathi Sustainability Shop

const ecoGenStore = {
  inventory: [
    {
      uid: 1,
      title: "Organic Shampoo",
      label: "NaturePur",
      cost: 6.99,
      mrp: 9.99,
      offer: 30,
      ecoIndex: 9.1,
      footprint: "Low",
      tags: ["Organic", "Plastic-Free"],
      imgUrl: "/assets/shampoo.png",
      type: "Hair Care",
      peerBuys: 10
    },
    {
      uid: 2,
      title: "Eco Radiance Serum",
      label: "EarthGlow Naturals",
      cost: 10.99,
      mrp: 14.99,
      offer: 27,
      ecoIndex: 9.2,
      footprint: "Low",
      tags: ["Organic", "Cruelty-Free"],
      imgUrl: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=300",
      type: "Skincare",
      peerBuys: 12
    },
    {
      uid: 3,
      title: "Bamboo Brushes",
      label: "GreenLife Co.",
      cost: 3.99,
      mrp: 5.99,
      offer: 33,
      ecoIndex: 9.8,
      footprint: "Very Low",
      tags: ["Biodegradable", "Plastic-Free"],
      imgUrl: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300",
      type: "Personal Care",
      peerBuys: 8
    }
  ]
};

const ecoCart = [];

function renderProducts() {
  const container = document.querySelector("main section.grid");
  container.innerHTML = ecoGenStore.inventory.map(product => {
    return `
      <div class="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
        <img src="${product.imgUrl}" alt="${product.title}" class="rounded mb-3 w-full h-48 object-cover" />
        <h3 class="text-xl font-semibold">${product.title}</h3>
        <p class="text-sm text-gray-500 mb-2">Eco Rating: ${"🌿".repeat(Math.floor(product.ecoIndex))}</p>
        <div class="text-sm text-gray-600 mb-2">${product.tags.map(tag => `<span class="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded mr-1">${tag}</span>`).join("")}</div>
        <div class="flex justify-between items-center mb-2">
          <span class="text-green-600 font-bold">$${product.cost.toFixed(2)}</span>
          <span class="line-through text-sm text-gray-400">$${product.mrp.toFixed(2)}</span>
        </div>
        <button onclick="addToCart(${product.uid})" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">Buy</button>
      </div>
    `;
  }).join("");
}

function addToCart(uid) {
  const product = ecoGenStore.inventory.find(p => p.uid === uid);
  if (!product) return;
  const existing = ecoCart.find(p => p.uid === uid);
  if (existing) {
    existing.qty++;
  } else {
    ecoCart.push({ ...product, qty: 1 });
  }
  alert(`${product.title} added to cart!`);
}

// Render when DOM loads
window.addEventListener("DOMContentLoaded", renderProducts);

