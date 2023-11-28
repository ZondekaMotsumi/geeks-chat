import React from "react";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <AiIcons.AiOutlineUser />,
    cName: "nav-text",
  },
  {
    title: "Signup",
    path: "/signup",
    icon: <AiIcons.AiOutlineUserAdd />,
    cName: "nav-text",
  },
];
