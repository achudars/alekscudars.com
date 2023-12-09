/* eslint-disable @next/next/no-img-element */
import Layout from "../src/layout/Layout";

const RunningAndTraining = () => {
  const renderOverviewStats = () => {
    return (
      <div className="col-sm-6 col-md-6 col-xl-12">
        <div className="rb-left">
          <img
            src={`/static/img/running/nike-overview.png`}
            title={"overview by Nike"}
            alt={"overview by Nike"}
          />
        </div>
      </div>
    );
  };

  const renderAllTimeStats = () => {
    return (
      <div className="col-sm-6 col-md-6 col-xl-12">
        <div className="rb-right">
          <img
            src={`/static/img/running/nike-all-time-stats.png`}
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
          <h3>Running and Training.</h3>
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
