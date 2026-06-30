document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  if (!lightbox) return;

  document.querySelectorAll(".lightbox-trigger").forEach(function (el) {
    el.style.cursor = "zoom-in";
    el.addEventListener("click", function () {
      lightboxImg.src = el.src;
      const caption = el.getAttribute("data-caption") || "";
      lightboxCaption.textContent = caption;
      lightboxCaption.style.display = caption ? "block" : "none";
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
});