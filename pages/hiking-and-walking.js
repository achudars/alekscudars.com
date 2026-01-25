/* eslint-disable @next/next/no-img-element */
import Layout from "../src/layout/Layout";

const CAPTURED = [
  {
    link: "./hiking-2026-fishermans-trail-12-luz-lagos",
    photo:
      "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_10_53_IMG_5173.JPG",
    description: "Fisherman's Trail 12 (Luz - Lagos)",
    location: "Portugal",
    date: 2026,
  },
  {
    link: "./hiking-2026-fishermans-trail-11-salema-luz",
    photo:
      "./static/img/hiking/2026/fishermans-trail-11/2026_01_02_12_23_IMG_5092.JPG",
    description: "Fisherman's Trail 11 (Salema - Luz)",
    location: "Portugal",
    date: 2026,
  },
  {
    link: "./hiking-2026-fishermans-trail-10-sagres-salema",
    photo:
      "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_11_59_IMG_4940.JPG",
    description: "Fisherman's Trail 10 (Sagres - Salema)",
    location: "Portugal",
    date: 2026,
  },
  {
    link: "./hiking-2025-fishermans-trail-9-vila-do-bispo-sagres",
    photo:
      "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_13_46_IMG_4856.JPG",
    description: "Fisherman's Trail 9 (Vila do Bispo - Sagres)",
    location: "Portugal",
    date: 2025,
  },
  {
    link: "./hiking-2025-fishermans-trail-8-carrapateira-vila-do-bispo",
    photo:
      "./static/img/hiking/2025/fishermans-trail-8/2025_12_30_10_13_IMG_4735.JPG",
    description: "Fisherman's Trail 8 (Carrapateira - Vila do Bispo)",
    location: "Portugal",
    date: 2025,
  },
  {
    link: "./hiking-2025-fishermans-trail-7-arrifana-carrapateira",
    photo:
      "./static/img/hiking/2025/fishermans-trail-7/2025_12_29_10_18_IMG_4587.JPG",
    description: "Fisherman's Trail 7 (Arrifana - Carrapateira)",
    location: "Portugal",
    date: 2025,
  },
  {
    link: "./hiking-2025-fishermans-trail-6-aljezur-arrifana",
    photo:
      "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_11_40_IMG_4515.JPG",
    description: "Fisherman's Trail 6 (Aljezur - Arrifana)",
    location: "Portugal",
    date: 2025,
  },
  {
    link: "./hiking-2025-fishermans-trail-5-odeceixe-aljezur",
    photo: "./static/img/hiking/2025/fishermans-trail-5/trail-overview.webp",
    description: "Fisherman's Trail 5 (Odeceixe - Aljezur)",
    location: "Portugal",
    date: 2025,
  },
  {
    link: "./hiking-2025-fishermans-trail-4-zamujeira-do-mar-odeceixe",
    photo:
      "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_09_58_IMG_4363.JPG",
    description: "Fisherman's Trail 4 (Zamujeira do Mar - Odeceixe)",
    location: "Portugal",
    date: 2025,
  },
  {
    link: "./hiking-2025-fishermans-trail-3-almograve-zamujeira-do-mar",
    photo:
      "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_10_31_IMG_4143.JPG",
    description: "Fisherman's Trail 3 (Almograve - Zamujeira do Mar)",
    location: "Portugal",
    date: 2025,
  },
  {
    link: "./hiking-2025-fishermans-trail-2-vila-nova-de-milfontes-almograve",
    photo:
      "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_11_17_IMG_3992.JPG",
    description: "Fisherman's Trail 2 (Vila Nova de Milfontes - Almograve)",
    location: "Portugal",
    date: 2025,
  },
  {
    link: "./hiking-2025-fishermans-trail-1-porto-covo-vila-nova-de-milfontes",
    photo:
      "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_15_50_IMG_3949.JPG",
    description: "Fisherman's Trail 1 (Porto Covo - Vila Nova de Milfontes)",
    location: "Portugal",
    date: 2025,
  },
  {
    link: "./hiking-2025-italy-sardinia-gairo-path-of-the-eagles-taquisara-nuragic",
    photo:
      "./static/img/hiking/2025/italy-sardinia-gairo-path-of-the-eagles-taquisara-nuragic/2025_08_18_12_45_IMG_2664.JPG",
    description: "Path of the Eagles: Taquisara",
    location: "Italy, Sardinia, Gairo",
    date: 2025,
  },
  {
    link: "./hiking-2025-italy-sardinia-iglesias-nebida-masua",
    photo:
      "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_17_14_11_IMG_2630.JPG",
    description: "Nebida - Masua - Anello 5 Faraglioni",
    location: "Italy, Sardinia, Iglesias",
    date: 2025,
  },
  {
    link: "./hiking-2025-italy-sardinia-pula-pinus-village-island-su-cardolinu",
    photo:
      "./static/img/hiking/2025/italy-sardinia-pula-pinus-village-island-su-cardolinu/2025_08_17_08_31_IMG_2611.JPG",
    description: "Pinus Village - Island su Cardolinu via Ancient Roman Road",
    location: "Italy, Sardinia, Pula",
    date: 2025,
  },
  {
    link: "./hiking-2025-italy-sardinia-baunei-pedra-longa-santa-maria-navarrese-piggius",
    photo:
      "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_05_48_IMG_2524.JPG",
    description: "Pedra Longa - Santa Maria Navarrese - US Piggius",
    location: "Italy, Sardinia, Baunei",
    date: 2025,
  },
  {
    link: "./hiking-2025-croatia-dinara",
    photo:
      "./static/img/hiking/2025/croatia-dinara/2025_07_20_07_41_IMG_2238 - Copy.JPG",
    description: "Dinara",
    location: "Dinara, Croatia",
    date: 2025,
  },
  {
    link: "./hiking-2025-croatia-walk-on-mars",
    photo:
      "./static/img/hiking/2025/croatia-walk-on-mars/2025_07_19_07_05_IMG_2071 - Copy.JPG",
    description: "Walk on Mars",
    location: "Novalja, Croatia",
    date: 2025,
  },
  {
    link: "./hiking-2025-switzerland-mount-rigi-descent",
    photo:
      "./static/img/hiking/2025/switzerland-mount-rigi-descent/2025_05_26_10_10_IMG_1033 - Copy.JPG",
    description: "Mount Rigi Descent",
    location: "Switzerland",
    date: 2025,
  },
  {
    link: "./hiking-2025-switzerland-mount-rigi-ascent",
    photo:
      "./static/img/hiking/2025/switzerland-mount-rigi-ascent/2025_05_26_08_42_IMG_1012 - Copy.JPG",
    description: "Mount Rigi Ascent",
    location: "Switzerland",
    date: 2025,
  },
  {
    link: "./hiking-2025-switzerland-engelberg-truebsee",
    photo:
      "./static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_08_22_IMG_0914 - Copy.JPG",
    description: "Engelberg, Truebsee",
    location: "Switzerland",
    date: 2025,
  },
  {
    link: "./hiking-2025-switzerland-grindelwald",
    photo:
      "./static/img/hiking/2025/switzerland-grindelwald/2025_05_24_11_38_IMG_0778 - Copy.JPG",
    description: "Grindelwald",
    location: "Switzerland",
    date: 2025,
  },
  {
    link: "./hiking-2025-switzerland-harder-klum",
    photo:
      "./static/img/hiking/2025/switzerland-harder-klum/2025_05_24_07_36_IMG_0704 - Copy.JPG",
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
              <h6>Distance: 759.9km</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "29%" }}>
                  <span data-toggle="tooltip" title="29%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Elevation Gain: 26,346m</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "52%" }}>
                  <span data-toggle="tooltip" title="52%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Completed: 49</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: "49%" }}>
                  <span data-toggle="tooltip" title="49%" />
                </div>
              </div>
            </div>

            <div className="skill-lt">
              <h6>Moving Time: 166h</h6>
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
