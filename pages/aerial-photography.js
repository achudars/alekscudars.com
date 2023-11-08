import Layout from "../src/layout/Layout";

const PHOTOS_2020_SCOTLAND_GLENCOE = [
  "./static/img/2020/scotland-glencoe/47d6ccf8443f4002ec673590a23be727.jpg",
  "./static/img/2020/scotland-glencoe/2c42f692f99d0ba49514e7187dd2bd87.jpg",
  "./static/img/2020/scotland-glencoe/f2435e66fccf545aec3a315d8e21183c.jpg",
  "./static/img/2020/scotland-glencoe/15a2df6da3b53e19f653ce02622c0520.jpg",
  "./static/img/2020/scotland-glencoe/6c90712fc0352664ef058b6a2c4a5fb6.jpg",
  "./static/img/2020/scotland-glencoe/c97edb50d5f821570aab68617680aef2.jpg",
  "./static/img/2020/scotland-glencoe/306f4c4619101712b6f799d3fa263451.jpg",
  "./static/img/2020/scotland-glencoe/c7ef3855ad77137d2d92ec3ea140d9fc.jpg",
  "./static/img/2020/scotland-glencoe/593b0cbc847cd907b6b87f3604c48e64.jpg",
  "./static/img/2020/scotland-glencoe/a09e3e630ae2d88e3731406d18aaf3c9.jpg",
  "./static/img/2020/scotland-glencoe/a5ac62bf01daa44b29258056bc0d45ee.jpg",
  "./static/img/2020/scotland-glencoe/6602a1b40443be0c60447108e184ec43.jpg",
  "./static/img/2020/scotland-glencoe/42a4ce89d99d420910d27d71d50e0b7d.jpg",
];

const PHOTOS_2020_ENGLAND_NORFOLK = [
  "./static/img/2019/england-norfolk/4a94ed5be5eccbe85cbcd12d7e5acd1e.jpg",
  "./static/img/2019/england-norfolk/be710e98d38c98fd8783299fa6888611.jpg",
  "./static/img/2019/england-norfolk/6df86867048725151fa0e8792f577d05.jpg",
  "./static/img/2019/england-norfolk/e6913ef46724952c4fc241a3846c6faf.jpg",
  "./static/img/2019/england-norfolk/5aa1477a0b83604a1c2f681388b3286b.jpg",
  "./static/img/2019/england-norfolk/7ad07c9125776fb1a1d10350ce4f4de6.jpg",
  "./static/img/2019/england-norfolk/b0444879e547540e8e1938c05e68cb7e.jpg",
  "./static/img/2019/england-norfolk/04c8463ffd031c26bcbaed6ac1b59deb.jpg",
];

const AerialPhotography = () => {
  const renderHeader = () => {
    return (
      <>
        <div className="title">
          <h3>Aerial Photography & Videography.</h3>
        </div>
      </>
    );
  };

  const renderFlightStatistics = () => {
    return (
      <>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="education-box">
              <li>
                <span />
                <h6 />
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>Flight Statistics</h3>
              <div className="skill-lt">
                <h6>Total Flight Time: 6Hr 57Min</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "70%" }}>
                    <span data-toggle="tooltip" title="70%" />
                  </div>
                </div>
              </div>

              <div className="skill-lt">
                <h6>Total Distance: 38,823m</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>

              <div className="skill-lt">
                <h6>Total Flights: 83</h6>
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
      </>
    );
  };

  const renderItem = ({ src, alt }) => {
    return (
      <div className="col-lg-12 ml-auto m-15px-tb">
        <div className="skills-box">
          <img alt={alt} src={src} />
        </div>
      </div>
    );
  };

  const renderPhotography = () => {
    return (
      <>
        <div className="title">
          <h3>Aerial Photography.</h3>
        </div>
        <div className="row">
          <div className="col-lg-6 m-15px-tb">
            <ul className="education-box">
              <li>
                <span>Scotland, 2020</span>
                <h5>
                  <a
                    aria-label=""
                    href=""
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {`See all ${PHOTOS_2020_SCOTLAND_GLENCOE.length} photos`}
                  </a>
                </h5>
                <h6>Glencoe</h6>
                <p>56.672840 -5.132530</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 ml-auto m-15px-tb">
            <div className="skills-box">
              <img
                alt="aerial photo of scottish landscape"
                src="./static/img/2020/scotland-glencoe/47d6ccf8443f4002ec673590a23be727.jpg"
              />
            </div>
          </div>
          {1 > 2 &&
            PHOTOS_2020_SCOTLAND_GLENCOE.map((g) => {
              return renderItem({
                src: g,
                alt: "aerial photo of scottish landscape",
              });
            })}
          {1 > 2 &&
            PHOTOS_2020_ENGLAND_NORFOLK.map((g) => {
              return renderItem({
                src: g,
                alt: "aerial photo of wells-next-the-Sea",
              });
            })}
        </div>
      </>
    );
  };

  const renderVideography = () => {
    return (
      <>
        <div className="title">
          <h3>Aerial Videography.</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="education-box">
              <li>
                <span />
                <h6 />
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>Flight Statistics</h3>
              <div className="skill-lt">
                <h6>Total Flight Time: 6Hr 57Min</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "70%" }}>
                    <span data-toggle="tooltip" title="70%" />
                  </div>
                </div>
              </div>

              <div className="skill-lt">
                <h6>Total Distance: 38,823m</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>

              <div className="skill-lt">
                <h6>Total Flights: 83</h6>
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
      </>
    );
  };

  return (
    <Layout showBackBtn>
      <section
        id="AerialPhotography"
        data-nav-tooltip="AerialPhotography"
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">{renderHeader()}</div>
        <div className="separated" />
        <div className="container">{renderFlightStatistics()}</div>
        <div className="separated" />
        <div className="container">{renderPhotography()}</div>
        <div className="separated" />
        <div className="container">{renderVideography()}</div>
        <div className="separated" />
      </section>
    </Layout>
  );
};
export default AerialPhotography;
