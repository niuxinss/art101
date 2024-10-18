// Lab 4 Pseudocode: Card Flip Game
// Implementing the game
// Author: Mandy Xie (mxie34@ucsc.edu)
// Date: October 17th, 2024


// -------------------Pseudocode-------------------------//

// Print a grid that stays for the entire game
  // Loop through 4 rows and 4 columns
    // Print horizontal and vertical lines between spaces
// Print cards to fill each slot in the grid
  // Cards have 2 images, 1 for the back cover, and 1 for the face
    // Back covers are all the same, faces are only in pairs
// Randomize card faces on each card
// Accept user cursor input
  // Limit cursor clicks to 2
// User can only click different cards, not the same card twice
// When a card is clicked, change cover image to face
// Test if the 2 card faces match
  // If card faces match, remove cards from grid
  // Else if card faces don’t match, return the card’s image to the back cover
// If all cards matched and removed, user wins
