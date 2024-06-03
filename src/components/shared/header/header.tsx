"use client";
import Image from "next/image";
import Link from "next/link";
// import Logo from "/public/assest/Frame.png";
import { Menu, X } from "react-feather";
import { useState } from "react";

const styles = {
  navLinks: "cursor-pointer ml-10 h-9 uppercase  text-md",
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen); // Toggle the state correctly

  return (
    <header className="">
      <nav className="container mx-auto w-full font-customFont">
        <div className="flex justify-between">
          <div className="text-black hidden sm:flex">
            {/* <Link href="/">
              <Image src={Logo} alt="logo" width={30} height={30} />
            </Link> */}
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
          <button className="hidden bg-black m-2 text-white p-2 sm:block">Download</button>
          {/* mobile menu */}
          <div onClick={toggleMenu} className="sm:hidden cursor-pointer pl-24 text-black">
            <Menu size={20} />
          </div>
        </div>
        <div className={menuOpen ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-cyan-200 p-10 ease-in-out duration-300" : "fixed left-[-100%] top-0 p-10 ease-in-out duration-200"}>
          <div className="flex w-full items-center justify-end">
            <div onClick={toggleMenu} className="cursor-pointer">
              <X className="h-8 w-8" />
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul>
              <li className={styles.navLinks} onClick={() => setMenuOpen(false)}>
                <Link href="/home">Home</Link>
              </li>
              <li className={styles.navLinks} onClick={() => setMenuOpen(false)}>
                <Link href="/features">Features</Link>
              </li>
              <li className={styles.navLinks} onClick={() => setMenuOpen(false)}>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className={styles.navLinks} onClick={() => setMenuOpen(false)}>
                <Link href="/about">About</Link>
              </li>
              <button className="mt-4">Download</button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;



