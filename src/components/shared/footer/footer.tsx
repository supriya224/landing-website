import Image from "next/image";
import React from "react";
import { Mail, PhoneCall } from "react-feather";
import Logo from "/public/assets/Frame.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center mt-4 text-sm text-gray-600">
              <Image src={Logo} alt="logo" width={40} height={40} />
              <h3 className="text-3xl ml-2">Uifry</h3>
            </div>
            <div className="mt-4">
              <h3 className="flex items-center">
                <Mail className="mr-2" /> help@frybix.com
              </h3>
              <h3 className="flex items-center mt-2">
                <PhoneCall className="mr-2" /> +12242534546
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium">Links</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a href="#" className="hover:opacity-75"> Home </a>
                <a href="#" className="hover:opacity-75"> About Us </a>
                <a href="#" className="hover:opacity-75"> Bookings</a>
                <a href="#" className="hover:opacity-75"> Blog </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a href="#" className="hover:opacity-75"> Terms of Use</a>
                <a href="#" className="hover:opacity-75"> Privacy Policy </a>
                <a href="#" className="hover:opacity-75"> Cookie Policy </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Products</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a href="#" className="hover:opacity-75">Take Tour </a>
                <a href="#" className="hover:opacity-75"> Live Chat </a>
                <a href="#" className="hover:opacity-75"> Reviews </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Newsletter</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a href="#" className="hover:opacity-75"> Stay Up To Date</a>
                <div className="flex mt-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="bg-transparent outline-none border-none flex-grow p-2"
                    aria-label="Email"
                  />
                  <button type="button" className="bg-black text-white p-3">
                    Subscribe
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <hr className="border-gray-500 mt-8" />
        <div className="mt-8 text-xs text-gray-800 text-center">
          <p>&copy; 2022 Uifry.Com All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
