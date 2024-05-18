import { Banner } from "../shared/components/Banner";
import { CompanyCard } from "../shared/components/CompnayCard";

export default function CompanyProfile() {
  const review = {
    name: "Carriage Bank of The Free",
    description: "America’s Largest banking infrastructure",
    location: "28 Binary Rd. USA",
    rating: 4.5,
    imageUrl:
      "https://w7.pngwing.com/pngs/295/537/png-transparent-logo-bank-of-america-investment-banking-bank-blue-emblem-flag.png",
  };

  return (
    <>
      <Banner title="Carriage Bank of The Free" sub="Company Profile" />
      <section className="reviews-details section">
        <div className="container ">
          <div className="row">
            <div className="col-12 col-xl-8 order-1 order-xl-0">
              <div className="reviews-details__area">
                <div className="reviews-details__part ">
                  <div className="loan-reviews loan-reviews--quaternary ">
                    <CompanyCard {...review} useInProfile={true} />
                  </div>
                  <div className="section__content ">
                    <h2 className="section__content-title">
                      About This Company
                    </h2>
                    <p className="section__content-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="section__content-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="card charges__card flex-column flex-xxl-row ">
                    <div className="charges__part">
                      <span className="charges__part-percentage">88%</span>
                      <div className="charges__part-content">
                        <p className="charges__part-title mb-2">
                          Worker's Satisfaction
                        </p>
                        <p className="fs-small">Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <div className="charges__part">
                      <span className="charges__part-percentage">90%</span>
                      <div className="charges__part-content">
                        <p className="charges__part-title mb-2">
                          Prompt Payment
                        </p>
                        <p className="fs-small">Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                    <div className="charges__part">
                      <span className="charges__part-percentage">90%</span>
                      <div className="charges__part-content">
                        <p className="charges__part-title mb-2">
                          Work Life Balance
                        </p>
                        <p className="fs-small">Lorem ipsum dolor sit amet</p>
                      </div>
                    </div>
                  </div>

                  <p className="" data-wow-duration="0.8s">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div className="reviews-details__part ">
                  <div className="average-reviews">
                    <h4 className="average-reviews__title"> Rating Analysis</h4>
                    <div className="gap-9 flex-wrap flex-md-nowrap average-reviews__content">
                      <div className="average-reviews__card">
                        <p className="average-reviews__count">
                          <span className="headingTwo">4.9</span>/5
                        </p>
                        <div className="star_review">
                          <i className="bi bi-star-fill star-active" />
                          <i className="bi bi-star-fill star-active" />
                          <i className="bi bi-star-fill star-active" />
                          <i className="bi bi-star-fill star-active" />
                          <i className="bi bi-star-half star-active" />
                        </div>
                        <p>26 Rating</p>
                      </div>
                      <div className="progress-area">
                        <div className="progress-area__part">
                          <span className="gap-1">
                            5 <i className="bi bi-star-fill star-active" />
                          </span>
                          <div className="prog-bar">
                            <div
                              className="prog-percentage"
                              style={{ maxWidth: "60%" }}
                            />
                          </div>
                          <span>60%</span>
                        </div>
                        <div className="progress-area__part">
                          <span className="gap-1">
                            4 <i className="bi bi-star-fill star-active" />
                          </span>
                          <div className="prog-bar">
                            <div
                              className="prog-percentage"
                              style={{ maxWidth: "85%" }}
                            />
                          </div>
                          <span>85%</span>
                        </div>
                        <div className="progress-area__part">
                          <span className="gap-1">
                            3 <i className="bi bi-star-fill star-active" />
                          </span>
                          <div className="prog-bar">
                            <div
                              className="prog-percentage"
                              style={{ maxWidth: "67%" }}
                            />
                          </div>
                          <span>67%</span>
                        </div>
                        <div className="progress-area__part">
                          <span className="gap-1">
                            2 <i className="bi bi-star-fill star-active" />
                          </span>
                          <div className="prog-bar">
                            <div
                              className="prog-percentage"
                              style={{ maxWidth: "44%" }}
                            />
                          </div>
                          <span>44%</span>
                        </div>
                        <div className="progress-area__part">
                          <span className="gap-1">
                            1 <i className="bi bi-star-fill star-active" />
                          </span>
                          <div className="prog-bar">
                            <div
                              className="prog-percentage"
                              style={{ maxWidth: "21%" }}
                            />
                          </div>
                          <span>21%</span>
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
                    <div className="author__content ">
                      <p className="author__submit-time">
                        Mar 03, 2023 <i className="bi bi-dot" /> 09:01 am
                      </p>
                      <div className="author__text">
                        <div className="star_review">
                          <i className="bi bi-star-fill star-active" />
                          <i className="bi bi-star-fill star-active" />
                          <i className="bi bi-star-fill star-active" />
                          <i className="bi bi-star-fill star-active" />
                          <i className="bi bi-star-half star-active" />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                      <div className="gap-7">
                        <div className="author__thumbs">
                          <img
                            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=1060&t=st=1716048710~exp=1716049310~hmac=53907883829283b4ffa26bdc0ab469cf09567603819e27c939254c78d74597c1"
                            alt="image"
                            style={{ width: 50 }}
                          />
                        </div>
                        <div className="author__info">
                          <h5 className="author__name">Simon Ayo</h5>
                          <p>Software engineer</p>
                        </div>
                      </div>
                      <div className="feedback">
                        <div className="gap-9 feedback__content">
                          <a href="javascript:void(0)" className="like">
                            178 <i className="bi bi-hand-thumbs-up" />
                          </a>
                          <a href="javascript:void(0)" className="like">
                            17 <i className="bi bi-hand-thumbs-down" />
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
                  </div>
                  <div className="section__cta text-start mt_40">
                    <a
                      href="sign-in.html"
                      className="btn_theme btn_theme_active"
                    >
                      See More Reviews <i className="bi bi-arrow-up-right" />
                      <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4 btn_sticky">
              <div className="sidebar sidebar_fixed sidebar-xl-fixed cus_scrollbar">
                <div className="sidebar__part">
                  <h4 className="sidebar__part-title">Share with others</h4>
                  <div className="social mt_32">
                    <a href="#" className="btn_theme social_box btn_bg_white">
                      <i className="bi bi-facebook" />
                      <span />
                    </a>
                    <a href="#" className="btn_theme social_box btn_bg_white">
                      <i className="bi bi-twitter" />
                      <span />
                    </a>
                    <a href="#" className="btn_theme social_box btn_bg_white">
                      <i className="bi bi-instagram" />
                      <span />
                    </a>
                    <a href="#" className="btn_theme social_box btn_bg_white">
                      <i className="bi bi-whatsapp" />
                      <span />
                    </a>
                    <a href="#" className="btn_theme social_box btn_bg_white">
                      <i className="bi bi-reddit" />
                      <span />
                    </a>
                    <a href="#" className="btn_theme social_box btn_bg_white">
                      <i className="bi bi-discord" />
                      <span />
                    </a>
                    <a href="#" className="btn_theme social_box btn_bg_white">
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
  );
}
