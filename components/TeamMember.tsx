import React from "react";
import Image, { StaticImageData } from "next/image";
import { Instagram } from "lucide-react";

interface TeamMemberProps {
  image: StaticImageData;
  name: string;
  position: string;
  location: string;
  description: string;
  instalink: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  position,
  location,
  description,
  instalink,
  image,
}) => {
  return (
    <>
      <div className="mb-2 text-center">
        <Image
          src={image}
          alt={name}
          className="w-40 h-40 rounded-full mx-auto border-4 border-black/33 img-fluid relative z-10"
        />
      </div>
      <div className="p-4 bg-white rounded-lg text-black relative">
        <h3 className="uppercase text-lg font-bold">{name}</h3>
        <p className="mb-1 text-base text-gray-700 font-medium leading-relaxed">
          {position}
        </p>
        <p className="mb-1 text-base text-gray-700 font-medium leading-relaxed">
          {location}
        </p>
        <p className="mb-1 text-base text-gray-700 font-medium leading-relaxed">
          {description}
        </p>

        <a
          href={instalink}
          target="_blank"
          className="text-pink-600 text-xl text-center w-full flex justify-center items-center mt-4"
        >
          <Instagram />
        </a>
      </div>
    </>
  );
};

export default TeamMember;
