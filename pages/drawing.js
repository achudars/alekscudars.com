/* eslint-disable @next/next/no-img-element */
import Layout from "../src/layout/Layout";
import LastUpdated from "../src/components/LastUpdated";

const Drawing = () => {
  const renderDrawing = () => {
    return (
      <>
        <div className="about-text" />

        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div>
                <div className="rb-left">
                  <img
                    src={`/static/img/drawing/drawings.jpg`}
                    title={"drawings"}
                    alt={"drawings"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div>
                <div>
                  <h6>Pencil, A2</h6>
                  <label>by: Aleks</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
      </>
    );
  };

  const renderContainer = () => {
    return (
      <>
        <div className="title">
          <h3>Drawing.</h3>
          <LastUpdated
            filePath="pages/drawing.js"
            className="m-15px-tb"
          />
        </div>
        {renderDrawing()}
      </>
    );
  };

  return (
    <Layout showBackBtn>
      <section
        id="Drawing"
        data-nav-tooltip="Drawing"
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">{renderContainer()}</div>
      </section>
    </Layout>
  );
};
export default Drawing;
