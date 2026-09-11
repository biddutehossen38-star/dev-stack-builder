import Logo from "../../assets/logo-text.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">


        <button className="text-2xl lg:hidden">
          ☰
        </button>


        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Dev Stack Logo"
            className=""
          />


        </div>


        <ul className="hidden items-center gap-8 lg:flex">
          <li>
            <a href="#home" className="font-medium text-slate-600 hover:text-pink-500">
              Home
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              className="font-medium text-slate-600 hover:text-pink-500"
            >
              Technologies
            </a>
          </li>

          <li>
            <a href="#projects" className="font-medium text-slate-600 hover:text-pink-500">
              Projects
            </a>
          </li>

          <li>
            <a href="#about" className="font-medium text-slate-600 hover:text-pink-500">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="font-medium text-slate-600 hover:text-pink-500">
              Contact
            </a>
          </li>
        </ul>


        <div className="flex items-center text-slate-600 gap-2">
          <button className="hidden font-medium sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-pink-600  px-5 py-2 font-medium text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;