import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/IMG_0032.jpg",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_08_42_IMG_9349.JPG",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_08_45_IMG_9351.JPG",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_10_08_IMG_9358.JPG",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_10_12_IMG_9362.JPG",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_10_12_IMG_9363.JPG",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_11_19_IMG_9369.JPG",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_11_20_IMG_9370.JPG",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_11_26_IMG_9371.JPG",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_11_28_IMG_9372.JPG",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_11_28_IMG_9373.JPG",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_11_58_IMG_9375.JPG",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_11_58_IMG_9376.JPG",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_12_07_IMG_9380.JPG",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_12_11_IMG_9382.JPG",
  "./static/img/hiking/2025/pr-tf-6-chamorga-roque-bermejo-el-draguillo/2025_02_22_12_53_DJI_0459.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-pr-tf-6-chamorga-roque-bermejo-el-draguillo"}
      title={"PR-TF 6 Chamorga - Roque - Bermejo - El Draguillo, 2025"}
      extraDetails={[
        { label: "Length: 10.3km" },
        { label: "Elev. gain: 692m" },
        { label: "Moving time: 3:06:19" },
        { label: "Avg speed: 3.3km/h" },
        { label: "Calories: 1761" },
        { label: "Total time: 4:24:32" },
      ]}
    />
  );
};

export default SpecificItem;
