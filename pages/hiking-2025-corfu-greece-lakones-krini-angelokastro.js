import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/hiking-2025-corfu-greece-lakones-krini-angelokastro.jpg",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_08_08_IMG_0395.jpg",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_08_10_IMG_0396.jpg",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_08_11_IMG_0397.jpg",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_08_43_IMG_0399.jpg",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_08_44_IMG_0400.jpg",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_08_50_IMG_0401.jpg",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_08_51_IMG_0402.jpg",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_09_04_IMG_0406.jpg",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_09_06_IMG_0408.jpg",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_09_12_IMG_0414.jpg",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_09_42_IMG_0418.JPG",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_09_44_IMG_0424.JPG",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_09_48_IMG_0425.jpg",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_10_57_IMG_0429.jpg",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_10_57_IMG_0430.jpg",
  "/static/img/hiking/2025/corfu-greece-lakones-krini-angelokastro/2025_05_10_10_57_IMG_0431.jpg",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-corfu-greece-lakones-krini-angelokastro"}
      title={"Lakones - Krini - Angelokastro Castle in Corfu, Greece"}
      extraDetails={[
        { label: "Length: 9.8km" },
        { label: "Elev. gain: 421m" },
        { label: "Moving time: 2:02:48" },
        { label: "Avg speed: 4.8km/h" },
        { label: "Calories: 1,160" },
        { label: "Total time: 2:38:19" },
      ]}
    />
  );
};

export default SpecificItem;
