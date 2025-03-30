import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_00.jpg",
  "./static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_01.jpg",
  "./static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_03.jpg",
  "./static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_06.jpg",
  "./static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_05.jpg",
  "./static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_04.jpg",
  "./static/img/hiking/2025/vereda-do-larano-machico-boca-do-risco/boca_do_risco_02.jpg",
];

const VIDEOS = [];

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
