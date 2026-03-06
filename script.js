/* Modal */
const downloadmodal = document.getElementById("brochureModal");
const quotemodal = document.getElementById("quoteModal");
const downloadBtn = document.querySelector(".ts-cta button");
const quoteBtn = document.querySelector(".quote-cta button");
const downloadcloseBtn = document.querySelector(".download-modal-close");
const quotecloseBtn = document.querySelector(".quote-modal-close");

/* Open Modal */
downloadBtn.addEventListener("click", () => {
  downloadmodal.style.display = "flex";
});

quoteBtn.addEventListener("click", () => {
  quotemodal.style.display = "flex";
});

/* Close Modal */
downloadcloseBtn.addEventListener("click", () => {
  downloadmodal.style.display = "none";
});

quotecloseBtn.addEventListener("click", () => {
  quotemodal.style.display = "none";
});

/* Close when clicking outside */
window.addEventListener("click", (e) => {
  if (e.target === downloadmodal) {
    downloadmodal.style.display = "none";
  }
  if (e.target === quotemodal) {
    quotemodal.style.display = "none";
  }
});

/* FAQs */
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector("i");

    question.classList.toggle("active");
    answer.classList.toggle("active");

    if (icon.classList.contains("fa-chevron-circle-down")) {
      icon.classList.remove("fa-chevron-circle-down");
      icon.classList.add("fa-chevron-circle-up");
    } else {
      icon.classList.remove("fa-chevron-circle-up");
      icon.classList.add("fa-chevron-circle-down");
    }
  });
});

/* Cart image zooming */
const cartCards = document.querySelectorAll(".cart-image-card");

cartCards.forEach(card => {
  const img = card.querySelector("img");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // X axis
    const y = e.clientY - rect.top;  // Y axis
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    img.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    img.style.transform = "scale(1.5)"; // zoom level
  });

  card.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
    img.style.transformOrigin = "center center";
  });
});
