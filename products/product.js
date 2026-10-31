document.addEventListener("DOMContentLoaded", () => {
  const mainPhoto = document.getElementById("mainPhoto");
  const thumbs = document.querySelectorAll(".thumb");

  // Clicking a gallery photo shows it in the main photo area
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainPhoto.src = thumb.dataset.full;
      mainPhoto.style.display = "";
      thumbs.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  // Hide broken images so the gray placeholder background shows instead
  document.querySelectorAll(".main-photo img, .thumb img").forEach((img) => {
    img.addEventListener("error", () => { img.style.display = "none"; });
  });
});
