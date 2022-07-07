export * from "./settings";

export const getSettingUrl = (location, repoName) => {
  return `${location.origin}${location.pathname}/${repoName}/settings`;
};

export const isSettingsPage = (url) => url.includes("/settings");

export const isTabRepository = (url) => url.includes(`?tab=repositories`);
