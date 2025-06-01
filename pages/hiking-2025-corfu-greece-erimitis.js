import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/hiking/2025/corfu-greece-erimitis/hiking-2025-corfu-greece-erimitis.jpg",
  "/static/img/hiking/2025/corfu-greece-erimitis/2025_05_11_09_14_IMG_0513.JPG",
  "/static/img/hiking/2025/corfu-greece-erimitis/2025_05_11_09_27_IMG_0515.JPG",
  "/static/img/hiking/2025/corfu-greece-erimitis/2025_05_11_10_05_IMG_0525.JPG",
  "/static/img/hiking/2025/corfu-greece-erimitis/2025_05_11_10_06_IMG_0526.JPG",
  "/static/img/hiking/2025/corfu-greece-erimitis/2025_05_11_10_07_IMG_0527.JPG",
  "/static/img/hiking/2025/corfu-greece-erimitis/2025_05_11_10_07_IMG_0528.JPG",
  "/static/img/hiking/2025/corfu-greece-erimitis/2025_05_11_10_11_IMG_0530.JPG",
  "/static/img/hiking/2025/corfu-greece-erimitis/2025_05_11_10_16_IMG_0531.JPG",
  "/static/img/hiking/2025/corfu-greece-erimitis/2025_05_11_10_37_IMG_0532.JPG",
  "/static/img/hiking/2025/corfu-greece-erimitis/2025_05_11_10_39_IMG_0535.JPG",
  "/static/img/hiking/2025/corfu-greece-erimitis/2025_05_11_11_33_IMG_0541.JPG",
  "/static/img/hiking/2025/corfu-greece-erimitis/2025_05_11_12_20_IMG_0549.JPG",
  "/static/img/hiking/2025/corfu-greece-erimitis/2025_05_11_13_29_IMG_0554.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-corfu-greece-erimitis"}
      title={"Erimitis Beaches in Corfu, Greece"}
      extraDetails={[
        { label: "Length: 21.7km" },
        { label: "Elev. gain: 480m" },
        { label: "Moving time: 4:21:56" },
        { label: "Avg speed: 5km/h" },
        { label: "Calories: 2,475" },
        { label: "Total time: 4:57:44" },
      ]}
    />
  );
};

export default SpecificItem;
