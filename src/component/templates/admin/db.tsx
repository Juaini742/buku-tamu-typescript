export const navitems = [
  {
    id: 1,
    name: "Beranda",
    path: "/dashboard",
    active: "/dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path d="M0.5 0H24.5V24H0.5V0Z" fill="white" fillOpacity="0.01" />
        <path
          d="M22.5 22V10L12.5 2L2.5 10V22H8.5V13H16.5V22H22.5Z"
          fill="white"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12.5001 22V17"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Tambah Data",
    path: "/addGuest",
    active: "/addGuest",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M0 0H24V24H0V0Z" fill="white" fillOpacity="0.01" />
        <path
          d="M19.4999 3H4.49994C3.67151 3 2.99994 3.67157 2.99994 4.5V19.5C2.99994 20.3284 3.67151 21 4.49994 21H19.4999C20.3284 21 20.9999 20.3284 20.9999 19.5V4.5C20.9999 3.67157 20.3284 3 19.4999 3Z"
          fill="#E9F5FE"
          stroke="#E9F5FE"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 8V16"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 12H16"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Tabel",
    path: "/table",
    active: "/table" || "/detailsAdmin" || "/updateAdmin",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.666626 0H24.6666V24H0.666626V0Z"
          fill="white"
          fillOpacity="0.01"
        />
        <path
          d="M21.6666 3H3.66663C3.11434 3 2.66663 3.44772 2.66663 4V20C2.66663 20.5523 3.11434 21 3.66663 21H21.6666C22.2189 21 22.6666 20.5523 22.6666 20V4C22.6666 3.44772 22.2189 3 21.6666 3Z"
          fill="#E9F5FE"
          stroke="#E9F5FE"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />{" "}
        <path
          d="M2.66663 9H22.6666"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.41663 9V21"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.9165 9V21"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.66663 15H22.6666"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.6666 4V20C22.6666 20.5523 22.2189 21 21.6666 21H3.66663C3.11434 21 2.66663 20.5523 2.66663 20V4"
          stroke="#E9F5FE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Laporan",
    path: "/report",
    active: "/report",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M0 0H24V24H0V0Z" fill="white" fillOpacity="0.01" />
        <path
          d="M19 2H5C4.44772 2 4 2.44772 4 3V21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21V3C20 2.44772 19.5523 2 19 2Z"
          fill="#E9F5FE"
          stroke="#E9F5FE"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 7H16.5"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 12H16.5"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 17H16.5"
          stroke="black"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.49988 8C8.05218 8 8.49988 7.5523 8.49988 7C8.49988 6.4477 8.05218 6 7.49988 6C6.94758 6 6.49988 6.4477 6.49988 7C6.49988 7.5523 6.94758 8 7.49988 8Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.49988 13C8.05218 13 8.49988 12.5523 8.49988 12C8.49988 11.4477 8.05218 11 7.49988 11C6.94758 11 6.49988 11.4477 6.49988 12C6.49988 12.5523 6.94758 13 7.49988 13Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.49988 18C8.05218 18 8.49988 17.5523 8.49988 17C8.49988 16.4477 8.05218 16 7.49988 16C6.94758 16 6.49988 16.4477 6.49988 17C6.49988 17.5523 6.94758 18 7.49988 18Z"
          fill="black"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Profil",
    path: "/profileAdmin",
    active: "/profileAdmin",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path d="M0 0H24V24H0V0Z" fill="white" fillOpacity="0.01" />
        <path
          d="M12.0001 10C13.9331 10 15.5001 8.433 15.5001 6.5C15.5001 4.567 13.9331 3 12.0001 3C10.0671 3 8.50006 4.567 8.50006 6.5C8.50006 8.433 10.0671 10 12.0001 10Z"
          fill="#E9F5FE"
          stroke="#E9F5FE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.99994 3.62735C5.09319 4.25982 4.49994 5.31061 4.49994 6.50001C4.49994 7.77316 5.17974 8.88756 6.19614 9.50001"
          stroke="#E9F5FE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 3.62735C18.9068 4.25982 19.5 5.31061 19.5 6.50001C19.5 7.68936 18.9068 8.74021 18 9.37266"
          stroke="#E9F5FE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.99994 20V21H17.9999V20C17.9999 18.1362 17.9999 17.2043 17.6954 16.4692C17.2895 15.4891 16.5108 14.7104 15.5307 14.3045C14.7956 14 13.8637 14 11.9999 14C10.1362 14 9.20429 14 8.46919 14.3045C7.48909 14.7104 6.71039 15.4891 6.30444 16.4692C5.99994 17.2043 5.99994 18.1362 5.99994 20Z"
          fill="#E9F5FE"
          stroke="#E9F5FE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.9998 21V20.4C21.9998 18.1598 21.9998 17.0397 21.5639 16.184C21.1804 15.4314 20.5684 14.8194 19.8158 14.4359"
          stroke="#E9F5FE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 21V20.4C2 18.1598 2 17.0397 2.43597 16.184C2.81946 15.4314 3.43139 14.8194 4.18403 14.4359"
          stroke="#E9F5FE"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  // {
  //   id: 7,
  //   name: "Pengaturan",
  //   path: "/setting",
  //   active: "/setting",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="25"
  //       height="24"
  //       viewBox="0 0 25 24"
  //       fill="none"
  //     >
  //       <path
  //         d="M0.666626 0H24.6666V24H0.666626V0Z"
  //         fill="white"
  //         fillOpacity="0.01"
  //       />
  //       <path
  //         d="M19.0096 7.5855C19.6348 8.48215 20.0748 9.5176 20.274 10.6363H22.6666V13.3636H20.274C20.0748 14.4824 19.6348 15.5178 19.0096 16.4145L20.7019 18.1068L18.7735 20.0353L17.0811 18.343C16.1845 18.9682 15.149 19.4081 14.0303 19.6073V22H11.303V19.6073C10.1842 19.4081 9.14878 18.9682 8.25213 18.343L6.55978 20.0353L4.63132 18.1068L6.32363 16.4145C5.69843 15.5178 5.25849 14.4824 5.05929 13.3636H2.66663V10.6363H5.05929C5.25849 9.5176 5.69843 8.48215 6.32363 7.5855L4.63132 5.89315L6.55978 3.96469L8.25213 5.657C9.14878 5.0318 10.1842 4.59186 11.303 4.39266V2H14.0303V4.39266C15.149 4.59186 16.1845 5.0318 17.0811 5.657L18.7735 3.96469L20.7019 5.89315L19.0096 7.5855Z"
  //         fill="#E9F5FE"
  //         stroke="#E9F5FE"
  //         strokeWidth="1.5"
  //         strokeLinejoin="round"
  //       />
  //       <path
  //         d="M12.6667 14.5C14.0474 14.5 15.1667 13.3807 15.1667 12C15.1667 10.6193 14.0474 9.5 12.6667 9.5C11.286 9.5 10.1667 10.6193 10.1667 12C10.1667 13.3807 11.286 14.5 12.6667 14.5Z"
  //         fill="#43CCF8"
  //         stroke="black"
  //         strokeWidth="1.5"
  //         strokeLinejoin="round"
  //       />
  //     </svg>
  //   ),
  // },
];
