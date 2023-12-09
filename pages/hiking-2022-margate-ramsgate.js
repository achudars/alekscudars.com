import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
"./static/img/hiking/2022/margate-ramsgate/img.png",
"./static/img/hiking/2022/margate-ramsgate/LDQ4LCJ.webp",
"./static/img/hiking/2022/margate-ramsgate/MDQ4LCJ.webp",
"./static/img/hiking/2022/margate-ramsgate/NDQ4LCJ.webp",
"./static/img/hiking/2022/margate-ramsgate/ODQ4LCJ.webp",
"./static/img/hiking/2022/margate-ramsgate/PDQ4LCJ.webp",
"./static/img/hiking/2022/margate-ramsgate/QDQ4LCJ.webp",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2022-margate-ramsgate"}
      title={"Margate to Ramsgate, 2022"}
      extraDetails={[
        { label: "Length: 15.28km" },
        { label: "Elev. gain: 391m" },
        { label: "Moving time: 2:34:41" },
        { label: "Avg pace: 10:08" },
        { label: "Calories: 1,342" },
        { label: "Total time: 2:36:09" },
      ]}
    />
  );
};

export default SpecificItem;
