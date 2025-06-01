import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/aerial/2025/greece-corfu/2025_05_10_02_56_DJI_0733.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_02_57_DJI_0741.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_02_57_DJI_0744.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_02_57_DJI_0747.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_02_58_DJI_0751.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_02_58_DJI_0753.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_02_58_DJI_0757.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_02_59_DJI_0758.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_02_59_DJI_0760.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_02_59_DJI_0761.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_03_00_DJI_0763.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_03_00_DJI_0766.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_03_00_DJI_0767.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_03_03_DJI_0778.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_03_41_DJI_0803.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_03_42_DJI_0809.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_05_43_DJI_0838.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_05_43_DJI_0840.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_05_44_DJI_0849.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_05_47_DJI_0865.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_05_47_DJI_0866.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_05_48_DJI_0871.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_05_48_DJI_0875.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_05_48_DJI_0876.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_05_48_DJI_0877.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_11_04_55_DJI_0889.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_11_04_57_DJI_0898.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_11_04_58_DJI_0904.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_11_04_59_DJI_0910.JPG",
  "/static/img/aerial/2025/greece-corfu/2025_05_11_05_01_DJI_0920.JPG",
];

const VIDEOS = [
  "/static/img/aerial/2025/greece-corfu/2025_05_10_06_42_DJI_0812.MOV",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_06_04_DJI_0784-720p.mp4",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_06_40_DJI_0797.mp4",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_08_45_DJI_0856.MOV",
  "/static/img/aerial/2025/greece-corfu/2025_05_10_08_45_DJI_0858.MOV",
  "/static/img/aerial/2025/greece-corfu/2025_05_11_07_56_DJI_0892.MOV",
  "/static/img/aerial/2025/greece-corfu/2025_05_11_07_56_DJI_0897.MOV",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Corfu, Greece"}
      id={"aerial-2025-corfu-greece"}
      title={"Corfu, Greece, 2025"}
    />
  );
};
export default SpecificItem;
