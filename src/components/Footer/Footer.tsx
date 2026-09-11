import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/logo-text.png";

function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">


        <div>
          <div className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Dev Stack Logo"

            />


          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="mt-5 flex gap-4">
            <a
              href="#"
              className="text-xl text-slate-500 transition hover:text-pink-600"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="text-xl text-slate-500 transition hover:text-pink-600"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="text-xl text-slate-500 transition hover:text-pink-600"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>


        <div>
          <h3 className="mb-4 font-bold text-gray-700">
            PRODUCT
          </h3>

          <ul className="space-y-3 text-sm text-slate-500">
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>


        <div>
          <h3 className="mb-4 font-bold text-gray-700">
            COMPANY
          </h3>

          <ul className="space-y-3 text-sm text-slate-500">
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>


        <div>
          <h3 className="mb-4 font-bold text-gray-700">
            LEGAL
          </h3>

          <ul className="space-y-3 text-sm text-slate-500">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>

          </ul>
        </div>

      </div>


      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <span className="cursor-pointer hover:text-pink-600">
              Privacy
            </span>

            <span className="cursor-pointer hover:text-pink-600">
              Terms
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;