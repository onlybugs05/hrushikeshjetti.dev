document.addEventListener('DOMContentLoaded', () => {
  console.log('%c ONLYBUGS %c Initialized security console...', 'background: #00F72B; color: #000; font-weight: bold; padding: 2px 5px;', 'color: #00F72B;');
  
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });
});
