import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2026/fishermans-trail-12/IMG_5489.jpg",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_10_51_IMG_5161.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_10_53_IMG_5169.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_10_53_IMG_5173.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_11_59_IMG_5186.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_11_59_IMG_5187.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_12_01_IMG_5188.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_12_02_IMG_5190.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_12_03_IMG_5191.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_12_04_IMG_5192.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_12_05_IMG_5193.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_12_05_IMG_5195.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_12_08_IMG_5223.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_12_15_IMG_5199.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_12_17_IMG_5200.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_12_18_IMG_5230.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_12_19_IMG_5201.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_12_21_IMG_5202.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_12_25_IMG_5231.JPG",
  "./static/img/hiking/2026/fishermans-trail-12/2026_01_03_12_51_IMG_5211.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2026-fishermans-trail-12-luz-lagos"}
      title={"Fisherman's Trail 12 (Luz - Lagos)"}
      extraDetails={[
        { label: "Length: 13.9km" },
        { label: "Elev. gain: 405m" },
        { label: "Moving time: 3:07:44" },
        { label: "Avg speed: 4.4km/h" },
        { label: "Calories: 1774" },
        { label: "Total time: 3:25:52" },
      ]}
    />
  );
};

export default SpecificItem;
