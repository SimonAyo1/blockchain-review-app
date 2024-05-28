import React, { useEffect } from "react";
import { LoanReviews } from "../shared/components/LoanReviews";
import { Banner } from "../shared/components/Banner";
import Header from "../shared/components/Header";

const Companies: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />

      <Banner title="  Explore Companies For Review" sub=" Review A Company" />
      <LoanReviews />
    </>
  );
};

export default Companies;
