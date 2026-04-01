// =============================================
//  donations.js — All the logic for the donations page
//  This file works together with donations.html
// =============================================
 
 
// ---- YOUR DONATION ITEMS ARRAY ----
// Each item has:
//   name        — what shows on the card title
//   category    — used for the filter tabs (must match a tab exactly)
//   icon        — any emoji you like
//   description — the short blurb on the card
//   link        — the URL the "Donate This" button opens
//               (replace "#donate" with your real donation page URL)
 
const donationItems = [
 
  // ----- GIFT CARDS -----
  {
    name: "WinCo Gift Card",
    category: "gift-card",
    icon: "🛒",
    description: "Grocery gift cards help families stock up on food and household essentials at WinCo Foods.",
    link: "#donate"
  },
  {
    name: "Walmart Gift Card",
    category: "gift-card",
    icon: "🎁",
    description: "A Walmart gift card gives recipients the freedom to pick exactly what they need most.",
    link: "#donate"
  },
  {
    name: "Idaho Youth Ranch Gift Card",
    category: "gift-card",
    icon: "👕",
    description: "Gift cards to Idaho Youth Ranch help families find affordable clothing and household items.",
    link: "#donate"
  },
  {
    name: "Gas Station Gift Card",
    category: "gift-card",
    icon: "⛽",
    description: "Fuel gift cards help people get to work, medical appointments, and school without worry.",
    link: "#donate"
  },
 
  // ----- KITCHENWARE -----
  {
    name: "New Pots & Pans Set",
    category: "kitchenware",
    icon: "🍳",
    description: "A quality cookware set makes it possible to prepare healthy meals at home — a true everyday essential.",
    link: "#donate"
  },
 
  // ----- HYGIENE -----
  {
    name: "Shampoo & Conditioner",
    category: "hygiene",
    icon: "🧴",
    description: "Basic hair care products that make a big difference in someone's daily confidence and cleanliness.",
    link: "#donate"
  },
  {
    name: "Toothpaste",
    category: "hygiene",
    icon: "🪥",
    description: "Dental hygiene is health. Toothpaste donations help families maintain basic oral care.",
    link: "#donate"
  },
  {
    name: "Deodorant",
    category: "hygiene",
    icon: "🌿",
    description: "Deodorant is one of the most-requested hygiene items and one of the easiest ways to help.",
    link: "#donate"
  },
  {
    name: "Razors",
    category: "hygiene",
    icon: "🪒",
    description: "Disposable razors are a small but meaningful personal care item that many cannot afford.",
    link: "#donate"
  },
  {
    name: "Body Wash & Bar Soap",
    category: "hygiene",
    icon: "🧼",
    description: "Body wash and bar soap are daily necessities for families trying to stay clean and healthy.",
    link: "#donate"
  },
  {
    name: "Hand Soap",
    category: "hygiene",
    icon: "🤲",
    description: "Refill bottles of hand soap keep households sanitary and help prevent illness.",
    link: "https://www.amazon.com/Amazon-Brand-Solimo-Original-Liquid/dp/B08BPY986S/ref=sr_1_1_ffob_sspa?crid=2YEHXLPM6AYZ2&dib=eyJ2IjoiMSJ9.6z28fvGZ9UIqgmDKS1K5-8qKPsUWgjufnnC_pqb4UkCHeA61fmZbrQp256Nk_4iuSuRwruaDjVJWE0YhwibmlAKazsS_bdcAM5gPFJN2GRVq_89GuOykSffuANXCkVbd2Zsx1Z5mDYrKlcNbT78_PxGP6mIUqA_odHxWTU1MbjERohV3Ko-OopqCWMblmALjd-lW3afNFeXsbe-Y1rLUiUZjZLdg0QfiA1Ef8yUJKHAqsl2grw9PytML6XtaNaCBtaFaHcEyDm-nAVEVBLDy0NQhYQfLzllarjl0pxmHtg0._mPNSZ-c44lJ1OdamITgFV5zDVkBOfv5xAXlRNnIa0U&dib_tag=se&keywords=handsoap&qid=1775002847&rdc=1&sprefix=handsoap%2Caps%2C204&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1"
  },
  {
    name: "Feminine Hygiene Products",
    category: "hygiene",
    icon: "🌸",
    description: "Pads, tampons, and other feminine care products are often overlooked but critically needed.",
    link: "#donate"
  },
 
  // ----- HOUSEHOLD -----
  {
    name: "Laundry Detergent",
    category: "household",
    icon: "👚",
    description: "Clean clothes matter for jobs, school, and self-esteem. Laundry detergent is always in demand.",
    link: "#donate"
  },
  {
    name: "Household Cleaners",
    category: "household",
    icon: "🧹",
    description: "All-purpose sprays, dish soap, and surface cleaners (no bleach please) help keep homes safe and clean.",
    link: "#donate"
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