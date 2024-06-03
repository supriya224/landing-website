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
      <section className="mx-auto container font-customFont ">
        <HomePage/>
          {/* <Feature />
          <Advantage />
          <Testimonial />
          <Faq />
          <div className="">
            <div className=" w-[150px] h-[150px]  bg-gradient-to-b from-red-500 via-orange-400 to-yellow-200 rounded-full absolute z-0 top-[-30%] left-[-10%] translate-x-[50%] translate-y-[50%] blur-[50px]"></div>
            <Image src={Img} className="w-full h-full" alt="" />
          </div>

          <Footer /> */}
      </section>
    </MainLayout>
  );
};

export default Hero;
