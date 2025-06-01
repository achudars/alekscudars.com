import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/hiking/2025/kalidonia/kalidonia_01.jpg",
  "/static/img/hiking/2025/kalidonia/kalidonia_02.jpg",
  "/static/img/hiking/2025/kalidonia/kalidonia_03.jpg",
  "/static/img/hiking/2025/kalidonia/2025_03_23_11_29_IMG_9916.JPG",
  "/static/img/hiking/2025/kalidonia/2025_03_23_12_50_IMG_9939.JPG",
  "/static/img/hiking/2025/kalidonia/2025_03_23_20_40_IMG_9947.JPG",
  "/static/img/hiking/2025/kalidonia/2025_03_24_07_01_IMG_9952.JPG",
  "/static/img/hiking/2025/kalidonia/2025_03_24_10_02_IMG_9973.PNG",
  "/static/img/hiking/2025/kalidonia/2025_03_24_10_05_IMG_9974.PNG",
  "/static/img/hiking/2025/kalidonia/2025_03_24_10_06_IMG_9976.PNG",
  "/static/img/hiking/2025/kalidonia/2025_03_24_10_16_IMG_9979.PNG",
  "/static/img/hiking/2025/kalidonia/2025_03_24_10_16_IMG_9980.PNG",
];

const VIDEOS = [
  "/static/img/hiking/2025/kalidonia/2025_03_23_11_23_IMG_9913.MOV",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-kalidonia"}
      title={"Kalidonia Trail in Cyprus"}
      extraDetails={[
        { label: "Length: 8.82km" },
        { label: "Elev. gain: 497m" },
        { label: "Moving time: 2:31:22" },
        { label: "Avg speed: 3.5km/h" },
        { label: "Calories: 1,430" },
        { label: "Total time: 2:49:10" },
      ]}
    />
  );
};

export default SpecificItem;
