import { useEffect, useState } from "react";
import { Banner } from "../shared/components/Banner";
import { CompanyCard } from "../shared/components/CompnayCard";
import { ICompanyProfile } from "../shared/utils/ICompany";
import { companies as Companies } from "../shared/utils/data";
import { useParams } from "react-router-dom";
import { CONTRACT } from "../shared/useContract";
import { useReadContract } from "wagmi";
import ABI from "../shared/utils/abi.json";
import { CirclesWithBar } from "react-loader-spinner";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // Create an array of length 5 and map through it to render stars
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;

    if (rating >= starValue) {
      // Full star
      return <i key={index} className="bi bi-star-fill star-active" />;
    } else if (rating >= starValue - 0.5) {
      // Half star
      return <i key={index} className="bi bi-star-half star-active" />;
    } else {
      // Empty star (not rendered in your example but can be added)
      return <i key={index} className="bi bi-star star-active" />;
    }
  });

  return <div className="star_review">{stars}</div>;
};

export default function CompanyProfile() {
  const [company, setCompany] = useState<ICompanyProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const params: any = useParams();
  const { refetch: refetch } = useReadContract({
    address: CONTRACT,
    abi: ABI,
    functionName: "getCompanyReviews",
    args: [(company?.name as any) || "00"],
  });

  const getData = async () => {
    try {
      const res = await refetch();
      setCompany((prev: any) => ({
        ...prev,
        reviews: res.data,
      }));
    } catch (error) {}
  };
  useEffect(() => {
    const company = Companies.filter((company) => company.id == params.id)[0];
    setCompany(company);

    setTimeout(() => {
      getData();
    }, 500);
  }, []);

  return (
    <>
      {company && (
        <>
          {" "}
          <Banner title={company.name} sub="Company Profile" />
          <section className="reviews-details section">
            <div className="container ">
              <div className="row">
                <div className="col-12 col-xl-8 order-1 order-xl-0">
                  <div className="reviews-details__area">
                    <div className="reviews-details__part ">
                      <div className="loan-reviews loan-reviews--quaternary ">
                        <CompanyCard
                          company={company}
                          useInProfile={true}
                          setLoading={(status) => setIsLoading(status)}
                          refetch={() => getData()}
                        />
                      </div>
                      <div className="section__content ">
                        <h2 className="section__content-title">
                          About This Company
                        </h2>
                        <p className="section__content-text">{company.about}</p>
                      </div>
                      <div className="card charges__card flex-column flex-xxl-row ">
                        <div className="charges__part">
                          <span className="charges__part-percentage">
                            {company.metrics.workersSatisfaction}%
                          </span>
                          <div className="charges__part-content">
                            <p className="charges__part-title mb-2">
                              Worker's Satisfaction
                            </p>
                            <p className="fs-small">
                              Lorem ipsum dolor sit amet
                            </p>
                          </div>
                        </div>
                        <div className="charges__part">
                          <span className="charges__part-percentage">
                            {company.metrics.promptPayment}%
                          </span>
                          <div className="charges__part-content">
                            <p className="charges__part-title mb-2">
                              Prompt Payment
                            </p>
                            <p className="fs-small">
                              Lorem ipsum dolor sit amet
                            </p>
                          </div>
                        </div>
                        <div className="charges__part">
                          <span className="charges__part-percentage">
                            {company.metrics.workLifeBalance}%
                          </span>
                          <div className="charges__part-content">
                            <p className="charges__part-title mb-2">
                              Work Life Balance
                            </p>
                            <p className="fs-small">
                              Lorem ipsum dolor sit amet
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="reviews-details__part ">
                      <div className="average-reviews">
                        <h4 className="average-reviews__title">
                          {" "}
                          Rating Analysis
                        </h4>
                        <div className="gap-9 flex-wrap flex-md-nowrap average-reviews__content">
                          <div className="average-reviews__card">
                            <p className="average-reviews__count">
                              <span className="headingTwo">0.0</span>/5
                            </p>
                            <div className="star_review">
                              <i className="bi bi-star star-active" />
                              <i className="bi bi-star star-active" />
                              <i className="bi bi-star star-active" />
                              <i className="bi bi-star star-active" />
                              <i className="bi bi-star star-active" />
                            </div>
                            <p>{company.ratings.totalRatings} Rating</p>
                          </div>
                          <div className="progress-area">
                            <div className="progress-area__part">
                              <span className="gap-1">
                                5 <i className="bi bi-star-fill star-active" />
                              </span>
                              <div className="prog-bar">
                                <div
                                  className="prog-percentage"
                                  style={{
                                    maxWidth: `${company.ratings.ratingBreakdown.fiveStar}%`,
                                  }}
                                />
                              </div>
                              <span>
                                {company.ratings.ratingBreakdown.fiveStar}%
                              </span>
                            </div>
                            <div className="progress-area__part">
                              <span className="gap-1">
                                4 <i className="bi bi-star-fill star-active" />
                              </span>
                              <div className="prog-bar">
                                <div
                                  className="prog-percentage"
                                  style={{
                                    maxWidth: `${company.ratings.ratingBreakdown.fourStar}%`,
                                  }}
                                />
                              </div>
                              <span>
                                {company.ratings.ratingBreakdown.fourStar}%
                              </span>
                            </div>
                            <div className="progress-area__part">
                              <span className="gap-1">
                                3 <i className="bi bi-star-fill star-active" />
                              </span>
                              <div className="prog-bar">
                                <div
                                  className="prog-percentage"
                                  style={{
                                    maxWidth: `${company.ratings.ratingBreakdown.threeStar}%`,
                                  }}
                                />
                              </div>
                              <span>
                                {" "}
                                {company.ratings.ratingBreakdown.threeStar}%
                              </span>
                            </div>
                            <div className="progress-area__part">
                              <span className="gap-1">
                                2 <i className="bi bi-star-fill star-active" />
                              </span>
                              <div className="prog-bar">
                                <div
                                  className="prog-percentage"
                                  style={{
                                    maxWidth: `${company.ratings.ratingBreakdown.twoStar}%`,
                                  }}
                                />
                              </div>
                              <span>
                                {" "}
                                {company.ratings.ratingBreakdown.twoStar}%
                              </span>
                            </div>
                            <div className="progress-area__part">
                              <span className="gap-1">
                                1 <i className="bi bi-star-fill star-active" />
                              </span>
                              <div className="prog-bar">
                                <div
                                  className="prog-percentage"
                                  style={{
                                    maxWidth: `${company.ratings.ratingBreakdown.oneStar}%`,
                                  }}
                                />
                              </div>
                              <span>
                                {" "}
                                {company.ratings.ratingBreakdown.oneStar}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="comments-area">
                        <div className="space_between">
                          <h4>People's Reviews</h4>
                          {/* <div className="gap-2 comments-title">
                        <p className="sort_by">Sort By : </p>
                        <select className="form-control cus-sel-active">
                          <option data-display="new">new</option>
                          <option value={1}>recent</option>
                          <option value={2}>old</option>
                        </select>
                      </div> */}
                        </div>
                        {company.reviews?.map((review) => (
                          <div className="author__content ">
                            <div className="gap-7">
                              <div className="author__thumbs">
                                <img
                                  src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=1060&t=st=1716048710~exp=1716049310~hmac=53907883829283b4ffa26bdc0ab469cf09567603819e27c939254c78d74597c1"
                                  alt="image"
                                  style={{ width: 50 }}
                                />
                              </div>
                              <div className="author__info">
                                <h5 className="author__name">
                                  {review.userName}
                                </h5>
                                <div className="d-flex gap-2">
                                  <div>
                                    <p>
                                      {`${review.user?.slice(
                                        0,
                                        4
                                      )}...${review.user?.slice(-4)}`}{" "}
                                      <i className="bi bi-dot" />{" "}
                                    </p>{" "}
                                  </div>
                                  <div>
                                    <p>
                                      {" "}
                                      {
                                        new Date(Number(review.date))
                                          .toISOString()
                                          ?.split("T")[0]
                                      }{" "}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="author__text">
                              <div className="star_review">
                                <StarRating rating={Number(review.rating)} />
                              </div>
                              <p>{review.reviewText}</p>
                            </div>

                            <div className="feedback">
                              <div className="gap-9 feedback__content">
                                <a href="javascript:void(0)" className="like">
                                  {Number(review.up_votes)}{" "}
                                  <i className="bi bi-hand-thumbs-up" />
                                </a>
                                <a href="javascript:void(0)" className="like">
                                  {Number(review.down_votes)}{" "}
                                  <i className="bi bi-hand-thumbs-down" />
                                </a>
                              </div>
                              <div className="reply__content">
                                <div className="gap-7">
                                  <div className="author__thumbs">
                                    <img
                                      src="assets/images/author2.png"
                                      alt="Author"
                                    />
                                  </div>
                                  <form method="POST" className="reply__form">
                                    <div>
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="reply__text"
                                        placeholder="Join the discussion..."
                                      />
                                      <button
                                        type="submit"
                                        className="d-none"
                                        name="reply__submit"
                                      >
                                        Submit
                                      </button>
                                    </div>
                                    <span id="reply__commentsMsg" />
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                        {company.reviews?.length == 0 && (
                          <div className="d-flex justify-content-center align-item-center">
                            <div className="col-lg-4">
                              {" "}
                              <img
                                src="https://img.freepik.com/free-vector/business-background-design_1343-21.jpg?t=st=1716413204~exp=1716416804~hmac=9a541373b0b81e0a5ac35f2edbafe466813252705d9718df9809c1966c9ba408&w=1060"
                                alt=""
                                className="img-fluid"
                              />
                              <div>
                                <h5>Oops... No Review For Now.</h5>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="section__cta text-start mt_40">
                        {company.reviews?.length > 0 && (
                          <a className="btn_theme btn_theme_active">
                            See More Reviews{" "}
                            <i className="bi bi-arrow-up-right" />
                            <span />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-4 btn_sticky">
                  <div className="sidebar sidebar_fixed sidebar-xl-fixed cus_scrollbar">
                    <div className="sidebar__part">
                      <h4 className="sidebar__part-title">Share with others</h4>
                      <div className="social mt_32">
                        <a
                          href="#"
                          className="btn_theme social_box btn_bg_white"
                        >
                          <i className="bi bi-facebook" />
                          <span />
                        </a>
                        <a
                          href="#"
                          className="btn_theme social_box btn_bg_white"
                        >
                          <i className="bi bi-twitter" />
                          <span />
                        </a>
                        <a
                          href="#"
                          className="btn_theme social_box btn_bg_white"
                        >
                          <i className="bi bi-instagram" />
                          <span />
                        </a>
                        <a
                          href="#"
                          className="btn_theme social_box btn_bg_white"
                        >
                          <i className="bi bi-whatsapp" />
                          <span />
                        </a>
                        <a
                          href="#"
                          className="btn_theme social_box btn_bg_white"
                        >
                          <i className="bi bi-reddit" />
                          <span />
                        </a>
                        <a
                          href="#"
                          className="btn_theme social_box btn_bg_white"
                        >
                          <i className="bi bi-discord" />
                          <span />
                        </a>
                        <a
                          href="#"
                          className="btn_theme social_box btn_bg_white"
                        >
                          <i className="bi bi-tiktok" />
                          <span />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {isLoading && (
        <div className="loader-ki">
          <CirclesWithBar
            height="100"
            width="100"
            color="#fff"
            outerCircleColor="#074c3e"
            innerCircleColor="#074c3e"
            barColor="#074c3e"
            wrapperStyle={{}}
            wrapperClass=""
            visible={isLoading}
          />
        </div>
      )}
    </>
  );
}
