import React from "react";
import logo from "@/assets/images/logo/offroad-logo.png";
import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";

const AppFooter = () => {
  return (
    <div className="flex flex-col lg:flex-row item-center justify-between bg-black p-4 w-full gap-7 lg:gap-0">
      <Image src={logo} alt="offroad-logo" width="200" />

      <ul className="flex flex-col lg:flex-row lg:gap-4 text-gray-300">
        <li>
          <a
            href="https://www.instagram.com/offroadacademies/"
            target="_blank"
            className="hover:text-red-500 flex items-center"
          >
            <Instagram className="w-4 h-4 mr-2" />
            @offroadacademies
          </a>
        </li>
        <li>
          <a
            href="mailto:sales@offroadacademies.com"
            className="hover:text-red-500 flex items-center"
          >
            <Mail className="w-4 h-4 mr-2" />
            sales@offroadacademies.com
          </a>
        </li>
        <li>
          <a
            href="tel:+918550011116"
            className="hover:text-red-500 flex items-center"
          >
            <Phone className="w-4 h-4 mr-2" />
            +91 8550011116
          </a>
        </li>
      </ul>
      <div>
        <a href="#" className="text-gray-300 hover:text-red-500">
          Privacy Policy
        </a>
      </div>
      <div className="text-gray-300">
        &copy; {new Date().getFullYear()} Offroad Academies. All rights reserved
      </div>

      {/* <div className="container mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <ul className="flex flex-wrap gap-2 px-0 md:px-72">
            <li>
              <a href="#" className="text-gray-300 hover:text-red-500">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="text-gray-300 md:absolute md:right-4">
          &copy; {new Date().getFullYear()} Offroad Academies. All rights
          reserved
        </div>
      </div> */}
    </div>
  );
};

export default AppFooter;
