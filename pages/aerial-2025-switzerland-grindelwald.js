import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_11_11_DJI_0003.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_11_11_DJI_0007.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_11_11_DJI_0011.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_11_12_DJI_0018.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_11_12_DJI_0019.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_11_12_DJI_0022.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_11_12_DJI_0023.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_11_12_DJI_0024.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_11_13_DJI_0028.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_11_13_DJI_0029.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_11_13_DJI_0036.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_11_14_DJI_0047.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_11_15_DJI_0049.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_12_37_DJI_0052.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_12_38_DJI_0058.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_12_40_DJI_0065.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_12_43_DJI_0082.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_12_44_DJI_0090.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_12_46_DJI_0095.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_12_46_DJI_0096.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_12_50_DJI_0107.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_12_53_DJI_0116.JPG",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_14_35_IMG_0854.JPG",
];

const VIDEOS = [
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_14_50_DJI_0108.MOV",
  "/static/img/aerial/2025/switzerland-grindelwald/2025_05_24_14_53_DJI_0118.MOV",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Grindelwald, Switzerland"}
      id={"aerial-2025-switzerland-grindelwald"}
      title={"Switzerland, Grindelwald, 2025"}
    />
  );
};
export default SpecificItem;
