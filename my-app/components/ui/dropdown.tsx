"use client";

import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const options = [
  { id: 1, name: "All Years" },
  { id: 2, name: "2025" },
  { id: 3, name: "2024" },
];

export function DropDown() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="w-44">
      {" "}
      {/* Fixed width prevents layout shift */}
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            className="
              relative w-full cursor-pointer rounded-lg py-2 pl-4 pr-10 text-left text-sm font-medium
              /* Modern Glass Effect */
              bg-white/5 border border-white/10 backdrop-blur-md
              text-gray-200 shadow-xl
              transition-all duration-300
              /* Red Glow Hover */
              hover:border-[rgba(255,45,85,0.4)] hover:shadow-[0_0_15px_rgba(255,45,85,0.1)]
              dark:bg-black dark:text-white dark:border-white/20
            "
          >
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown
                className="h-4 w-4 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="
                absolute mt-2 max-h-60 w-full overflow-auto rounded-xl py-1 text-sm
                bg-[#121212]/90 border border-white/10 backdrop-blur-xl
                shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-[100] focus:outline-none
              "
            >
              {options.map((option) => (
                <Listbox.Option
                  key={option.id}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2.5 pl-10 pr-4 transition-colors ${
                      active
                        ? "bg-[rgba(255,45,85,0.1)] text-[rgba(255,45,85,1)]"
                        : "text-gray-300"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-bold text-white" : "font-normal"
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[rgba(255,45,85,1)]">
                          <Check className="h-4 w-4" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
