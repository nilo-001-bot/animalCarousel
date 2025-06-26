const mammalCards = document.querySelectorAll('.mammal-card');
const fishCards = document.querySelectorAll('.fish-card');
let currentMammalIndex = 0;
let currentFishIndex = 0;

function updateCards(type) {
  if (type === "fish") {
    // Reset all fish cards
    fishCards.forEach(fish => {
      fish.className = 'fish-card';
    });
    const prevIndex = (currentFishIndex - 1 + fishCards.length) % fishCards.length;
    const nextIndex = (currentFishIndex + 1) % fishCards.length;
    fishCards[prevIndex].classList.add('prev');
    fishCards[currentFishIndex].classList.add('active');
    fishCards[nextIndex].classList.add('next');
    for (let i = 0; i < fishCards.length; i++) {
      if (i !== currentFishIndex && i !== prevIndex && i !== nextIndex) {
        fishCards[i].classList.add('offscreen');
      }
    }
  } else {
    // Reset all mammal cards
    mammalCards.forEach(card => {
      card.className = 'mammal-card';
    });
    const prevIndex = (currentMammalIndex - 1 + mammalCards.length) % mammalCards.length;
    const nextIndex = (currentMammalIndex + 1) % mammalCards.length;
    mammalCards[prevIndex].classList.add('prev');
    mammalCards[currentMammalIndex].classList.add('active');
    mammalCards[nextIndex].classList.add('next');
    for (let i = 0; i < mammalCards.length; i++) {
      if (i !== currentMammalIndex && i !== prevIndex && i !== nextIndex) {
        mammalCards[i].classList.add('offscreen');
      }
    }
  }
}


document.getElementById('mammals-next-btn').addEventListener('click', () => {
  currentMammalIndex = (currentMammalIndex + 1) % mammalCards.length;
  updateCards();
});
document.getElementById('mammals-prev-btn').addEventListener('click', () => {
  currentMammalIndex = (currentMammalIndex - 1 + mammalCards.length) % mammalCards.length;
  updateCards();
});
document.getElementById('fish-next-btn').addEventListener('click', () => {
  currentFishIndex = (currentFishIndex + 1) % fishCards.length;
  updateCards("fish");
});
document.getElementById('fish-prev-btn').addEventListener('click', () => {
  currentFishIndex = (currentFishIndex - 1 + fishCards.length) % fishCards.length;
  updateCards("fish");
});

// Initialize both carousels on page load
updateCards();
updateCards("fish");