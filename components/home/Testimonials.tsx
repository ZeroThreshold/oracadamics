"use client";

import { InstagramEmbed } from "react-social-media-embed";

const linksinsta = [
  "https://www.instagram.com/p/CyNhXSoL2sf/",
  "https://www.instagram.com/p/CvMnaT4h7vM/",
  "https://www.instagram.com/p/CslBN5bPQm8/",
  "https://www.instagram.com/p/CpxRXFgNc-T/",
  "https://www.instagram.com/p/C2bvzqSreB_/",
  "https://www.instagram.com/p/C5Dhjz-L4wa/",
];

const Testimonials = () => {
  return (
    <div className="my-36">
      <div className="container flex flex-col gap-28">
        <div className="text-center uppercase text-6xl font-extrabold">
          Testimonials
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {linksinsta.map((link) => (
            <InstagramEmbed url={link} key={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
