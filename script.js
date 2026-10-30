document.addEventListener("DOMContentLoaded", () => {
  // Keep the copyright year current
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Hide broken images so the gray placeholder background shows instead
  document.querySelectorAll(".photo img, .logo-wrap img").forEach((img) => {
    img.addEventListener("error", () => { img.style.display = "none"; });
  });
});
