// 1. Find the button in the HTML
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// 2. Check if the user has a preference saved in their browser
if (localStorage.getItem('theme') === 'space') {
  body.classList.add('space-mode');
  themeBtn.textContent = "Switch to Earth Mode 🌍";
}

// 3. Add the click event
themeBtn.addEventListener('click', () => {
  body.classList.toggle('space-mode');
  
  // Update button text and save preference
  if (body.classList.contains('space-mode')) {
    themeBtn.textContent = "Switch to Earth Mode 🌍";
    localStorage.setItem('theme', 'space');
  } else {
    themeBtn.textContent = "Switch to Space Mode 🚀";
    localStorage.setItem('theme', 'light');
  }
});