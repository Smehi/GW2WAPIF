// Initialize
let apiField = document.getElementById("apikey");
let setButton = document.getElementById("set");
let clearButton = document.getElementById("clear");
let testButton = document.getElementById("test");
setApiTextField();

// Set text in input field
function setApiTextField() {
    chrome.storage.sync.get(["apikey"], function (obj) {
        if (obj.apikey)
            apiField.value = obj.apikey;
    });
}

// Set new API key
setButton.addEventListener("click", async () => {
    chrome.storage.sync.set({ 'apikey': apiField.value });
    setApiTextField();
});

// Clear API key
clearButton.addEventListener("click", async () => {
    chrome.storage.sync.clear();
    apiField.value = "";
});
