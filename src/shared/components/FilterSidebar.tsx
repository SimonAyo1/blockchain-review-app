import { useState, useEffect } from "react";

interface FilterSidebarProps {
  onSearchParamsChange: (params: SearchParams) => void;
}

export interface SearchParams {
  searchTerm: string;
  selectedIndustries: string[];
  selectedCountries: string[];
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  onSearchParamsChange,
}) => {
  const [isScrollbarVisible, setIsScrollbarVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const industries = [
    "Agriculture",
    "Electric Power",
    "Natural Gas",
    "Water Supply",
    "Health",
    "Construction",
    "Medicine",
    "Finance",
    "Education",
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    window.scrollTo(0, 400);
  };

  const handleIndustryChange = (industry: string) => {
    setSelectedIndustries((prevSelected) =>
      prevSelected.includes(industry)
        ? prevSelected.filter((i) => i !== industry)
        : [...prevSelected, industry]
    );
    window.scrollTo(0, 400);
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountries((prevSelected) =>
      prevSelected.includes(country)
        ? prevSelected.filter((c) => c !== country)
        : [...prevSelected, country]
    );
    window.scrollTo(0, 400);
  };

  useEffect(() => {
    onSearchParamsChange({
      searchTerm,
      selectedIndustries,
      selectedCountries,
    });
  }, [searchTerm, selectedIndustries, selectedCountries, onSearchParamsChange]);

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
                value={searchTerm}
                onChange={handleSearchChange}
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
              <li className="query__list" key={industry}>
                <div className="query__label">
                  <input
                    type="checkbox"
                    name={`query_${industry}`}
                    id={`query${industry}`}
                    checked={selectedIndustries.includes(industry)}
                    onChange={() => handleIndustryChange(industry)}
                  />
                  <label htmlFor={`query${industry}`}>{industry}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-filter__part">
          <h5 className="sidebar-filter__part-title">Location</h5>
          <ul className="query">
            {topCountries.map((country) => (
              <li className="query__list" key={country}>
                <div className="query__label">
                  <input
                    type="checkbox"
                    name={`query_${country}`}
                    id={`query${country}`}
                    checked={selectedCountries.includes(country)}
                    onChange={() => handleCountryChange(country)}
                  />
                  <label htmlFor={`query${country}`}>{country}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="btn_theme"
          onClick={() => {
            setSearchTerm("");
            setSelectedIndustries([]);
            setSelectedCountries([]);
          }}
        >
          Reset Filters<i className="bi bi-arrow-up-right"></i>
          <span></span>
        </button>
      </div>
    </div>
  );
};
