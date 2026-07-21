import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-300 py-20 ">
      <div className="max-w-[1400px] mx-auto px-10 flex flex-wrap">
        <div className="flex-1 basis-[300px]">
        <a href="" className="text-3xl font-semibold">
          Gr<span className="text-orange-500">O</span>gify
        </a>
        <p className="text-zinc-600 mt-6 max-w-[350px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos accusantium impedit harum vitae maxime hic</p>
        <p className="text-zinc-800 mt-6">2026 &copy; all rights reserved</p>
      </div>

      <ul className="flex-1">
        <li>
            <h5 className="text-zinc-600 font-bold text-2xl">Company</h5>
        </li>
        <li className="mt-6"><a href="#" className="hover:text-orange-500 text-zinc-700">About</a></li>
        <li className="mt-6"><a href="#" className="hover:text-orange-500 text-zinc-700">FAQ'S</a></li>
      </ul>

      <ul className="flex-1">
        <li>
            <h5 className="text-zinc-600 font-bold text-2xl">Support</h5>
        </li>
        <li className="mt-6"><a href="#" className="hover:text-orange-500 text-zinc-700">Support Centre</a></li>
        <li className="mt-6"><a href="#" className="hover:text-orange-500 text-zinc-700">Feedback</a></li>
        <li className="mt-6"><a href="#" className="hover:text-orange-500 text-zinc-700">Contact Us </a></li>
      </ul>
      <div>
        <h5 className="text-zinc-600 font-bold text-2xl">Stay Connected</h5>
        <p className="text-zinc-600 mt-6">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. ex repudiandae modi!</p>
        
        <div className="p-1 rounded-lg mt-6 flex bg-white">
            <input type="text" name="email" className="flex-1 h-[5vh] pl-4 rounded-lg focus:outline-none" id="email" autoComplete="off" placeholder="Email Address" />
        <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-1 rounded-lg text-white text-2xl cursor-pointer">
            <IoIosArrowForward />
        </button>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
