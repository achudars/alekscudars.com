import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/aerial/2025/cyprus/2025_03_22_10_11_DJI_0577.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_22_10_12_DJI_0580.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_22_10_15_IMG_9889.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_22_10_18_DJI_0599.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_22_10_30_IMG_9815.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_22_11_12_IMG_9834.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_22_11_12_IMG_9839.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_22_11_36_IMG_9844.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_22_11_54_IMG_9848.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_22_14_59_IMG_9862.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_22_15_26_IMG_9877.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_22_15_26_IMG_9878.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_30_DJI_0617.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_30_DJI_0620.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_30_IMG_9995 - square.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_30_IMG_9995.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_31_DJI_0621.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_31_DJI_0622.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_31_DJI_0624.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_31_DJI_0625.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_31_DJI_0628.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_31_DJI_0629.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_32_DJI_0632.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_32_DJI_0634.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_32_DJI_0636.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_32_DJI_0637.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_33_DJI_0638.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_34_DJI_0648.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_34_DJI_0649.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_36_DJI_0662.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_39_DJI_0674.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_40_DJI_0679.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_40_DJI_0680.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_40_DJI_0682.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_42_DJI_0690.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_46_DJI_0709.JPG",
  "./static/img/aerial/2025/cyprus/2025_03_23_07_47_DJI_0724.JPG",
];

const VIDEOS = [
  "./static/video/aerial/2025/cyprus/2025_03_22_12_12_DJI_0582.mp4",
  "./static/video/aerial/2025/cyprus/2025_03_22_12_15_DJI_0594.mp4",
  "./static/video/aerial/2025/cyprus/2025_03_23_09_36_DJI_0664.mp4",
  "./static/video/aerial/2025/cyprus/2025_03_23_09_38_DJI_0672.mp4",
  "./static/video/aerial/2025/cyprus/2025_03_23_09_40_DJI_0681.mp4",
  "./static/video/aerial/2025/cyprus/2025_03_23_09_42_DJI_0692.mp4",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Cyprus"}
      id={"aerial-2025-cyprus"}
      title={"Cyprus, 2025"}
    />
  );
};
export default SpecificItem;
