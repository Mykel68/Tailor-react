// document.addEventListener('DOMContentLoaded', () => {
//     "use strict";
  
    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }

      /**
   * Sticky header on scroll
   */
    const selectHeader = document.querySelector('.navbar');
    if (selectHeader) {
      document.addEventListener('scroll', () => {
        window.scrollY > 100 ? selectHeader.classList.add(' fixed-top') : selectHeader.classList.remove(' fixed-top');
      });
    }


// })