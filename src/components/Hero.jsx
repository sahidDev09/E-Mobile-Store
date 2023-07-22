import React from "react";
import mobilehero from "../icons/mobileheor.png"
import { NavLink } from "react-router-dom";

const Hero = () => {
  return <div>
     <section className=" p-10">
      <div className=" container mx-auto mt-16 sm:flex items-center justify-between lg:scal-[105%]">
        <div className=" mb-10 sm:mr-10">
          <img className="w-[500px]" src={mobilehero} alt="mainimg" />
        </div>

        <div className=" sm:mx-auto text-xl items-center justify-center">
          <p className=" text-center text-white w-[60%] bg-green-700 md:w-[70%] lg:w-[45%]  sm:w-[40%] py-2 mb-4">
            10% Off on All Products
          </p>
          <h1
            id="maintext"
            className="text-4xl sm:text-2xl md:text-5xl lg:text-[4rem] mb-4">
            Widest Choice and<br /> <span id="texteffect">Best Offers</span> Guaranteed
          </h1>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
            <br /> commodi? Sit ducimus incidunt nam placeat.
          </p>
          <NavLink to="/about">
          <button className=" py-2 rounded-lg px-4 hover:bg-orange-500 transition-all text-white bg-orange-400  mt-7">
            Explore Now <span className=" hover:animate-ping"> ▶️ </span>
          </button>
          </NavLink>
        </div>
      </div>
    </section>
  </div>
};

export default Hero;
