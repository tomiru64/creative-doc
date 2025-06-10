"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { headerListItems } from "@/constants";
import { usePathname } from "next/navigation";

function Header() {
  const [active, setActive] = useState("");
  const pathName = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setActive(pathName);
  }, [pathName]);

  return (
    <>
      <div
        className="w-full h-20 border-b-[1px] border-cyan-400 bg-gray-900/95 relative"
        style={{ backdropFilter: "blur(4px)" }}
      >
        <div className="h-full px-4 md:px-6 lg:px-8 flex items-center justify-between">
          {/* logo */}
          <Link href="/" className="relative group overflow-hidden">
            <div className="text-2xl font-bold">
              <span className="text-cyan-400">CREATIVE</span>
              <span className="text-cyan-50">.Doc</span>
            </div>
            <span
              className="absolute bottom-0 w-full h-[2px] inline-block bg-cyan-400 -translate-x-[100%] \
          group-hover:translate-x-0 transition-transform duration-700"
            ></span>
          </Link>
          {/* headerListItem */}
          <div className="hidden lg:inline-flex items-center text-base font-semibold tracking-wide">
            <ul className="flex gap-6 ">
              {headerListItems.map((item) => (
                <li key={item._id}>
                  <Link
                    href={item.link}
                    className={`${
                      active === item.link
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-cyan-400"
                    } transition-colors cursor-pointer duration-300 relative group`}
                  >
                    {item.title}
                    <span
                      className={`absolute w-full scale-0 group-hover:scale-100 inline-block h-[2px] -bottom-[1px] \
                        left-0 bg-cyan-400 duration-500 ${
                          active === item.link && "scale-100"
                        }`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* smolLogo */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-7 h-5 group lg:hidden flex flex-col justify-between cursor-pointer relative z-50"
          >
            <span
              className={`w-full h-[2px] bg-cyan-400 transition-all duration-500 ease-in-out ${
                showMenu
                  ? "rotate-45 translate-y-[9px] bg-cyan-300"
                  : "group-hover:bg-cyan-300"
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-cyan-400 transition-all duration-300 ${
                showMenu ? "opacity-0 translate-x-3" : "group-hover:bg-cyan-300"
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-cyan-400 transition-all duration-500 ease-in-out ${
                showMenu
                  ? "-rotate-45 -translate-y-[9px] bg-cyan-300"
                  : "group-hover:bg-cyan-300"
              }`}
            ></span>
          </button>{" "}
        </div>
      </div>

      {/* Mobile Side Menu */}
      <div
        className={`fixed top-20 right-0 h-full w-full z-40 lg:hidden transform transition-transform duration-500 ease-in-out ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-slate-800/95 to-gray-900/90 backdrop-blur-lg"></div>

        <div className="relative h-full flex flex-col pt-6 px-8">
          <nav className="flex-1">
            <ul className="space-y-6">
              {headerListItems.map((item) => (
                <li key={item._id}>
                  <Link
                    href={item.link}
                    onClick={() => setShowMenu(false)}
                    className={`block text-2xl font-semibold tracking-wide ${
                      active === item.link
                        ? "text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text"
                        : "text-slate-200 hover:text-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:bg-clip-text"
                    } transition-all duration-300`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Backdrop overlay */}
      {showMenu && (
        <div
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={() => setShowMenu(false)}
        ></div>
      )}
    </>
  );
}

export default Header;
