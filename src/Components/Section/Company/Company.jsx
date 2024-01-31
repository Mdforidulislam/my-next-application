import Share from "@/Share/Share";
import React from "react";
import companyImage from '../../../../public/company.png'
import Image from "next/image";
const Company = () => {
  return (
    <div>
      <Share>
      <Image src={companyImage} width={1400} height={600} alt="company" />
      
      </Share>
    </div>
  );
};

export default Company;
