import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/hiking/2025/switzerland-mount-rigi-descent/IMG_1107.jpg",
  "/static/img/hiking/2025/switzerland-mount-rigi-descent/2025_05_26_08_57_IMG_1020.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-descent/2025_05_26_09_03_IMG_1022.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-descent/2025_05_26_09_28_IMG_1023.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-descent/2025_05_26_09_44_IMG_1026.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-descent/2025_05_26_10_10_IMG_1032.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-descent/2025_05_26_10_10_IMG_1033.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-descent/2025_05_26_10_10_IMG_1034.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-descent/2025_05_26_10_10_IMG_1035.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-descent/2025_05_26_10_41_IMG_1044.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-descent/2025_05_26_11_34_IMG_1045.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-descent/2025_05_26_12_06_IMG_1047.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-switzerland-mount-rigi-descent"}
      title={"Erimitis Beaches in Corfu, Greece"}
      extraDetails={[
        { label: "Length: 10.1km" },
        { label: "Elev. gain: 259m" },
        { label: "Moving time: 2:12:48" },
        { label: "Avg speed: 4.6km/h" },
        { label: "Calories: 1,255" },
        { label: "Total time: 2:23:32" },
      ]}
    />
  );
};

export default SpecificItem;
