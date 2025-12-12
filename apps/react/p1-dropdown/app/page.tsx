"use client";
import items from "./groceryItems";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen items-start justify-left bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs mb-6 text-3xl font-semibold leading-10 tracking-tight text-black ">
            Simple Dropdown
          </h1>
        </div>
        <div className="dropdown h-20 w-2xl flex flex-col items-start">
          <label>React nested dropdown displaying grocery items</label>
          <button
            className="dropdown-btn mt-1 place-content-between flex w-lg text-left border border-solid border-black"
            onClick={() => toggleDropdown()}
          >
            Categories
            <ChevronDown />
          </button>
          
          {items && isOpen && (
            <div id="groeceryDropdown" className="dropdown=content capitalize">
              <ul>
                {Object.keys(items).map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
