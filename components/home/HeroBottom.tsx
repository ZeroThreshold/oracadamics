import WhyUs from "./WhyUs";

const HeroBottom = () => {
  return (
    <div>
      <WhyUs />
      <section
        className="section py-5 h-[100vh] parallax w-[99.9vw]"
        style={{ backgroundImage: `url("/static/images/para1.jpg")` }}
      ></section>
    </div>
  );
};

export default HeroBottom;
