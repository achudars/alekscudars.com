import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/fishermans-trail-3/IMG_5480.jpg",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_10_31_IMG_4143.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_10_31_IMG_4144.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_10_35_IMG_4166.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_10_36_IMG_4176.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_10_37_IMG_4186.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_10_44_IMG_4192.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_10_44_IMG_4193.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_10_44_IMG_4194.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_10_58_IMG_4197.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_11_13_IMG_4198.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_11_17_IMG_4219.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_11_23_IMG_4220.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_11_24_IMG_4225.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_11_24_IMG_4233.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_11_39_IMG_4270.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_11_39_IMG_4271.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_13_33_IMG_4287.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_13_49_IMG_4288.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_13_56_IMG_4295.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_13_56_IMG_4298.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_14_14_IMG_4308.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_14_15_IMG_4309.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_14_17_IMG_4310.JPG",
  "./static/img/hiking/2025/fishermans-trail-3/2025_12_25_14_17_IMG_4311.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-fishermans-trail-3-almograve-zamujeira-do-mar"}
      title={"Fisherman's Trail 3 (Almograve - Zamujeira do Mar)"}
      extraDetails={[
        { label: "Length: 22.6km" },
        { label: "Elev. gain: 366m" },
        { label: "Moving time: 4:59:44" },
        { label: "Avg speed: 4.5km/h" },
        { label: "Calories: 2832" },
        { label: "Total time: 6:42:54" },
      ]}
    />
  );
};

export default SpecificItem;
