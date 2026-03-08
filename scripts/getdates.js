
(function () {

  const now = new Date();
  const currentYear = now.getFullYear();

  const copyrightEl = document.getElementById('copyright');
  if (copyrightEl) {

    copyrightEl.textContent = `© ${currentYear}`;
  }

  const lastModifiedEl = document.getElementById('lastModified');
  if (lastModifiedEl) {
  
    lastModifiedEl.textContent = document.lastModified;
  }
})();
``