import React from 'react';
import Image, { StaticImageData } from "next/image";

interface TeamMemberProps {
  image: StaticImageData;
  name: string;
  position: string;
  location: string;
  description: string;
  instalink: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, location, description, instalink, image }) => {
  return (
    <div className="col-lg-6 col-md-6 col-12 relative">
      <div className='mb-2 text-center relative z-10'>
          <Image src={image} alt="" className="w-40 h-40 rounded-full mx-auto border-4 border-black/33 img-fluid relative z-10" />
      </div>
      <div className='p-4 bg-white rounded-lg text-black relative -mt-20 pt-28 z-0'>
          <h3 className='uppercase text-lg font-bold'>{name}</h3>
          <p className="mb-1 text-base text-gray-700 font-medium leading-relaxed">{position}</p>
          <p className="mb-1 text-base text-gray-700 font-medium leading-relaxed">{location}</p>
          <p className="mb-1 text-base text-gray-700 font-medium leading-relaxed">{description}</p>
          <p className="mb-1 text-base text-gray-700 font-medium leading-relaxed">
              <a href={instalink} target="_blank" className='text-pink-600 text-xl'><i className="fa fa-instagram"></i></a>
          </p>
      </div>
    </div>
  );
};

export default TeamMember;
