import { useState } from "react";
import { FilterSidebar, SearchParams } from "./FilterSidebar";
import { ICompanyProfile } from "../utils/ICompany";
import { companies as Companies } from "../utils/data";
import { CompanyCard } from "./CompnayCard";

export const LoanReviews: React.FC = () => {
  const [companies, setCompanies] = useState<ICompanyProfile[]>(Companies);
  const [searchParams, setSearchParams] = useState<SearchParams>({
    searchTerm: "",
    selectedIndustries: [],
    selectedCountries: [],
  });

  const handleSearchParamsChange = (params: SearchParams) => {
    setSearchParams(params);
  };

  const filteredCompanies = companies.filter((company) => {

    const normalizedSearchTerm = searchParams.searchTerm.trim().toLowerCase();
    const matchesSearchTerm = company.name
      .toLowerCase()
      .includes(normalizedSearchTerm);

    const matchesIndustry =
      searchParams.selectedIndustries.length === 0 ||
      searchParams.selectedIndustries.some((industry) =>
        company.industry
          .map((i) => i.toLowerCase())
          .includes(industry.toLowerCase())
      );

    const matchesCountry =
      searchParams.selectedCountries.length === 0 ||
      searchParams.selectedCountries
        .map((c) => c.toLowerCase())
        .includes(company.country.toLowerCase());

    return matchesSearchTerm && matchesIndustry && matchesCountry;
  });

  return (
    <section className="loan-reviews loan-reviews--tertiary section py-3">
      <div className="container">
        <div className="row justify-content-center">
          <FilterSidebar onSearchParamsChange={handleSearchParamsChange} />

          <div className="col-12 col-lg-11 col-xl-9 col-xxl-8">
            <div className="d-flex flex-column gap-4">
              {filteredCompanies.length > 0 ? (
                filteredCompanies.map((company, index) => (
                  <CompanyCard
                    key={index}
                    company={company}
                    useInProfile={false}
                  />
                ))
              ) : (
                <div className=" d-flex justify-content-center align-items-center mt-5 mb-5">
                  <div className="col-lg-6">
                    <div>
                      {" "}
                      <img
                        src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527130.jpg?t=st=1717106459~exp=1717110059~hmac=e2b73839c4c77af700936139a5380630d838b3de719facb687f7877143e75118&w=1060"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div>
                      <h4 className="text-center">
                        No company match your filter criteria.
                      </h4>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {filteredCompanies.length > 0 && (
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
