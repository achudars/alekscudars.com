import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/aerial/2022/england-seaford/2022_07_09_09_23_DJI_0178.JPG",
  "/static/img/aerial/2022/england-seaford/2022_07_09_09_26_DJI_0186.JPG",
  "/static/img/aerial/2022/england-seaford/2022_07_09_09_34_DJI_0211.JPG",
  "/static/img/aerial/2022/england-seaford/2022_07_09_09_30_DJI_0199.JPG",
  "/static/img/aerial/2022/england-seaford/2022_07_09_10_57_DJI_0252.JPG",
  "/static/img/aerial/2022/england-seaford/2022_07_09_09_28_DJI_0191.JPG",
  "/static/img/aerial/2022/england-seaford/2022_07_09_09_25_DJI_0183.JPG",
  "/static/img/aerial/2022/england-seaford/2022_07_09_09_29_DJI_0193.JPG",
  "/static/img/aerial/2022/england-seaford/2022_07_09_10_51_DJI_0239.JPG",
  "/static/img/aerial/2022/england-seaford/2022_07_09_10_49_DJI_0227.JPG",
  "/static/img/aerial/2022/england-seaford/2022_07_09_10_50_DJI_0234.JPG",
  "/static/img/aerial/2022/england-seaford/2022_07_09_10_49_DJI_0228.JPG",
  "/static/img/aerial/2022/england-seaford/2022_07_09_10_48_DJI_0226.JPG",
  "/static/img/aerial/2022/england-seaford/2022_07_09_09_27_DJI_0189.JPG",
];

const VIDEOS = [
  "/static/video/aerial/2022/england-seaford/2022_07_09_10_23_DJI_0179.mp4",
  "/static/video/aerial/2022/england-seaford/2022_07_09_11_47_DJI_0225.mp4",
  "/static/video/aerial/2022/england-seaford/2022_07_09_10_25_DJI_0184.mp4",
  "/static/video/aerial/2022/england-seaford/2022_07_09_10_29_DJI_0198.mp4",
  "/static/video/aerial/2022/england-seaford/2022_07_09_10_27_DJI_0190.mp4",
  "/static/video/aerial/2022/england-seaford/2022_07_09_10_23_DJI_0180.mp4",
  "/static/video/aerial/2022/england-seaford/2022_07_09_10_26_DJI_0187.mp4",
  "/static/video/aerial/2022/england-seaford/2022_07_09_10_24_DJI_0181.mp4",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of english landscape near Seaford"}
      id={"aerial-2022-england-seaford"}
      title={"England, Seaford, 2022"}
    />
  );
};
export default SpecificItem;
