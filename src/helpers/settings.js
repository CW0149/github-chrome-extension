import {
  ARCHIVE_BUTTON_TEXT,
  CHANGE_VISIBILITY_BUTTON_TEXT,
  DELETE_REPO_BUTTON_TEXT,
  HIDE_REPO_RADIO_TEXT,
  SETTINGS_ARCHIVE_SEARCH,
  SETTINGS_DELETE_SEARCH,
  SETTINGS_HIDE_SEARCH,
  SETTINGS_SHOW_SEARCH,
  SETTINGS_UNARCHIVE_SEARCH,
  SHOW_REPO_RADIO_TEXT,
  UNARCHIVE_BUTTON_TEXT,
} from "../constants";

export const deleteRepo = () => {
  Array.from(document.querySelectorAll(".btn-danger"))
    .find((el) => el.innerText === DELETE_REPO_BUTTON_TEXT)
    .click();

  const verifyInput = document.querySelector(
    "details[open] input[name=verify]"
  );
  verifyInput.value = document.location.pathname
    .split("/")
    .slice(1, -1)
    .join("/");

  const submitDelBtn = document.querySelector(
    "details[open] .btn-danger[type=submit]"
  );
  submitDelBtn.disabled = false;
  // submitDelBtn.click();
};

export const hideRepo = (toHide) => {
  Array.from(document.querySelectorAll(".btn-danger"))
    .find((el) => el.innerText === CHANGE_VISIBILITY_BUTTON_TEXT)
    .click();

  const privateRadio = [
    ...document.querySelectorAll("details[open] .form-checkbox"),
  ]
    .find((node) =>
      node.innerText.includes(
        toHide ? HIDE_REPO_RADIO_TEXT : SHOW_REPO_RADIO_TEXT
      )
    )
    .querySelector("input");

  privateRadio.click();

  const verifyInput = document.querySelector(
    "details[open] input[name=verify]"
  );
  verifyInput.value = document.location.pathname
    .split("/")
    .slice(1, -1)
    .join("/");

  const submitDelBtn = document.querySelector(
    "details[open] .btn-danger[type=submit]"
  );
  submitDelBtn.disabled = false;
  // submitDelBtn.click();
};

export const archiveRepo = (toArchive) => {
  Array.from(document.querySelectorAll(".btn-danger"))
    .find(
      (el) =>
        el.innerText ===
        (toArchive ? ARCHIVE_BUTTON_TEXT : UNARCHIVE_BUTTON_TEXT)
    )
    .click();

  const verifyInput = document.querySelector(
    "details[open] input[name=verify]"
  );
  verifyInput.value = document.location.pathname
    .split("/")
    .slice(1, -1)
    .join("/");

  const submitDelBtn = document.querySelector(
    "details[open] .btn-danger[type=submit]"
  );
  submitDelBtn.disabled = false;
  // submitDelBtn.click();
};

export const settingsSearchToPageHandler = {
  [SETTINGS_HIDE_SEARCH]: () => hideRepo(true),
  [SETTINGS_SHOW_SEARCH]: () => hideRepo(false),
  [SETTINGS_ARCHIVE_SEARCH]: () => archiveRepo(true),
  [SETTINGS_UNARCHIVE_SEARCH]: () => archiveRepo(false),
  [SETTINGS_DELETE_SEARCH]: deleteRepo,
};
