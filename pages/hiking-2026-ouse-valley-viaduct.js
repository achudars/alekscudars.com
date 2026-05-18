import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2026-ouse-valley-viaduct"}
      title={"Ouse Valley Viaduct"}
      extraDetails={[
        { label: "Length: 12.4km" },
        { label: "Elev. gain: 387m" },
        { label: "Moving time: 2:21:44" },
        { label: "Avg speed: 5.3km/h" },
        { label: "Calories: 1339" },
        { label: "Total time: 3:14:29" },
      ]}
    />
  );
};

export default SpecificItem;
