import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import useMediaQuery from "../../hooks/useMediaQuery";
const Navbar = ({
  scrollToSection,
  aboutRef,
  heroRef,
  carouselRef,
  projectRef,
}) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black flex justify-around items-center h-24 mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] ml-5 md:ml-15 lg:ml-20">
        REACT.
      </h1>
      <ul className="hidden  ml-28 md:flex mr-10 md:mr-60 lg:mr-70 gap-2 text-nowrap cursor-pointer">
        <li onClick={() => scrollToSection(heroRef)} className="p-4">
          Home
        </li>
        <li onClick={() => scrollToSection(aboutRef)} className="p-4">
          About me
        </li>
        <li onClick={() => scrollToSection(projectRef)} className="p-4">
          Projects
        </li>
        <li onClick={() => scrollToSection(carouselRef)} className="p-4">
          My Circle
        </li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {!isAboveMediumScreens && (
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
            REACT.
          </h1>
          <li
            onClick={() => scrollToSection(heroRef)}
            className="p-4 border-b border-gray-600"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection(aboutRef)}
            className="p-4 border-b border-gray-600"
          >
            About me
          </li>
          <li
            onClick={() => scrollToSection(projectRef)}
            className="p-4 border-b border-gray-600"
          >
            Projects
          </li>
          <li
            onClick={() => scrollToSection(carouselRef)}
            className="p-4 border-b border-gray-600"
          >
            My Circle
          </li>
          <li className="p-4">Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
