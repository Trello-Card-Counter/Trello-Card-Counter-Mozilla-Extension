// Automatically show card counter when the extension popup is opened (default is "On").
browser.tabs.executeScript({file: "../content_scripts/show_card_counter.js"})

// Listen for events on the on/off toggle switch button to decide which script to run.
document.addEventListener("click", (e) => {

  // Show the  number of Trello card in each column.
  if (e.target.checked === true) {
    browser.tabs.executeScript({file: "../content_scripts/show_card_counter.js"})
  }

  // Hide the  number of Trello card in each column.
  if (e.target.checked === false) {
    browser.tabs.executeScript({file: "../content_scripts/hide_card_counter.js"})
  }

});