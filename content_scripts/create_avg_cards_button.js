/**
 * Adds a new button in Trello style to the header of buttons containing the average number of cards per list for
 * the whole Trello board.
 */
(() => {
    // Count number of cards.
    const numberOfCards = document.querySelectorAll(".list-card").length;
    const numberOfLists = document.getElementsByClassName("js-list").length;
    const avgCardsPerList = roundNumber(numberOfCards / numberOfLists, 1);

    // Check if button already exists before creating it.
    let buttonInstance = document.getElementById("button-avg-cards-count");
    if (buttonInstance === null) {
        // Build HTML button using native DOM manipulation methods.

        // Create parent hyperlink tag with relevant classes.
        let avgCardsCounterBtn = document.createElement("a");
        avgCardsCounterBtn.setAttribute("id", "button-avg-cards-count");
        avgCardsCounterBtn.setAttribute("class", "board-header-btn board-header-btn-invite board-header-btn-without-icon");

        // Create text span for total cards.
        let avgCardsSpan = document.createElement("span");
        avgCardsSpan.textContent = "Avg Cards/List: ";
        avgCardsSpan.setAttribute("class", "board-header-btn-text");

        // Have total cards number be bold.
        let boldText = document.createElement("b");
        boldText.textContent = String(avgCardsPerList);

        // Append children elements to parent element.
        avgCardsSpan.append(boldText);
        avgCardsCounterBtn.append(avgCardsSpan);

        // Add button to Trello board.
        document.getElementsByClassName("board-header-btns mod-left")[1].append(avgCardsCounterBtn);
    } else {
        // Do nothing.
    }
})();

/**
 * Rounds number to nearest decimal place.
 * @param number the number to round.
 * @param decimals the decimal value to round to.
 * @returns {number} the rounded number.
 */
function roundNumber(number, decimals) {
    let powerOfTen = Math.pow(10, decimals);
    return Math.round(number * powerOfTen) / powerOfTen;
}