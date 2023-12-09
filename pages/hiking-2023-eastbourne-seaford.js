import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
"./static/img/hiking/2023/eastbourne-seaford/img.png",
"./static/img/hiking/2023/eastbourne-seaford/ESQ7LCJ.webp",
"./static/img/hiking/2023/eastbourne-seaford/ESQ3LCJ.webp",
"./static/img/hiking/2023/eastbourne-seaford/ESQ2LCJ.webp",
"./static/img/hiking/2023/eastbourne-seaford/ESQ4LCJ.webp",
"./static/img/hiking/2023/eastbourne-seaford/ESQ6LCJ.webp",
"./static/img/hiking/2023/eastbourne-seaford/ESQ8LCJ.webp",
"./static/img/hiking/2023/eastbourne-seaford/ESQ5LCJ.webp",
"./static/img/hiking/2023/eastbourne-seaford/ESQ9LCJ.webp",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2023-eastbourne-seaford"}
      title={"Eastbourne to Seaford, 2023"}
      extraDetails={[
        { label: "Length: 18.67km" },
        { label: "Elev. gain: 558m" },
        { label: "Moving time: 3:22:50" },
        { label: "Avg pace: 10:52" },
        { label: "Calories: 1,917" },
        { label: "Total time: 3:32:25" },
      ]}
    />
  );
};

export default SpecificItem;
