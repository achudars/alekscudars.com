import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2026/fishermans-trail-11/IMG_5488.jpg",
  "./static/img/hiking/2026/fishermans-trail-11/2026_01_02_12_23_IMG_5092.JPG",
  "./static/img/hiking/2026/fishermans-trail-11/2026_01_02_12_24_IMG_5093.JPG",
  "./static/img/hiking/2026/fishermans-trail-11/2026_01_02_12_58_IMG_5095.JPG",
  "./static/img/hiking/2026/fishermans-trail-11/2026_01_02_13_10_IMG_5097.JPG",
  "./static/img/hiking/2026/fishermans-trail-11/2026_01_02_13_25_IMG_5098.JPG",
  "./static/img/hiking/2026/fishermans-trail-11/2026_01_02_13_33_IMG_5099.JPG",
  "./static/img/hiking/2026/fishermans-trail-11/2026_01_02_14_04_IMG_5102.JPG",
  "./static/img/hiking/2026/fishermans-trail-11/2026_01_02_14_05_IMG_5103.JPG",
  "./static/img/hiking/2026/fishermans-trail-11/2026_01_02_15_06_IMG_5114.JPG",
  "./static/img/hiking/2026/fishermans-trail-11/2026_01_02_15_08_IMG_5115.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2026-fishermans-trail-11-salema-luz"}
      title={"Fisherman's Trail 11 (Salema - Luz)"}
      extraDetails={[
        { label: "Length: 13.8km" },
        { label: "Elev. gain: 514m" },
        { label: "Moving time: 3:18:00" },
        { label: "Avg speed: 4.2km/h" },
        { label: "Calories: 1871" },
        { label: "Total time: 4:27:35" },
      ]}
    />
  );
};

export default SpecificItem;
