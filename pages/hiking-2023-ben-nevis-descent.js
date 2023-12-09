import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
"./static/img/hiking/2023/ben-nevis-descent/img.png",
"./static/img/hiking/2023/ben-nevis-descent/BDQ4LCJ.webp",
"./static/img/hiking/2023/ben-nevis-descent/BDQ1LCJ.webp",
"./static/img/hiking/2023/ben-nevis-descent/BDQ2LCJ.webp",
"./static/img/hiking/2023/ben-nevis-descent/BDQ3LCJ.webp",
"./static/img/hiking/2023/ben-nevis-descent/BDQ5LCJ.webp",
"./static/img/hiking/2023/ben-nevis-descent/BDQ6LCJ.webp",
"./static/img/hiking/2023/ben-nevis-descent/BDQ7LCJ.webp",
"./static/img/hiking/2023/ben-nevis-descent/BDQ8LCJ.webp",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2023-ben-nevis-descent"}
      title={"Ben Nevis (descent), 2023"}
      extraDetails={[
        { label: "Length: 9.16km" },
        { label: "Elev. gain: 98m" },
        { label: "Moving time: 2:33:15" },
        { label: "Avg pace: 16:44" },
        { label: "Calories: 1,448" },
        { label: "Total time: 2:41:46" },
      ]}
    />
  );
};

export default SpecificItem;
