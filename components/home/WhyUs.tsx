import { WhyUsInfo } from "@/config/whyus";
import Image from "next/image";

function WhyUs() {
  return (
    <div className="w-full flex flex-col gap-40 mb-20 container">
      {WhyUsInfo.map((info, index) => {
        const isEven = index % 2 === 0;
        return (
          <div className="flex flex-col items-center gap-20">
            <div className="flex justify-center items-center gap-1">
              {index === 0 ? (
                <div className="text-6xl font-extrabold text-nowrap">
                  What we offer
                </div>
              ) : (
                <img
                  src="/static/images/hills.png"
                  alt="hills"
                  className="w-40"
                />
              )}
            </div>

            <div key={index} className="grid gird-cols-1 lg:grid-cols-2 gap-20">
              {isEven && (
                <Image src={info.img} alt={info.title} className="rounded-md" />
              )}

              <div className="flex flex-col justify-center gap-7">
                <h2 className="text-6xl font-bold">{info.title}</h2>
                <p>{info.description}</p>
              </div>
              {!isEven && <Image src={info.img} alt={info.title} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WhyUs;
