import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/fishermans-trail-5/IMG_5482.jpg",
  "./static/img/hiking/2025/fishermans-trail-5/trail-overview.webp",
  "./static/img/hiking/2025/fishermans-trail-5/2025_12_27_16_00_IMG_4484.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-fishermans-trail-5-odeceixe-aljezur"}
      title={"Fisherman's Trail 5 (Odeceixe - Aljezur)"}
      extraDetails={[
        { label: "Length: 24.5km" },
        { label: "Elev. gain: 346m" },
        { label: "Moving time: 4:52:53" },
        { label: "Avg speed: 5km/h" },
        { label: "Calories: 2768" },
        { label: "Total time: 6:18:18" },
      ]}
    />
  );
};

export default SpecificItem;
