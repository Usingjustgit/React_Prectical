"use client";
import Link from "next/link";
import { FaSearch, FaHeart } from "react-icons/fa";
import { CgUser } from "react-icons/cg";

interface HoverProps {
  isActive: boolean;
}

const Navbar = () => {
  const Hover = ({ isActive }: HoverProps) =>
    isActive ? "text-subMain" : "hover:text-subMain transitions text-white";
  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
          {/* Logo */}
          <div className="col-span-1 lg:block hidden">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-full h-12 object-contain"
              />
            </Link>
          </div>
          {/* Search Bar */}
          <div className="col-span-3">
            <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
              <button
                type="submit"
                className="bg-subMain w-12 flex-colo h-12 rounded text-white"
              >
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Search Movie Name From here"
                className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
              />
            </form>
          </div>
          {/* menus */}
          <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            <Link href={"/movies"} className={Hover({ isActive: false })}>
              Movies
            </Link>
            <Link href={"/about-us"} className={Hover({ isActive: false })}>
              About Us
            </Link>
            <Link href={"/contact-us"} className={Hover({ isActive: false })}>
              Contact Us
            </Link>
            <Link href={"/login"} className={Hover({ isActive: false })}>
              <CgUser className="w-8 h-8" />
            </Link>
            <Link
              href={"/favorite"}
              className={`${Hover({ isActive: false })} relative`}
            >
              <FaHeart className="w-6 h-6" />
              <div className="w-4 h-4 flex-colo bg-subMain rounded-full text-xs text-white absolute -top-5 -right-1">
                3
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
