import Layout from "./Layout";
import PhotoItem from "./PhotoItem";
import VideoItem from "./VideoItem";
import PageTitle from "./PageTitle";

const PhotoAndVideoSection = ({ photos, videos, altForPhotos, id, title }) => {
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

  return (
    <Layout showBackBtn>
      <section
        id={id}
        data-nav-tooltip={id}
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">
          <PageTitle title={title} />
        </div>
        <div className="container">{renderAll()}</div>
        <div className="separated" />
      </section>
    </Layout>
  );
};

export default PhotoAndVideoSection;
