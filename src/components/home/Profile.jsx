import React from "react";
import Socials from "./Socials";

export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center my-4">
      <img
        src="/person.jpg"
        className="w-32 rounded-full ring-4 ring-sky-400"
      />
      <div className="text-2xl font-semibold mt-3">Pushkar Yadav</div>
      <div className="text-base mb-1">Full Stack Web Developer</div>
      <Socials />
    </div>
  );
}
