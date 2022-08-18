/**
 * Retrieves the id of the current tab to inject the content JS scripts in.
 * @returns {Promise<*>}
 */
async function getCurrentTabId() {
    let queryOptions = {
        active: true,
        currentWindow: true
    };
    let [tab] = await browser.tabs.query(queryOptions);
    return tab.id;
}

/**
 * Injects JS scripts which include libraries and content scripts into the current tab. Injects the browser-polyfill
 * library to make the extension cross-browser, and content scripts that contain the main functionality of the
 * extension. Inject browser-polyfill first so that references to "browser" in the content scripts and this listener
 * work on any browser and not just Firefox.
 * @returns {Promise<void>}
 */
window.onload = async () => { // https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
    if ("scripting" in browser) {
        console.log("test")
    }
    browser.scripting.executeScript({
        target: {tabId: await getCurrentTabId()},
        files: [
            "/browser-polyfill.min.js",
            "/content_scripts/create_total_cards_button.js",
            "/content_scripts/create_avg_cards_button.js",
            "/content_scripts/show_card_counters.js"
        ]
    });
};

/**
 * Listen for events on the on/off toggle switch button to decide which script to run.
 */
document.addEventListener("click", async (e) => {
    let currentTabId = await getCurrentTabId();

    // Show the  number of Trello card in each column.
    if (e.target.checked === true) {
        browser.scripting.executeScript({
            target: {tabId: currentTabId},
            file: "/content_scripts/show_card_counters.js"
        });
    }

    // Hide the  number of Trello card in each column.
    if (e.target.checked === false) {
        browser.scripting.executeScript({
            target: {tabId: currentTabId},
            file: "/content_scripts/hide_card_counters.js"
        });
    }

});