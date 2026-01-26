import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2026/fishermans-trail-10/IMG_5487.jpg",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_11_54_IMG_4939.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_11_59_IMG_4940.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_11_59_IMG_4941.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_12_12_IMG_5042.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_12_55_IMG_4944.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_13_06_IMG_4950.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_13_07_IMG_4952.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_13_31_IMG_4959.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_13_39_IMG_4961.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_13_53_IMG_4973.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_13_56_IMG_4978.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_13_56_IMG_4982.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_14_23_IMG_5041.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_14_41_IMG_5043.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_14_48_IMG_5044.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_15_09_IMG_5051.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_15_32_IMG_5048.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_15_33_IMG_4992.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_15_33_IMG_4993.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_16_12_IMG_4994.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_16_27_IMG_4995.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_16_44_IMG_5010.JPG",
  "./static/img/hiking/2026/fishermans-trail-10/2026_01_01_16_45_IMG_5012.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2026-fishermans-trail-10-sagres-salema"}
      title={"Fisherman's Trail 10 (Sagres - Salema)"}
      extraDetails={[
        { label: "Length: 20.5km" },
        { label: "Elev. gain: 519m" },
        { label: "Moving time: 4:47:32" },
        { label: "Avg speed: 4.3km/h" },
        { label: "Calories: 2717" },
        { label: "Total time: 5:58:18" },
      ]}
    />
  );
};

export default SpecificItem;
