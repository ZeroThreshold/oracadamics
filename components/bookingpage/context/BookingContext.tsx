"use client";

import React, { useState, ReactNode } from "react";

interface Course {
  id: number;
  original_title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
}

interface CourseContextValue {
  course: Course;
  setcourse: React.Dispatch<React.SetStateAction<Course>>;
}

export const CourseContext = React.createContext<
  CourseContextValue | undefined
>(undefined);

const CourseProvider = ({ children }: { children: ReactNode }) => {
  const [course, setcourse] = useState<Course>({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",
  });

  return (
    <CourseContext.Provider value={{ course, setcourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
