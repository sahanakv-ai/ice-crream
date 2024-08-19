// Function to show an alert when the button is clicked
function showAlert() {
    alert('Welcome to Ice Cream Paradise! Enjoy your stay.');
}

// Function to change the background color
function changeBackgroundColor() {
    const colors = ['#f8cdda', '#fbc2eb', '#ff9a9e', '#fbc2eb', '#a2c2e7'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Function to display the price of the clicked flavor
function displayPrice(event) {
    const priceDisplay = document.getElementById('priceDisplay');
    if (event.target.classList.contains('flavor')) {
        const price = event.target.getAttribute('data-price');
        const flavor = event.target.textContent;
        priceDisplay.textContent = `The price of ${flavor} is ${price}.`;
    }
}

// Adding event listeners to the buttons and flavor items after the DOM content has loaded
document.addEventListener('DOMContentLoaded', () => {
    const alertButton = document.getElementById('alertButton');
    const colorButton = document.getElementById('colorButton');
    const flavorContainer = document.getElementById('flavors');

    if (alertButton) {
        alertButton.addEventListener('click', showAlert);
    }

    if (colorButton) {
        colorButton.addEventListener('click', changeBackgroundColor);
    }

    if (flavorContainer) {
        flavorContainer.addEventListener('click', displayPrice);
    }
});
 
