import { PieChart, Rocket, Fingerprint, Plus } from "lucide-react";
import punedrift2 from "@/assets/images/driftrschoollogoblack.png";
import punedrift1 from "@/assets/images/prodirtlogo.png";
import goa1 from "@/assets/images/mototriplogo.png";
import hyd1 from "@/assets/images/fmaelogo.png";

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
  },
  {
    name: "Academies",
    href: "/signup",
    items: [
      {
        name: "ProDirt Pune",
        description: "",
        href: "#",
        icon: punedrift1,
      },
      {
        name: "Drift-R School Pune",
        description: "",
        href: "#",
        icon: punedrift2,
      },
      {
        name: "MotoTrip Goa",
        description: "Coming soon!",
        href: "#",
        icon: goa1,
      },
      {
        name: "Fmae MotoPark Hyderabad",
        description: "Coming soon!",
        href: "#",
        icon: hyd1,
      },
    ],
  },
];
