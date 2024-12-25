/* eslint-disable @next/next/no-img-element */
import Layout from "../src/layout/Layout";

const CAPTURED = [
  {
    link: "./hiking-2022-margate-ramsgate",
    photo: "./static/img/hiking/2022/margate-ramsgate/MDQ4LCJ.webp",
    description: "Margate to Ramsgate",
    date: 2022,
  },
  {
    link: "./hiking-2022-rye-hastings",
    photo: "./static/img/hiking/2022/rye-hastings/RHQ4LCJ.webp",
    description: "Rye to Hastings",
    date: 2022,
  },
  {
    link: "./hiking-2023-worthing-brighton",
    photo: "./static/img/hiking/2023/worthing-brighton/WBQ4LCJ.webp",
    description: "Worthing to Brighton",
    date: 2023,
  },
  {
    link: "./hiking-2023-seaford-brighton",
    photo: "./static/img/hiking/2023/seaford-brighton/SBQ4LCJ.webp",
    description: "Seaford to Brighton",
    date: 2023,
  },
  {
    link: "./hiking-2023-tring-watford",
    photo: "./static/img/hiking/2023/tring-watford/TWQ2LCJ.webp",
    description: "Tring to Watford",
    date: 2023,
  },
  {
    link: "./hiking-2023-eastbourne-seaford",
    photo: "./static/img/hiking/2023/eastbourne-seaford/ESQ4LCJ.webp",
    description: "Eastbourne to Seaford",
    date: 2023,
  },
  {
    link: "./hiking-2023-lea-valley",
    photo: "./static/img/hiking/2023/lea-valley/LVQ7LCJ.webp",
    description: "Lea Valley",
    date: 2023,
  },
  {
    link: "./hiking-2023-didcot-appleford-culham-abingdon-oxford",
    photo:
      "./static/img/hiking/2023/didcot-appleford-culham-abingdon-oxford/AOQ4LCJ.webp",
    description: "Didcot - Appleford - Culham - Abingdon - Oxford",
    date: 2023,
  },
  {
    link: "./hiking-2023-ben-nevis-ascent",
    photo: "./static/img/hiking/2023/ben-nevis-ascent/BAQ1LCJ.webp",
    description: "Ben Nevis (ascent)",
    date: 2023,
  },
  {
    link: "./hiking-2023-ben-nevis-descent",
    photo: "./static/img/hiking/2023/ben-nevis-descent/BDQ3LCJ.webp",
    description: "Ben Nevis (descent)",
    date: 2023,
  },
  {
    link: "./hiking-2023-dun-deardail",
    photo: "./static/img/hiking/2023/dun-deardail/DDQ4LCJ.webp",
    description: "Dun Deardail",
    date: 2023,
  },
];

const HikingAndWalking = () => {
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
              <span>2022 - now</span>
              <h6>Activity Statistics</h6>
            </li>
          </ul>
        </div>
        <div className="col-lg-7 ml-auto m-15px-tb">
          <div className="skills-box">
            <div className="skill-lt">
              <h6>Distance: 200.9km</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "29%" }}>
                  <span data-toggle="tooltip" title="29%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Elevation Gain: 5,273m</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "52%" }}>
                  <span data-toggle="tooltip" title="52%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Completed: 11</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "11%" }}>
                  <span data-toggle="tooltip" title="11%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Moving Time: 36h 59m</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "36%" }}>
                  <span data-toggle="tooltip" title="36%" />
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
          <div className="title">
            <h3>Hiking & Walking.</h3>
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HikingAndWalking;
