import React from "react";
import Image from "next/image";
import prodirtPune from "@/assets/images/prodirt-collage.43359393.jpg";
import img1 from "@/assets/images/learningexp/adventuretrails.jpeg";
import img2 from "@/assets/images/learningexp/adventurelearningdayclinic.jpeg";
import img3 from "@/assets/images/learningexp/offroadclinic.jpeg";
import drpune from "@/assets/images/driftrschoollogoblack.png";

// Data in JSON format
const levelsData = [
  {
    image: img1,
    heading: "Level 1: Flat track training - Gears Not Included",
    text: "Flat Tracking, is a fun, emerging, and accessible form of motorcycling that is among the fastest-growing motorsports in the world. Total training session 3 hours, saddle time 120 mins, rest 60 mins will include - classroom session, breakfast & gear-up time",
    learn: ["Flat track training", "Customised Ronin Flat Tracker"],
    carry:
      "Riders carry their own safety gear which suits them best,  Riding jackets & Pants,  Helmets,  Gloves,  and Boots are compulsory,  Knee,  Elbow & Chest Guards are mandatory. Refillable water bottle or hydration bag.",
    inclusions: [
      "120 mins of Flat Tracking",
      "Access to all Common areas",
      "Customized Ronin Flat Tracker with fuel",
      "Trainer",
    ],
    exclusions: "Other than mentioned in the inclusions",
    duration: {
      batch1: "09:00 am to 12:00 pm (reporting time 08:00 am)",
      batch2: "01:00 pm to 04:00 pm (reporting time 12:00 pm)",
    },
    pricing: "Standard 2500/-",
  },
  {
    image: img1,
    heading: "Level 2: Flat track training - Gears Included",
    text: "Flat Tracking, is a fun, emerging, and accessible form of motorcycling that is among the fastest-growing motorsports in the world. Total training session 3 hours, saddle time 120 mins, rest 60 mins will include - classroom session, breakfast & gear-up time",
    learn: ["Flat track training", "Customised Ronin Flat Tracker"],
    carry:
      "Riders carry their own safety gear which suits them best,  Riding jackets & Pants,  Helmets,  Gloves,  and Boots are compulsory,  Knee,  Elbow & Chest Guards are mandatory. Refillable water bottle or hydration bag.",
    inclusions: [
      "120 mins of Flat Tracking",
      "Access to all Common areas",
      "Customized Ronin Flat Tracker with fuel",
      "Safety gears",
    ],
    exclusions: "Other than mentioned in the inclusions",
    duration: {
      batch1: "09:00 am to 12:00 pm (reporting time 08:00 am)",
      batch2: "01:00 pm to 04:00 pm (reporting time 12:00 pm)",
    },
    pricing: "Standard 3000/-",
  },
];

export default function ProDirtAdventure() {
  return (
    <div className="container flex flex-col gap-20">
      {/* Landing */}
      <section>
        <div className="mt-10 md:mt-20 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center mb-6">
            <Image
              src={drpune}
              alt="ProDirt Pune Logo"
              width={600} // adjust as needed
              height={600} // adjust as needed
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="border-b border-b-black">About Us</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 text-justify">
            Flat Tracking, is a fun, emerging, and accessible form of
            motorcycling that is among the fastest-growing motorsports in the
            world. TVS Motor Company is launching the first Drift R School at
            ProDirt Adventure, Pune This school aims to introduce/help/assist in
            understanding the nuances of this sport by creating a platform where
            all our TVS Ronin and other customers get to interact and learn
            drifting under the guidance of highly skilled trainers in a safe and
            controlled environment.
          </p>
        </div>
        <Image className="rounded-lg w-full" src={img1} alt="drift-r-pune" />
      </section>

      <section className="mb-20">
        <div className="text-3xl md:text-5xl font-extrabold uppercase text-gray-900 mb-12">
          <span className="border-b border-b-black">
            Training Programs Offered
          </span>
        </div>
        <div className="flex flex-col gap-20">
          {levelsData.map((level, index) => (
            <div key={index} className="flex flex-col md:flex-row mb-6 gap-10">
              <div className="md:w-full">
                <h3 className="text-2xl md:text-4xl font-bold mb-2">
                  {level.heading}
                </h3>
                <p className="text-lg text-gray-700 text-justify">
                  {level.text}
                </p>
                <div className="mt-4">
                  <h4 className="text-xl font-semibold mb-2">
                    What will I Learn?
                  </h4>
                  <ul className="list-arrow pl-6">
                    {level.learn.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="text-xl font-semibold mt-4 mb-2">
                    Things to carry
                  </h4>
                  <p className="text-justify">{level.carry}</p>
                  <h4 className="text-xl font-semibold mt-4 mb-2">
                    Inclusions
                  </h4>
                  <ul className="list-arrow pl-6">
                    {level.inclusions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <h4 className="text-xl font-semibold mt-4 mb-2">
                    Exclusions
                  </h4>
                  <p>{level.exclusions}</p>
                </div>
                {/* Additional information */}
              </div>
              <div className="md:w-full">
                <Image
                  src={level.image}
                  alt="Image"
                  width={500}
                  height={300}
                  className="rounded-lg w-full"
                />
                <div className="mt-4 border border-gray-300 rounded-lg p-4">
                  <h4 className="text-xl font-semibold mb-2">Details</h4>
                  <div className="grid grid-cols-1 gap-y-4">
                    <div>
                      <strong>Duration:</strong>
                      <p>Batch 1: {level.duration.batch1}</p>
                      <p>Batch 2: {level.duration.batch2}</p>
                    </div>
                    <div>
                      <strong>Pricing:</strong>
                      <p>{level.pricing}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
