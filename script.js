var roles = ["Font-end Developer ", "Back-end Developer ", "Mongo DB ","Full Stack Web Developer ","Java Developer ", "C++ Developer ","Git & Git hub "];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
function typeEffect() {
  var typingElement = document.getElementById("typing-text");
  if (isDeleting) {
    currentText = roles[index].substring(0, charIndex--);
  } else {
    currentText = roles[index].substring(0, charIndex++);
  }
  typingElement.textContent = currentText;
  if (!isDeleting && charIndex === roles[index].length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200); 
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
  }
  setTimeout(typeEffect, isDeleting ? 80 : 150);
}
document.addEventListener("DOMContentLoaded", typeEffect);
