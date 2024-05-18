import { useState } from "react";

export const FilterSidebar: React.FC = () => {
  const [isScrollbarVisible, setIsScrollbarVisible] = useState(false);
  const industries = [
    "Agriculture",
    "Crop Production",
    "Livestock",
    "Forestry",
    "Fishing",
    "Mining",
    "Coal",
    "Metal Ore",
    "Non-metallic Mineral",
    "Utilities",
    "Electric Power",
    "Natural Gas",
    "Water Supply",
    "Sewage and Waste Management",
    "Construction",
    "Residential Building",
    "Non-residential Building",
    "Heavy and Civil Engineering",
  ];

  const topCountries = [
    "United States",
    "China",
    "Japan",
    "Germany",
    "India",
    "United Kingdom",
    "France",
    "Italy",
    "Canada",
    "South Korea",
    "Russia",
    "Brazil",
    "Australia",
    "Spain",
    "Mexico",
  ];

  const toggleScrollbar = () => {
    setIsScrollbarVisible(!isScrollbarVisible);
  };

  return (
    <div className="col-12 col-lg-11 col-xl-9 col-xxl-4 btn_sticky">
      <div className="d-inline-block d-xxl-none mb-4">
        <button className="sidebar_btn" onClick={toggleScrollbar}>
          <i className="bi bi-layout-text-sidebar"></i>
          <span> Filter</span>
        </button>
      </div>
      <div
        className={`sidebar-filter cus_scrollbar sidebar-xxl-fixed ${
          isScrollbarVisible ? "show" : ""
        }`}
      >
        <div className="sidebar-filter__part">
          <h4 className="sidebar-filter__title">Filter Companies</h4>
        </div>
        <div className="sidebar-filter__part">
          <form id="filter_search" className="filter__search">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search company"
                required
              />
              <button type="button" className="search_icon">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="sidebar-filter__part">
          <h5 className="sidebar-filter__part-title">Category</h5>
          <ul className="query">
            {industries.map((industry) => (
              <li className="query__list">
                <div className="query__label">
                  <input
                    type="checkbox"
                    name="query_agriculture"
                    id="queryAgriculture"
                    checked
                  />
                  <label htmlFor="queryAgriculture">{industry}</label>
                </div>
                <div className="query_value">1</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-filter__part">
          <h5 className="sidebar-filter__part-title">Location</h5>
          <ul className="query">
            {/* Repeat for each location */}
            <li className="query__list">
              <div className="query__label">
                <input type="checkbox" name="query_all" id="queryAll" checked />
                <label htmlFor="queryAll">All Country</label>
              </div>
              <div className="query_value">0</div>
            </li>
            {topCountries.map((c) => (
              <li className="query__list">
                <div className="query__label">
                  <input
                    type="checkbox"
                    name="query_all"
                    id="queryAll"
                    checked
                  />
                  <label htmlFor="queryAll">{c}</label>
                </div>
                <div className="query_value">0</div>
              </li>
            ))}
            {/* Add more locations similarly */}
          </ul>
        </div>
        <button type="submit" className="btn_theme">
          Reset Filters<i className="bi bi-arrow-up-right"></i>
          <span></span>
        </button>
      </div>
    </div>
  );
};
