const body = document.body;
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeBtn.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
});

function toggleUnit(button) {
  const list = button.nextElementSibling;
  list.classList.toggle("hidden");

  const icon = button.querySelector(".chevron");
  icon.textContent = list.classList.contains("hidden") ? "⌄" : "⌃";
}

function toggleCompleted() {
  const lessons = [...document.querySelectorAll(".lesson")];
  const onlyDone = lessons.some(x => x.style.display === "none");

  lessons.forEach(x => {
    x.style.display =
      onlyDone ? "flex" :
      (x.dataset.done === "true" ? "flex" : "none");
  });
}

function openLesson(title) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("lessonModal").classList.add("show");
}

function closeLesson() {
  document.getElementById("lessonModal").classList.remove("show");
}

document.getElementById("lessonModal").addEventListener("click", e => {
  if (e.target.id === "lessonModal") {
    closeLesson();
  }
});
