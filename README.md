# GW2WAPIF
Autofill API field on GW2 wiki pages.

## Setup
Click the extension icon in the toolbar to bring up the popup page. Once opened you will see an input field with 2 buttons.
Enter your API key in the field and press the "Set!" button. This will save the key to your profile if you're logged in and sync it.
If sync is disabled or the user is not logged in it will automatically use local storage instead. 

At this point you can hide the extension in the menu as it's not further needed. If you need to replace your API key you can just 
replace it and hit the button once again. You can also clear your key without resetting it if you would like to do so.

## Usage
When on the Guild Wars 2 Wiki (`*://wiki.guildwars2.com/*`) the extension will look for any API fields. After having found one (or multiple)
it will attempt to input the saved key from the setup into the API field on the wiki page. After filling in the key it will also press the
"Apply" button so your API key is automatically applied as well.

The script is only run when a new tab is created and fully loaded (when you open the GW2 Wiki page in a new tab) or when the tab is already 
open and you activate it (going from a different tab to the wiki tab). 