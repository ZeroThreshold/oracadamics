import Breadcrumbs from "@/components/BreadCrumb";
import altaf from "@/assets/images/altaf.jpg";
import aishwarya from "@/assets/images/aishwarya.jpg";
import nitesh from "@/assets/images/nitesh.jpg";
import navi from "@/assets/images/navi.jpg";
import nelly from "@/assets/images/nellynew.jpg";
import sunny from "@/assets/images/sunny.jpg";

import prodirtLogo from "@/assets/images/prodirt-logo.png";
import tvsLogo from "@/assets/images/tvsdriftrblack.png";
import mototriplogo from "@/assets/images/mototriplogo.png";
import fmaeLogo from "@/assets/images/fmae-logo.png";

import TeamMember from "@/components/TeamMember";
import Image from "next/image";

const breadcrumbsInfo = {
  title: "ABOUT US",
  menus: [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "My Booking",
      link: "",
    },
  ],
};

const peopleData = [
  {
    image: nelly,
    name: "Nilesh Dhumal",
    position: "Founder & Head Trainer",
    location: "Off-Road Academies",
    description: `Nilesh "Nelly" Dhumal, our co-founder, whose lifelong love for two wheels began with the humble bicycle. His illustrious career spans Downhill MTB racing, Bicycle Industry Consulting, and instructing in Off-Road Adventure Motorcycles. Nelly's diverse riding journey, rooted in BMX and Mountain Biking, includes over a decade of personal training for thousands of riders, uniquely equipping him to assess and skillfully guide riders to the next level be it bicycle or motorcycle. He pioneered structured training programs now embraced by renowned motorcycle brands, offering precise insights into riding mechanics and techniques. He's also recognized for training celebrities in India.`,
    instalink: "https://www.instagram.com/_22nelly/",
  },
  {
    image: aishwarya,
    name: "Aishwarya Pissay",
    position: "Founder & Head Trainer",
    location: "Off-Road Academies",
    description: `Aishwarya Pissay, the co-founder, and a trailblazing Indian motorsports athlete. As the first Indian to win a World Title, she's a seasoned circuit and off-road motorcycle racer, boasting multiple National titles in Road Racing and Rally Championships. Over the past six years, Aishwarya has passionately shared her expertise through training at TVS Road Racing Camps, guiding AOG Ladakh Tour participants, and empowering women at the Women Offroad TVS Training Camp. Her achievements and dedication underscore her prominent role in motorsports and training. (Add Instagram Icons  with Direct Links to their individual Insta pages )`,
    instalink: "https://www.instagram.com/miss.pissay/",
  },
  {
    image: sunny,
    name: "Sunny Dhore",
    position: "Founder & Head Trainer",
    location: "Prodirt Adventure - Pune",
    description: `Sunny is more than just an enduro enthusiast, always seeking the next thrilling trail, the next stunning vista, and the next opportunity to inspire others to embrace the exhilarating world of enduro riding. Whether you're a kid or a big kid, a newbie, or an expert, Sunny loves to train and share the joy of the ride. But that's not all - he loves to embark on epic bike voyages and even teach on KTM's India Tours.`,
    instalink: "https://www.instagram.com/sunny_speedy/",
  },
  {
    image: nitesh,
    name: "Nitesh Chavan",
    position: "Head Trainer",
    location: "Prodirt Adventure - Pune",
    description: `Nitesh is a motorcycle trainer and coach at ProDirt Adventure. He's dedicated seven years to Wushu, securing numerous national titles and excelling in professional MMA. Currently pursuing a career in boxing with an Olympic dream, Nitesh's expertise extends to imparting invaluable knowledge to fellow riders who share his passion for offroad adventures.`,
    instalink: "https://www.instagram.com/kungfu_pilot/",
  },
  {
    image: altaf,
    name: "Altaf Khalifa",
    position: "Founder & Head Trainer",
    location: "MotoTrip Goa",
    description: `Altaf our accomplished trainer from Goa, India, is an expert in Royal Enfield mechanics and customizations, renowned in the off-roading community. With a rich history of exploring Goa's hidden gems and participating in 'Raid the Himalaya,' he's your trusted guide to adventure. He's been a pivotal figure in Royal Enfield rides and is now co-founder of Mototrip.in, delivering authentic Indian experiences on two wheels.`,
    instalink: "https://www.instagram.com/altaf3501/",
  },
];

export default async function AboutUS() {
  return (
    <div className="w-full ">
      <Breadcrumbs data={breadcrumbsInfo} />
      <div className="mt-28 ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12 font-medium">
              <h1 className="lg:text-6xl text-5xl font-extrabold mb-5 uppercase">
                offroad academies
              </h1>
              <p className="mb-4">
                At <strong>OFFROAD ACADEMIES</strong> and our Training Centers,
                our primary emphasis is on delivering top-tier off-road riding
                training and experiences. With a dedication to riders of all
                proficiency levels, our centers not only champion secure and
                self-assured off-road riding but also play a pivotal role in
                fostering the expansion of the adventure riding community.
                Additionally, we enhance the overall connection between the
                Automotive Brand and its valued customers.
              </p>
              <p className="mb-4">
                OFFROAD ACADEMIES is dedicated to cultivating the skills and
                passion of motorcycle enthusiasts seeking thrilling off-road
                experiences. Our training centers operate on a distinctive
                model, tailored to deliver specialized training and
                unforgettable adventures in the realm of off-road riding.
              </p>
              <strong className="block mb-4">Our Mission:</strong>
              <p>
                Our core mission is to empower riders with the expertise,
                techniques, and self-assurance needed to conquer demanding
                off-road terrains. We aim to foster a community of capable
                riders who can confidently navigate diverse landscapes on their
                motorcycles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="team-section bg-gray-100 text-center md:px-4 md:py-16 -skew-y-3 -rotate-4 mt-20">
        <div className="skew-y-3 rotate-4 container flex flex-col">
          <div className="pt-20">
            <div className="text-6xl font-extrabold mb-5 capitalize md:text-5xl md:mb-4">
              KEY PEOPLE
            </div>
            <p>
              A Passionate Team when it comes to having fun riding offroad
              motorcycles. Whether you are looking for adventure travel or
              training clinics to improve your riding skills, Our trainers and
              team members are well prepared for you
            </p>
          </div>

          <div className="mx-auto p-6 grid lg:grid-cols-2 grid-cols-1 gap-20">
            {peopleData.map((member, index) => (
              <div
                key={index}
                className="col-span-1 flex flex-col bg-white border-2 p-4 rounded-lg shadow-lg"
              >
                <TeamMember
                  image={member.image}
                  name={member.name}
                  position={member.position}
                  location={member.location}
                  description={member.description}
                  instalink={member.instalink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-24 bg-white">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-md-12 col-12 bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">OUR ACADEMIES</h2>
              <ul className="flex flex-wrap gap-8">
                <li className="flex flex-col items-center">
                  <Image
                    src={prodirtLogo}
                    className="w-24 mb-2"
                    alt="prodirt Logo"
                  />
                  <div className="text-center">Pune</div>
                </li>
                <li className="flex flex-col items-center">
                  <Image
                    src={tvsLogo}
                    className="w-24 mb-2"
                    alt="motoFarm Logo"
                  />
                  <div className="text-center">Pune</div>
                </li>
                <li className="flex flex-col items-center">
                  <Image
                    src={mototriplogo}
                    className="w-24 mb-2"
                    alt="mototrip Logo"
                  />
                  <div className="text-center">Goa</div>
                </li>
              </ul>
              <ul className="pl-4 mt-8 list-disc">
                <li className="mb-2">
                  Our Locations are the go-to places for recreational &
                  professional Off-road activities.
                </li>
                <li className="mb-2">
                  We are experienced in track curating & building for Adventure,
                  Motocross, 4X4 & Flat Tracks.
                </li>
                <li className="mb-2">
                  Ready to roll Flat Track Training Systems.
                </li>
                <li className="mb-2">
                  Our Facilities are Equipped with curated tracks & sufficient
                  infrastructure to afford bike Maintenance & safe storage.
                </li>
                <li className="mb-2">
                  In-house F&B facilities for a comfortable experience
                </li>
                <li className="mb-2">
                  Well-maintained academies with camping, dorm & bio facilities.
                </li>
                <li className="mb-2">
                  Popular & Ever Growing Social Media presence in the segment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
