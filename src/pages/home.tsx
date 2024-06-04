import MainLayout from '@/layouts/MainLayout'
import React from 'react'
import IMG from "/public/assets/iphone.png";
import IMG1 from "/public/assets/iphone1.png";
import IMG2 from "/public/assets/iphone2.png";
import Star from "/public/assets/pic4.png";
import Pic from "/public/assets/pic3.png";
import { ArrowRight, PlayCircle } from "react-feather";
import Image from 'next/image';

const HomePage = () => {
  return (
    <MainLayout>
        <section className='bg-purple-300 sm:bg-cyan-600 md:bg-lime-500 lg:bg-indigo-500 xl:text-teal-600 h-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 relative ">
          <div className=" my-32">
            <h3 className="text-6xl relative z-10">
              Make the Best Financial Desicions
            </h3>
            <div className=" w-[250px] h-[250px] bg-gradient-to-b from-red-500 via-orange-400 to-yellow-200 rounded-full absolute z-0  top-[3%] left-0 translate-x-[10%] md:translate-x-[30%] translate-y-[20%] blur-[70px]">

            </div>

            <div className=" w-[250px] h-[250px] bg-gradient-to-b from-red-500 via-orange-400 to-yellow-200 rounded-full absolute z-0  top-[110%] left-[-80%] sm:top-[130%] sm:left-[-30%] md:top-[20%] md:left-[20%] lg:top-[30%] lg:left-[30%] translate-x-[100%] translate-y-[20%] blur-[70px]"></div>
            <p className=" relative">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Excepturi iusto laboriosam facilis? Error, voluptas! Rem unde
              accusamus hic enim doloribus neque recusandae. Aspernatur nostrum
              pariatur aliquam itaque, quaerat in labore!
            </p>
            <div className="flex gap-7 my-6">
              <button className="bg-black flex text-white p-3">
                Get Started
                <ArrowRight />{" "}
              </button>
              <button className="flex justify-center items-center gap-3">
                {" "}
                <PlayCircle /> Watch Video
              </button>
            </div>
            <Image src={Pic} alt="" className="" />
          </div>
          <div className="h-fit relative items-center ">
            <Image
              src={Star}
              alt=""
            //   className="absolute top-1 left-10 w-[100%] h-[70%] transform z-10"
              className="absolute top-[-10%] lg:top-[-5%] sm:top-12 sm:left-10"
            />
            <Image
              src={IMG}
              alt=""
            //   className="absolute top-56 left-56 w-[80%] h-fit transform rotate-0 z-10"
              className=" absolute top-24 left-24 sm:top-40 sm:left-40 md:top-32 md:left-32 lg:top-44 lg:left-44 xl:top-48 xl:left-48 w-[80%] "
            />
            {/* md:w-[40%] md:top-56 md:left-96 */}
            <Image
              src={IMG2}
              alt=""
            //   className="absolute top-40 left-40 w-[80%] h-fit transform rotate-0 z-20"
              className=" absolute top-12 left-16 sm:top-32 sm:left-32 md:top-24 md:left-24 lg:top-32 lg:left-32 xl:top-36 xl:left-36 w-[80%] "
            />
            <Image
              src={IMG1}
              alt=""
            //    className="absolute top-3 w-[80%] h-fit transform rotate-[-120] z-30"
              className="absolute top-0 left-0 lg:top-0 lg:left-0 xl:top-0 xl:left-0  w-[80%] "
            />
          </div>
        </div>

        </section>
    </MainLayout>
  )
}

export default HomePage