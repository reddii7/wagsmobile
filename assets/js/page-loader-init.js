(function () {
  window.onload = function () {
    const preloader = document.querySelector('.page-loading');
    if (preloader) {
      preloader.classList.remove('active');
      setTimeout(function () {
        preloader.remove();
      }, 1500);
    }
  };
})();