import Image from "next/image";
import img1 from "@/assets/images/learningexp/adventuretrails.jpeg";
import img2 from "@/assets/images/learningexp/adventurelearningdayclinic.jpeg";
import img3 from "@/assets/images/learningexp/offroadclinic.jpeg";

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
      "Get to know your bike by learning the riding techn   iques to take your machine Off-road. An easy self-paced training program allowing you to use the bikes safely on gravel roads & trails",
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

const LearningExperiences = () => {
  return (
    <div className="my-36">
      <div className="container flex flex-col gap-28">
        <div className="text-center uppercase text-4xl lg:text-6xl font-extrabold">
          Learning Experiences
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ItemData.map((item) => (
            <MiniCard
              img={item.img}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

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
      </div>
    </div>
  );
};

export default LearningExperiences;
