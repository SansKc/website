import React, { useState } from "react";
import { persons } from "./persons";
import classNames from "classnames";

function Carousel() {
  const [activeItem, setActiveItem] = useState<number>(3);

  return (
    <div className="flex items-center justify-center h-[800px] w-full bg-black">
      <div className="w-[1200px] max-w-full">
        <ul className="flex group h-[500px] gap-2 justify-center relative">
          {persons.map((person, index) => (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index ? "true" : "false"}
              className={classNames(
                "relative overflow-hidden rounded-2xl transition-[width] cursor-pointer",
                "[&[aria-current='true']]:w-[48%] w-[8%]",
                "hover:w-[12%] [&:not(:hover)]:group-hover:w-[7%]",
                "first:w-[1%] last:w-[1%]"
              )}
              key={person.name}
            >
              {/* Image */}
              <img
                className="h-full w-full object-cover grayscale"
                src={person.img}
                alt={person.name}
              />

              {/* Name & Description */}
              <div
                className={classNames(
                  "absolute bottom-0 left-0 right-0 p-4 text-white transition-opacity duration-500",
                  "bg-gradient-to-t from-black/80 via-black/50 to-transparent",
                  activeItem === index && (activeItem === index && "w-[48%]") ? "opacity-100" : "opacity-0"
                )}
              >
                <h2 className="text-lg font-bold">{person.name}</h2>
                <p className="text-sm">{person.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Carousel;