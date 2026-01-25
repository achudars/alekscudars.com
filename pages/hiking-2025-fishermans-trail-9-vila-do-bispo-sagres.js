import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/fishermans-trail-9/IMG_5486.jpg",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_11_43_IMG_4816.JPG",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_11_59_IMG_4818.JPG",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_12_06_IMG_4819.JPG",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_12_07_IMG_4820.JPG",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_13_27_IMG_4846.JPG",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_13_29_IMG_4847.JPG",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_13_46_IMG_4856.JPG",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_14_02_IMG_4869.JPG",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_14_05_IMG_4872.JPG",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_14_59_IMG_4874.JPG",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_15_00_IMG_4876.JPG",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_15_01_IMG_4896.JPG",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_15_11_IMG_4877.JPG",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_15_28_IMG_4879.JPG",
  "./static/img/hiking/2025/fishermans-trail-9/2025_12_31_15_29_IMG_4880.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-fishermans-trail-9-vila-do-bispo-sagres"}
      title={"Fisherman's Trail 9 (Vila do Bispo - Sagres)"}
      extraDetails={[
        { label: "Length: 25.1km" },
        { label: "Elev. gain: 559m" },
        { label: "Moving time: 5:20:24" },
        { label: "Avg speed: 4.7km/h" },
        { label: "Calories: 3028" },
        { label: "Total time: 6:12:01" },
      ]}
    />
  );
};

export default SpecificItem;
