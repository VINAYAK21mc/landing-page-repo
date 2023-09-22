import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import { courses } from "../data/Courses";

function Courses() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1400,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full bg-[#E9F8F3B2] p-5 py-[150px]">
      <div className="md:max-w-[1480px] max-w-[500px] mx-auto">
        <h1 className="py-2 md:text-5xl text-4xl font-medium md:leading-[72px]">
          Most Popular <span className="text-[#20B486]">Courses</span>
        </h1>
        <p className="py-3 text-lg text-gray-600">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <Slider {...settings}>

          {courses.map(course=>{
            return <Card props={course}/>
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Courses;
