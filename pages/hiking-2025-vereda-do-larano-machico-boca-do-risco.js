import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_00.jpg",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/2025_03_08_07_32_IMG_9595.JPG",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/2025_03_08_07_33_IMG_9596.JPG",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/2025_03_08_07_44_IMG_9604.JPG",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/2025_03_08_09_07_IMG_9649.JPG",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/2025_03_08_11_36_IMG_9674.JPG",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/2025_03_08_20_31_IMG_9698.JPG",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/2025_03_08_20_39_IMG_9699.JPG",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/2025_03_08_20_55_IMG_9706.JPG",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_01.jpg",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_02.jpg",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_03.jpg",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_04.jpg",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_05.jpg",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_06.jpg",
];

const VIDEOS = [
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/2025_03_08_07_44_IMG_9605.MOV",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/2025_03_08_07_47_IMG_9607.MOV",
  "/static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/2025_03_08_09_15_IMG_9658.mp4",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-vereda-do-larano-machico-boca-do-risco"}
      title={"Vereda do Larano (Machico) - Boca do Risco"}
      extraDetails={[
        { label: "Length: 14.97km" },
        { label: "Elev. gain: 1,413m" },
        { label: "Moving time: 3:06:28" },
        { label: "Avg speed: 4.8km/h" },
        { label: "Calories: 1,762" },
        { label: "Total time: 3:33:25" },
      ]}
    />
  );
};

export default SpecificItem;
