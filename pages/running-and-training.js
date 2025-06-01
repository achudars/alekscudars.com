/* eslint-disable @next/next/no-img-element */
import Layout from "../src/layout/Layout";
import LastUpdated from "../src/components/LastUpdated";

const RunningAndTraining = () => {
  const renderOverviewStats = () => {
    return (
      <div className="col-sm-12 col-md-12 col-xl-12">
        <div>
          <img
            src={`/static/img/running/nike-overview.jpg`}
            title={"overview by Nike"}
            alt={"overview by Nike"}
          />
        </div>
      </div>
    );
  };

  const renderAllTimeStats = () => {
    return (
      <div className="col-sm-12 col-md-12 col-xl-12">
        <div>
          <img
            src={`/static/img/running/nike-all-time-stats.jpg`}
            title={"all-time stats by Nike"}
            alt={"all-time stats by Nike"}
          />
        </div>
      </div>
    );
  };

  const renderExtraDetailSection = () => {
    return (
      <div className="resume-box">
        <div className="resume-row">
          <div className="row">
            {renderOverviewStats()}
            {renderAllTimeStats()}
          </div>
        </div>
      </div>
    );
  };

  const renderContainer = () => {
    return (
      <>
        <div className="title">
          <h3>Running.</h3>
          <!-- <LastUpdated
            filePath="pages/running-and-training.js"
            className="m-15px-tb"
          />-->
        </div>
        {renderExtraDetailSection()}
      </>
    );
  };

  return (
    <Layout showBackBtn>
      <section
        id="RunningAndTraining"
        data-nav-tooltip="RunningAndTraining"
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">{renderContainer()}</div>
      </section>
    </Layout>
  );
};
export default RunningAndTraining;
