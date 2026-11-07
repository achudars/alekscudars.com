import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2026/cerro-del-simancon/IMG_4272.jpg",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_09_08_IMG_3202.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_09_52_IMG_3206.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_10_02_IMG_3208.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_10_34_IMG_3219.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_10_37_IMG_3221.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_10_53_IMG_3229.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_11_02_IMG_3230.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_11_51_IMG_3235.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_12_07_IMG_3236.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_12_29_IMG_3260.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_12_41_IMG_3266.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_13_08_IMG_3269.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_13_53_IMG_3272.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_13_55_IMG_3273.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_13_55_IMG_3274.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_13_55_IMG_3275.JPG",
  "./static/img/hiking/2026/cerro-del-simancon/2026_09_13_15_04_IMG_3282.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2026-cerro-del-simancon"}
      title={"Cerro del Simancon"}
      extraDetails={[
        { label: "Length: 12.60km" },
        { label: "Elev. gain: 894m" },
        { label: "Moving time: 4:04:00" },
        { label: "Avg speed: 3.1km/h" },
        { label: "Calories: 2306" },
        { label: "Total time: 4:51:24" },
      ]}
    />
  );
};

export default SpecificItem;
