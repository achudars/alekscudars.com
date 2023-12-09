import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
"./static/img/hiking/2023/worthing-brighton/img.png",
"./static/img/hiking/2023/worthing-brighton/WBQ7LCJ.webp",
"./static/img/hiking/2023/worthing-brighton/WBQ8LCJ.webp",
"./static/img/hiking/2023/worthing-brighton/WBQ4LCJ.webp",
"./static/img/hiking/2023/worthing-brighton/WBQ5LCJ.webp",
"./static/img/hiking/2023/worthing-brighton/WBQ6LCJ.webp",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2023-worthing-brighton"}
      title={"Worthing to Brighton, 2023"}
      extraDetails={[
        { label: "Length: 18.47km" },
        { label: "Elev. gain: 133m" },
        { label: "Moving time: 2:48:23" },
        { label: "Avg pace: 9:07" },
        { label: "Calories: 852" },
        { label: "Total time: 2:48:23" },
      ]}
    />
  );
};

export default SpecificItem;
