/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import data from "../../data.json";
import IMG from "/public/assets/Group.png";
import User from "/public/assets/Group 28.png";

interface TestimonialData {
  name: string;
  feedback: string;
  avatar: string;
}

const Testimonial = () => {
  const [selectedUser, setSelectedUser] = useState<TestimonialData>(
    data.testimonials[0]
  );

  const handleUserClick = (user: TestimonialData) => {
    setSelectedUser(user);
  };

  return (
    <MainLayout>
      <section className="sm:relative xl:relative lg:relative md:relative">
        <h2 className="text-center text-xl">Testimonials</h2>
        <p className="text-5xl font-bold text-center justify-center  mt-2 mb-8">What Our users say about us</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full px-12">
        <div className=" w-[250px] h-[250px]  bg-gradient-to-b from-red-500 via-orange-400 to-yellow-200 rounded-full absolute z-1 top-[530%] left-[20%] sm:top-[30%] sm:left-[30%]  md:top-[30%] md:left-[10%] md:translate-x-[4%] md:translate-y-[1%] xl:top-[18%] xl:left-[5%] xl:translate-x-[50%] xl:translate-y-[50%] blur-[30px]"></div>
          <Image src={IMG} alt="" className="  z-10 sm:relative xl:relative lg:relative md:relative" />
          <div>
            <h3 className="text-3xl font-bold my-2 ">The Best Financial Accounting App Ever!</h3>
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
            <div className="mt-8">
            <div className="flex space-x-4">
              {data.testimonials.map((testimonial, index) => (
                <Image
                  key={index}
                  src={User}
                  alt="user"
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-full cursor-pointer"
                  onClick={() => handleUserClick(testimonial)}
                />
              ))}
            </div>
            <div className="mt-4">
              <h3 className="text-3xl font-bold">{selectedUser.name}</h3>
              <p className="text-xl ">{selectedUser.feedback}</p>
            </div>
          </div>
          </div>
         </div>
        
      </section>
    </MainLayout>
  );
};

export default Testimonial;
