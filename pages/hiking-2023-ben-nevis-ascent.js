import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
"./static/img/hiking/2023/ben-nevis-ascent/img.png",
"./static/img/hiking/2023/ben-nevis-ascent/BAQ1LCJ.webp",
"./static/img/hiking/2023/ben-nevis-ascent/BAQ5LCJ.webp",
"./static/img/hiking/2023/ben-nevis-ascent/BAQ4LCJ.webp",
"./static/img/hiking/2023/ben-nevis-ascent/BAQ6LCJ.webp",
"./static/img/hiking/2023/ben-nevis-ascent/BAQ2LCJ.webp",
"./static/img/hiking/2023/ben-nevis-ascent/BAQ3LCJ.webp",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2023-ben-nevis-ascent"}
      title={"Ben Nevis (ascent), 2023"}
      extraDetails={[
        { label: "Length: 7.54km" },
        { label: "Elev. gain: 1,359m" },
        { label: "Moving time: 2:43:42" },
        { label: "Avg pace: 21:42" },
        { label: "Calories: 1,547" },
        { label: "Total time: 2:53:57" },
      ]}
    />
  );
};

export default SpecificItem;
