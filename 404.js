(function () {
  const saved = localStorage.getItem('sb_lang');
  if (saved === 'en') document.body.classList.remove('zh');
})();
