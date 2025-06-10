import React from "react";
import Container from "./Container";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareYoutube,
} from "react-icons/fa6";
import { TbMinusVertical } from "react-icons/tb";

function Footer() {
  const footerList = [
    { _id: "111", title: "お問い合わせ", link: "#", icon: true },
    { _id: "112", title: "特定商品取引法", link: "#", icon: true },
    { _id: "113", title: "プライバシーポリシー", link: "#" },
  ];

  return (
    <footer className="w-full bg-gray-900/90">
      <div className="px-4 md:px-6 lg:px-8 py-6">
        <div
          className="text-sm flex flex-col md:flex-row md:items-center gap-2 \
        justify-between mb-2"
        >
          <p className="mb-2 text-slate-400">&copy; CREATIVE.Doc</p>
          <ul className="flex items-center gap-2 mb-2">
            {footerList.map((item) => (
              <li
                key={item._id}
                className="flex items-center gap-2 text-slate-400 \
              hover:text-cyan-400 duration-300 cursor-pointer"
              >
                <a href={item.link}>{item.title}</a>
                {item.icon && <TbMinusVertical />}
              </li>
            ))}
          </ul>
          <div className="flex items-center text-slate-400 gap-1">
            <a
              href=""
              target="_blank"
              className="text-xl hover:text-cyan-400 cursor-pointer \
            duration-300"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href=""
              target="_blank"
              className="text-xl hover:text-cyan-400 cursor-pointer \
            duration-300"
            >
              <FaSquareInstagram />
            </a>
            <a
              href=""
              target="_blank"
              className="text-xl hover:text-cyan-400 cursor-pointer \
            duration-300"
            >
              <FaSquareYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
