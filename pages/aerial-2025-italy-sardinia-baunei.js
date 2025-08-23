import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/aerial/2025/italy-sardinia-baunei/2025_08_16_05_08_DJI_0389.JPG",
  "./static/img/aerial/2025/italy-sardinia-baunei/2025_08_16_05_11_DJI_0398.JPG",
  "./static/img/aerial/2025/italy-sardinia-baunei/2025_08_16_05_13_DJI_0400.JPG",
  "./static/img/aerial/2025/italy-sardinia-baunei/2025_08_16_05_13_DJI_0403.JPG",
  "./static/img/aerial/2025/italy-sardinia-baunei/2025_08_16_05_15_DJI_0408.JPG",
  "./static/img/aerial/2025/italy-sardinia-baunei/2025_08_16_05_16_DJI_0412.JPG",
  "./static/img/aerial/2025/italy-sardinia-baunei/2025_08_16_05_16_DJI_0413.JPG",
  "./static/img/aerial/2025/italy-sardinia-baunei/2025_08_16_05_17_DJI_0416.JPG",
  "./static/img/aerial/2025/italy-sardinia-baunei/2025_08_16_05_17_DJI_0417.JPG",
  "./static/img/aerial/2025/italy-sardinia-baunei/2025_08_16_05_20_DJI_0426.JPG",
  "./static/img/aerial/2025/italy-sardinia-baunei/2025_08_16_05_21_DJI_0429.JPG",
  "./static/img/aerial/2025/italy-sardinia-baunei/2025_08_16_05_21_DJI_0431.JPG",
  "./static/img/aerial/2025/italy-sardinia-baunei/2025_08_16_05_22_DJI_0433.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Italy, Sardinia, Baunei"}
      id={"aerial-2025-italy-sardinia-baunei"}
      title={"Italy, Sardinia, Baunei, 2025"}
      date={"August 2025"}
      description={
        "Aerial photography of the stunning landscapes of Italy, Sardinia, Baunei."
      }
      location={"Italy, Sardinia, Baunei"}
      cameraDetails={"DJI Mavic Pro 1, 4K resolution"}
      tags={[
        "Aerial Photography",
        "Italy",
        "Sardinia",
        "Baunei",
        "Landscape Photography",
        "DJI Mavic Pro 1",
      ]}
      additionalInfo={
        "Experience the breathtaking aerial views of Italy, Sardinia, Baunei, showcasing the rugged terrain and beautiful landscapes. Captured in August 2025, these images highlight the natural beauty and diverse geography of the region."
      }
    />
  );
};

export default SpecificItem;
