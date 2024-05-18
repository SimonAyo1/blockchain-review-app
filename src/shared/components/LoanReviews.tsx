import { CompanyCard } from "./CompnayCard";
import { FilterSidebar } from "./FilterSidebar";


export const LoanReviews: React.FC = () => {
  const reviews = [
    {
      name: "Carriage Bank of The Free",
      description: "America’s Largest banking infrastructure",
      location: "28 Binary Rd. USA",
      rating: 4.5,
      imageUrl:
        "https://w7.pngwing.com/pngs/295/537/png-transparent-logo-bank-of-america-investment-banking-bank-blue-emblem-flag.png",
    },
    // Add more reviews here
  ];

  return (
    <section className="loan-reviews loan-reviews--tertiary section py-3">
      <div className="container">
        <div className="row justify-content-center">
          
            <FilterSidebar />
    
          <div className="col-12 col-lg-11 col-xl-9 col-xxl-8">
            <div className="d-flex flex-column gap-4">
              {reviews.map((review, index) => (
                <CompanyCard key={index} {...review} />
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
