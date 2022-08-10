/**
 * Adds a new button in Trello style to the header of buttons containing the total number of cards in the whole Trello
 * board.
 */
(() => {
    // Count number of cards.
    const numberOfCards = document.querySelectorAll(".list-card").length;

    // Check if button already exists before creating it.
    let buttonInstance = document.getElementById("button-total-cards-count");
    if (buttonInstance === null) {
        // Build HTML button using native DOM manipulation methods.

        // Create parent hyperlink tag with relevant classes.
        let totalCardsCounterBtn = document.createElement("a");
        totalCardsCounterBtn.setAttribute("id", "button-total-cards-count");
        totalCardsCounterBtn.setAttribute("class", "board-header-btn board-header-btn-invite board-header-btn-without-icon");

        // Create text span for total cards.
        let totalCardsSpan = document.createElement("span");
        totalCardsSpan.textContent = "Total Cards: ";
        totalCardsSpan.setAttribute("class", "board-header-btn-text");

        // Have total cards number be bold.
        let boldText = document.createElement("b");
        boldText.textContent = String(numberOfCards);

        // Append children elements to parent element.
        totalCardsSpan.append(boldText);
        totalCardsCounterBtn.append(totalCardsSpan);

        // Add button to Trello board.
        document.getElementsByClassName("board-header-btns mod-left")[1].append(totalCardsCounterBtn);
    } else {
        // Do nothing.
    }
})();