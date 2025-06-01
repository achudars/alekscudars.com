import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_06_52_IMG_0691.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_07_02_DJI_0940.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_07_02_DJI_0944.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_07_02_DJI_0945.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_07_03_DJI_0952.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_07_04_DJI_0961.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_07_05_DJI_0968.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_07_06_DJI_0976.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_07_09_IMG_0699.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_07_36_IMG_0704.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_08_25_IMG_0711.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_08_25_IMG_0712.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_08_26_IMG_0719.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_08_26_IMG_0720.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_08_26_IMG_0721.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_08_29_IMG_0728.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_08_29_IMG_0729.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_08_46_IMG_0731.JPG",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_08_50_IMG_0734.JPG",
];

const VIDEOS = [
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_09_12_DJI_0987.MOV",
  "/static/img/aerial/2025/switzerland-harder-klum/2025_05_24_09_10_DJI_0985.MOV",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Harder Klum, Switzerland"}
      id={"aerial-2025-switzerland-harder-klum"}
      title={"Switzerland, Harder Klum, 2025"}
    />
  );
};
export default SpecificItem;
