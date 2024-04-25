document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".subscribe__btn").forEach(item => {
    item.addEventListener("click", function() {
      setTimeout(() => {
        let btnActive = this.parentElement.querySelector(".subscribe__btn");
        document.querySelectorAll(".subscribe__btn").forEach(el => {
          if (el != btnActive) {
            el.classList.remove("subscribe__btn-active");
          };
        });
        btnActive.classList.toggle("subscribe__btn-active");
      }, "200");
    });
  });
});
