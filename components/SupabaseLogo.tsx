import Logo from "@/assets/images/logo/offroad-logo-black.png";
import Image from "next/image";

// send props to the Image component
export default function OraLogo() {
  return <Image src={Logo} alt="Offroad Logo" />;
}
