// =============================================
//  donations.js — All the logic for the donations page
//  This file works together with donations.html
// =============================================
 
 
// ---- DONATION ITEMS ARRAY ----
// Each item has:
//   name        — what shows on the card title
//   category    — used for the filter tabs 
//   icon        — any emoji 
//   description — the short blurb on the card
//   link        — the URL the "Donate This" button opens
 
const donationItems = [
 
  // ----- GIFT CARDS -----
  {
    name: "WinCo Gift Card",
    category: "gift-card",
    icon: "🛒",
    description: "Grocery gift cards help families stock up on food and household essentials at WinCo Foods.",
    link: "https://winco.wgiftcard.com/responsive/personalize_responsive/chooseDesign/winco/1?q-giftcard="
  },
  {
    name: "Walmart Gift Card",
    category: "gift-card",
    icon: "🎁",
    description: "A Walmart gift card gives recipients the freedom to pick exactly what they need most.",
    link: "https://www.walmart.com/cp/gift-cards/96894"
  },
  {
    name: "Idaho Youth Ranch Gift Card",
    category: "gift-card",
    icon: "👕",
    description: "Gift cards to Idaho Youth Ranch help families find affordable clothing and household items.",
    link: "https://www.giftly.com/gift-card/idaho-youth-ranch-boise-3?srsltid=AfmBOopdwMCsjfMKLCpmCWDvHflL093hr15PktoAWLZIZEo1LW-ONq2p"
  },
  {
    name: "Gas Station Gift Card",
    category: "gift-card",
    icon: "⛽",
    description: "Fuel gift cards help people get to work, medical appointments, and school without worry.",
    link: "https://shop.maverik.com/products/maverik-gear-gift-card?srsltid=AfmBOooXti3JEiuJq_R9DDxyMcoqOGi1Ocwhg1PxEztPFB12NCrqSyJy"
  },
 
  // ----- KITCHENWARE -----
  {
    name: "New Pots & Pans Set",
    category: "kitchenware",
    icon: "🍳",
    description: "A quality cookware set makes it possible to prepare healthy meals at home — a true everyday essential.",
    link: "https://www.amazon.com/dp/B0BBQ9RMZT?ref_=generic_registry_guest_view_modal&colid=MEA84OXSYVWK&coliid=I24BPSQNDC9AEY&th=1&psc=1"
  },
 
  // ----- HYGIENE -----
  {
    name: "Shampoo & Conditioner",
    category: "hygiene",
    icon: "🧴",
    description: "Basic hair care products that make a big difference in someone's daily confidence and cleanliness.",
    link: "https://www.amazon.com/dp/B09GV3RGW2?ref_=generic_registry_guest_view_modal&colid=MEA84OXSYVWK&coliid=I2P8AS6ZBXNLH5&th=1"
  },
  {
    name: "Toothpaste",
    category: "hygiene",
    icon: "🪥",
    description: "Dental hygiene is health. Toothpaste donations help families maintain basic oral care.",
    link: "https://www.amazon.com/dp/B082F1Q1T9?ref_=generic_registry_guest_view_modal&colid=MEA84OXSYVWK&coliid=I3LWGO3Z3EP6VN&th=1&psc=1"
  },
  {
    name: "Deodorant",
    category: "hygiene",
    icon: "🌿",
    description: "Deodorant is one of the most-requested hygiene items and one of the easiest ways to help.",
    link: "https://www.amazon.com/dp/B00HF3XSO0?ref_=generic_registry_guest_view_modal&colid=MEA84OXSYVWK&coliid=I1D2IJ6SOH45GW&th=1&psc=1"
  },
  {
    name: "Razors",
    category: "hygiene",
    icon: "🪒",
    description: "Disposable razors are a small but meaningful personal care item that many cannot afford.",
    link: "https://www.amazon.com/dp/B09PLPZ9KK?ref_=generic_registry_guest_view_modal&colid=MEA84OXSYVWK&coliid=I1QXALOOKZ5G3R&th=1&psc=1"
  },
  {
    name: "Body Wash & Bar Soap",
    category: "hygiene",
    icon: "🧼",
    description: "Body wash and bar soap are daily necessities for families trying to stay clean and healthy.",
    link: "https://www.amazon.com/dp/B08TKNMW1Z?ref_=generic_registry_guest_view_modal&colid=MEA84OXSYVWK&coliid=IZ9PCWDLAAEXA&th=1&psc=1"
  },
  {
    name: "Hand Soap",
    category: "hygiene",
    icon: "🤲",
    description: "Refill bottles of hand soap keep households sanitary and help prevent illness.",
    link: "https://www.amazon.com/dp/B08BPY986S?ref_=generic_registry_guest_view_modal&colid=MEA84OXSYVWK&coliid=IK5XQOELF84SM&th=1&psc=1"
  },
  {
    name: "Feminine Hygiene Products",
    category: "hygiene",
    icon: "🌸",
    description: "Pads, tampons, and other feminine care products are often overlooked but critically needed.",
    link: "https://www.amazon.com/dp/B01NCUIII2?ref_=generic_registry_guest_view_modal&colid=MEA84OXSYVWK&coliid=IALCMLVCIECQ0&th=1&psc=1"
  },
 
  // ----- HOUSEHOLD -----
  {
    name: "Laundry Detergent",
    category: "household",
    icon: "👚",
    description: "Clean clothes matter for jobs, school, and self-esteem. Laundry detergent is always in demand.",
    link: "https://www.amazon.com/dp/B0C35Z66QV?ref_=generic_registry_guest_view_modal&colid=MEA84OXSYVWK&coliid=I2D21RCW45JMHP&th=1&psc=1"
  },
  {
    name: "Household Cleaners",
    category: "household",
    icon: "🧹",
    description: "All-purpose sprays, dish soap, and surface cleaners (no bleach please) help keep homes safe and clean.",
    link: "https://www.amazon.com/dp/B09PZLN5ZF?ref_=generic_registry_guest_view_modal&colid=MEA84OXSYVWK&coliid=I21SRIEO0PW8I1&th=1&psc=1"
  }
 
];
 
 
// ---- CURRENT ACTIVE CATEGORY ----
// Tracks which tab is selected so search + tab work together.
let activeCategory = "all";
 
 
// ---- RENDER CARDS ----
// This function reads the array above and builds the cards on the page.
// It also applies the current search text and category filter.
function renderCards() {
  const grid = document.getElementById("donations-grid");
  const searchText = document.getElementById("search-input").value.toLowerCase();
 
  // Filter the array based on search text AND active tab
  const filtered = donationItems.filter(item => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText);
 
    const matchesTab =
      activeCategory === "all" || item.category === activeCategory;
 
    return matchesSearch && matchesTab;
  });
 
  // Clear whatever cards are currently showing
  grid.innerHTML = "";
 
  // If nothing matched, show the "no results" message
  if (filtered.length === 0) {
    grid.innerHTML = `
      <p class="no-results" style="display:block;">
        😕 No items match "<strong>${searchText}</strong>".<br>
        Try a different word or clear the search!
      </p>`;
    return;
  }
 
  // Build and insert a card for each matched item
  filtered.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "donation-card";
    card.style.animationDelay = `${index * 0.05}s`; // staggered fade-in
 
    card.innerHTML = `
      <span class="card-icon">${item.icon}</span>
      <span class="card-category">${formatCategory(item.category)}</span>
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <a class="donate-btn" href="${item.link}" target="_blank" rel="noopener">
        Donate This 💛
      </a>
    `;
 
    grid.appendChild(card);
  });
}
 
 
// ---- FILTER ITEMS ----
// Called by the search bar's oninput event in the HTML.
function filterItems() {
  renderCards();
}
 
 
// ---- SET ACTIVE TAB ----
// Called when a filter tab button is clicked.
function setTab(btn, category) {
  // Remove "active" from all tabs
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  // Add "active" to the clicked one
  btn.classList.add("active");
  activeCategory = category;
  renderCards();
}
 
 
// ---- HELPER: Make category name look nice on the badge ----
function formatCategory(cat) {
  const labels = {
    "hygiene":     "Hygiene",
    "household":   "Household",
    "gift-card":   "Gift Card",
    "kitchenware": "Kitchenware"
  };
  return labels[cat] || cat;
}
 
 
// ---- Run on page load ----
// Wait for the page's HTML to fully load before running anything.
document.addEventListener("DOMContentLoaded", renderCards);