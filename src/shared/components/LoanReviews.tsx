import { useState } from "react";
import { CompanyCard } from "./CompnayCard";
import { FilterSidebar } from "./FilterSidebar";
import { ICompanyProfile } from "../utils/ICompany";
import { companies as Companies } from "../utils/data";

export const LoanReviews: React.FC = () => {
  const [companies, setCompanies] = useState<ICompanyProfile[]>(Companies);
  return (
    <section className="loan-reviews loan-reviews--tertiary section py-3">
      <div className="container">
        <div className="row justify-content-center">
          <FilterSidebar />

          <div className="col-12 col-lg-11 col-xl-9 col-xxl-8">
            <div className="d-flex flex-column gap-4">
              {companies.map((company, index) => (
                <CompanyCard
                  key={index}
                  company={company}
                  useInProfile={false}
                />
              ))}
            </div>
            <div className="row">
              <div className="col-12">
                <nav aria-label="Page navigation" className="nav_pagination">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="prev-icon"></span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="next-icon"></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
