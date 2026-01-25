import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/fishermans-trail-8/IMG_5485.jpg",
  "./static/img/hiking/2025/fishermans-trail-8/2025_12_30_10_13_IMG_4735.JPG",
  "./static/img/hiking/2025/fishermans-trail-8/2025_12_30_10_18_IMG_4750.JPG",
  "./static/img/hiking/2025/fishermans-trail-8/2025_12_30_11_47_IMG_4756.JPG",
  "./static/img/hiking/2025/fishermans-trail-8/2025_12_30_11_54_IMG_4762.JPG",
  "./static/img/hiking/2025/fishermans-trail-8/2025_12_30_11_56_IMG_4797.JPG",
  "./static/img/hiking/2025/fishermans-trail-8/2025_12_30_12_52_IMG_4764.JPG",
  "./static/img/hiking/2025/fishermans-trail-8/2025_12_30_14_02_IMG_4767.JPG",
  "./static/img/hiking/2025/fishermans-trail-8/2025_12_30_14_04_IMG_4769.JPG",
  "./static/img/hiking/2025/fishermans-trail-8/2025_12_30_14_27_IMG_4777.JPG",
  "./static/img/hiking/2025/fishermans-trail-8/2025_12_30_14_31_IMG_4778.JPG",
];

const VIDEOS = [
  "./static/img/hiking/2025/fishermans-trail-8/2025_12_30_11_52_IMG_4789.MOV",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-fishermans-trail-8-carrapateira-vila-do-bispo"}
      title={"Fisherman's Trail 8 (Carrapateira - Vila do Bispo)"}
      extraDetails={[
        { label: "Length: 19.5km" },
        { label: "Elev. gain: 534m" },
        { label: "Moving time: 4:29:37" },
        { label: "Avg speed: 4.3km/h" },
        { label: "Calories: 2548" },
        { label: "Total time: 5:52:21" },
      ]}
    />
  );
};

export default SpecificItem;
