// 01. MOBILE NAVIGATION
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

// 02. SCROLL REVEAL ANIMATION
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

// 03. SHOW DETAILS POPUP
document.querySelectorAll('.ticket-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#event-name').textContent = button.dataset.event;
    document.querySelector('#event-dialog').showModal();
  });
});

// 04. PRODUCT DETAILS POPUP
document.querySelectorAll('.product-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#product-name').textContent = button.dataset.product;
    document.querySelector('#product-dialog').showModal();
  });
});

// 05. CLOSE POPUPS
document.querySelectorAll('.dialog-close').forEach((button) => {
  button.addEventListener('click', () => button.closest('dialog').close());
});

document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});
