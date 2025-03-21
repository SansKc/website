import React, { useState } from "react";
import { persons } from "./persons";
import classNames from "classnames";

function Carousel() {
  const [activeItem, setActiveItem] = useState<number>(3);

  return (
    <div className="flex flex-col items-center justify-center h-[800px] w-full bg-black gap-10">
      <h1 className="relative text-white text-4xl font-bold ">My Circle</h1>
      <div className="w-[1200px] max-w-full">
        <ul className="flex group h-[500px] gap-2 justify-center">
          {persons.map((person, index) => (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={classNames(
                "overflow-hidden [&[aria-current='true']]:w-[48%] w-[8%] rounded-2xl transition-[width] first:w-[1%] last:w-[1%] relative",
                "hover:w-[12%] [&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%]"
              )}
              key={person.name}
            >
              {/* Image Container */}
              <div className="relative h-full w-full">
                {/* Light Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 to-purple-900/40 z-10"></div>

                {/* Image */}
                <img
                  className="h-full w-full object-cover grayscale"
                  src={person.img}
                  alt={person.name}
                />
              </div>

              {/* Gradient Overlay for Name and Title */}
              {activeItem === index && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                  <h2 className="text-2xl font-bold text-white">
                    {person.name}
                  </h2>
                  <p className="text-base text-white/80">{person.title}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Carousel;
