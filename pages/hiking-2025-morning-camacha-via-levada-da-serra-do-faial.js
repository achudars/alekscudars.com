import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/morning-camacha-via-levada-da-serra-do-faial/camacha_01.jpg",
  "./static/img/hiking/2025/morning-camacha-via-levada-da-serra-do-faial/camacha_02.jpg",
  "./static/img/hiking/2025/morning-camacha-via-levada-da-serra-do-faial/camacha_03.jpg",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-morning-camacha-via-levada-da-serra-do-faial"}
      title={"Camacha via Levada da Serra do Faial"}
      extraDetails={[
        { label: "Length: 8.82km" },
        { label: "Elev. gain: 941m" },
        { label: "Moving time: 2:00:37" },
        { label: "Avg speed: 4.4km/h" },
        { label: "Calories: 1,140" },
        { label: "Total time: 2:01:22" },
      ]}
    />
  );
};

export default SpecificItem;
