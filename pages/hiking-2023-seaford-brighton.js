import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
"/static/img/hiking/2023/seaford-brighton/img.png",
"/static/img/hiking/2023/seaford-brighton/SBQ6LCJ.webp",
"/static/img/hiking/2023/seaford-brighton/SBQ5LCJ.webp",
"/static/img/hiking/2023/seaford-brighton/SBQ4LCJ.webp",
"/static/img/hiking/2023/seaford-brighton/SBQ7LCJ.webp"
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2023-seaford-brighton"}
      title={"Seaford to Brighton, 2023"}
      extraDetails={[
        { label: "Length: 22.60km" },
        { label: "Elev. gain: 263m" },
        { label: "Moving time: 3:47:39" },
        { label: "Avg pace: 10:04" },
        { label: "Calories: 1,152" },
        { label: "Total time: 3:51:00" },
      ]}
    />
  );
};

export default SpecificItem;
