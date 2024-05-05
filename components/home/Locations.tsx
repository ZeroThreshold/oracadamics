import IndiaImage from "@/assets/images/indiamap.png";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const ItemData = [
  {
    title: "ProDirt Adventure",
    description:
      "ProDirt Adventure is the go-to spot for Motorsport enthusiasts from all over Maharashtra offering the right technical terrain coupled with the immense beauty of the Maval region of Pune. The team specializes in 2-wheeler &amp; 4-wheeler off-road training on various terrains.",
  },
  {
    title: "TVS DRIFT-R",
    description:
      "Flat Tracking, is a fun, emerging, and accessible form of motorcycling that is among the fastest-growing motorsports in the world. TVS Motor Company is launching the first Drift R School at ProDirt Adventure, Pune This school aims to introduce/help/assist in understanding the nuances of this sport by creating a platform where all our TVS Ronin and other customers get to interact and learn drifting under the guidance of highly skilled trainers in a safe and controlled environment.",
  },
  {
    title: "MotoTrip.in",
    description:
      "MotoTrip specializes in Adventure Tours across India. these tours offer experiences of riding a bike through picturesque back roads & trails across India. The team focuses on featuring ride experiences to the lesser-known places wherein a rider would rarely think of visiting on their own. We have some exciting packages for on-road and off-road experiences, especially in the GOA region and selected locations in India.",
  },
  {
    title: "FMAE Moto Park",
    description:
      "FMAE Moto Park is one stop to challenge your adventure threshold. A great terrain spread across more than 90 acres in the woods close to nature. Camp, Feast, Ride & Repeat is our Mantra at FMAE Moto Park.",
  },
];

const Locations = () => {
  return (
    <div className="my-36">
      <div className="container flex flex-col gap-28">
        <div className="text-center uppercase text-6xl font-extrabold">
          Our Academies
        </div>
        <div className="flex items-center flex-col gap-20">
          <Image src={IndiaImage} alt="India" className="w-[48rem]" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {ItemData.map((item) => (
              <CardItem title={item.title} description={item.description}>
                <Button>Visit Now</Button>
              </CardItem>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;

const CardItem = ({ title, description, children }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>{children}</CardFooter>
    </Card>
  );
};
