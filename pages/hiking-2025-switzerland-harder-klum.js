import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/switzerland-harder-klum/IMG_1111.jpg",
  "./static/img/hiking/2025/switzerland-harder-klum/2025_05_24_06_52_IMG_0692.JPG",
  "./static/img/hiking/2025/switzerland-harder-klum/2025_05_24_07_17_IMG_0702.JPG",
  "./static/img/hiking/2025/switzerland-harder-klum/2025_05_24_07_36_IMG_0704.JPG",
  "./static/img/hiking/2025/switzerland-harder-klum/2025_05_24_08_25_IMG_0711.JPG",
  "./static/img/hiking/2025/switzerland-harder-klum/2025_05_24_08_25_IMG_0712.JPG",
  "./static/img/hiking/2025/switzerland-harder-klum/2025_05_24_08_26_IMG_0720.JPG",
  "./static/img/hiking/2025/switzerland-harder-klum/2025_05_24_08_50_IMG_0734.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-switzerland-harder-klum"}
      title={"Harder Klum, Switzerland"}
      extraDetails={[
        { label: "Length: 10.1km" },
        { label: "Elev. gain: 785m" },
        { label: "Moving time: 2:39:29" },
        { label: "Avg speed: 3.8km/h" },
        { label: "Calories: 1,507" },
        { label: "Total time: 2:55:47" },
      ]}
    />
  );
};

export default SpecificItem;
