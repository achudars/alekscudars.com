import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/fishermans-trail-7/IMG_5484.jpg",
  "./static/img/hiking/2025/fishermans-trail-7/2025_12_29_10_18_IMG_4587.JPG",
  "./static/img/hiking/2025/fishermans-trail-7/2025_12_29_10_24_IMG_4589.JPG",
  "./static/img/hiking/2025/fishermans-trail-7/2025_12_29_10_45_IMG_4603.JPG",
  "./static/img/hiking/2025/fishermans-trail-7/2025_12_29_10_52_IMG_4614.JPG",
  "./static/img/hiking/2025/fishermans-trail-7/2025_12_29_10_55_IMG_4616.JPG",
  "./static/img/hiking/2025/fishermans-trail-7/2025_12_29_11_12_IMG_4682.JPG",
  "./static/img/hiking/2025/fishermans-trail-7/2025_12_29_14_13_IMG_4629.JPG",
  "./static/img/hiking/2025/fishermans-trail-7/2025_12_29_14_22_IMG_4690.JPG",
  "./static/img/hiking/2025/fishermans-trail-7/2025_12_29_14_27_IMG_4647.JPG",
  "./static/img/hiking/2025/fishermans-trail-7/2025_12_29_14_45_IMG_4653.JPG",
  "./static/img/hiking/2025/fishermans-trail-7/2025_12_29_15_45_IMG_4699.JPG",
  "./static/img/hiking/2025/fishermans-trail-7/2025_12_29_15_52_IMG_4663.JPG",
  "./static/img/hiking/2025/fishermans-trail-7/2025_12_29_16_35_IMG_4675.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-fishermans-trail-7-arrifana-carrapateira"}
      title={"Fisherman's Trail 7 (Arrifana - Carrapateira)"}
      extraDetails={[
        { label: "Length: 23.0km" },
        { label: "Elev. gain: 574m" },
        { label: "Moving time: 5:05:25" },
        { label: "Avg speed: 4.5km/h" },
        { label: "Calories: 2886" },
        { label: "Total time: 7:10:35" },
      ]}
    />
  );
};

export default SpecificItem;
