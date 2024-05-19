import React, { useContext } from "react";
import Image from "next/image";

// components
import MovieInfo from "./BookingInfo";
import background from "@/assets/images/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg";
import poster from "@/assets/images/j3Z3XktmWB1VhsS8iXNcrR86PXi.jpg";

interface Course {
  poster_path: string;
  backdrop_path: string;
}

const MovieHero = () => {
  const course = {
    poster_path: background,
    backdrop_path: poster,
  };

  return (
    <div className="relative">
      {/* Background Image */}
      <div className=" h-full object-cover absolute inset-0 z-10">
        <Image
          src={course.backdrop_path}
          alt="backdrop"
          className="h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>

      {/* Poster and Info */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-start px-20 py-16 lg:py-20">
        <div className="lg:w-1/3 flex justify-center lg:justify-start">
          <div className="w-64 lg:w-96 h-96 lg:h-144">
            <Image
              src={course.poster_path}
              alt="poster"
              className="h-full rounded-xl"
            />
          </div>
        </div>
        <div className="lg:w-2/3 mt-8 lg:mt-0 lg:ml-10">
          <MovieInfo />
        </div>
      </div>
    </div>
  );
};

export default MovieHero;
