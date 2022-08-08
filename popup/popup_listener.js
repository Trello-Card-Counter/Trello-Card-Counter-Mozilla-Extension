// var browser = require("webextension-polyfill");
browser.tabs.executeScript({file: "browser-polyfill.js"});

// Show the total number of cards in the board.
window.onload = (event) => { // https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
  browser.tabs.executeScript({file: "../content_scripts/create_total_cards_button.js"});
};

// Automatically show card counter when the extension popup is opened (default is "On").
browser.tabs.executeScript({file: "../content_scripts/show_card_counters.js"});

// Listen for events on the on/off toggle switch button to decide which script to run.
document.addEventListener("click", (e) => {

  // Show the  number of Trello card in each column.
  if (e.target.checked === true) {
    browser.tabs.executeScript({file: "../content_scripts/show_card_counters.js"});
  }

  // Hide the  number of Trello card in each column.
  if (e.target.checked === false) {
    browser.tabs.executeScript({file: "../content_scripts/hide_card_counters.js"});
  }

});