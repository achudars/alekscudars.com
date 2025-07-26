import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_32_IMG_2334.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_34_IMG_2332.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_34_IMG_2333.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_35_IMG_2335.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_35_IMG_2392.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_36_IMG_2390.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_36_IMG_2391.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_37_IMG_2389.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_38_IMG_2387.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_38_IMG_2388.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_39_IMG_2384.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_39_IMG_2385.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_39_IMG_2386.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_41_IMG_2382.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_41_IMG_2383.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_42_IMG_2380.JPG",
  "./static/img/aerial/2025/croatia-metajna-and-pag/2025_07_19_07_42_IMG_2381.JPG"
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Croatia, Metajna and Pag"}
      id={"aerial-2025-croatia-metajna-and-pag"}
      title={"Croatia, Metajna and Pag, 2025"}
      date={"July 2025"}
      description={"Aerial photography of the beautiful landscapes of Metajna and Pag in Croatia, capturing the unique coastal and inland features of the region."}
      location={"Metajna, Pag, Croatia"}
      cameraDetails={"DJI Mavic Pro 1, 4K resolution"}
      tags={["Aerial Photography", "Croatia", "Metajna", "Pag", "Landscape Photography", "DJI Mavic Pro 1"]}
      additionalInfo={"This collection showcases the stunning aerial views of Metajna and Pag, highlighting the unique coastal formations, sandy beaches, and the rugged terrain of the island. The photographs were taken in July 2025, capturing the vibrant colors and intricate details of the landscape during the summer season."}
    />
  );
};
export default SpecificItem;
