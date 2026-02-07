const list = document.getElementById("hasil");
const counter = document.getElementById("counter");

function updateCounter() {
  counter.textContent = "Jumlah tugas: " + list.children.length;
}

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("close")) {
    e.target.parentElement.remove();
    updateCounter();
  }

  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

function newElement() {
  const input = document.getElementById("Input");
  const value = input.value.trim();
  const length = value.length;

  if (length === 0) return alert("Tugas tidak boleh kosong");
  if (length < 3) return alert("Minimal 3 huruf");
  if (length > 10) return alert("Maksimal 10 huruf");

  const li = document.createElement("li");
  li.textContent = value;

  const span = document.createElement("span");
  span.textContent = "×";
  span.className = "close";

  li.appendChild(span);
  list.appendChild(li);

  input.value = "";
  updateCounter();
}

updateCounter();
