// ===================================================
// DOM Elements Selection
// ===================================================
const actionBtn = document.getElementById("actionBtn");
const outputCard = document.getElementById("outputCard");
const responseText = document.getElementById("responseText");

// State tracker
let clickCount = 0;

// ===================================================
// Helper Functions
// ===================================================
function getTimestamp() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function updateOutputMessage() {
  clickCount++;

  const statusMessages = [
    "Workspace initialized successfully.",
    "System running on optimal performance.",
    "Scripts and styles loaded cleanly.",
    "Ready to scale into a full-fledged application."
  ];

  // Pick message cyclically
  const msg = statusMessages[(clickCount - 1) % statusMessages.length];

  // Update UI
  responseText.innerHTML = `
    <span class="text-emerald-400 font-semibold">[${getTimestamp()}]</span> 
    Action #${clickCount}: ${msg}
  `;

  // Reveal card with custom animation class from style.css
  if (outputCard.classList.contains("hidden")) {
    outputCard.classList.remove("hidden");
    outputCard.classList.add("fade-in-up");
  }
}

// ===================================================
// Event Listeners
// ===================================================
if (actionBtn && outputCard && responseText) {
  actionBtn.addEventListener("click", () => {
    updateOutputMessage();
  });
} else {
  console.warn("Required DOM elements were not found in index.html.");
}

// Initial Console Log
console.log("App.js successfully connected and ready.");


