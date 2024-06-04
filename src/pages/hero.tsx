import Image from "next/image";
import React from "react";
import Img from "/public/assets/image.png";
import MainLayout from "@/layouts/MainLayout";
import Faq from "@/components/core/Faq";
import Testimonial from "./testimonial";
import Advantage from "@/components/core/advantage";
import Feature from "./features";
import Footer from "@/components/shared/footer/footer";
import Home from "@/app/page";
import HomePage from "./home";


const Hero = () => {
  return (
    <MainLayout>
      <section className="mx-auto container font-customFont bg-purple-300 sm:bg-cyan-600 md:bg-lime-500 lg:bg-indigo-300 xl:text-teal-600 h-auto ">
        <HomePage/>
          <Feature />
          {/* <Advantage />
          <Testimonial />
          <Faq />
          <div className="relative xl:relative lg:relative md:relative">
            <div className=" w-[150px] h-[150px]  bg-gradient-to-b from-red-500 via-orange-400 to-yellow-200 rounded-full absolute z-0 top-[-80%] left-[-10%] lg:top-[-20%] lg:left-[-5%]  xl:top-[-20%] xl:left-[-5%] translate-x-[10%] translate-y-[50%] blur-[50px]"></div>
            <Image src={Img} className="w-full h-full" alt="" />
          </div>
          <Footer /> */}
      </section>
    </MainLayout>
  );
};

export default Hero;
