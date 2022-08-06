/**
 * Adds a new button in Trello style to the header of buttons containing the total number of cards in the whole Trello
 * board.
 */
(() => {
    // Count number of cards.
    const numberOfCards = document.querySelectorAll(".list-card").length;

    // Create on/off button instance.
    const buttonInstance = document.getElementById("button-total-cards-count");

    // Create HTML for button.
    const numberOfCardsButtonHTML = `<a id="button-total-cards-count" class="board-header-btn board-header-btn-invite ' +
    'board-header-btn-without-icon" title="Invite to board"><span class="board-header-btn-text">' +
    'Total cards: <b>' ${numberOfCards} '</b></span></a>`;

    // Inner HTML of header buttons
    let boardHeaderButtons = document.getElementsByClassName(
        "board-header-btns mod-left"
    )[1].innerHTML;

    // Check if button already exists before creating it.
    if (!buttonInstance) boardHeaderButtons += numberOfCardsButtonHTML;
    console.log("Created on/off button.")
})();
