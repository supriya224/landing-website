"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "react-feather";
import { useState } from "react";

const styles = {
  navLinks:
    "cursor-pointer ml-10 h-9 uppercase text-sm sm:text-xl flex items-center",
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="">
      <nav className="container mx-auto font-customFont text-xl">
        <div className="flex justify-between items-center my-6">
          <div className="flex items-center ">
            <div className="flex items-center">
              <Image
                src="/assets/Frame.png"
                alt="logo"
                loading="lazy"
                className="w-9 h-9"
                width={40}
                height={40}
              />
              <span>Uifry</span>
            </div>
            <ul className="hidden sm:flex items-center justify-center">
              <li className={styles.navLinks}>
                <Link href="/home">Home</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/about">About</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/features">Features</Link>
              </li>
            </ul>
          </div>
          <button className="hidden bg-black m-2 text-white p-2 sm:block">
            Download
          </button>
          {/* mobile menu */}
          <div
            onClick={toggleMenu}
            className="sm:hidden cursor-pointer text-black"
          >
            {menuOpen ? <X size={20} className="fixed" /> : <Menu size={20} />}
          </div>
        </div>
        <div
          className={
            menuOpen
              ? "fixed top-0 left-0 w-[40%] sm:hidden h-screen bg-gray-200 p-10 ease-in-out duration-300"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-200"
          }
        >
          <div className="flex w-full items-center justify-end">
          </div>
          <div className="flex flex-col py-4">
            <ul>
              <li className={styles.navLinks} onClick={toggleMenu}>
                <Link href="/home">Home</Link>
              </li>
              <li className={styles.navLinks} onClick={toggleMenu}>
                <Link href="/features">Features</Link>
              </li>
              <li className={styles.navLinks} onClick={toggleMenu}>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className={styles.navLinks} onClick={toggleMenu}>
                <Link href="/about">About</Link>
              </li>
              <button className="px:12 text-sm">Download</button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
