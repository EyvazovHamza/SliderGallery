const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentImageIndex = 0;

function openLightbox(index) {
  currentImageIndex = index;
  lightboxImage.src = galleryItems[currentImageIndex].src;
  lightbox.classList.add("active");
}

function closeLightbox() {
  lightbox.classList.remove("active");
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
  lightboxImage.src = galleryItems[currentImageIndex].src;
}

function showPrevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImage.src = galleryItems[currentImageIndex].src;
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index));
});

closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
