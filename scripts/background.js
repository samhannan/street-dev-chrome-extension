function writeToClipboard(text) {
  navigator.clipboard.writeText(text);
}

// https://stackoverflow.com/questions/71321983/copy-to-clipboard-in-chrome-extension-v3
async function copyToClipboard(text, tabId) {
  chrome.scripting.executeScript({
    target: { tabId },
    func: writeToClipboard,
    args: [text],
  });
}

const findUuid = (url) => {
  const regex = '[a-f0-9]{8}-?[a-f0-9]{4}-?4[a-f0-9]{3}-?[89ab][a-f0-9]{3}-?[a-f0-9]{12}'
  const matches = [...url.matchAll(regex)];
  return matches.map(match => match[0])
}

const setBadge = (tabId, text, backgroundColor = null, textColor = null) => {
  chrome.action.setBadgeText(
    {
      tabId: tabId,
      text
    },
  )

  if (backgroundColor) {
    chrome.action.setBadgeBackgroundColor(
      {
        color: backgroundColor
      }
    );
  }

  if (textColor) {
    chrome.action.setBadgeTextColor(
      {
        color: textColor
      }
    );
  }
}

let timeoutId = null
let activeMatchIndex = -1

// Triggered when extension icon is clicked
chrome.action.onClicked.addListener(async (tab) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  const uuids = findUuid(tab.url)

  if (uuids.length === 0) {
    return setBadge(tab.id, '0', 'red', 'white')
  }

  activeMatchIndex++

  if (activeMatchIndex >= uuids.length) {
    activeMatchIndex = 0
  }

  copyToClipboard(uuids[activeMatchIndex], tab.id)

  console.log(uuids[activeMatchIndex])

  setBadge(tab.id, (activeMatchIndex + 1).toString(), 'green')

  timeoutId = setTimeout(() => {
    setBadge(tab.id, '')
  }, 10 * 1000)
})