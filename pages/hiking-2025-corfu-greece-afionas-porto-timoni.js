import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/hiking/2025/corfu-greece-afionas-porto-timoni/hiking-2025-corfu-greece-afionas-porto-timoni.jpg",
  "/static/img/hiking/2025/corfu-greece-afionas-porto-timoni/2025_05_10_04_50_IMG_0355.jpg",
  "/static/img/hiking/2025/corfu-greece-afionas-porto-timoni/2025_05_10_04_50_IMG_0356.jpg",
  "/static/img/hiking/2025/corfu-greece-afionas-porto-timoni/2025_05_10_05_17_IMG_0359.jpg",
  "/static/img/hiking/2025/corfu-greece-afionas-porto-timoni/2025_05_10_05_17_IMG_0361.jpg",
  "/static/img/hiking/2025/corfu-greece-afionas-porto-timoni/2025_05_10_05_36_IMG_0366.jpg",
  "/static/img/hiking/2025/corfu-greece-afionas-porto-timoni/2025_05_10_06_10_IMG_0367.jpg",
  "/static/img/hiking/2025/corfu-greece-afionas-porto-timoni/2025_05_10_06_10_IMG_0368.jpg",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-corfu-greece-afionas-porto-timoni"}
      title={"Afionas - Porto Timoni Twin Beaches"}
      extraDetails={[
        { label: "Length: 4.1km" },
        { label: "Elev. gain: 226m" },
        { label: "Moving time: 1:02:12" },
        { label: "Avg speed: 4km/h" },
        { label: "Calories: 588" },
        { label: "Total time: 1:39:19" },
      ]}
    />
  );
};

export default SpecificItem;
