"use client";

import React from "react";
import Link from "next/link";
import { Bell } from "lucide-react";
import ThemeSwitch from "views/shared/ThemeSwitch/ThemeSwitch";
import { useTheme } from "next-themes";
import { THEME_MODE_LIGHT } from "core/consts";
// import { UserAvatar } from "views/shared/Avatar/UserAvatar";
// import SearchByContainer from "views/shared/SearchBy/SearchByContainer";
import { GUEST_NAV_LIST, AUTH_NAV_LIST } from "core/utils/consts";
import { useTypedSelector, useTypedDispatch } from "core/hooks";

const AppTopBar = ({ handleLogoutClick }) => {
  const { theme } = useTheme();

  const isThemeLight = theme === THEME_MODE_LIGHT || false;
  const themeColor = isThemeLight ? "black" : "white";

  const isAuthenticated = useTypedSelector(
    (state) => state.authRoot.isAuthenticated
  );

  const guestNavList = GUEST_NAV_LIST.map((nav) => {
    const { id, title, link } = nav;
    return (
      <Link key={id} href={link} className="text-xs cursor-pointer transition">
        {title}
      </Link>
    );
  });

  const authNavList = AUTH_NAV_LIST.map((nav) => {
    const { id, title, link } = nav;

    if (title.toLowerCase() === "logout") {
      return (
        <button
          key={id}
          onClick={handleLogoutClick}
          className="text-xs cursor-pointer transition"
        >
          {title}
        </button>
      );
    }

    return (
      <Link key={id} href={link} className="text-xs cursor-pointer transition">
        {title}
      </Link>
    );
  });

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full px-14 bg-red">
        <div className="flex gap-[20px] text-red-500">
          <div>Httponly Auth</div>
          {isAuthenticated ? authNavList : guestNavList}
        </div>
        <div className="flex justify-between items-center">
          {/* <SearchByContainer searchBy={false} /> */}
          <div className="flex gap-3 justify-between items-center">
            <div className="flex gap-8 justify-between items-center">
              <ThemeSwitch />
              <Bell
                absoluteStrokeWidth
                strokeWidth={1.6}
                className="h-[18px] w-[18px] text-white dark:text-white cursor-pointer"
                color={themeColor}
              />
              {/* <UserAvatar /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppTopBar;
