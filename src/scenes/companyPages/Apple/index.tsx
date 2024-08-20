import React from 'react';
import CompanyLayout from "@/components/CompanyLayout";
import Row1 from "@/scenes/dashboard/Row1"; 
import Predictions from "@/scenes/predictions";

const Apple = () => {
  return (
    <CompanyLayout
      row1={<Row1 />}
      row2={<Predictions />}
      row3={<div />} 
    />
  );
};

export default Apple;
