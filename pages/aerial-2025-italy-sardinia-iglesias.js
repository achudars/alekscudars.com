import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_25_IMG_2623.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_36_DJI_0446.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_37_DJI_0447.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_39_DJI_0454.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_39_DJI_0455.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_40_DJI_0459.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_40_DJI_0464.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_40_DJI_0469.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_41_DJI_0472.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_42_DJI_0474.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_42_DJI_0475.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_43_DJI_0481.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_44_DJI_0485.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_44_DJI_0486.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_46_DJI_0489.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_46_DJI_0490.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_46_DJI_0491.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_46_DJI_0492.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_47_DJI_0493.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_47_DJI_0495.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_47_IMG_2668.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_50_DJI_0501.JPG",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_13_50_IMG_2669.JPG",
];

const VIDEOS = [
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_15_47_IMG_2672.MOV",
  "./static/img/aerial/2025/italy-sardinia-iglesias/2025_08_17_15_48_DJI_0497.MP4",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Italy, Sardinia, Iglesias"}
      id={"aerial-2025-italy-sardinia-iglesias"}
      title={"Italy, Sardinia, Iglesias, 2025"}
      date={"August 2025"}
      description={
        "Aerial photography of the stunning landscapes of Italy, Sardinia, Iglesias."
      }
      location={"Italy, Sardinia, Iglesias"}
      cameraDetails={"DJI Mavic Pro 1, 4K resolution"}
      tags={[
        "Aerial Photography",
        "Italy",
        "Sardinia",
        "Iglesias",
        "Landscape Photography",
        "DJI Mavic Pro 1",
      ]}
      additionalInfo={
        "Experience the breathtaking aerial views of Italy, Sardinia, Iglesias, showcasing the rugged terrain and beautiful landscapes. Captured in August 2025, these images highlight the natural beauty and diverse geography of the region."
      }
    />
  );
};

export default SpecificItem;
