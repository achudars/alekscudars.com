import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/IMG_1109.jpg",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_07_36_IMG_0897.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_07_51_IMG_0899.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_07_53_IMG_0903.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_07_53_IMG_0904.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_08_03_IMG_0909.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_08_22_IMG_0914.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_09_09_IMG_0920.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_09_48_IMG_0933.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_09_49_IMG_0935.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_09_50_IMG_0938.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_09_54_IMG_0944.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_09_59_IMG_0948.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_10_03_IMG_0950.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_10_03_IMG_0952.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_10_07_IMG_0955.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_10_40_IMG_0967.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_10_51_IMG_0970.JPG",
  "/static/img/hiking/2025/switzerland-engelberg-truebsee/2025_05_25_11_33_IMG_0980.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-switzerland-engelberg-truebsee"}
      title={"Engelberg, Lake Truebsee, Switzerland"}
      extraDetails={[
        { label: "Length: 15.4km" },
        { label: "Elev. gain: 911m" },
        { label: "Moving time: 4:03:45" },
        { label: "Avg speed: 3.8km/h" },
        { label: "Calories: 2,30" },
        { label: "Total time: 4:31:08" },
      ]}
    />
  );
};

export default SpecificItem;
