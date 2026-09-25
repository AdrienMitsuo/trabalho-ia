document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-destaque');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const linkDestino = card.getAttribute('data-link');
      if (linkDestino) {
        window.open(linkDestino, '_blank');
      }
    });
  });
});