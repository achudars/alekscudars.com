import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
"./static/img/hiking/2023/tring-watford/img.png",
"./static/img/hiking/2023/tring-watford/TWQ3LCJ.webp",
"./static/img/hiking/2023/tring-watford/TWQ2LCJ.webp",
"./static/img/hiking/2023/tring-watford/TWQ4LCJ.webp",
"./static/img/hiking/2023/tring-watford/TWQ5LCJ.webp",
"./static/img/hiking/2023/tring-watford/TWQ6LCJ.webp",
"./static/img/hiking/2023/tring-watford/TWQ8LCJ.webp",
"./static/img/hiking/2023/tring-watford/TWQ47LCJ.webp",

];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2023-tring-watford"}
      title={"Tring to Watford, 2023"}
      extraDetails={[
        { label: "Length: 27.84km" },
        { label: "Elev. gain: 583m" },
        { label: "Moving time: 4:26:34" },
        { label: "Avg pace: 9:35" },
        { label: "Calories: 1,349" },
        { label: "Total time: 4:46:24" },
      ]}
    />
  );
};

export default SpecificItem;
