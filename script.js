const pump = document.getElementById('pump');
const balloonContainer = document.getElementById('balloonContainer');

// Create Score Display
const scoreDisplay = document.createElement('div');
scoreDisplay.id = 'score';
scoreDisplay.textContent = "Score: 0";
document.body.appendChild(scoreDisplay);

// Create Click Counter Display
const clickCounterDisplay = document.createElement('div');
clickCounterDisplay.id = 'clickCounter';
clickCounterDisplay.textContent = "Clicks: 0";
document.body.appendChild(clickCounterDisplay);

let score = 0;
let clickCount = 0;

pump.addEventListener('click', () => {
    // Play click sound when pump is clicked
    const clickSound = new Audio('click.mp3'); // Ensure the click.mp3 file exists
    clickSound.play();

    // Increment click count
    clickCount++;
    clickCounterDisplay.textContent = `Clicks: ${clickCount}`;

    // Generate random letter and create balloon
    const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random letter A-Z
    createBalloon(randomLetter);
});

function createBalloon(letter) {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.textContent = letter;
    
    // Random Balloon Color
    const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Random Position
    balloon.style.left = Math.random() * 80 + 'vw';
    balloon.style.bottom = '0vh';

    // Play pop sound and update score on click
    balloon.addEventListener('click', () => {
        const popSound = new Audio('pop.mp3'); // Ensure the pop.mp3 file exists
        popSound.play();
        balloon.remove();
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    });

    // Auto-remove after 10 seconds
    setTimeout(() => {
        balloon.remove();
    }, 10000);

    balloonContainer.appendChild(balloon);
}
