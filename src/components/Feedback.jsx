import React from "react";
import Slider from "react-slick";
import { avatar, quotationMark } from "../assets";

function InternalCard() {
  return (
    <div className="m-2 my-4 bg-white drop-shadow-md overflow-hidden rounded-xl p-5">
      <div className="flex justify-between">
        <div className="flex justify-start">
          <img src={avatar} alt="" />
          <div className="flex flex-col justify-between p-2">
            <h2 className="font-bold">Jenny Wilson</h2>
            <p>UI-UX Designer</p>
          </div>
        </div>
        <img src={quotationMark} className="h-[30px]" />
      </div>
      <p className="text-sm text-gray-600 py-3">
        Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam
        sed imperdiet turpis. In hac habitasse platea dictumst. Praesent nulla
        massa, hendrerit vestibulum gravida in, feugiat auctor felis.
        <br />
        <br/>
        Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam
        sed imperdiet turpis. In hac habitasse platea dictumst.
      </p>
    </div>
  );
}

function Feedback() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
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
    <div className="w-full bg-white p-5 py-[150px]">
      <div className="md:max-w-[1480px] max-w-[500px] mx-auto">
        <h1 className="py-2 md:text-5xl text-4xl font-medium md:leading-[72px]">
          Student <span className="text-[#20B486]">Feedback</span>
        </h1>
        <p className="py-5 text-lg text-gray-600">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <Slider {...settings}>
          <InternalCard />
          <InternalCard />
          <InternalCard />
          <InternalCard />
          <InternalCard />
          <InternalCard />
        </Slider>
      </div>
    </div>
  );
}

export default Feedback;
