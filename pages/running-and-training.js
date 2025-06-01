/* eslint-disable @next/next/no-img-element */
import Layout from "../src/layout/Layout";
import { useState, useEffect } from "react";

const RunningAndTraining = () => {
  const [lastUpdated, setLastUpdated] = useState("Loading...");

  useEffect(() => {
    // Fetch last commit date for this file
    fetch('/api/last-commit?file=pages/running-and-training.js')
      .then(response => response.json())
      .then(data => {
        if (data.date) {
          const date = new Date(data.date);
          setLastUpdated(date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }));
        } else {
          setLastUpdated("Unknown");
        }
      })
      .catch(error => {
        console.error("Failed to fetch last commit date:", error);
        setLastUpdated("Unknown");
      });
  }, []);

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
          <p className="subtitle m-15px-tb">Last updated: {lastUpdated}</p>
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
