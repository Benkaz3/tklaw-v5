// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest('.nav-item').classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 5,
      },
    },
  });
  // Client Slider
  // ----------------------------------------
  new Swiper(".client-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".client-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 5,
      },
    },
  });
})();
