import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2026/ouse-valley-viaduct/ouse_map.jpg",
  "./static/img/hiking/2026/ouse-valley-viaduct/2026_05_04_07_21_IMG_8465.JPG",
  "./static/img/hiking/2026/ouse-valley-viaduct/2026_05_04_07_29_IMG_8466.JPG",
  "./static/img/hiking/2026/ouse-valley-viaduct/2026_05_04_07_38_IMG_8469.JPG",
  "./static/img/hiking/2026/ouse-valley-viaduct/2026_05_04_07_45_IMG_8473.JPG",
  "./static/img/hiking/2026/ouse-valley-viaduct/2026_05_04_08_19_IMG_8481.JPG",
  "./static/img/hiking/2026/ouse-valley-viaduct/2026_05_04_08_19_IMG_8482.JPG",
  "./static/img/hiking/2026/ouse-valley-viaduct/2026_05_04_08_56_IMG_8502.JPG",
  "./static/img/hiking/2026/ouse-valley-viaduct/2026_05_04_09_15_IMG_8506.JPG",
  "./static/img/hiking/2026/ouse-valley-viaduct/2026_05_04_09_31_IMG_8508.JPG",
  "./static/img/hiking/2026/ouse-valley-viaduct/2026_05_04_10_12_IMG_8511.JPG",
  "./static/img/hiking/2026/ouse-valley-viaduct/DJI_20260504084134_0014_D.jpg",
  "./static/img/hiking/2026/ouse-valley-viaduct/DJI_20260504084225_0015_D.jpg",
  "./static/img/hiking/2026/ouse-valley-viaduct/DJI_20260504084601_0022_D.jpg",
  "./static/img/hiking/2026/ouse-valley-viaduct/DJI_20260504084619_0026_D.jpg",
  "./static/img/hiking/2026/ouse-valley-viaduct/DJI_20260504084856_0031_D.jpg",
  "./static/img/hiking/2026/ouse-valley-viaduct/DJI_20260504084915_0032_D.jpg",
  "./static/img/hiking/2026/ouse-valley-viaduct/DJI_20260504084936_0033_D.jpg",
  "./static/img/hiking/2026/ouse-valley-viaduct/DJI_20260504085002_0034_D.jpg",
  "./static/img/hiking/2026/ouse-valley-viaduct/DJI_20260504085241_0041_D.jpg",
  "./static/img/hiking/2026/ouse-valley-viaduct/DJI_20260504085630_0047_D.jpg",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2026-ouse-valley-viaduct"}
      title={"Ouse Valley Viaduct"}
      extraDetails={[
        { label: "Length: 12.4km" },
        { label: "Elev. gain: 387m" },
        { label: "Moving time: 2:21:44" },
        { label: "Avg speed: 5.3km/h" },
        { label: "Calories: 1339" },
        { label: "Total time: 3:14:29" },
      ]}
    />
  );
};

export default SpecificItem;
