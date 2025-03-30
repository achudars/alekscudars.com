import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/pr-6-6-1-levada-das-25-fontes-rabacal-levada-of-risco/levada_das_25_fontes.jpg",
  "./static/img/hiking/2025/pr-6-6-1-levada-das-25-fontes-rabacal-levada-of-risco/levada_01.jpg",
  "./static/img/hiking/2025/pr-6-6-1-levada-das-25-fontes-rabacal-levada-of-risco/levada_02.jpg",
  "./static/img/hiking/2025/pr-6-6-1-levada-das-25-fontes-rabacal-levada-of-risco/levada_03.jpg",
  "./static/img/hiking/2025/pr-6-6-1-levada-das-25-fontes-rabacal-levada-of-risco/levada_04.jpg",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-pr-6-6-1-levada-das-25-fontes-rabacal-levada-of-risco"}
      title={"PR-TF 6/6.1 Levada das 25 Fontes - Rabacal - Levada of Risco"}
      extraDetails={[
        { label: "Length: 10.59km" },
        { label: "Elev. gain: 788m" },
        { label: "Moving time: 2:24:11" },
        { label: "Avg speed: 4.4km/h" },
        { label: "Calories: 1,363" },
        { label: "Total time: 2:59:58" },
      ]}
    />
  );
};

export default SpecificItem;
