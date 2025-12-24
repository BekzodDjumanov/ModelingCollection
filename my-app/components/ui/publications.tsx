import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FeaturedPublications() {
  const publications = [
    { year: "Spring 2025", image: "/images/spring2025.jpg" },
    { year: "Fall 2024", image: "/images/fall2024.jpg" },
    { year: "Spring 2024", image: "/images/spring2024.jpg" },
  ];

  // We extract the base year (e.g., "2025") for cleaner filtering if desired,
  // but keeping your logic for exact matches:
  const publicationYears = [
    "All Years",
    ...new Set(publications.map((pub) => pub.year)),
  ];

  const [selectedYear, setSelectedYear] = useState("All Years");

  const filteredPublications =
    selectedYear === "All Years"
      ? publications
      : publications.filter((pub) => pub.year === selectedYear);

  return (
    <div className="relative w-full px-4 -mt-10">
      {/* 1. Dropdown Section - Changed flex to justify-start */}
      <div className="max-w-7xl mx-auto mb-12 flex justify-start mt-10">
        <div className="relative w-full max-w-[200px]">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="
            w-full appearance-none px-4 py-2.5 rounded-lg cursor-pointer
            transition-all duration-300 outline-none
            
            text-sm font-medium uppercase tracking-[0.1em]
            
            bg-[#121212] border border-white/10 text-gray-200 backdrop-blur-md
            shadow-[0_4px_8px_rgba(0,0,0,0.6)]
  "
          >
            {publicationYears.map((year, idx) => (
              <option
                key={idx}
                value={year}
                className="bg-black text-white dark:bg-white dark:text-black uppercase"
              >
                {year}
              </option>
            ))}
          </select>

          {/* Chevron positioned absolutely inside the relative div */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <ChevronDown
              className="h-4 w-4 text-gray-400 dark:text-[#fff]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* 2. Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 -mt-5">
        {filteredPublications.map((pub, idx) => (
          <div key={idx} className="group flex flex-col items-center">
            {/* The Magazine "Frame" */}
            <div className="relative w-full aspect-[3/4.2] bg-[#f2f2eb] p-5 shadow-2xl transition-all duration-500 hover:-translate-y-3">
              <div className="relative w-full h-full bg-zinc-800 overflow-hidden shadow-inner">
                <img
                  src={pub.image}
                  alt={pub.year}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/10 via-transparent to-white/5" />
              </div>
            </div>

            {/* Subtitle */}
            <p className="mt-6 text-lg uppercase tracking-[0.1em] text-center transition-colors text-white dark:text-black group-hover:text-red-500 dark:">
              {pub.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
