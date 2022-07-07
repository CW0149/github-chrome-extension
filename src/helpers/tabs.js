import { getSettingUrl } from ".";
import {
  SETTINGS_ARCHIVE_SEARCH,
  SETTINGS_DELETE_SEARCH,
  SETTINGS_HIDE_SEARCH,
  SETTINGS_SHOW_SEARCH,
  SETTINGS_UNARCHIVE_SEARCH,
  LABEL_PUBLIC,
  LABEL_ARCHIVED,
  LABEL_PRIVATE,
} from "../constants";

export const addToolButtonsOnPage = () => {
  const toolLoaded = !!document.querySelector("#repo-tool-button-loaded");
  if (toolLoaded) return;

  const getBtnItems = ({ isPublic, isPrivate }, isArchived) => {
    const visibilityItem = isPublic
      ? [
          {
            name: "Private It",
            search: SETTINGS_HIDE_SEARCH,
          },
        ]
      : isPrivate
      ? [
          {
            name: "Public It",
            search: SETTINGS_SHOW_SEARCH,
          },
        ]
      : [];
    const archiveItem = isArchived
      ? [
          {
            name: "Unarchive It",
            search: SETTINGS_UNARCHIVE_SEARCH,
          },
        ]
      : [
          {
            name: "Archive It",
            search: SETTINGS_ARCHIVE_SEARCH,
          },
        ];

    return [
      {
        name: "Delete It",
        search: SETTINGS_DELETE_SEARCH,
      },
      ...visibilityItem,
      ...archiveItem,
      {
        name: "Go To Settings",
      },
    ];
  };

  [...document.querySelectorAll("#user-repositories-list li h3")].forEach(
    (node) => {
      const repoNode = node.querySelector("a");
      const repoName = repoNode.innerText;

      const labelNode = node.querySelector(".Label");
      const labelName = labelNode.innerText.toLowerCase();

      getBtnItems(
        {
          isPublic: labelName.includes(LABEL_PUBLIC),
          isPrivate: labelName.includes(LABEL_PRIVATE),
        },
        labelName.includes(LABEL_ARCHIVED)
      ).forEach((item) => {
        const button = document.createElement("a");
        button.innerText = item.name;
        button.href = `${getSettingUrl(location, repoName)}${
          item.search || ""
        }`;

        button.target = "_blank";
        button.className = "text-center btn btn-danger btn-sm ml-2 mb-1";

        node.appendChild(button);
      });
    }
  );

  const div = document.createElement("div");
  div.innerHTML = '<span id="repo-tool-button-loaded" />';
  document.querySelector("#user-repositories-list").appendChild(div);
};
