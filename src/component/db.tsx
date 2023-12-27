import type {MenuProps} from "antd";

export const items: MenuProps["items"] = [
  {
    label: (
      <a rel="noopener noreferrer" href="/news">
        Berita
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="statikTable">
        Statik Table
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="/publication">
        Publikasi
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a rel="noopener noreferrer" href="press">
        Siaran Pers
      </a>
    ),
    key: "3",
  },
];
