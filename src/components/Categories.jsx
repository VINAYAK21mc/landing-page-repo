import React from "react";
import { BsFillArrowUpRightSquareFill, BsCameraVideo } from "react-icons/bs";

function Categories() {
  return (
    <div className="w-full bg-[#E9F8F3B2] py-[150px]">
      <div className="md:max-w-[1480px] max-w-[500px] mx-auto p-5">
        <h1 className="py-2 md:text-5xl text-4xl font-medium md:leading-[72px]">
          Most Popular <span className="text-[#20B486]">Categories</span>
        </h1>
        <p className="py-3 text-lg text-gray-600">
          Various versions have evolved over the years, sometimes by accident,
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
          {[...Array(12)].map(() => {
            return (
              <div
                className="flex justify-between items-center px-5 py-4 bg-white rounded-md border border-white hover:border-[#20B486]"
                style={{ boxShadow: "0px 3px 12px 0px #4B4B4B14" }}
              >
                <div className="flex justify-center">
                  <BsCameraVideo size={30} color="#000000" />
                  <p className="m-auto px-6">Design</p>
                </div>
                <BsFillArrowUpRightSquareFill size={30} color="#20B486" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
