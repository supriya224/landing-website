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
      <section>
        <h2>Testimonials</h2>
        <p className="text-5xl font-bold">What Our users say about us</p>
        <div className="grid grid-cols-2 w-full">
          <Image src={IMG} alt="" />
          <div>
            <h3>The Best Financial Accounting App Ever!</h3>
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
              <h3>{selectedUser.name}</h3>
              <p>{selectedUser.feedback}</p>
            </div>
          </div>
          </div>
         
        </div>
      </section>
    </MainLayout>
  );
};

export default Testimonial;
