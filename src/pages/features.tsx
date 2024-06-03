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
      <section className="">
        <h2 className="text-red-500 text-center uppercase">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-28 mt-8 relative">
        <div className=" w-[250px] h-[250px]  bg-gradient-to-b from-red-500 via-orange-400 to-yellow-200 rounded-full absolute z-1 top-[10%] left-[-4%] translate-x-[50%] translate-y-[50%] blur-[30px]"></div>
          <div className="w-full  h-full relative">
            <Image src={Pic1} alt="" />
          </div>
          <div className="w-full h-fit relative ">
            <p className="text-5xl font-bold flex justify-center">
              Uifry Premium
            </p>
            <div className=" w-[250px] h-[250px]  bg-gradient-to-b from-red-500 via-orange-400 to-yellow-200 rounded-full absolute z-1 top-[-50%] left-[60%] translate-x-[10%] translate-y-[50%] blur-[70px]"></div>
            {data.features.map((feature: FeatureData, index: number) => {
              const IconComponent = Icons[feature.icon as keyof typeof Icons];
              return (
                <div key={index} className="feature-item p-4 flex gap-2">
                  <IconComponent className="w-3 h-6 mb-4" />

                  <div>
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
