import { merge } from "webpack-merge";

import common from "./webpack.common.js";
import PATHS from "./paths.js";

// Merge webpack configuration files
export const config = merge(common, {
  entry: {
    background: PATHS.src + "/background.js",
    settingsPage: PATHS.src + "/settingsPage.js",
    repositoryPage: PATHS.src + "/repositoryPage.js",
  },
});

export default config;
