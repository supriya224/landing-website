import Image from "next/image";
import React from "react";
import Img from "/public/assets/image.png";
import MainLayout from "@/layouts/MainLayout";
import Faq from "@/components/core/Faq";
import Testimonial from "./testimonial";
import Advantage from "@/components/core/advantage";
import Feature from "./features";
import Footer from "@/components/shared/footer/footer";
import IMG from "/public/assets/iphone.png";
import IMG1 from "/public/assets/iphone1.png";
import IMG2 from "/public/assets/iphone2.png";
import Star from "/public/assets/pic4.png";
import Pic from "/public/assets/pic3.png";
import { ArrowRight, PlayCircle } from "react-feather";

const Hero = () => {
  return (
    <MainLayout>
      <section className="mx-auto container font-customFont">
        <div className=" flex justify-between relative z-30 h-fit ">
          <div className=" my-32">
            <h3 className="text-7xl relative z-10">
              Make the Best Financial Desicions
            </h3>
            <div className=" w-[250px] h-[250px]  bg-gradient-to-b from-red-500 via-orange-400 to-yellow-200 rounded-full absolute z-0 inset-0 top-[3%] left-[10%] translate-x-[100%] translate-y-[20%] blur-[30px]"></div>
            <div className=" w-[250px] h-[250px]  bg-gradient-to-b from-red-500 via-orange-400 to-yellow-200 rounded-full absolute z-1 top-[30%] left-[50%] translate-x-[50%] translate-y-[50%] blur-[30px]"></div>
            <p className=" relative">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi iusto laboriosam facilis? Error, voluptas! Rem unde
              accusamus hic enim doloribus neque recusandae. Aspernatur nostrum
              pariatur aliquam itaque, quaerat in labore!
            </p>
            <div className="flex gap-12 my-6">
              <button className="bg-black flex text-white p-3">
                Get Started
                <ArrowRight />{" "}
              </button>
              <button className="flex justify-center items-center gap-3">
                {" "}
                <PlayCircle /> Watch Video
              </button>
            </div>
            <Image src={Pic} alt="" className="mt-12" />
          </div>
          <div className="relative w-screen h-screen ">
            {/* image section */}
            <Image
              src={Star}
              alt=""
              className="absolute top-12 left-12 w-[100%] h-[80%] transform z-10"
            />
            <Image
              src={IMG}
              alt=""
              className="absolute top-40 left-40 w-[80%] h-fit transform rotate-0 z-10"
            />
            <Image
              src={IMG2}
              alt=""
              className="absolute top-28 left-28 w-[80%] h-fit transform rotate-0 z-20"
            />
            <Image
              src={IMG1}
              alt=""
              className="absolute top-0 w-[80%] h-fit transform rotate-[-120] z-30"
            />
          </div>
        </div>

        {/* other sections */}
        <div>
          <Feature />
          <Advantage />
          <Testimonial />
          <Faq />
          <div className="relative z-10">
            <div className=" w-[150px] h-[150px]  bg-gradient-to-b from-red-500 via-orange-400 to-yellow-200 rounded-full absolute z-0 top-[-30%] left-[-10%] translate-x-[50%] translate-y-[50%] blur-[30px]"></div>
            <Image src={Img} className="w-full h-full" alt="" />
          </div>

          <Footer />
        </div>
      </section>
    </MainLayout>
  );
};

export default Hero;
