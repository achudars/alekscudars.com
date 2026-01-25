import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/fishermans-trail-2/IMG_5479.jpg",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_11_17_IMG_3992.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_11_22_IMG_4102.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_11_23_IMG_4105.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_11_25_IMG_3994.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_11_28_IMG_4103.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_11_28_IMG_4106.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_11_28_IMG_4128.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_00_IMG_3998.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_01_IMG_3999.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_01_IMG_4001.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_06_IMG_4002.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_06_IMG_4003.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_09_IMG_4127.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_13_IMG_4009.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_19_IMG_4038.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_27_IMG_4058.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_27_IMG_4126.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_28_IMG_4060.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_32_IMG_4125.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_37_IMG_4122.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_47_IMG_4061.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_47_IMG_4062.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_50_IMG_4069.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_12_53_IMG_4071.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_14_58_IMG_4115.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_15_35_IMG_4085.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_15_35_IMG_4086.JPG",
  "./static/img/hiking/2025/fishermans-trail-2/2025_12_24_15_53_IMG_4088.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-fishermans-trail-2-vila-nova-de-milfontes-almograve"}
      title={"Fisherman's Trail 2 (Vila Nova de Milfontes - Almograve)"}
      extraDetails={[
        { label: "Length: 15.6km" },
        { label: "Elev. gain: 233m" },
        { label: "Moving time: 3:47:58" },
        { label: "Avg speed: 4.1km/h" },
        { label: "Calories: 2154" },
        { label: "Total time: 5:55:57" },
      ]}
    />
  );
};

export default SpecificItem;
