import Git from "../img/git.svg";
import Javascript from "../img/javascript.svg";
import React from "../img/react.svg";
import Html from "../img/html-css.png";
import Vscode from "../img/vs-code.png";
import Flex from "../img/flex-grid.svg";
export const products = [
  {
    id: 1,
    name: "git-github",
    title: "دوره گیت و گیت هاب",
    description: [
      { support: "گارانتی مادام العمر" },
      { support: "آپدیت رایگان دوره" },
      { support: "دوره پروژه محور" },
      { support: "مدت زمان دوره، نامحدود" },
    ],
    time: 3,
    price: 100000,
    offPrice: 100000,
    discount: 0,
    image: Git,
  },
  {
    id: 2,
    name: "advanced-javascript",
    title: "دوره جامع و پیشرفته جاوااسکریپت",
    description: [
      { support: "گارانتی مادام العمر" },
      { support: "آپدیت رایگان دوره" },
      { support: "دوره پروژه محور" },
      { support: "مدت زمان دوره، نامحدود" },
    ],
    time: 20,
    price: 690000,
    offPrice: 600000,
    discount: 90000,
    image: Javascript,
  },
  {
    id: 3,
    name: "react-course",
    title: "دوره حرفه ای متخصص ریکت و ریداکس",
    description: [
      { support: "گارانتی مادام العمر" },
      { support: "آپدیت رایگان دوره" },
      { support: "دوره پروژه محور" },
      { support: "مدت زمان دوره، نامحدود" },
    ],
    time: 35,
    price: 990000,
    offPrice: 890000,
    discount: 100000,
    image: React,
  },
  {
    id: 4,
    name: "responsive-web",
    title: "دوره طراحی وب رسپانسیو",
    description: [
      { support: "گارانتی مادام العمر" },
      { support: "آپدیت رایگان دوره" },
      { support: "دوره پروژه محور" },
      { support: "مدت زمان دوره، نامحدود" },
    ],
    time: 14,
    price: 260000,
    offPrice: 220000,
    discount: 40000,
    image: Html,
  },
  {
    id: 5,
    name: "vs-code",
    title: "دوره حرفه ای  کار با VS Code",
    description: [
      { support: "گارانتی مادام العمر" },
      { support: "آپدیت رایگان دوره" },
      { support: "دوره پروژه محور" },
      { support: "مدت زمان دوره، نامحدود" },
    ],
    time: 1.5,
    price: 50000,
    offPrice: 50000,
    discount: 0,
    image: Vscode,
  },
  {
    id: 6,
    name: "flex-grid-course",
    title: "دوره پروژه محور فلکس و گرید",
    description: [
      { support: "گارانتی مادام العمر" },
      { support: "آپدیت رایگان دوره" },
      { support: "دوره پروژه محور" },
      { support: "مدت زمان دوره، نامحدود" },
    ],
    time: 2.5,
    price: 150000,
    offPrice: 100000,
    discount: 50000,
    image: Flex,
  },
];

// export const users = [
//   {
//     name: "Saheb mohamadi",
//     email: "saheb.ex@gmail.com",
//     password: bcrypt.hashSync("12345", 8),
//     phoneNumber: "09180000000",
//     isAdmin: true,
//   },
//   {
//     name: "John",
//     email: "user@example.com",
//     password: bcrypt.hashSync("1234", 8),
//     isAdmin: false,
//     phoneNumber: "09181230000",
//   },
// ];
