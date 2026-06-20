import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/aerial/2026/greece-santorini-akrotiri/akrotiri morning 08 png 4k00109407.png",
  "./static/img/aerial/2026/greece-santorini-akrotiri/akrotiri morning 08 png 4k00110492.png",
  "./static/img/aerial/2026/greece-santorini-akrotiri/akrotiri morning 08 png 4k00111133.png",
  "./static/img/aerial/2026/greece-santorini-akrotiri/akrotiri morning 09oi png 4k00108259.png",
  "./static/img/aerial/2026/greece-santorini-akrotiri/akrotiri morning 09oi png 4k00111135.png",
];

const VIDEOS = [
  "./static/img/aerial/2026/greece-santorini-akrotiri/akrotiri morning 05 h264 720p.mp4",
  "./static/img/aerial/2026/greece-santorini-akrotiri/santorini lighthouse 09.mp4",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Greece, Santorini, Akrotiri"}
      id={"aerial-2026-greece-santorini-akrotiri"}
      title={"Greece, Santorini, Akrotiri, 2026"}
      date={"June 2026"}
      description={
        "Aerial photography of the stunning landscapes of Greece, Santorini, Akrotiri."
      }
      location={"Greece, Santorini, Akrotiri"}
      cameraDetails={"DJI Mavic Pro 1, 4K resolution"}
      tags={[
        "Aerial Photography",
        "Greece",
        "Santorini",
        "Akrotiri",
        "Landscape Photography",
        "DJI Mavic Pro 1",
      ]}
      additionalInfo={
        "Experience the breathtaking aerial views of Greece, Santorini, Akrotiri, showcasing the stunning volcanic landscapes and beautiful coastline. Captured in June 2026, these images highlight the natural beauty and unique geography of the region."
      }
    />
  );
};

export default SpecificItem;
