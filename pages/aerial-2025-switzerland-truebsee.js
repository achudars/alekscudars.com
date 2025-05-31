import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/aerial/2025/switzerland-truebsee/2025_05_25_07_36_IMG_0897.JPG",
  "./static/img/aerial/2025/switzerland-truebsee/2025_05_25_07_43_DJI_0126.JPG",
  "./static/img/aerial/2025/switzerland-truebsee/2025_05_25_07_46_DJI_0150.JPG",
  "./static/img/aerial/2025/switzerland-truebsee/2025_05_25_07_49_DJI_0166.JPG",
  "./static/img/aerial/2025/switzerland-truebsee/2025_05_25_07_51_IMG_0899.JPG",
  "./static/img/aerial/2025/switzerland-truebsee/2025_05_25_07_53_DJI_0188.JPG",
  "./static/img/aerial/2025/switzerland-truebsee/2025_05_25_07_53_IMG_0904.JPG",
  "./static/img/aerial/2025/switzerland-truebsee/2025_05_25_09_49_IMG_0935.JPG",
  "./static/img/aerial/2025/switzerland-truebsee/2025_05_25_09_55_IMG_0946.JPG",
];

const VIDEOS = [
  "./static/img/aerial/2025/switzerland-truebsee/2025_05_25_09_47_DJI_0156.MOV",
  "./static/img/aerial/2025/switzerland-truebsee/2025_05_25_09_48_DJI_0164.MOV",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of truebsee, Switzerland"}
      id={"aerial-2025-switzerland-truebsee"}
      title={"Switzerland, truebsee, 2025"}
    />
  );
};
export default SpecificItem;
