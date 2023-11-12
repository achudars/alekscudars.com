/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import { getPagination, pagination } from "../src/paginationUtils";

const CAPTURED = [
  {
    link: "./aerial-2020-scotland-glencoe",
    photo:
      "./static/img/2020/scotland-glencoe/47d6ccf8443f4002ec673590a23be727.jpg",
    description: "Scotland, Glencoe",
    date: 2020,
  },
  {
    link: "./aerial-2019-england-norfolk",
    photo:
      "./static/img/2019/england-norfolk/be710e98d38c98fd8783299fa6888611.jpg",
    description: "England, Norfolk",
    date: 2019,
  },
  {
    link: "./aerial-2018-england-brighton",
    photo:
      "./static/img/2018/england-brighton/ee3f9cf3cb87184a9c047ae41abcceb3.jpg",
    description: "England, Brighton",
    date: 2018,
  },
  {
    link: "./aerial-2018-ukraine-odessa",
    photo:
      "./static/img/2018/ukraine-odessa/4aa1747ac3d510f71ae45bb0f7105b83.jpg",
    description: "Ukraine, Odessa",
    date: 2018,
  },
  {
    link: "./aerial-2018-poland-warsaw",
    photo:
      "./static/img/2018/poland-warsaw/55b7ddff051e4bc57ef3733af305ae96.jpg",
    description: "Poland, Warsaw",
    date: 2018,
  },
  {
    link: "./aerial-2018-latvia-rezekne",
    photo:
      "./static/img/2018/latvia-rezekne/cd25297810bf3143ae3367f8fef0c7c2.jpg",
    description: "Latvia, Rezekne",
    date: 2018,
  },
  {
    link: "./aerial-2018-portugal-madeira",
    photo:
      "./static/img/2018/portugal-madeira/bf02fac1e91dce1ed075ee43f89bfde5.jpg",
    description: "Portugal, Madeira",
    date: 2018,
  },
  {
    link: "./aerial-2017-italy-sicily",
    photo:
      "./static/img/2017/italy-sicily/6ae48ff1265eb6d219b6368c0e0a833c.jpg",
    description: "Italy, Sicily",
    date: 2017,
  },
];

const Aerial = () => {
  let sort = 4;
  const [active, setActive] = useState(1);
  const [state, setState] = useState([]);
  useEffect(() => {
    pagination(".blog-list-item", sort, active);
    let list = document.querySelectorAll(".blog-list-item");
    setState(getPagination(list.length, sort));
  }, [active, sort]);

  const renderItem = ({ link, photo, description, date }) => {
    return (
      <div className="blog-grid">
        <div className="blog-img">
          <a href={link}>
            <img src={photo} title={description} alt={description} />
          </a>
        </div>
        <div className="blog-info">
          <div className="meta">{date}</div>
          <h6>
            <a href={link}>{description}</a>
          </h6>
        </div>
      </div>
    );
  };

  const renderFlightStatistics = () => {
    return (
      <div className="row">
        <div className="col-lg-4 m-15px-tb">
          <ul className="education-box">
            <li>
              <span>2017 - now</span>
              <h6>Flight Statistics</h6>
            </li>
          </ul>
        </div>
        <div className="col-lg-7 ml-auto m-15px-tb">
          <div className="skills-box">
            <div className="skill-lt">
              <h6>Total Flight Time: 7Hr 35Min</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "70%" }}>
                  <span data-toggle="tooltip" title="70%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Total Distance: 42,857m</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "90%" }}>
                  <span data-toggle="tooltip" title="90%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Total Flights: 88</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "80%" }}>
                  <span data-toggle="tooltip" title="80%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Top Distance: 2,698m</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "85%" }}>
                  <span data-toggle="tooltip" title="85%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Top Speed: 65.9 km/h</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "55%" }}>
                  <span data-toggle="tooltip" title="55%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Max Takeoff Altitude: 1864,4m</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "35%" }}>
                  <span data-toggle="tooltip" title="35%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Footprints: 🇺🇦 🇬🇧 🇵🇹 🇱🇻 🇵🇱</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "42%" }}>
                  <span data-toggle="tooltip" title="42%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout blog>
      <div className="blog-listing" id="blog">
        <div className="container">
          <div className="title text-center">
            <h3>Aerial Photography & Videography</h3>
          </div>
          {renderFlightStatistics()}
          <div className="separated" />
          <div className="row">
            {CAPTURED.slice()
              .sort((a, b) => a < b)
              .map((c) => (
                <div key={c.link} className="col-md-6 m-15px-tb blog-list-item">
                  {renderItem({
                    link: c.link,
                    photo: c.photo,
                    description: c.description,
                    date: c.date,
                  })}
                </div>
              ))}
            <div className="col-12 blog-pagination">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${active == 1 ? "disabled" : ""}`}>
                  <a
                    className="page-link"
                    href="#"
                    tabIndex={-1}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(active === 1 ? 1 : active - 1);
                    }}
                  >
                    <i className="fas fa-chevron-left" />
                  </a>
                </li>
                {state.map((state, i) => (
                  <li
                    key={i}
                    className={`page-item ${active === state ? "active" : ""}`}
                  >
                    <a
                      className="page-link"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(state);
                      }}
                    >
                      {state} <span className="sr-only">(current)</span>
                    </a>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    active == state.length ? "disabled" : ""
                  }`}
                >
                  <a
                    className="page-link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(
                        active === state.length ? state.length : active + 1
                      );
                    }}
                  >
                    <i className="fas fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Aerial;
