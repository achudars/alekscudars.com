import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2026/pico-del-cielo/IMG_4275.jpg",
  "./static/img/hiking/2026/pico-del-cielo/2026_09_15_09_04_IMG_3391.JPG",
  "./static/img/hiking/2026/pico-del-cielo/2026_09_15_10_50_IMG_3393.JPG",
  "./static/img/hiking/2026/pico-del-cielo/2026_09_15_10_50_IMG_3395.JPG",
  "./static/img/hiking/2026/pico-del-cielo/2026_09_15_10_51_IMG_3396.JPG",
  "./static/img/hiking/2026/pico-del-cielo/2026_09_15_11_43_IMG_3397.JPG",
  "./static/img/hiking/2026/pico-del-cielo/2026_09_15_11_44_IMG_3398.JPG",
  "./static/img/hiking/2026/pico-del-cielo/2026_09_15_11_50_IMG_3411.JPG",
  "./static/img/hiking/2026/pico-del-cielo/2026_09_15_12_33_IMG_3413.JPG",
  "./static/img/hiking/2026/pico-del-cielo/2026_09_15_12_33_IMG_3414.JPG",
  "./static/img/hiking/2026/pico-del-cielo/2026_09_15_13_52_IMG_3415.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2026-pico-del-cielo"}
      title={"Pico del Cielo"}
      extraDetails={[
        { label: "Length: 20.74km" },
        { label: "Elev. gain: 1399m" },
        { label: "Moving time: 5:02:22" },
        { label: "Avg speed: 4.1km/h" },
        { label: "Calories: 2857" },
        { label: "Total time: 5:37:40" },
      ]}
    />
  );
};

export default SpecificItem;
