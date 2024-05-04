import React from 'react';
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
        <div className='relative bg-#f20a51 '>
        <Image src={breadcrumb} alt="" className='img-fluid w-full min-h-164 object-cover ' />
        <h2 className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-2xl font-bold">{data.title}</h2>
        
      </div>
      
    );
}

export default Breadcrumbs;