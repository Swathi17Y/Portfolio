document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".icon");

  icons.forEach(icon => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.3)";
    });

    icon.addEventListener("mouseleave", () => {
      icon.style.transform = "scale(1)";
    });
  });

  document.body.addEventListener("mouseover", function (e) {
    if (e.target.closest(".skills-pg li")) {
      e.target.style.transform = "scale(1.1)";
    }
  });

  document.body.addEventListener("mouseout", function (e) {
    if (e.target.closest(".skills-pg li")) {
      e.target.style.transform = "scale(1)";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {

  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      navLinks.forEach(nav => nav.classList.remove("active"));
      this.classList.add("active");

      pages.forEach(page => page.classList.remove("active"));

      const target = this.getAttribute("href").substring(1);
      document.getElementById(target).classList.add("active");
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".open-popup").forEach(button => {
    button.addEventListener("click", function() {
      const popupId = this.getAttribute("data-popup");
      document.getElementById(popupId).classList.add("active");
    });
  });
 
  document.querySelectorAll(".close-btn").forEach(closeBtn => {
    closeBtn.addEventListener("click", function() {
      this.parentElement.classList.remove("active");
    });
  });

});

