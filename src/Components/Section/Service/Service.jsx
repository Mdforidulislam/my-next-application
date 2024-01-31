import React from "react";
import image from '../../../../public/Image.png'
import Image from "next/image";

const Service = ({left}) => {
    
  return (
    <div className={`block md:flex gap-6 justify-between items-center h-full w-full ${left ?'flex-row-reverse' :''}`}>
      <div className=" md:w-2/4 space-y-5 w-full">
          <p>OUR EXPERTISE  ________</p>
          <h1 className="md:text-4xl font-bold lg:text-5xl ">Transforming Finances With Strategic Wealth Management</h1>
          <p>Guiding You on Your Global Financial Success Journey Through Customized & Personalized Financial Consulting Services. Achieve Your Goals with Data-Driven Expertise and Secure Your Financial Future, Successfully Navigating the Ever-Changing Finance </p>
          <p>
          Were Committed to Providing You with Expert Guidance, Proven Strategies & Personalized Approach to Ensure Financial Prosperity
          </p>

          <button className="border px-6 py-2 ">Explore Services</button>

      </div>
      <div>
        
        <Image src={image} width={500} height={500} alt="image"/>
      </div>
    </div>
  );
};

export default Service;
