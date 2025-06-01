import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/aerial/2025/portugal-madeira/2025_03_08_10_11_DJI_0547.JPG",
  "/static/img/aerial/2025/portugal-madeira/2025_03_08_10_11_DJI_0547 - square.JPG",
  "/static/img/aerial/2025/portugal-madeira/2025_03_08_10_07_DJI_0517.JPG",
  "/static/img/aerial/2025/portugal-madeira/2025_03_08_10_12_DJI_0552.JPG",
  "/static/img/aerial/2025/portugal-madeira/2025_03_08_10_19_DJI_0572.JPG",
  "/static/img/aerial/2025/portugal-madeira/2025_03_08_15_07_IMG_9687.JPG",
];

const VIDEOS = [
  "/static/video/aerial/2025/portugal-madeira/2025_03_08_10_12_DJI_0553.mp4",
  "/static/video/aerial/2025/portugal-madeira/2025_03_08_10_13_DJI_0554.mp4",
  "/static/video/aerial/2025/portugal-madeira/DJI_0553.mp4",
  "/static/video/aerial/2025/portugal-madeira/2025_03_07_10_47_DJI_0503.mp4",
  "/static/video/aerial/2025/portugal-madeira/2025_03_07_10_42_DJI_0496.mp4",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Portugal, Madeira"}
      id={"aerial-2025-portugal-madeira"}
      title={"Portugal, Madeira, 2025"}
    />
  );
};
export default SpecificItem;
