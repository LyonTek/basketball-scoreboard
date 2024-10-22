// Initial global variables for the scores
let homeScore = 0;
let guestScore = 0;

// Function to update the scoreboard display for any team
function updateDisplay() {
    document.getElementById('home-score').textContent = homeScore;
    document.getElementById('guest-score').textContent = guestScore;
}

// Function to update the score for a specific team (home/guest) and by a certain number of points
function updateScore(team, points) {
    if (team === 'home') {
        homeScore += points;
    } else if (team === 'guest') {
        guestScore += points;
    }
    updateDisplay();  // Call to update the DOM after adjusting the scores
}

// Function to reset the game (new game)
function newGame() {
    homeScore = 0;
    guestScore = 0;
    updateDisplay();  // Call to reset the displayed scores
}
