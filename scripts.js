const form = document.querySelector(".contact-us-form");
const mask = document.querySelector(".mask-form");

function openContactForm() {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mask.style.visibility = "visible";
}

function closeContactForm() {
  form.style.left = "-300px";
  form.style.transform = "translateX(0)";
  mask.style.visibility = "hidden";
}

mask.addEventListener("click", closeContactForm);
