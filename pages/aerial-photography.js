/* eslint-disable @next/next/no-img-element */
import Layout from "../src/layout/Layout";

const CAPTURED = [
  {
    link: "/aerial-2025-switzerland-truebsee",
    photo:
      "/static/img/aerial/2025/switzerland-truebsee/2025_05_25_07_49_DJI_0166 - square.JPG",
    description: "Switzerland, Truebsee",
    date: 2025,
  },
  {
    link: "/aerial-2025-switzerland-grindelwald",
    photo:
      "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_14_35_IMG_0854 - square.JPG",
    description: "Switzerland, Grindelwald",
    date: 2025,
  },
  {
    link: "/aerial-2025-switzerland-harder-klum",
    photo:
      "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_07_02_DJI_0945 - square.JPG",
    description: "Switzerland, Harder Klum",
    date: 2025,
  },
  {
    link: "/aerial-2025-greece-corfu",
    photo:
      "/static/img/aerial/2025/greece-corfu/2025_05_10_05_47_DJI_0865.JPG",
    description: "Greece, Corfu",
    date: 2025,
  },
  {
    link: "/aerial-2025-cyprus",
    photo:
      "/static/img/aerial/2025/cyprus/2025_03_23_07_30_IMG_9995 - square.JPG",
    description: "Cyprus",
    date: 2025,
  },
  {
    link: "/aerial-2025-portugal-madeira",
    photo:
      "/static/img/aerial/2025/portugal-madeira/2025_03_08_10_11_DJI_0547 - square.JPG",
    description: "Portugal, Madeira",
    date: 2025,
  },
  {
    link: "/aerial-2025-spain-tenerife",
    photo:
      "/static/img/aerial/2025/spain-tenerife/2025_02_22_10_39_DJI_0419 - square.JPG",
    description: "Spain, Tenerife",
    date: 2025,
  },
  {
    link: "/aerial-2022-england-seaford",
    photo:
      "/static/img/aerial/2022/england-seaford/2022_07_09_09_27_DJI_0189 - square.JPG",
    description: "England, Seaford",
    date: 2022,
  },
  {
    link: "/aerial-2020-scotland-glencoe",
    photo:
      "/static/img/aerial/2020/scotland-glencoe/47d6ccf8443f4002ec673590a23be727.jpg",
    description: "Scotland, Glencoe",
    date: 2020,
  },
  {
    link: "/aerial-2019-england-norfolk",
    photo:
      "/static/img/aerial/2019/england-norfolk/be710e98d38c98fd8783299fa6888611.jpg",
    description: "England, Norfolk",
    date: 2019,
  },
  {
    link: "/aerial-2018-england-brighton",
    photo:
      "/static/img/aerial/2018/england-brighton/ee3f9cf3cb87184a9c047ae41abcceb3.jpg",
    description: "England, Brighton",
    date: 2018,
  },
  {
    link: "/aerial-2018-ukraine-odessa",
    photo:
      "/static/img/aerial/2018/ukraine-odessa/4aa1747ac3d510f71ae45bb0f7105b83.jpg",
    description: "Ukraine, Odessa",
    date: 2018,
  },
  {
    link: "/aerial-2018-poland-warsaw",
    photo:
      "/static/img/aerial/2018/poland-warsaw/55b7ddff051e4bc57ef3733af305ae96.jpg",
    description: "Poland, Warsaw",
    date: 2018,
  },
  {
    link: "/aerial-2018-latvia-rezekne",
    photo:
      "/static/img/aerial/2018/latvia-rezekne/cd25297810bf3143ae3367f8fef0c7c2.jpg",
    description: "Latvia, Rezekne",
    date: 2018,
  },
  {
    link: "/aerial-2018-portugal-madeira",
    photo:
      "/static/img/aerial/2018/portugal-madeira/bf02fac1e91dce1ed075ee43f89bfde5.jpg",
    description: "Portugal, Madeira",
    date: 2018,
  },
  {
    link: "/aerial-2017-italy-sicily",
    photo:
      "/static/img/aerial/2017/italy-sicily/6ae48ff1265eb6d219b6368c0e0a833c.jpg",
    description: "Italy, Sicily",
    date: 2017,
  },
];

const Aerial = () => {
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
              <h6>Total Flight Time: 10Hr 57Min</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "70%" }}>
                  <span data-toggle="tooltip" title="70%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Total Distance: 66,103m</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "55%" }}>
                  <span data-toggle="tooltip" title="55%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Total Flights: 114</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "88%" }}>
                  <span data-toggle="tooltip" title="88%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Top Distance: 2,913m</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "82%" }}>
                  <span data-toggle="tooltip" title="82%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Top Speed: 65.9 km/h</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "66%" }}>
                  <span data-toggle="tooltip" title="66%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Max Takeoff Altitude: 1864,4m</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "64%" }}>
                  <span data-toggle="tooltip" title="64%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Footprints: 🇦🇱 🇨🇭 🇨🇾 🇪🇸 🇬🇧 🇬🇷 🇮🇹 🇱🇻 🇵🇱 🇵🇹 🇺🇦</h6>
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
    <Layout blog showBackBtn>
      <div className="blog-listing" id="blog">
        <div className="container">
          <div className="title">
            <h3>Aerial Photography & Videography.</h3>
          </div>
          {renderFlightStatistics()}
          <div className="separated" />
          <div className="row">
            {CAPTURED.map((c) => (
              <div key={c.link} className="col-md-6 m-15px-tb blog-list-item">
                {renderItem({
                  link: c.link,
                  photo: c.photo,
                  description: c.description,
                  date: c.date,
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Aerial;
