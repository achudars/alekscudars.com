import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/aerial/2018/ukraine-odessa/4aa1747ac3d510f71ae45bb0f7105b83.jpg",
  "/static/img/aerial/2018/ukraine-odessa/ad28c20b4cc025ef5528a645479d3b5d.jpg",
];

const VIDEOS = [
  "/static/video/aerial/2018/ukraine-odessa/8d892497a4332bc6f0605b09b7287a22.mp4",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Odessa landscape"}
      id={"aerial-2018-ukraine-odessa"}
      title={"Ukraine, Odessa, 2018"}
    />
  );
};
export default SpecificItem;
