document.addEventListener("click", (e) => {

  if (e.target.id === "on") {
    browser.tabs.executeScript({file: "../content_scripts/show_card_counter.js"})
  }

  if (e.target.id === "off") {
    browser.tabs.executeScript({file: "../content_scripts/hide_card_counter.js"})
  }

  e.preventDefault();
});