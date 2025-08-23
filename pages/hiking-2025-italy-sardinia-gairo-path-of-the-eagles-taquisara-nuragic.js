import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/italy-sardinia-gairo-path-of-the-eagles-taquisara-nuragic/2025_08_22_20_53_IMG_2742.JPG",
  "./static/img/hiking/2025/italy-sardinia-gairo-path-of-the-eagles-taquisara-nuragic/2025_08_18_09_57_IMG_2646.JPG",
  "./static/img/hiking/2025/italy-sardinia-gairo-path-of-the-eagles-taquisara-nuragic/2025_08_18_10_05_IMG_2649.JPG",
  "./static/img/hiking/2025/italy-sardinia-gairo-path-of-the-eagles-taquisara-nuragic/2025_08_18_10_31_IMG_2654.JPG",
  "./static/img/hiking/2025/italy-sardinia-gairo-path-of-the-eagles-taquisara-nuragic/2025_08_18_10_57_IMG_2660.JPG",
  "./static/img/hiking/2025/italy-sardinia-gairo-path-of-the-eagles-taquisara-nuragic/2025_08_18_11_06_IMG_2661.JPG",
  "./static/img/hiking/2025/italy-sardinia-gairo-path-of-the-eagles-taquisara-nuragic/2025_08_18_12_45_IMG_2664.JPG",
  "./static/img/hiking/2025/italy-sardinia-gairo-path-of-the-eagles-taquisara-nuragic/2025_08_18_12_46_IMG_2666.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={
        "hiking-2025-italy-sardinia-gairo-path-of-the-eagles-taquisara-nuragic"
      }
      title={"Taquisara - Nuragic Village Is Tostoinus"}
      extraDetails={[
        { label: "Length: 11.15km" },
        { label: "Elev. gain: 467m" },
        { label: "Moving time: 2h 37m" },
        {
          label:
            "Description: Explore the wild heart of Sardinia on the Path of the Eagles, starting from Taquisara and winding through dramatic landscapes to the ancient Nuragic Village Is Tostoinus. This 11.15km hike features 467m of elevation gain and takes about 2 hours and 37 minutes of moving time. Discover rugged mountains, lush valleys, and centuries-old ruins as you experience one of Gairo’s most scenic and historic routes.",
        },
      ]}
    />
  );
};

export default SpecificItem;
