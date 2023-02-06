import React from "react";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineUser,
} from "react-icons/ai";
export default function Socials() {
  return (
    <div className="flex flex-row justify-center items-center gap-2">
      <a
        href="https://github.com/pushkarydv"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiOutlineGithub className="transition-all text-4xl text-slate-600 hover:text-slate-900 cursor-pointer p-1 rounded-full " />
      </a>
      <a
        href="https://twitter.com/pushkaryadavin"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiOutlineTwitter className="transition-all text-4xl text-slate-600 hover:text-sky-600 cursor-pointer p-1 rounded-full " />
      </a>
      <a
        href="https://instagram.com/pushkaryadav_"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiOutlineInstagram className="transition-all text-4xl text-slate-600 hover:text-pink-600 cursor-pointer p-1 rounded-full " />
      </a>
      <a
        href="https://www.linkedin.com/in/pushkarydv/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiOutlineLinkedin className="transition-all text-4xl text-slate-600 hover:text-blue-600 cursor-pointer p-1 rounded-full " />
      </a>
      <a
        href="https://pushkaryadav.in"
        rel="noopener noreferrer"
        target="_blank"
      >
        <AiOutlineUser className="transition-all text-4xl text-slate-600 hover:text-black cursor-pointer p-1 rounded-full " />
      </a>
    </div>
  );
}
