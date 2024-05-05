import LearningExperiences from "./LearningExperiences";
import Locations from "./Locations";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";

const HeroBottom = () => {
  return (
    <div>
      <WhyUs />
      <section
        className="section py-5 h-[100vh] parallax w-[99.9vw]"
        style={{ backgroundImage: `url("/static/images/para1.jpg")` }}
      ></section>
      <Locations />
      <section
        className="section py-5 h-[100vh] parallax w-[99.9vw]"
        style={{ backgroundImage: `url("/static/images/para2.jpg")` }}
      ></section>
      <Testimonials />
      <LearningExperiences />
    </div>
  );
};

export default HeroBottom;
