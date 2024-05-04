import React from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Price = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h1>
      <div className="flex flex-wrap">
        {pricingOptions.map((options, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {options.title}
                {options.title === "Pro" && (
                  <span className=" mb-4 ml-2 text-xl bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ">
                    (Most popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">
                  {options.price}
                  <span className="text-xl text-neutral-400 tracking-tight ml-2">
                    /month
                  </span>
                </span>
              </p>
              <ul>
                {options.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl   hover:bg-orange-900  border-orange-900 rounded-lg transition duration-200"
              >
                subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
