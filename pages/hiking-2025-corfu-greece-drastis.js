import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/corfu-greece-drastis/hiking-2025-corfu-greece-drastis.jpg",
  "./static/img/hiking/2025/corfu-greece-drastis/2025_05_11_04_48_IMG_0461.JPG",
  "./static/img/hiking/2025/corfu-greece-drastis/2025_05_11_05_07_IMG_0464.JPG",
  "./static/img/hiking/2025/corfu-greece-drastis/2025_05_11_05_10_IMG_0466.JPG",
  "./static/img/hiking/2025/corfu-greece-drastis/2025_05_11_05_11_IMG_0469.JPG",
  "./static/img/hiking/2025/corfu-greece-drastis/2025_05_11_05_54_IMG_0481.JPG",
  "./static/img/hiking/2025/corfu-greece-drastis/2025_05_11_05_56_IMG_0484.JPG",
  "./static/img/hiking/2025/corfu-greece-drastis/2025_05_11_06_05_IMG_0491.JPG",
  "./static/img/hiking/2025/corfu-greece-drastis/2025_05_11_06_14_IMG_0498.JPG",
  "./static/img/hiking/2025/corfu-greece-drastis/2025_05_11_06_15_IMG_0499.JPG",
  "./static/img/hiking/2025/corfu-greece-drastis/2025_05_11_07_54_IMG_0500.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-corfu-greece-drastis"}
      title={"Cape Drastis in Corfu, Greece"}
      extraDetails={[
        { label: "Length: 7.3km" },
        { label: "Elev. gain: 257m" },
        { label: "Moving time: 1:24:25" },
        { label: "Avg speed: 5.2km/h" },
        { label: "Calories: 798" },
        { label: "Total time: 2:07:38" },
      ]}
    />
  );
};

export default SpecificItem;
