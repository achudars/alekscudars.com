import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/aerial/2026/greece-santorini-oia/Timeline 1_00108797.png",
  "./static/img/aerial/2026/greece-santorini-oia/Timeline 1_00109292.png",
];

const VIDEOS = [
  "./static/img/aerial/2026/greece-santorini-oia/oia 07 h264 HD.mp4",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Greece, Santorini, Oia"}
      id={"aerial-2026-greece-santorini-oia"}
      title={"Greece, Santorini, Oia, 2026"}
      date={"June 2026"}
      description={
        "Aerial photography of the stunning landscapes of Greece, Santorini, Oia."
      }
      location={"Greece, Santorini, Oia"}
      cameraDetails={"DJI Mavic Pro 1, 4K resolution"}
      tags={[
        "Aerial Photography",
        "Greece",
        "Santorini",
        "Oia",
        "Landscape Photography",
        "DJI Mavic Pro 1",
      ]}
      additionalInfo={
        "Experience the breathtaking aerial views of Greece, Santorini, Oia, showcasing the iconic whitewashed buildings and stunning Aegean Sea coastline. Captured in June 2026, these images highlight the natural beauty and unique geography of the region."
      }
    />
  );
};

export default SpecificItem;
