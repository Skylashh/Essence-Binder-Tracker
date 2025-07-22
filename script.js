
const maxEssence = 5;
function initEssence() {
  ["p1", "p2"].forEach(id => {
    const row = document.getElementById(`essence-${id}`);
    for (let i = 0; i < maxEssence; i++) {
      const box = document.createElement("div");
      box.classList.add("essence-box");
      box.addEventListener("click", () => box.classList.toggle("filled"));
      row.appendChild(box);
    }
  });
}
function changeLife(player, amount) {
  const el = document.getElementById(`life-${player}`);
  let life = parseInt(el.textContent);
  life += amount;
  el.textContent = life;
}
initEssence();

// Register PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("✅ Service Worker registered"))
    .catch(err => console.error("❌ SW registration failed:", err));
}
