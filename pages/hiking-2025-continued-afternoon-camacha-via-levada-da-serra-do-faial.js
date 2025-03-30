import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/continued-afternoon-camacha-via-levada-da-serra-do-faial/continued_01.jpg",
  "./static/img/hiking/2025/continued-afternoon-camacha-via-levada-da-serra-do-faial/continued_02.jpg",
  "./static/img/hiking/2025/continued-afternoon-camacha-via-levada-da-serra-do-faial/faial_02.jpg",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-continued-afternoon-camacha-via-levada-da-serra-do-faial"}
      title={"Camacha via Levada da Serra do Faial"}
      extraDetails={[
        { label: "Length: 10.90km" },
        { label: "Elev. gain: 261m" },
        { label: "Moving time: 1:52:45" },
        { label: "Avg speed: 5.8km/h" },
        { label: "Calories: 1,065" },
        { label: "Total time: 1:54:51" },
      ]}
    />
  );
};

export default SpecificItem;
