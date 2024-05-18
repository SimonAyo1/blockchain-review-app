import { useWeb3Modal } from "@web3modal/wagmi/react";
import React, { useState } from "react";
import { useAccount } from "wagmi";

const Header: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openConnectWallet = () => {
    // Add logic to handle wallet connection
    console.log("Connect Wallet Clicked");
  };

  return (
    <>
      <header className="header-section index">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-xl nav-shadow" id="navbar">
                <a className="navbar-brand">
                  REVIEWERS <span>Hub</span>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <i className="bi bi-list"></i>
                </button>

                <div
                  className="collapse navbar-collapse ms-auto"
                  id="navbar-content"
                >
                  <div className="main-menu index-page">
                    <ul className="navbar-nav mb-lg-0 mx-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/companies">
                          Explore Companies
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#about">
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#faqs">
                          FAQs
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#howitworks">
                          How It Works
                        </a>
                      </li>
                    </ul>
                    <div className="nav-right d-none d-xl-block">
                      <div className="nav-right__search">
                        <a
                          href="javascript:void(0)"
                          className="nav-right__search-icon btn_theme icon_box btn_bg_white"
                        >
                          <i className="bi bi-search"></i> <span></span>
                        </a>
                        <button
                          className="btn_theme btn_theme_active"
                          onClick={() => open()}
                        >
                          {!isConnected
                            ? "Connect Wallet"
                            : `${address?.slice(0, 5)}...${address?.slice(-5)}`}
                          <i className="bi bi-arrow-up-right"></i>
                          <span></span>
                        </button>
                      </div>
                      <div className="nav-right__search-inner">
                        <div className="nav-search-inner__form">
                          <form id="search" className="inner__form">
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search company..."
                                required
                              />
                              <button type="button" className="search_icon">
                                <i className="bi bi-search"></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
      >
        <div className="offcanvas-body custom-nevbar">
          <div className="row">
            <div className="col-md-7 col-xl-8">
              <div className="custom-nevbar__left">
                <button
                  type="button"
                  className="close-icon d-md-none ms-auto"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <i className="bi bi-x"></i>
                </button>
                <ul className="custom-nevbar__nav mb-lg-0">
                  <li className="menu_item">
                    <a
                      className="menu_link"
                      href="/"
                      data-bs-dismiss="offcanvas"
                    >
                      Home
                    </a>
                  </li>
                  <li className="menu_item">
                    <a
                      className="menu_link"
                      href="/companies"
                      data-bs-dismiss="offcanvas"
                    >
                      Explore Companies
                    </a>
                  </li>
                  <li className="menu_item" data-bs-dismiss="offcanvas">
                    <a className="menu_link" href="#about">
                      About Us
                    </a>
                  </li>
                  <li className="menu_item" data-bs-dismiss="offcanvas">
                    <a className="menu_link" href="#faqs">
                      FAQs
                    </a>
                  </li>
                  <li className="menu_item" data-bs-dismiss="offcanvas">
                    <a className="menu_link" href="#howitworks">
                      How It Works
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-xl-4">
              <div className="custom-nevbar__right">
                <div className="custom-nevbar__top d-none d-md-block">
                  <button
                    type="button"
                    className="close-icon ms-auto"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <i className="bi bi-x"></i>
                  </button>
                </div>
                <ul className="custom-nevbar__right-location">
                  <li>
                    <button
                      className="btn_theme btn_theme_active"
                      data-bs-dismiss="offcanvas"
                      onClick={openConnectWallet}
                    >
                      Connect Wallet <i className="bi bi-arrow-up-right"></i>
                      <span></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
