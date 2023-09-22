import React from "react";
import { cta } from "../assets";

function CTA() {
  return (
    <div className="w-full bg-[#E9F8F3B2] p-5 py-[150px]">
      <div className="md:max-w-[1480px] max-w-[500px]  m-auto grid sm:grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-2">
          <h1 className="md:text-5xl text-4xl font-medium md:leading-[64px]">
            Join <span className="text-[#20B486]">World's largest</span>{" "}
            learning platform today
          </h1>
          <p className=" text-lg text-gray-600">
            Start learning by registering for free
          </p>

          <button className="px-8 py-5 mt-5 rounded-md bg-[#20B486] text-white font-bold sm:w-full md:w-fit">
                Sign Up For Free
            </button>
        </div>
        <img className="order-first" src={cta} alt="Cta image" />
      </div>
    </div>
  );
}

export default CTA;
