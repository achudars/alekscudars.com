import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/aerial/2025/croatia-dinara/2025_07_20_08_51_IMG_2379.JPG",
  "./static/img/aerial/2025/croatia-dinara/2025_07_20_08_52_IMG_2377.JPG",
  "./static/img/aerial/2025/croatia-dinara/2025_07_20_08_52_IMG_2378.JPG",
  "./static/img/aerial/2025/croatia-dinara/2025_07_20_08_53_IMG_2257.JPG",
  "./static/img/aerial/2025/croatia-dinara/2025_07_20_08_53_IMG_2373.JPG",
  "./static/img/aerial/2025/croatia-dinara/2025_07_20_08_53_IMG_2376.JPG",
  "./static/img/aerial/2025/croatia-dinara/2025_07_20_08_54_IMG_2372.JPG",
  "./static/img/aerial/2025/croatia-dinara/2025_07_20_08_56_IMG_2368.JPG"
];

const VIDEOS = [
  "./static/img/aerial/2025/croatia-dinara/2025_07_25_21_45_IMG_2330.MOV",
  "./static/img/aerial/2025/croatia-dinara/2025_07_25_21_46_IMG_2337.MOV",
  "./static/img/aerial/2025/croatia-dinara/2025_07_25_21_53_IMG_2327.MOV"
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Croatia, Dinara"}
      id={"aerial-2025-croatia-dinara"}
      title={"Croatia, Dinara, 2025"}
      date={"July 2025"}
      description={"Aerial photography of the stunning landscapes of Dinara in Croatia, capturing the rugged mountain terrain and lush greenery."}
      location={"Dinara, Croatia"}
      cameraDetails={"DJI Mavic Pro 1, 4K resolution"}
      tags={["Aerial Photography", "Croatia", "Dinara", "Landscape Photography", "DJI Mavic Pro 1"]}
      additionalInfo={"Experience the breathtaking aerial views of Dinara, Croatia, showcasing the rugged mountain terrain and lush landscapes. Captured in July 2025, these images highlight the natural beauty and diverse geography of the region."}
    />
  );
};
export default SpecificItem;
