import React from "react";
import MainLayout from "@/layouts/MainLayout";
import data from "../../data.json";
import Image from "next/image";
import Pic1 from "/public/assets/pic2.png";
import * as Icons from "react-feather";
// import './globals.css'

interface FeatureData {
  title: string;
  description: string;
  icon: string;
}

const Feature = () => {
  return (
    <MainLayout>
      <section className="  z-10 sm:relative xl:relative lg:relative md:relative ">
        <h2 className="text-red-500 text-center uppercase">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-28 mt-8 sm:relative xl:relative lg:relative md:relative">
        <div className=" w-[250px] h-[250px]  bg-gradient-to-b from-red-500 via-orange-400 to-yellow-200 rounded-full absolute z-0 top-[160%] sm:top-[10%] sm:left-[15%] translate-x-[4%] translate-y-[1%] md:top-[-10%] md:left-[1%] xl:top-[10%] xl:eft-[-4%] xl:translate-x-[50%] xl:translate-y-[50%] blur-[60px]"></div>
          <div className="w-full  h-full   ">
            <Image src={Pic1} alt="" className="sm:z-10 sm:relative xl:relative lg:relative md:relative" />
          </div>
          {/* <div className="w-full h-fit relative md:top-[40%] "> */}
          <div className="w-full h-fit sm:relative xl:relative lg:relative md:relative">
            <p className="text-5xl z-10 sm:relative xl:relative lg:relative md:relative font-bold flex justify-center">
              Uifry Premium
            </p>
            <div className=" w-[250px] h-[250px]  bg-gradient-to-b from-red-500 via-orange-400 to-yellow-200 rounded-full absolute top-[220%] sm:top-[1%] sm:left-[20%]  translate-x-[4%] translate-y-[1%] md:top-[-40%] md:left-[10%] lg:top-[-60%] lg:left-[30%] xl:top-[-60%] xl:left-[50%] xl:translate-x-[10%] xl:translate-y-[50%] blur-[50px]"></div>
            {data.features.map((feature: FeatureData, index: number) => {
              const IconComponent = Icons[feature.icon as keyof typeof Icons];
              return (
                <div key={index} className="feature-item p-4 flex gap-2">
                  <div> V
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-2">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Feature;
