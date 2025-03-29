import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/aerial/2025/spain-tenerife/2025_02_22_10_37_DJI_0412.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_22_10_39_DJI_0419.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_22_10_41_DJI_0426.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_21_11_54_DJI_0320.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_21_11_52_DJI_0313.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_21_12_04_DJI_0338.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_22_10_36_DJI_0409.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_21_14_02_DJI_0383.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_21_13_59_DJI_0352.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_21_12_00_DJI_0333.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_22_10_48_DJI_0441.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_22_10_47_DJI_0438.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_21_12_21_IMG_9281.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_21_12_05_DJI_0340.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_22_10_39_DJI_0419 - square.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_21_14_00_DJI_0362.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_22_10_48_DJI_0440.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_21_14_01_DJI_0370.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_21_14_04_DJI_0387.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_22_10_35_DJI_0400.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_21_14_01_DJI_0367.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_21_11_47_DJI_0296.JPG",
  "./static/img/aerial/2025/spain-tenerife/2025_02_22_12_55_DJI_0462.JPG",
];

const VIDEOS = [
  "./static/video/aerial/2025/spain-tenerife/2025_02_21_11_50_DJI_0302.mp4",
  "./static/video/aerial/2025/spain-tenerife/2025_02_22_12_46_DJI_0447.mp4",
  "./static/video/aerial/2025/spain-tenerife/2025_02_22_10_34_DJI_0395.mp4",
  "./static/video/aerial/2025/spain-tenerife/2025_02_21_12_05_DJI_0341.mp4",
  "./static/video/aerial/2025/spain-tenerife/2025_02_22_10_48_DJI_0442.mp4",
  "./static/video/aerial/2025/spain-tenerife/2025_02_22_10_37_DJI_0413.mp4",
  "./static/video/aerial/2025/spain-tenerife/2025_02_21_11_53_DJI_0318.mp4",
  "./static/video/aerial/2025/spain-tenerife/2025_02_22_10_46_DJI_0437.mp4",
  "./static/video/aerial/2025/spain-tenerife/2025_02_22_10_52_DJI_0443.mp4",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Spain, Tenerife"}
      id={"aerial-2025-spain-tenerife"}
      title={"Spain, Tenerife, 2025"}
    />
  );
};
export default SpecificItem;
