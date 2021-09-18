const swiper = new Swiper('.sale-swiper', {
    slidesPerView: "auto",
    spaceBetween: 30,

    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
        // Optional parameters
        // direction: 'vertical',
        // loop: true,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
});