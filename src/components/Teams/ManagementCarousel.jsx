import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ManagementCarousel() {
  const objects = [
    {
      title: "Did you Know?",
      description1:
        "Goals have a 90% higher success rate if you follow up the progress on a weekly base.",
      description2:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    },
    {
      title: "A few words about company",
      description1: "A Study of Creativity",
      description2:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    },
    {
      title: "Did you Know?",
      description1:
        "Goals have a 90% higher success rate if you follow up the progress on a weekly base.",
      description2:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    },
    {
      title: "A few words about company",
      description1: "A Study of Creativity",
      description2:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    },
    {
      title: "Optimizing Web Performance",
      description1:
        "Reducing JavaScript execution time by optimizing critical rendering paths.",
      description2:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Optimizing your web app's performance by utilizing lazy loading."
    },
    {
      title: "Productivity Boost",
      description1:
        "You’re 50% more likely to complete a task if you break it down into smaller, manageable steps.",
      description2:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. Nulla facilisi."
    }
    
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
    <div className="mb-20 ">
      <Slider {...settings} className="">
        {objects.map((item, index) => (
          <div key={index}>
            <div className=" h-[400px] flex bg-gray-100">
              <div className="flex justify-end items-center px-20 w-1/2">
                <img
                  src="/images/carousel.png"
                  alt="img"
                  className="rounded-lg"
                  width={350}
                  height={350}
                />
              </div>
              <div className="flex flex-col  w-1/3  my-4 justify-center items-start ml-10">
                <h2 className="text-blue-500 font-semibold md:text-sm ">
                  {item.title}
                </h2>
                <p className="font-semibold  mt-2 sm:text:lg md:text-2xl text-wrap pr-2">
                  {item.description1}
                </p>
                <p className="text-[12px] mt-2 text-wrap pr-2">
                  {item.description2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ManagementCarousel;
