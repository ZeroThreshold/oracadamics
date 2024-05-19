"use client";
import React, { useState } from "react";
import PaymentModal from "./paymentModel/PaymentModel";

interface Course {
  id: number;
  original_title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
}

const CourseInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const course = {
    name: "Pune",
    overview: "Pune course",
  };
  const rentCourse = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyCourse = () => {
    setIsOpen(true);
    setPrice(549);
  };

  return (
    <>
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-3">
        <h1 className="hidden lg:block text-white text-5xl font-bold">
          {course.name}
        </h1>
        <div className="flex flex-col-reverse lg:flex-col gap-3">
          <div className="text-white font-light flex flex-col gap-2 md:px-4">
            <h4>{course.overview}</h4>
          </div>
          <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
            <button
              onClick={rentCourse}
              className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
            >
              Rent ₹149
            </button>
            <button
              onClick={buyCourse}
              className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
            >
              Buy ₹549
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default CourseInfo;
