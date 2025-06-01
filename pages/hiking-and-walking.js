/* eslint-disable @next/next/no-img-element */
import Layout from "../src/layout/Layout";

const CAPTURED = [
  {
    link: "./hiking-2025-switzerland-mount-rigi-descent",
    photo: "./static/img/hiking/2025/switzerland-mount-rigi-descent/2025_05_26_10_10_IMG_1033 - Copy.JPG",
    description: "Mount Rigi Descent",
    location: "Switzerland",
    date: 2025,
  },
  {
    link: "./hiking-2025-switzerland-mount-rigi-ascent",
    photo: "./static/img/hiking/2025/switzerland-mount-rigi-ascent/2025_05_26_08_42_IMG_1012 - Copy.JPG",
    description: "Mount Rigi Ascent",
    location: "Switzerland",
    date: 2025,
  },
  {
    link: "./hiking-2025-switzerland-engelberg-truebsee",
    photo: "./static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_08_22_IMG_0914 - Copy.JPG",
    description: "Engelberg, Truebsee",
    location: "Switzerland",
    date: 2025,
  },
  {
    link: "./hiking-2025-switzerland-grindelwald",
    photo: "./static/img/hiking/2025/switzerland-grindelwald/2025_05_24_11_38_IMG_0778 - Copy.JPG",
    description: "Grindelwald",
    location: "Switzerland",
    date: 2025,
  },
  {
    link: "./hiking-2025-switzerland-harder-klum",
    photo: "./static/img/hiking/2025/switzerland-harder-klum/2025_05_24_07_36_IMG_0704 - Copy.JPG",
    description: "Harder Klum",
    location: "Switzerland",
    date: 2025,
  },
  {
    link: "./hiking-2025-corfu-greece-erimitis",
    photo:
      "./static/img/hiking/2025/corfu-greece-erimitis/2025_05_11_09_27_IMG_0515.JPG",
    description: "Erimitis Beaches",
    location: "Corfu, Greece",
    date: 2025,
  },
  {
    link: "./hiking-2025-corfu-greece-drastis",
    photo:
      "./static/img/hiking/2025/corfu-greece-drastis/2025_05_11_05_07_IMG_0464.JPG",
    description: "Cape Drastis",
    location: "Corfu, Greece",
    date: 2025,
  },
  {
    link: "./hiking-2025-corfu-greece-lakones-krini-angelokastro",
    photo:
      "./static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_09_04_IMG_0406.jpg",
    description: "Lakones - Krini - Angelokastro Castle",
    location: "Corfu, Greece",
    date: 2025,
  },
  {
    link: "./hiking-2025-corfu-greece-afionas-porto-timoni",
    photo:
      "./static/img/hiking/2025/corfu-greece-afionas-porto-timoni/2025_05_10_04_50_IMG_0355.jpg",
    description: "Afionas - Porto Timoni Twin Beaches",
    location: "Corfu, Greece",
    date: 2025,
  },
  {
    link: "./hiking-2025-kalidonia",
    photo: "./static/img/hiking/2025/kalidonia/kalidonia_03.jpg",
    description: "Kalidonia Trail",
    location: "Cyprus",
    date: 2025,
  },
  {
    link: "./hiking-2025-atalante",
    photo: "./static/img/hiking/2025/atalante/atalante_05.jpg",
    description: "Atalante Trail",
    location: "Cyprus",
    date: 2025,
  },
  {
    link: "./hiking-2025-continued-afternoon-camacha-via-levada-da-serra-do-faial",
    photo:
      "./static/img/hiking/2025/continued-afternoon-camacha-via-levada-da-serra-do-faial/faial_02.jpg",
    description:
      "Continued afternoon hike at Funchal - Camacha via Levada da Serra do Faial",
    location: "Madeira, Portugal",
    date: 2025,
  },
  {
    link: "./hiking-2025-afternoon-camacha-via-levada-da-serra-do-faial",
    photo:
      "./static/img/hiking/2025/afternoon-camacha-via-levada-da-serra-do-faial/continued_03.jpg",
    description:
      "Afternoon hike at Funchal - Camacha via Levada da Serra do Faial",
    location: "Madeira, Portugal",
    date: 2025,
  },
  {
    link: "./hiking-2025-morning-camacha-via-levada-da-serra-do-faial",
    photo:
      "./static/img/hiking/2025/morning-camacha-via-levada-da-serra-do-faial/camacha_02.jpg",
    description:
      "Morning hike at Funchal - Camacha via Levada da Serra do Faial",
    location: "Madeira, Portugal",
    date: 2025,
  },
  {
    link: "./hiking-2025-vereda-do-larano-machico-boca-do-risco",
    photo:
      "./static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_01.jpg",
    description: "Vereda do Larano (Machico) - Boca do Risco",
    location: "Madeira, Portugal",
    date: 2025,
  },
  {
    link: "./hiking-2025-pr-6-6-1-levada-das-25-fontes-rabacal-levada-of-risco",
    photo:
      "./static/img/hiking/2025/pr-6-6-1-levada-das-25-fontes-rabacal-levada-of-risco/levada_02.jpg",
    description: "PR-TF 6/6.1 Levada das 25 Fontes - Rabacal - Levada of Risco",
    location: "Santa Cruz de Tenerife, Spain",
    date: 2025,
  },
  {
    link: "./hiking-2025-pr-tf-6-chamorga-roque-bermejo-el-draguillo",
    photo:
      "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_10_12_IMG_9363.JPG",
    description: "PR-TF 6 Chamorga - Roque - Bermejo - El Draguillo",
    location: "Santa Cruz de Tenerife, Spain",
    date: 2025,
  },
  {
    link: "./hiking-2025-pr-tf-8-afur-taganana-afur",
    photo:
      "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_13_32_IMG_9306.JPG",
    description: "PR-TF 8 Afur - Taganana - Afur",
    location: "Santa Cruz de Tenerife, Spain",
    date: 2025,
  },
  {
    link: "./hiking-2023-ben-nevis-ascent",
    photo: "./static/img/hiking/2023/ben-nevis-ascent/BAQ1LCJ.webp",
    description: "Ben Nevis (ascent)",
    location: "UK",
    date: 2023,
  },
  {
    link: "./hiking-2023-ben-nevis-descent",
    photo: "./static/img/hiking/2023/ben-nevis-descent/BDQ3LCJ.webp",
    description: "Ben Nevis (descent)",
    location: "UK",
    date: 2023,
  },
  {
    link: "./hiking-2023-dun-deardail",
    photo: "./static/img/hiking/2023/dun-deardail/DDQ4LCJ.webp",
    description: "Dun Deardail",
    location: "UK",
    date: 2023,
  },
  {
    link: "./hiking-2023-didcot-appleford-culham-abingdon-oxford",
    photo:
      "./static/img/hiking/2023/didcot-appleford-culham-abingdon-oxford/AOQ4LCJ.webp",
    description: "Didcot - Appleford - Culham - Abingdon - Oxford",
    location: "UK",
    date: 2023,
  },
  {
    link: "./hiking-2023-lea-valley",
    photo: "./static/img/hiking/2023/lea-valley/LVQ7LCJ.webp",
    description: "Lea Valley",
    location: "UK",
    date: 2023,
  },
  {
    link: "./hiking-2023-eastbourne-seaford",
    photo: "./static/img/hiking/2023/eastbourne-seaford/ESQ4LCJ.webp",
    description: "Eastbourne to Seaford",
    location: "UK",
    date: 2023,
  },
  {
    link: "./hiking-2023-tring-watford",
    photo: "./static/img/hiking/2023/tring-watford/TWQ2LCJ.webp",
    description: "Tring to Watford",
    location: "UK",
    date: 2023,
  },
  {
    link: "./hiking-2023-seaford-brighton",
    photo: "./static/img/hiking/2023/seaford-brighton/SBQ4LCJ.webp",
    description: "Seaford to Brighton",
    location: "UK",
    date: 2023,
  },
  {
    link: "./hiking-2023-worthing-brighton",
    photo: "./static/img/hiking/2023/worthing-brighton/WBQ4LCJ.webp",
    description: "Worthing to Brighton",
    location: "UK",
    date: 2023,
  },
  {
    link: "./hiking-2022-rye-hastings",
    photo: "./static/img/hiking/2022/rye-hastings/RHQ4LCJ.webp",
    description: "Rye to Hastings",
    location: "UK",
    date: 2022,
  },
  {
    link: "./hiking-2022-margate-ramsgate",
    photo: "./static/img/hiking/2022/margate-ramsgate/MDQ4LCJ.webp",
    description: "Margate to Ramsgate",
    location: "UK",
    date: 2022,
  },
];

const HikingAndWalking = () => {
  const renderItem = ({ link, photo, description, date, location }) => {
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
          <h6>{location}</h6>
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
              <h6>Distance: 343.9km</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "29%" }}>
                  <span data-toggle="tooltip" title="29%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Elevation Gain: 12,863m</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "52%" }}>
                  <span data-toggle="tooltip" title="52%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Completed: 24</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "11%" }}>
                  <span data-toggle="tooltip" title="11%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Moving Time: 70h 10m</h6>
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
    <Layout blog showBackBtn>
      <div className="blog-listing" id="blog">
        <div className="container">
          <div className="title">
            <h3>Hiking & Walking.</h3>
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
                  location: c.location,
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
