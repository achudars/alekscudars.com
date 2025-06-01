import Isotope from "isotope-layout";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => (e) => {
    // Handle keyboard events
    if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') {
      return;
    }
    if (e.key === ' ') {
      e.preventDefault(); // Prevent scrolling on space key
    }
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  return (
    <section
      id="work"
      data-nav-tooltip="Work"
      className="pp-section pp-scrollable section dark-bg"
      aria-labelledby="portfolio-heading"
    >
      <div className="container">
        <div className="title">
          <h3 id="portfolio-heading">My Portfolio.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav" role="tablist" aria-label="Portfolio filters">
            <li
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              onKeyDown={handleFilterKeyChange("*")}
              data-filter="*"
              role="tab"
              tabIndex={filterKey === "*" ? -1 : 0}
              aria-selected={filterKey === "*"}
              aria-controls="portfolio-items"
            >
              <span>All</span>
            </li>
            <li
              className={`c-pointer ${activeBtn("branding")}`}
              onClick={handleFilterKeyChange("branding")}
              onKeyDown={handleFilterKeyChange("branding")}
              data-filter=".branding"
              role="tab"
              tabIndex={filterKey === "branding" ? -1 : 0}
              aria-selected={filterKey === "branding"}
              aria-controls="portfolio-items"
            >
              <span>Branding</span>
            </li>
            <li
              className={`c-pointer ${activeBtn("photoshop")}`}
              onClick={handleFilterKeyChange("photoshop")}
              onKeyDown={handleFilterKeyChange("photoshop")}
              data-filter=".photoshop"
              role="tab"
              tabIndex={filterKey === "photoshop" ? -1 : 0}
              aria-selected={filterKey === "photoshop"}
              aria-controls="portfolio-items"
            >
              <span>Photoshop</span>
            </li>
            <li
              className={`c-pointer ${activeBtn("fashion")}`}
              onClick={handleFilterKeyChange("fashion")}
              onKeyDown={handleFilterKeyChange("fashion")}
              data-filter=".fashion"
              role="tab"
              tabIndex={filterKey === "fashion" ? -1 : 0}
              aria-selected={filterKey === "fashion"}
              aria-controls="portfolio-items"
            >
              <span>Fashion</span>
            </li>
            <li
              className={`c-pointer ${activeBtn("product")}`}
              onClick={handleFilterKeyChange("product")}
              onKeyDown={handleFilterKeyChange("product")}
              data-filter=".product"
              role="tab"
              tabIndex={filterKey === "product" ? -1 : 0}
              aria-selected={filterKey === "product"}
              aria-controls="portfolio-items"
            >
              <span>Product</span>
            </li>
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery" id="portfolio-items" role="tabpanel">
          <div className="grid-item product branding fashion">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-1.jpg" title="Portfolio" alt="Portfolio" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-1.jpg"
                    className="gallery-link"
                    aria-label="View larger image of Portfolio"
                  >
                    <span className="ti-plus" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item photoshop">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-2.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-2.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Portfolio</h5>
                <span>Portfolio</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-3.jpg" title="Portfolio" alt="Portfolio" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-3.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product photoshop">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-5.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-5.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-4.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-4.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product photoshop">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-6.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-6.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item fashion">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-7.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-7.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item product branding">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-8.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-8.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item fashion">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Momb ios App</h5>
                <span>Broadcasting ios App</span>
              </div>
              <div className="portfolio-img">
                <img src="static/img/m-portfolio-9.jpg" title="" alt="" />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-9.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
