import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2026/tapada-da-mafra/IMG_4271.jpg",
  "./static/img/hiking/2026/tapada-da-mafra/2026_09_12_10_57_IMG_3123.JPG",
  "./static/img/hiking/2026/tapada-da-mafra/2026_09_12_10_57_IMG_3124.JPG",
  "./static/img/hiking/2026/tapada-da-mafra/2026_09_12_10_57_IMG_3126.JPG",
  "./static/img/hiking/2026/tapada-da-mafra/2026_09_12_10_57_IMG_3128.JPG",
  "./static/img/hiking/2026/tapada-da-mafra/2026_09_12_10_57_IMG_3129.JPG",
  "./static/img/hiking/2026/tapada-da-mafra/2026_09_12_10_57_IMG_3131.JPG",
  "./static/img/hiking/2026/tapada-da-mafra/2026_09_12_10_57_IMG_3133.JPG",
  "./static/img/hiking/2026/tapada-da-mafra/2026_09_12_10_57_IMG_3134.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2026-tapada-da-mafra"}
      title={"Tapada da Mafra"}
      extraDetails={[
        { label: "Length: 9.01km" },
        { label: "Elev. gain: 246m" },
        { label: "Moving time: 1:59:16" },
        { label: "Avg speed: 4.5km/h" },
        { label: "Calories: 1127" },
        { label: "Total time: 2:12:51" },
      ]}
    />
  );
};

export default SpecificItem;
