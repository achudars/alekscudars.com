import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/aerial/2025/italy-sardinia-gairo/2025_08_18_12_19_DJI_0510.JPG",
  "./static/img/aerial/2025/italy-sardinia-gairo/2025_08_18_12_19_DJI_0511.JPG",
  "./static/img/aerial/2025/italy-sardinia-gairo/2025_08_18_12_21_DJI_0516.JPG",
  "./static/img/aerial/2025/italy-sardinia-gairo/2025_08_18_12_21_DJI_0518.JPG",
  "./static/img/aerial/2025/italy-sardinia-gairo/2025_08_18_12_24_DJI_0523.JPG",
  "./static/img/aerial/2025/italy-sardinia-gairo/2025_08_18_12_26_DJI_0529.JPG",
  "./static/img/aerial/2025/italy-sardinia-gairo/2025_08_18_12_27_DJI_0534.JPG",
  "./static/img/aerial/2025/italy-sardinia-gairo/2025_08_18_13_00_IMG_2667.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Italy, Sardinia, Gairo"}
      id={"aerial-2025-italy-sardinia-gairo"}
      title={"Italy, Sardinia, Gairo, 2025"}
      date={"August 2025"}
      description={
        "Aerial photography of the stunning landscapes of Italy, Sardinia, Gairo."
      }
      location={"Italy, Sardinia, Gairo"}
      cameraDetails={"DJI Mavic Pro 1, 4K resolution"}
      tags={[
        "Aerial Photography",
        "Italy",
        "Sardinia",
        "Gairo",
        "Landscape Photography",
        "DJI Mavic Pro 1",
      ]}
      additionalInfo={
        "Experience the breathtaking aerial views of Italy, Sardinia, Gairo, showcasing the rugged terrain and beautiful landscapes. Captured in August 2025, these images highlight the natural beauty and diverse geography of the region."
      }
    />
  );
};

export default SpecificItem;
