/* eslint-disable @next/next/no-img-element */
import Layout from "../src/layout/Layout";

const RunningAndTraining = () => {
  const renderOverviewStats2025 = () => {
    return (
      <div className="col-sm-12 col-md-12 col-xl-12">
        <div>
          <img
            src={`/static/img/running/2025.jpg`}
            title={"overview by Nike 2025"}
            alt={"overview by Nike 2025"}
          />
        </div>
      </div>
    );
  };

  const renderOverviewStats2024 = () => {
    return (
      <div className="col-sm-12 col-md-12 col-xl-12">
        <div>
          <img
            src={`/static/img/running/2024.jpg`}
            title={"overview by Nike 2024"}
            alt={"overview by Nike 2024"}
          />
        </div>
      </div>
    );
  };

  const renderOverviewStats2023 = () => {
    return (
      <div className="col-sm-12 col-md-12 col-xl-12">
        <div>
          <img
            src={`/static/img/running/2023.jpg`}
            title={"overview by Nike 2023"}
            alt={"overview by Nike 2023"}
          />
        </div>
      </div>
    );
  };

  const renderOverviewStats2022 = () => {
    return (
      <div className="col-sm-12 col-md-12 col-xl-12">
        <div>
          <img
            src={`/static/img/running/2022.jpg`}
            title={"overview by Nike 2022"}
            alt={"overview by Nike 2022"}
          />
        </div>
      </div>
    );
  };

  const renderOverviewStats2021 = () => {
    return (
      <div className="col-sm-12 col-md-12 col-xl-12">
        <div>
          <img
            src={`/static/img/running/2021.jpg`}
            title={"overview by Nike 2021"}
            alt={"overview by Nike 2021"}
          />
        </div>
      </div>
    );
  };

  const renderOverviewStats2020 = () => {
    return (
      <div className="col-sm-12 col-md-12 col-xl-12">
        <div>
          <img
            src={`/static/img/running/2020.jpg`}
            title={"overview by Nike 2020"}
            alt={"overview by Nike 2020"}
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
            {renderOverviewStats2025()}
            {renderOverviewStats2024()}
            {renderOverviewStats2023()}
            {renderOverviewStats2022()}
            {renderOverviewStats2021()}
            {renderOverviewStats2020()}
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
