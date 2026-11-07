import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2026/pico-del-veleta/IMG_4274.jpg",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_11_38_IMG_3303.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_11_39_IMG_3305.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_11_40_IMG_3306.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_12_16_IMG_3312.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_12_35_IMG_3319.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_12_35_IMG_3320.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_12_35_IMG_3321.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_12_57_IMG_3322.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_13_04_IMG_3324.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_13_06_IMG_3334.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_13_08_IMG_3335.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_13_27_IMG_3337.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_13_31_IMG_3338.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_13_31_IMG_3339.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_13_33_IMG_3342.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_13_34_IMG_3346.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_13_49_IMG_3347.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_13_57_IMG_3349.JPG",
  "./static/img/hiking/2026/pico-del-veleta/2026_09_14_14_09_IMG_3355.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2026-pico-del-veleta"}
      title={"Pico del Veleta"}
      extraDetails={[
        { label: "Length: 14.65km" },
        { label: "Elev. gain: 893m" },
        { label: "Moving time: 3:28:04" },
        { label: "Avg speed: 4.2km/h" },
        { label: "Calories: 1966" },
        { label: "Total time: 4:18:36" },
      ]}
    />
  );
};

export default SpecificItem;
