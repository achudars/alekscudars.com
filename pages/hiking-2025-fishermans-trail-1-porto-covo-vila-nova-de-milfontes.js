import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/fishermans-trail-1/IMG_5478.jpg",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_10_48_IMG_3873.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_11_10_IMG_3964.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_11_11_IMG_3881.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_11_12_IMG_3883.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_11_12_IMG_3963.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_11_19_IMG_3889.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_11_19_IMG_3965.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_11_46_IMG_3975.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_11_47_IMG_3890.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_11_47_IMG_3895.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_11_52_IMG_3973.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_11_57_IMG_3972.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_13_56_IMG_3924.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_14_08_IMG_3940.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_14_13_IMG_3941.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_14_24_IMG_3978.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_15_50_IMG_3949.JPG",
  "./static/img/hiking/2025/fishermans-trail-1/2025_12_23_20_52_IMG_3983.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-fishermans-trail-1-porto-covo-vila-nova-de-milfontes"}
      title={"Fisherman's Trail 1 (Porto Covo - Vila Nova de Milfontes)"}
      extraDetails={[
        { label: "Length: 20.6km" },
        { label: "Elev. gain: 287m" },
        { label: "Moving time: 4:56:22" },
        { label: "Avg speed: 4.2km/h" },
        { label: "Calories: 2801" },
        { label: "Total time: 6:00:01" },
      ]}
    />
  );
};

export default SpecificItem;
