/**
 * Adds a new button in Trello style to the header of buttons containing the total number of cards in the whole Trello
 * board.
 */
(function () {
  // Count number of cards.
  let numberOfCards = document.querySelectorAll(".list-card").length;

  // Check if button already exists before creating it.
  let buttonInstance = document.getElementById("button-total-cards-count");
  if (buttonInstance === null) {
    // Create HTML for button.
    let numberOfCardsButtonHTML = '<a id="button-total-cards-count" class="board-header-btn board-header-btn-invite ' +
      'board-header-btn-without-icon" title="Invite to board"><span class="board-header-btn-text">' +
      'Total cards: <b>' + numberOfCards + '</b></span></a>'
    // Add button to Trello board.
    document.getElementsByClassName("board-header-btns mod-left")[1].innerHTML += numberOfCardsButtonHTML;
  } else {
    // Do nothing.
  }

})();