import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/fishermans-trail-6/IMG_5483.jpg",
  "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_10_59_IMG_4560.JPG",
  "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_11_19_IMG_4502.JPG",
  "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_11_26_IMG_4509.JPG",
  "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_11_35_IMG_4511.JPG",
  "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_11_40_IMG_4515.JPG",
  "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_11_47_IMG_4520.JPG",
  "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_11_48_IMG_4530.JPG",
  "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_11_49_IMG_4531.JPG",
  "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_11_56_IMG_4534.JPG",
  "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_13_12_IMG_4551.JPG",
  "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_13_12_IMG_4552.JPG",
  "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_14_57_IMG_4566.JPG",
  "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_14_58_IMG_4571.JPG",
];

const VIDEOS = [
  "./static/img/hiking/2025/fishermans-trail-6/2025_12_28_11_35_IMG_4510.MOV",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-fishermans-trail-6-aljezur-arrifana"}
      title={"Fisherman's Trail 6 (Aljezur - Arrifana)"}
      extraDetails={[
        { label: "Length: 22.2km" },
        { label: "Elev. gain: 506m" },
        { label: "Moving time: 4:41:45" },
        { label: "Avg speed: 4.7km/h" },
        { label: "Calories: 2663" },
        { label: "Total time: 6:47:38" },
      ]}
    />
  );
};

export default SpecificItem;
