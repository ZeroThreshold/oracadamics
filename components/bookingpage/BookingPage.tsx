import React, { useContext } from "react";

//component
import MovieHero from "./BookingHero";

//context
import { CourseContext } from "./context/BookingContext";

const BookingPage = () => {
  //const { course } = useContext(CourseContext);

  return (
    <>
      <MovieHero />
      <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
        <div className="flex flex-col items-start gap-3">
          <h2 className="text-gray-800 font-bold text-2xl">About the Movie</h2>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h1 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h1>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 px-3 py-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="h-8 w-8"></div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get Flat 10% festive discount on Visa Cards
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 px-3 py-3 border-yellow-400 border-dashed border-2 rounded-md">
              <div className="h-8 w-8"></div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Filmy Pass</h3>
                <p className="text-gray-600">
                  Get Flat 10% festive discount on Filmy Cards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
