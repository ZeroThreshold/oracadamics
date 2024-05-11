import punedrift2 from "@/assets/images/driftrschoollogoblack.png";
import punedrift1 from "@/assets/images/prodirtlogo.png";
import goa1 from "@/assets/images/mototriplogo.png";
import hyd1 from "@/assets/images/fmaelogo.png";

import powerparts from "@/assets/images/powerparts.png";
import speedshop from "@/assets/images/speedshop1.png";

export const navItems = [
  {
    name: "Home",
    href: "/",
    items: false,
  },
  {
    name: "Our Story",
    href: "/aboutus",
    items: false,
  },
  {
    name: "Events",
    href: "/events",
    items: false,
  },
  {
    name: "Shop",
    href: "/shop",
    items: [
      {
        name: "SpeedShop Originals",
        description: "",
        href: "https://www.speedshoporiginals.com/",
        icon: speedshop,
      },
      {
        name: "PowerTech Parts",
        description: "Coming Soon!",
        href: "#",
        icon: powerparts,
      },
    ],
  },
  {
    name: "Academies",
    href: "/signup",
    items: [
      {
        name: "ProDirt Pune",
        description: "",
        href: "/prodirtpune",
        icon: punedrift1,
      },
      {
        name: "Drift-R School Pune",
        description: "",
        href: "https://tvsdriftr.offroadacademies.com/",
        icon: punedrift2,
      },
      {
        name: "MotoTrip Goa",
        description: "Coming soon!",
        href: "#",
        icon: goa1,
      },
    ],
  },
];
