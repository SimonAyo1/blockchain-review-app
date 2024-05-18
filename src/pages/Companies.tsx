import React from "react";
import { LoanReviews } from "../shared/components/LoanReviews";
import { Banner } from "../shared/components/Banner";

const Companies: React.FC = () => {
  return (
    <div>
      <Banner title="  Explore Companies For Review" sub=" Review A Company" />
      <LoanReviews />
    </div>
  );
};

export default Companies;
