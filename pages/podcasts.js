import Layout from "../src/layout/Layout";
import podcasts from "./api/podcasts.json";
import { Fragment } from "react";

const Podcasts = () => {
  const renderPodcasts = () => {
    return (
      <>
        <div className="about-text" />
        {podcasts.map((podcast) => {
          return (
            <Fragment key={podcast.podcastTitle}>
              <div className="resume-box">
                <div className="resume-row">
                  <div className="row">
                    <div className="col-sm-3 col-md-3 col-xl-2">
                      <div className="rb-left">
                        <img
                          src={`/static/img/podcasts/${podcast.podcastTitle}.jpg`}
                          title={podcast.podcastTitle}
                          alt={podcast.podcastTitle}
                        />
                      </div>
                    </div>
                    <div className="col-sm-9 col-md-9 col-xl-10">
                      <div className="rb-right">
                        <h6>{podcast.podcastTitle}</h6>
                        <label>by: {podcast.podcaster}</label>
                        <p>
                          <a href={podcast.podcastLink}>listen here</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="separated" />
            </Fragment>
          );
        })}
      </>
    );
  };

  const renderContainer = () => {
    return (
      <>
        <div className="title">
          <h3>Podcasts.</h3>
        </div>
        {renderPodcasts()}
      </>
    );
  };

  return (
    <Layout showBackBtn>
      <section
        id="Podcasts"
        data-nav-tooltip="Podcasts"
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">{renderContainer()}</div>
      </section>
    </Layout>
  );
};
export default Podcasts;
