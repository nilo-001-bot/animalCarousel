// Select all carousel cards
const cards = document.querySelectorAll('.carousel-card');
let currentIndex = 0; // Track the index of the currently active card

// Function to update the carousel cards' classes based on currentIndex
function updateCards() {
  // Reset all cards to default class
  cards.forEach((card, index) => {
    card.className = 'carousel-card'; // reset all
  });

  // Calculate previous and next card indices (with wrap-around)
  const prevIndex = (currentIndex - 1 + cards.length) % cards.length;
  const nextIndex = (currentIndex + 1) % cards.length;

  // Set classes for previous, current (active), and next cards
  cards[prevIndex].classList.add('prev');
  cards[currentIndex].classList.add('active');
  cards[nextIndex].classList.add('next');

  // Hide all other cards (for longer carousels)
  for (let i = 0; i < cards.length; i++) {
    if (i !== currentIndex && i !== prevIndex && i !== nextIndex) {
      cards[i].classList.add('offscreen');
    }
  }
}

// Event listener for the "Next" button
document.getElementById('nextBtn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length; // Move to next card
  updateCards();
});

// Event listener for the "Previous" button
document.getElementById('prevBtn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Move to previous card
  updateCards();
});

// Initial call to set up the carousel display
updateCards();
