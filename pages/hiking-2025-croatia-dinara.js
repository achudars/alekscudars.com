import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/croatia-dinara/IMG_2399.jpg",
  "./static/img/hiking/2025/croatia-dinara/2025_07_20_06_06_IMG_2233.JPG",
  "./static/img/hiking/2025/croatia-dinara/2025_07_20_10_20_IMG_2266.JPG",
  "./static/img/hiking/2025/croatia-dinara/2025_07_20_09_24_IMG_2260.JPG",
  "./static/img/hiking/2025/croatia-dinara/2025_07_20_09_24_IMG_2259.JPG",
  "./static/img/hiking/2025/croatia-dinara/2025_07_20_10_35_IMG_2267.JPG",
  "./static/img/hiking/2025/croatia-dinara/2025_07_20_07_41_IMG_2238.JPG",
  "./static/img/hiking/2025/croatia-dinara/2025_07_20_08_55_IMG_2371.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-croatia-dinara"}
      title={"Dinara in Croatia"}
      extraDetails={[
        { label: "Length: 17.12km" },
        { label: "Elev. gain: 1343m" },
        { label: "Moving time: 5h 40m" },
        {
          label:
            "Description: A challenging hike to Dinara, the highest peak in Croatia. The trail features steep ascents, breathtaking views, and a rewarding summit experience.",
        },
      ]}
    />
  );
};

export default SpecificItem;
