window.onload = async () => { // https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
    await browser.tabs.executeScript({file: "/lib/browser-polyfill.min.js"});
    await browser.tabs.executeScript({file: "/content_scripts/create_total_cards_button.js"});
    await browser.tabs.executeScript({file: "/content_scripts/create_avg_cards_button.js"});
    await browser.tabs.executeScript({file: "/content_scripts/show_card_counters.js"});
};

// Listen for events on the on/off toggle switch button to decide which script to run.
document.addEventListener("click", (e) => {

    // Show the  number of Trello card in each column.
    if (e.target.checked === true) {
        browser.tabs.executeScript({file: "/content_scripts/show_card_counters.js"});
    }

    // Hide the  number of Trello card in each column.
    if (e.target.checked === false) {
        browser.tabs.executeScript({file: "/content_scripts/hide_card_counters.js"});
    }

});