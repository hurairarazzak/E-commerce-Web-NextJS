import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaShoppingBag,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
    <footer className="footer text-base-content p-10 border-t border-mywhite mx-auto max-w-screen-xl">
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
    <nav>
      <h6 className="uppercase font-bold text-yellow-500 mb-[0.5rem]">
        SERVICES
      </h6>
      <div className="flex flex-col space-y-[0.5rem] text-sm">
        <a className="link cursor-pointer hover:underline">Branding</a>
        <a className="link cursor-pointer hover:underline">Design</a>
        <a className="link cursor-pointer hover:underline">Marketing</a>
        <a className="link cursor-pointer hover:underline">Advertisement</a>
      </div>
    </nav>
    <nav>
      <h6 className="uppercase font-bold text-yellow-500 mb-[0.5rem]">
        COMPANY
      </h6>
      <div className="flex flex-col space-y-[0.5rem] text-sm">
        <a className="link link-hover cursor-pointer hover:underline">About us</a>
        <a className="link link-hover cursor-pointer hover:underline">Contact</a>
        <a className="link link-hover cursor-pointer hover:underline">Jobs</a>
        <a className="link link-hover cursor-pointer hover:underline">Press kit</a>
      </div>
    </nav>
    <nav>
      <h6 className="uppercase font-bold text-yellow-500 mb-[0.5rem]">
        LEGAL
      </h6>
      <div className="flex flex-col space-y-[0.5rem] text-sm">
        <a className="link link-hover cursor-pointer hover:underline">Terms of use</a>
        <a className="link link-hover cursor-pointer hover:underline">Privacy policy</a>
        <a className="link link-hover cursor-pointer hover:underline">Cookie policy</a>
      </div>
    </nav>
  </div>
</footer>

      <footer className="footer text-base-content border-base-300 border-t px-10 py-4 flex justify-between items-center">
        <aside className="flex items-center space-x-4">
          <Image width={40} height={40} src="/logo.png" alt="logo" />
          <p>
            <span className="font-bold">ShopSavvy.com</span>
            <br />
            Shop Smart, Save Big
          </p>
        </aside>
        <nav className="flex justify-center md:justify-end">
          <div className="grid text-2xl grid-flow-col gap-4">
            <Link className="hover:text-blue-500 transition-all" href={""}>
              <FaTwitter />
            </Link>
            <Link className="hover:text-purple-800 transition-all" href={""}>
              <FaInstagram />
            </Link>
            <Link className="hover:text-blue-700 transition-all" href={""}>
              <FaFacebookF />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}
