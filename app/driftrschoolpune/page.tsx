import React from "react";
import Image from "next/image";
import prodirtPune from "@/assets/images/prodirt-collage.43359393.jpg";
import img1 from "@/assets/images/learningexp/adventuretrails.jpeg";
import img2 from "@/assets/images/learningexp/adventurelearningdayclinic.jpeg";
import img3 from "@/assets/images/learningexp/offroadclinic.jpeg";
import OraLogo from "@/assets/images/driftrschoollogoblack.png"; // Assuming this is the logo for ProDirt Pune
import { Button } from "@/components/ui/button";

export default function DriftRSchool() {
  const ItemData = [
    {
      title: "Level 1: Flat track training - Gears Not Included",
      img: img1,
      description:
        "Flat Tracking, is a fun, emerging, and accessible form of motorcycling that is among the fastest-growing motorsports in the world. Total training session 3 hours, saddle time 120 mins, rest 60 mins will include - classroom session, breakfast & gear-up time",
    },
    {
      title: "Level 2: Flat track training - Gears Included",
      img: img2,
      description:
        "Flat Tracking, is a fun, emerging, and accessible form of motorcycling that is among the fastest-growing motorsports in the world. Total training session 3 hours, saddle time 120 mins, rest 60 mins will include - classroom session, breakfast & gear-up time",
    },
  ];

  const MiniCard = ({
    img,
    title,
    description,
  }: {
    img: any;
    title: string;
    description: string;
  }) => {
    return (
      <div className="rounded-md shadow-lg px-5 lg:px-0">
        <Image className="w-full" src={img} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
          <Button className="gap-4 mt-4">Booking Open Now</Button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-10 md:mt-20">
      <div className=" mb-10">
        <div className="flex items-center justify-center mb-6">
          <Image
            src={OraLogo}
            alt="ProDirt Pune Logo"
            width={200} // adjust as needed
            height={200} // adjust as needed
          />
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-gray-900 ml-4">
            Drift-R School Pune
          </h1>
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase text-gray-900 mb-4">
          About US
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          Flat Tracking, is a fun, emerging, and accessible form of motorcycling
          that is among the fastest-growing motorsports in the world. TVS Motor
          Company is launching the first Drift R School at ProDirt Adventure,
          Pune This school aims to introduce/help/assist in understanding the
          nuances of this sport by creating a platform where all our TVS Ronin
          and other customers get to interact and learn drifting under the
          guidance of highly skilled trainers in a safe and controlled
          environment.
        </p>
        <Image
          className="p-8 mt-4 mb-12"
          src={prodirtPune}
          alt="prodirtpune"
          width={1200}
          height={800}
        />
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase text-gray-900 mb-12">
          Training Programs Offered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-x-12 gap-y-10 mb-12">
          {ItemData.map((item, index) => (
            <div key={index}>
              <MiniCard
                img={item.img}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
