let matchPattern = "*://wiki.guildwars2.com/*";

// Log all items in storage.
chrome.storage.sync.get(null, function (items) {
    var allKeys = Object.keys(items);
    console.log(allKeys);
});

// When we switch tabs qq.
chrome.tabs.onActivated.addListener(query);

// When any tab gets updated.
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.active && changeInfo.status == "complete")
        query();
});

// Query the active tab against the url pattern noted at the top of this script.
// If we find a match execute the script (call setApiKey function).
async function query() {
    await chrome.tabs.query({ url: matchPattern, active: true }, (tabs) => {
        for (let i = 0; i < tabs.length; i++) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[i].id },
                function: setApiKey,
            });
        }
    });
}

// Get the field where you fill in the API key and the apply button.
// Then fill in the API key and click the button.
function setApiKey() {
    chrome.storage.sync.get(["apikey"], function (obj) {
        let apifields = document.getElementsByClassName("apikey");
        let applyButtons = document.getElementsByClassName("find-button");

        for (let i = 0; i < apifields.length; i++) {
            if (apifields[i].value != obj.allKeys)
                apifields[i].value = obj.apikey;
            applyButtons[i].click();
        }
    });
}