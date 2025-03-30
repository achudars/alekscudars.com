import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/IMG_9785.jpg",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_12_21_IMG_9281.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_12_55_IMG_9291.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_12_55_IMG_9292.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_13_05_IMG_9294.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_13_11_IMG_9297.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_13_20_IMG_9300.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_13_32_IMG_9306.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_13_42_IMG_9308.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_13_49_IMG_9312.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_14_08_IMG_9313.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_14_09_IMG_9314.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_14_09_IMG_9315.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_14_09_IMG_9316.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_14_09_IMG_9317.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_14_15_IMG_9322.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_14_19_IMG_9327.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_14_20_IMG_9330.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_14_20_IMG_9332.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_14_28_IMG_9335.JPG",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_14_28_IMG_9336.JPG",
];

const VIDEOS = [
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_12_23_IMG_9283.MOV",
  "./static/img/hiking/2025/pr-tf-8-afur-taganana-afur/2025_02_21_13_46_IMG_9310.MOV",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-pr-tf-8-afur-taganana-afur"}
      title={"PR-TF 8 Afur - Taganana - Afur, 2025"}
      extraDetails={[
        { label: "Length: 15.8km" },
        { label: "Elev. gain: 1,057m" },
        { label: "Moving time: 4:39:49" },
        { label: "Avg speed: 3.4km/h" },
        { label: "Calories: 2,644" },
        { label: "Total time: 5:53:08" },
      ]}
    />
  );
};

export default SpecificItem;
