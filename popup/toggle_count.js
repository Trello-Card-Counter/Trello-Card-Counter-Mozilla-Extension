browser.tabs.executeScript({file: "../content_scripts/show_card_counter.js"})

document.addEventListener("click", (e) => {

  if (e.target.checked === true) {
    browser.tabs.executeScript({file: "../content_scripts/show_card_counter.js"})
  }

  if (e.target.checked === false) {
    browser.tabs.executeScript({file: "../content_scripts/hide_card_counter.js"})
  }

});