import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/atalante/atalante_01.jpg",
  "./static/img/hiking/2025/atalante/atalante_03.jpg",
  "./static/img/hiking/2025/atalante/atalante_04.jpg",
  "./static/img/hiking/2025/atalante/atalante_02.jpg",
  "./static/img/hiking/2025/atalante/atalante_05.jpg",
  "./static/img/hiking/2025/atalante/2025_03_22_22_01_IMG_9892.JPG",
  "./static/img/hiking/2025/atalante/2025_03_24_09_36_IMG_9967.JPG",
  "./static/img/hiking/2025/atalante/2025_03_24_09_51_IMG_9968.JPG",
  "./static/img/hiking/2025/atalante/2025_03_24_09_56_IMG_9971.JPG",
  "./static/img/hiking/2025/atalante/2025_03_24_09_55_IMG_9970.JPG",
  "./static/img/hiking/2025/atalante/2025_03_24_09_36_IMG_9966.JPG",
  "./static/img/hiking/2025/atalante/2025_03_24_09_22_IMG_9964.JPG",
];

const VIDEOS = [
  "./static/img/hiking/2025/atalante/2025_03_22_11_07_IMG_9829.MOV",
  "./static/img/hiking/2025/atalante/2025_03_22_11_10_IMG_9831.MOV",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-atalante"}
      title={"Atalante Trail in Cyprus"}
      extraDetails={[
        { label: "Length: 14.73km" },
        { label: "Elev. gain: 400m" },
        { label: "Moving time: 3:41:04" },
        { label: "Avg speed: 4km/h" },
        { label: "Calories: 2,089" },
        { label: "Total time: 4:01:33" },
      ]}
    />
  );
};

export default SpecificItem;
