export default function Footer() {
  return (
    <>
      {/* Footer Area Start */}

      <footer className="footer">
        <div className="container">
          <div className="row section gy-5 gy-xl-0">
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="about-company">
                <div className="footer__logo mb-4">
                  <a className="navbar-brand" href="#">
                    REVIEWERS <span>Hub</span>
                  </a>
                </div>
                <p>
                  Explore the future of company reviews with our app. Post
                  anonymously and securely on the blockchain.
                </p>
                <div className="social mt_32">
                  <a href="#" className="btn_theme social_box">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#" className="btn_theme social_box">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#" className="btn_theme social_box">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#" className="btn_theme social_box">
                    <i className="bi bi-tiktok" />
                  </a>
                  <a href="#" className="btn_theme social_box">
                    <i className="bi bi-whatsapp" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="quick-link ms-sm-4 ms-xl-0">
                <h4 className="footer__title mb-4">Quick Link</h4>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/#about">About us</a>
                  </li>
                  <li>
                    <a href="/#howitworks">How It Works</a>
                  </li>
                  <li>
                    <a href="/#faqs">FAQs</a>
                  </li>
                  <li>
                    <a href="/companies">Explore Companies</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="footer__contact ms-sm-4 ms-xl-0">
                <h4 className="footer__title mb-4">Contact</h4>
                <div className="footer__content">
                  <a href="tel:+1-234-567-891">
                    <span className="btn_theme social_box">
                      <i className="bi bi-telephone-plus" />
                    </span>
                    +1 234 567 899
                  </a>
                  <a href="mailto:support@reviewerhub.com">
                    <span className="btn_theme social_box">
                      <i className="bi bi-envelope-open" />
                    </span>
                    <span className="text-white">support@reviewerhub.com</span>
                  </a>
                  <a href="#">
                    <span className="btn_theme social_box">
                      <i className="bi bi-geo-alt" />
                    </span>
                    31 Binary Rd, Silicon Valley
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="newsletter">
                <h4 className="footer__title mb-4">Newsletter</h4>
                <p className="mb_32">
                  Subscribe our newsletter to get our latest update
                </p>
                <form
                  autoComplete="off"
                  id="frmSubscribe"
                  className="newsletter__content-form"
                >
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      id="sMail"
                      name="sMail"
                      placeholder="Email Address"
                    />
                    <button
                      type="button"
                      className="emailSubscribe btn_theme btn_theme_active"
                      name="emailSubscribe"
                      id="emailSubscribe"
                    >
                      <i className="bi bi-cursor" />
                    </button>
                  </div>
                  <span id="subscribeMsg" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
