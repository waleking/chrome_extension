chrome.browserAction.onClicked.addListener(function (tab) {
  // No tabs or host permissions needed!
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
