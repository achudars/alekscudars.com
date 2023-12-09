/* eslint-disable @next/next/no-img-element */
import Layout from "./Layout";
import PhotoItem from "./PhotoItem";
import VideoItem from "./VideoItem";
import PageTitle from "./PageTitle";
import { Fragment } from "react";

const PhotoAndVideoSection = ({
  photos,
  videos,
  altForPhotos,
  id,
  title,
  extraDetails,
}) => {
  const renderAll = () => {
    return (
      <div className="row">
        {photos.map((photo) => {
          return <PhotoItem key={photo} src={photo} alt={altForPhotos} />;
        })}
        {videos.map((video) => {
          return <VideoItem key={video} src={video} />;
        })}
      </div>
    );
  };

  const renderExtraDetailSection = () => {
    return (
      <div className="resume-box">
        <div className="resume-row">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-xl-12">
              <div className="rb-right">
                <h6>Details</h6>
                {extraDetails.map((ed) => (
                  <Fragment key={ed.label}>
                    <p>{ed.label}</p>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout showBackBtn>
      <section
        id={id}
        data-nav-tooltip={id}
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">
          <PageTitle title={title} />
          {extraDetails && renderExtraDetailSection()}
        </div>
        <div className="container">{renderAll()}</div>
        <div className="separated" />
      </section>
    </Layout>
  );
};

export default PhotoAndVideoSection;
