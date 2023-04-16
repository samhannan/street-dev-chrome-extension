# Street Developer Chrome Extension

This extension is designed to support developers working on Street.

## Installation
The extension is not published to the Chrome web store. This is so we can continue to develop the extension without worrying about getting changes approved by Google.

To install the extension locally, follow the instructions here (very straight forward)

https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked


## Functionality

### Existing
As it stands, all the exension does at the moment is detect and copy an entity UUID (uuid4) from the URL. Simply click the extension icon to copy the UUID. If the URL contains multiple UUIDs, click the icon again to copy the 2nd UUID, and so on...

**Keyboard shortcut**: `⌘⇧S`.

I find myself manually copying UUIDs serveral times a day. Particularly when working on support. Hopefully this saves some time and tears.

###  Future
Some ideas for the future:
- Easily go to a specific Street entity by entering a UUID
- Sign in to the system login with 1 click
- See which desk you have booked via MyStreet 
- Be alerted when CPU usage exceeds a threshhold