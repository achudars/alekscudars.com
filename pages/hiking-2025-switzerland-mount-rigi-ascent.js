import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/hiking/2025/switzerland-mount-rigi-ascent/IMG_1108.jpg",
  "/static/img/hiking/2025/switzerland-mount-rigi-ascent/2025_05_26_08_03_IMG_1004.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-ascent/2025_05_26_08_03_IMG_1005.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-ascent/2025_05_26_08_03_IMG_1006.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-ascent/2025_05_26_08_20_IMG_1007.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-ascent/2025_05_26_08_42_IMG_1010.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-ascent/2025_05_26_08_42_IMG_1011.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-ascent/2025_05_26_08_42_IMG_1012.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-ascent/2025_05_26_08_54_IMG_1013.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-ascent/2025_05_26_08_54_IMG_1015.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-ascent/2025_05_26_08_54_IMG_1016.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-ascent/2025_05_26_08_55_IMG_1017.JPG",
  "/static/img/hiking/2025/switzerland-mount-rigi-ascent/2025_05_26_08_56_IMG_1018.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-switzerland-mount-rigi-ascent"}
      title={"Rigi ascent, Switzerland"}
      extraDetails={[
        { label: "Length: 5.7km" },
        { label: "Elev. gain: 767m" },
        { label: "Moving time: 1:37:13" },
        { label: "Avg speed: 3.5km/h" },
        { label: "Calories: 919" },
        { label: "Total time: 1:40:59" },
      ]}
    />
  );
};

export default SpecificItem;
