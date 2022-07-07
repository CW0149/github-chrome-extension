import { settingsSearchToPageHandler } from "./helpers";

const run = () => {
  const { search } = window.location;

  const pageHandler = settingsSearchToPageHandler[search];
  if (!pageHandler) return;

  pageHandler();
};

run();
