import Image from "next/image";
import React from "react";
import Img from "/public/assets/image.png";
import MainLayout from "@/layouts/MainLayout";
import Faq from "@/components/core/Faq"
import Testimonial from "./testimonial";
import Advantage from "@/components/core/advantage";

const Hero = () => {
  return (
    <MainLayout>
      <div className="mx-auto container">
        <Advantage/>
        <Testimonial/>
        <Faq />
        <Image src={Img} className="w-full h-full" alt="" />
      </div>
    </MainLayout>
  );
};

export default Hero;
