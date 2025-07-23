function changeLife(player, amount) {
  const span = document.getElementById(`life-${player}`);
  let current = parseInt(span.textContent, 10);
  current += amount;
  span.textContent = current;
}

function addEssence(id) {
  const bar = document.getElementById(id);

  // MAX ESSENCE LIMIT = 5
  if (bar.children.length >= 5) return;

  const box = document.createElement("div");
  box.classList.add("essence-box");

  box.addEventListener("click", () => {
    box.classList.toggle("filled");
  });

  bar.appendChild(box);
}

function removeEssence(id) {
  const bar = document.getElementById(id);
  if (bar.lastChild) {
    bar.removeChild(bar.lastChild);
  }
}
