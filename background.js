chrome.pageAction.onClicked.addListener(function (tab) {
  // The log is outputed into the extentions' background console
  // (which can be found in chrome://extensions)
  console.log("Turning " + tab.url + " red!");
  chrome.tabs.executeScript(
    tab.id,
    {
      file: "./Readability.js",
    },
    () => {
      chrome.tabs.executeScript(
        tab.id,
        {
          file: "./wrapper.js",
        },
        () => chrome.runtime.lastError
      );
    }
  );
});

// NOTE: observe must be runned, otherwise the pageAction is not available.
// page action
if (chrome.declarativeContent) {
  const observe = () =>
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      chrome.declarativeContent.onPageChanged.addRules([
        {
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              pageUrl: {
                schemes: ["http", "https", "file"],
              },
            }),
          ],
          actions: [new chrome.declarativeContent.ShowPageAction()],
        },
      ]);
    });
  if (chrome.extension.inIncognitoContext) {
    observe();
  } else {
    chrome.runtime.onInstalled.addListener(observe);
  }
}

