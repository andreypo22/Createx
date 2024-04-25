document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".nav-middle__link").forEach(item => {
    item.addEventListener("click", function() {
      setTimeout(() => {
        let dropdown = this.parentElement.querySelector(".dropdown");
        let btnActive = this.parentElement.querySelector(".nav-middle__link");

        document.querySelectorAll(".dropdown").forEach(el => {
          if (el != dropdown) {
            el.classList.remove("dropdown-active");
          };
        });

        document.querySelectorAll(".nav-middle__link").forEach(el => {
          if (el != btnActive) {
            el.classList.remove("nav-middle__link--active");
          };
        });
        dropdown.classList.toggle("dropdown-active");
        btnActive.classList.toggle("nav-middle__link--active");
      }, "200");
    });
  });

  document.addEventListener("click", function(e) {
    setTimeout(() => {
      let target = e.target;
      if (!target.closest(".nav-middle__item")) {
        document.querySelectorAll(".dropdown").forEach(el => {
            el.classList.remove("dropdown-active");
        });

        document.querySelectorAll(".nav-middle__link").forEach(el => {
          el.classList.remove("nav-middle__link--active");
        });
      };
    }, "200");
  });
});
