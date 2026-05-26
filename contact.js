document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contact-modal");
  const openModalBtn = document.getElementById("open-contact");
  const closeModalX = document.getElementById("close-modal");
  const closeModalBtn = document.getElementById("modal-close-btn");

  if (openModalBtn) {
    openModalBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  }

  const handleClose = () => {
    modal.style.display = "none";
  };

  if (closeModalX) closeModalX.addEventListener("click", handleClose);
  if (closeModalBtn) closeModalBtn.addEventListener("click", handleClose);

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      handleClose();
    }
  });
});