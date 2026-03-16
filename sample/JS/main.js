document.addEventListener('DOMContentLoaded', function () {
    // Helper function for navigation
    const navigateTo = (url) => {
        window.location.href = url;
    };

    // --- Navigation Handlers ---

    // For all pages: logo navigates to home
    const logo = document.querySelector('.logoFirm');
    if (logo) {
        logo.addEventListener('click', () => navigateTo('index.html'));
    }

    // For index.html: menu cards
    const drinksCard = document.getElementById('drinks-card');
    if (drinksCard) {
        drinksCard.addEventListener('click', () => navigateTo('drinks.html'));
    }

    const foodCard = document.getElementById('food-card');
    if (foodCard) {
        foodCard.addEventListener('click', () => navigateTo('food.html'));
    }

    // For drinks.html: category cards
    const alcoholicDrinksCard = document.getElementById('alcoholicDrinks');
    if (alcoholicDrinksCard) {
        alcoholicDrinksCard.addEventListener('click', () => navigateTo('alcoholicDrinks.html'));
    }
    
    const nonAlcoholicDrinksCard = document.getElementById('nonAlcoholicDrinks');
    if (nonAlcoholicDrinksCard) {
        // Assuming a 'nonAlcoholicDrinks.html' page could be created
        nonAlcoholicDrinksCard.addEventListener('click', () => {
            alert('Menu for non-alcoholic drinks coming soon!');
            // Or navigateTo('nonAlcoholicDrinks.html') if it exists
        });
    }
});