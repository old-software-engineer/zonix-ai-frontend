import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ManagementCarousel() {
  const objects = [
    {
      title: "Make the Most of Your Resources",
      description1:
        "Project management helps you allocate time, budget, and resources efficiently. ",
        description2: "By tracking progress and addressing risks early, you can avoid wastage and ensure optimal use of the available resources."
    },
    {
      title: "Set Clear Goals and Direction",
      description1:
        "Effective project management ensures that every team member understands the objectives and their roles. ",
        description2:"With a structured plan, your project stays on track, and everyone works towards a shared vision, reducing confusion and increasing productivity."
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
  };
  return (
    <div className="bg-gray-100 mt-10">
    
      <Slider {...settings} className="">
        {objects.map((item, index) => (
          <div key={index}>
            <div className="mt-10 h-[400px]">
              <h2 className="text-blue-500 font-semibold text-lg lg:text-xl text-center">
                {item.title}
              </h2>
              <p className="font-semibold text-dtech-new-main mt-6 lg:text-lg md:text-base text-center text-wrap">
                {item.description1}
              </p>
              <p className="font-semibold text-dtech-new-main mt-2 lg:text-lg md:text-base text-center text-wrap">
                {item.description2}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ManagementCarousel;
