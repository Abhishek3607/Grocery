import { useEffect, useState } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)  // Acts as toggle        
    }

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

  return (
    <header className={`fixed top-0 right-0 left-0 bg-white z-50 ${isScrolled ? 'shadow-xl' : null}`}>
      <nav className="flex justify-between max-w-[1400px] mx-auto px-10 md:h-[12vh] h-[10vh] items-center">
        <a href="" className="text-3xl font-semibold">
          Gr<span className="text-orange-500">O</span>gify
        </a>

        {/* Desktop Menu */}
        <ul className="items-center gap-x-15 md:flex hidden">
          <li>
            <a href="" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex gap-x-5 items-center">
          {/* Input Field */}
          <div className="md:flex hidden p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              name="text"
              id="text"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
              placeholder="search..."
              autoComplete="off"
            />
            <button className="bg-linear-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </div>
          <a href="" className="text-zinc-900 text-2xl">
            <IoHeartSharp />
          </a>
          <a href="" className="text-zinc-900 text-2xl">
            <RiShoppingBag4Fill />
          </a>

          {/* Hamburger */}
          <a href="#" className="text-zinc-800 text-3xl md:hidden" onClick={toggleMenu}>
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>

        {/* Mobile Menu */}
        <ul className={`md:hidden items-center gap-x-15 flex flex-col gap-y-12 bg-orange-600/25 backdrop-blur-xl rounded-2xl p-10 absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-300  ${showMenu ? 'left-1/2' : ""}`}>
          <li>
            <a href="" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
          <li className="flex md:hidden p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              name="text"
              id="text"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
              placeholder="search..."
              autoComplete="off"
            />
            <button className="bg-linear-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
