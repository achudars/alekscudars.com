/* eslint-disable @next/next/no-img-element */
import Layout from "../src/layout/Layout";

const DRAWINGS = [
  `/static/img/drawing/drawings.jpg`,
  `/static/img/drawing/IMG_1294.jpg`,
  `/static/img/drawing/IMG_1295.jpg`,
  `/static/img/drawing/IMG_1296.jpg`,
  `/static/img/drawing/IMG_1297.jpg`,
  `/static/img/drawing/IMG_1298.jpg`,
  `/static/img/drawing/IMG_1299.jpg`,
  `/static/img/drawing/IMG_1300.jpg`,
  `/static/img/drawing/IMG_1301.jpg`,
  `/static/img/drawing/IMG_1302.jpg`,
  `/static/img/drawing/IMG_1303.jpg`,
  `/static/img/drawing/IMG_1304.jpg`,
  `/static/img/drawing/IMG_1305.jpg`,
  `/static/img/drawing/IMG_1306.jpg`,
  `/static/img/drawing/IMG_1307.jpg`,
  `/static/img/drawing/IMG_1308.jpg`,
  `/static/img/drawing/IMG_1309.jpg`,
  `/static/img/drawing/IMG_1310.jpg`,
  `/static/img/drawing/IMG_1311.jpg`,
  `/static/img/drawing/IMG_1312.jpg`,
  `/static/img/drawing/IMG_1313.jpg`,
  `/static/img/drawing/IMG_1314.jpg`,
  `/static/img/drawing/IMG_1315.jpg`,
  `/static/img/drawing/IMG_1316.jpg`,
  `/static/img/drawing/IMG_1317.jpg`,
  `/static/img/drawing/IMG_1318.jpg`,
  `/static/img/drawing/IMG_1319.jpg`,
  `/static/img/drawing/IMG_1320.jpg`,
];

const Drawing = () => {
  const renderEachDrawing = (drawing) => {
    return (
      <>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div>
                <div className="rb-left">
                  <img src={drawing} title={"drawing"} alt={"drawing"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
      </>
    );
  };

  const renderDrawing = () => {
    return (
      <>
        <div className="about-text" />
        {DRAWINGS.map((d) => renderEachDrawing(d))}
      </>
    );
  };

  const renderContainer = () => {
    return (
      <>
        <div className="title">
          <h3>Drawing.</h3>
        </div>
        {renderDrawing()}
      </>
    );
  };
  return (
    <>
      <style>{`
        .resume-row {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .resume-row .rb-left {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .resume-row img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
      <Layout showBackBtn>
        <section
          id="Drawing"
          data-nav-tooltip="Drawing"
          className="pp-section pp-scrollable section counter"
        >
          <div className="container">{renderContainer()}</div>
        </section>
      </Layout>
    </>
  );
};
export default Drawing;
