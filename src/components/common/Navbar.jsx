import React from "react";

export default function Navbar() {
  return (
    <header>
      <input
        type="checkbox"
        name="hbr"
        id="hbr"
        class="hbr peer"
        hidden
        aria-hidden="true"
      />
      <nav class="fixed z-20 w-full bg-white/80 backdrop-blur navbar shadow-sm  peer-checked:navbar-active md:relative md:bg-transparent">
        <div class="xl:container m-auto px-6 md:px-12">
          <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
            <div class="w-full flex justify-between lg:w-auto">
              <a href="#" aria-label="logo" class="flex space-x-2 items-center">
                <span class="text-base font-bold text-gray-600">
                  Pushkar Yadav
                </span>
              </a>
              <label
                for="hbr"
                class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"
              >
                <div
                  aria-hidden="true"
                  class="m-auto h-0.5 w-6 rounded bg-gray-900 transition duration-300"
                ></div>
                <div
                  aria-hidden="true"
                  class="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 transition duration-300"
                ></div>
              </label>
            </div>
            <div class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none lg:border-0">
              <div class="text-gray-600 lg:pr-4">
                <ul class="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                  <li>
                    <a
                      href="/"
                      class="block md:px-4 transition hover:text-primary"
                    >
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pushkaryadav.in/"
                      class="block md:px-4 transition hover:text-primary"
                    >
                      <span>Portfolio</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
