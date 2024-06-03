import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import React from "react";
import Pic from "/public/assets/pic1.png";
import Pic1 from "/public/assets/pic2.png";
import { Bell, Star } from "react-feather";


const Advantage = () => {
  return (
    <MainLayout>
      <section className="relative font-customFont ">
        {/* first section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 h-fit  items-center leading-6">
          <div className=" leading-6">
            <h3 className="text-red-500">ADVANTAGES</h3>
            <p className="text-5xl font-extrabold">Why choose Uifry?</p>
            <h3 className="flex items-center gap-2 my-4 text-2xl font-bold">
              <span className="w-9 h-9 flex items-center text-white text-center justify-center bg-red-500 rounded-full">
                {" "}
                <Bell />{" "}
              </span>
              Clever Notifications
            </h3>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              blanditiis optio temporibus doloremque voluptatem, error voluptate
              voluptates tenetur animi quaerat quibusdam cum fugit, nihil
              obcaecati illum quae placeat eius modi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Hic voluptas vel, laudantium nostrum
              corrupti quasi necessitatibus, quos quisquam quidem ullam vero
              animi excepturi numquam reprehenderit nemo optio repellendus
              eligendi maxime?
            </p>
          </div>
          <div className=" w-[250px] h-[250px]  bg-gradient-to-b from-red-500 via-orange-400 to-yellow-200 rounded-full absolute z-1 top-[10%] left-[50%] translate-x-[50%] translate-y-[50%] blur-[30px]"></div>
          <div>
            <Image src={Pic} alt="" className="w-full h-full relative" />
          </div>
        </div>
        {/* second section */}
        <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center ">
        <div className=" w-[250px] h-[300px] bg-gradient-to-b from-red-500 via-orange-400 to-yellow-200 transform rotate-45 rounded-full absolute z-1 top-[60%] left-[10%] translate-x-[50%] translate-y-[50%] blur-[30px]"></div>
          <div>
            <Image src={Pic1} alt="" className="w-full h-full relative" />
          </div>
          <div>
          <h3 className="flex items-center gap-2 my-4 text-2xl font-bold">
              <span className="w-9 h-9 flex items-center text-white text-center justify-center bg-red-500 rounded-full">
                {" "}
                <Star />{" "}
              </span>
              Fully Customizable
            </h3>
            <h3></h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              blanditiis optio temporibus doloremque voluptatem, error voluptate
              voluptates tenetur animi quaerat quibusdam cum fugit, nihil
              obcaecati illum quae placeat eius modi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Hic voluptas vel, laudantium nostrum
              corrupti quasi necessitatibus, quos quisquam quidem ullam vero
              animi excepturi numquam reprehenderit nemo optio repellendus
              eligendi maxime?
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Advantage;
