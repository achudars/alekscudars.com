import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/fishermans-trail-4/IMG_5481.jpg",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_09_58_IMG_4363.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_10_09_IMG_4364.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_10_14_IMG_4365.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_10_14_IMG_4440.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_10_37_IMG_4448.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_11_09_IMG_4444.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_11_34_IMG_4370.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_11_39_IMG_4372.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_11_46_IMG_4375.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_11_46_IMG_4376.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_11_58_IMG_4385.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_12_00_IMG_4386.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_12_02_IMG_4387.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_12_12_IMG_4389.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_13_45_IMG_4393.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_13_45_IMG_4394.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_13_45_IMG_4398.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_13_46_IMG_4403.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_13_46_IMG_4407.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_14_25_IMG_4413.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_15_41_IMG_4415.JPG",
  "./static/img/hiking/2025/fishermans-trail-4/2025_12_26_15_46_IMG_4416.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-fishermans-trail-4-zamujeira-do-mar-odeceixe"}
      title={"Fisherman's Trail 4 (Zamujeira do Mar - Odeceixe)"}
      extraDetails={[
        { label: "Length: 21.1km" },
        { label: "Elev. gain: 434m" },
        { label: "Moving time: 5:21:40" },
        { label: "Avg speed: 3.9km/h" },
        { label: "Calories: 3040" },
        { label: "Total time: 7:00:04" },
      ]}
    />
  );
};

export default SpecificItem;
