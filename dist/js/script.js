// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const containerElements = document.querySelectorAll(".container");
containerElements.forEach((el) => observer.observe(el));

//animated text daos
const text = document.querySelector("#daos");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

// Membungkus setiap karakter dalam elemen span
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
}

// Tambahkan kelas fade ke semua span (memicu animasi CSS)
const spans = text.querySelectorAll("span");
spans.forEach((span, index) => {
  setTimeout(() => {
    span.classList.add("fade");
  }, index * 50); // Animasi akan dimulai dengan jeda waktu
});

