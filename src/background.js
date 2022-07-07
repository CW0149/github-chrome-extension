import { isSettingsPage, isTabRepository } from "./helpers";

chrome.webNavigation.onHistoryStateUpdated.addListener(({ tabId, url }) => {
  if (isTabRepository(url)) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["repositoryPage.js"],
    });
  }
});

chrome.webNavigation.onCompleted.addListener(({ tabId, url }) => {
  if (isSettingsPage(url)) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["settingsPage.js"],
    });
  }
});
