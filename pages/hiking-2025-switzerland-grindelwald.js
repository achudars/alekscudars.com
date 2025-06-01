import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/hiking/2025/switzerland-grindelwald/IMG_1110.jpg",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_10_59_IMG_0750.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_11_10_IMG_0764.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_11_38_IMG_0778.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_11_38_IMG_0784.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_11_39_IMG_0788.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_11_43_IMG_0794.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_12_04_IMG_0798.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_12_36_IMG_0814.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_12_48_IMG_0818.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_12_55_IMG_0821.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_12_55_IMG_0822.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_12_55_IMG_0823.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_13_16_IMG_0831.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_13_16_IMG_0832.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_13_22_IMG_0836.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_13_26_IMG_0838.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_14_10_IMG_0839.JPG",
  "/static/img/hiking/2025/switzerland-grindelwald/2025_05_24_14_32_IMG_0847.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-switzerland-grindelwald"}
      title={"Grindelwald, Switzerland"}
      extraDetails={[
        { label: "Length: 15.5km" },
        { label: "Elev. gain: 710m" },
        { label: "Moving time: 3:06:04" },
        { label: "Avg speed: 5km/h" },
        { label: "Calories: 1,758" },
        { label: "Total time: 3:35:05" },
      ]}
    />
  );
};

export default SpecificItem;
