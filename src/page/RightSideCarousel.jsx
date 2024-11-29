import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginPage from "./LoginPage";

const RightSideCarousel = () => {
  const imageObjects = [
    {
      src: "/images/login.png",
      text1:
        "By 2025, the global dataset volume is estimated to be 180 zettabytes (one followed by 21 zeroes!).",
      text2:
        "ZONIX AI will help you surf through this vast sea of datasets with ease.",
    },
    {
      src: "/images/signup.svg",
      text1:
        "Many datasets escape the sight of existing search engines due to non-standard publishing practices.",
      text2: "Fear not, ZONIX AI uncovers those datasets with wit and wisdom!",
    },
    {
      src: "/images/signup2.svg",
      text1:
        "Knowledge workers spend up to 25% of their time searching for data, costing millions for organisations.",
      text2: "ZONIX AI saves both time and money.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="h-screen">
      <div className="h-screen">
        <Slider {...settings} className="login-slickdots h-screen">
          {imageObjects.map((item, index) => (
            <div
              key={index}
              className="h-screen w-full flex justify-center bg-blue-50 text-center p-8"
            >
              <div className="mt-64">
                <h2 className="text-blue-500 font-bold text-xl lg:text-2xl">
                  {item.text1}
                </h2>
                <h2 className="font-semibold text-dtech-new-main mt-6 lg:text-2xl md:text-base">
                  {item.text2}
                </h2>
              </div>
              <div>
                <img
                  src="/images/code.svg"
                  className="mt-6 ml-60 w-[150px] lg:w-[300px]"
                  alt="carousel slide"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RightSideCarousel;
