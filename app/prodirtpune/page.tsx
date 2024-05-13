import React from "react";
import Image from "next/image";
import prodirtPune from "@/assets/images/prodirt-collage.43359393.jpg";
import img1 from "@/assets/images/learningexp/adventuretrails.jpeg";
import img2 from "@/assets/images/learningexp/adventurelearningdayclinic.jpeg";
import img3 from "@/assets/images/learningexp/offroadclinic.jpeg";
import OraLogo from "@/assets/images/prodirt-logo.png"; // Assuming this is the logo for ProDirt Pune
import { Button } from "@/components/ui/button";

export default function ProDirtAdventure() {
  const ItemData = [
    {
      title: "Clinic Level 1: Explore Adventure Trails Clinic",
      img: img1,
      description:
        "Get to know your bike by learning the riding techniques to take your machine Off-road. An easy self-paced training program allowing you to use the bikes safely on gravel roads & trails",
    },
    {
      title: "Clinic Level 2: Adventure Learning Day Clinic",
      img: img2,
      description:
        "A Day full of learning & riding to boost your confidence. An easy self-paced training program allowing you to use the bikes safely on gravel roads & trails",
    },
    {
      title: "Learn Off-Road Clinic",
      img: img3,
      description:
        "Get to know your bike by learning the riding techniques to take your machine Off-road. An easy self-paced training program allowing you to use the bikes safely on gravel roads & trails",
    },
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
          <Button className="gap-4 mt-4">Booking Open Soon</Button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mt-10 md:mt-20">
      <div className=" mb-10">
        <div className="flex items-center justify-center mb-6">
          <Image
            src={OraLogo}
            alt="ProDirt Pune Logo"
            width={400} // adjust as needed
            height={400} // adjust as needed
          />
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase text-gray-900 mb-4">
          About US
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          ProDirt Adventure is the go-to spot for Motorsport enthusiasts from
          all over Maharashtra offering the right technical terrain coupled with
          the immense beauty of the Maval region of Pune. The team specializes
          in 2-wheeler & 4-wheeler off-road training on various terrains.
        </p>
        <Image
          src={prodirtPune}
          className="flex items-center justify-center w-full my-20"
          alt="prodirtpune"
          width={1200}
          height={1200}
        />
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase text-gray-900 mb-12">
          Training Programs Offered
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
