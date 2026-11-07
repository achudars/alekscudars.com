import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2026/seven-hanging-valleys/IMG_4270.jpg",
  "./static/img/hiking/2026/seven-hanging-valleys/2026_09_11_07_19_IMG_3046.JPG",
  "./static/img/hiking/2026/seven-hanging-valleys/2026_09_11_07_20_IMG_3047.JPG",
  "./static/img/hiking/2026/seven-hanging-valleys/2026_09_11_07_22_IMG_3048.JPG",
  "./static/img/hiking/2026/seven-hanging-valleys/2026_09_11_07_22_IMG_3049.JPG",
  "./static/img/hiking/2026/seven-hanging-valleys/2026_09_11_07_24_IMG_3050.JPG",
  "./static/img/hiking/2026/seven-hanging-valleys/2026_09_11_07_25_IMG_3051.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2026-seven-hanging-valleys"}
      title={"Seven Hanging Valleys"}
      extraDetails={[
        { label: "Length: 6.74km" },
        { label: "Elev. gain: 222m" },
        { label: "Moving time: 1:54:50" },
        { label: "Avg speed: 3.5km/h" },
        { label: "Calories: 1085" },
        { label: "Total time: 2:40:03" },
      ]}
    />
  );
};

export default SpecificItem;
