import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/hiking/2025/afternoon-camacha-via-levada-da-serra-do-faial/faial_01.jpg",
  "/static/img/hiking/2025/afternoon-camacha-via-levada-da-serra-do-faial/continued_03.jpg",
  "/static/img/hiking/2025/afternoon-camacha-via-levada-da-serra-do-faial/faial_03.jpg",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-afternoon-camacha-via-levada-da-serra-do-faial"}
      title={"Camacha via Levada da Serra do Faial"}
      extraDetails={[
        { label: "Length: 5.25km" },
        { label: "Elev. gain: 157m" },
        { label: "Moving time: 56:26" },
        { label: "Avg speed: 5.6km/h" },
        { label: "Calories: 533" },
        { label: "Total time: 1:11:57" },
      ]}
    />
  );
};

export default SpecificItem;
