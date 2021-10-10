chrome.browserAction.onClicked.addListener(function (tab) {
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
