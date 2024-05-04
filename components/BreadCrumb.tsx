import React from "react";
import breadcrumb from "@/assets/images/breadcrumb/inner-page-banner.jpg";
import Image from "next/image";

interface BreadcrumbsProps {
  data: {
    title: string;
    menus: {
      name: string;
      link: string;
    }[];
  };
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ data }) => {
  return (
    <div className="relative bg-[#f20a51]">
      <Image
        src={breadcrumb}
        alt=""
        className="img-fluid w-full min-h-[250px] object-cover"
      />
      <h2 className="absolute inset-0 flex items-center justify-center text-white text-center text-2xl font-bold">
        {data.title}
      </h2>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white skew-y-[-2deg] transform-gpu z-10 -mb-10 transform-origin-top-left"></div>
    </div>
  );
};

export default Breadcrumbs;
