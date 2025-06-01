import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
"/static/img/hiking/2022/rye-hastings/img.png",
"/static/img/hiking/2022/rye-hastings/RHQ4LCJ.webp",
"/static/img/hiking/2022/rye-hastings/RHQ5LCJ.webp",
"/static/img/hiking/2022/rye-hastings/RHQ6LCJ.webp",
"/static/img/hiking/2022/rye-hastings/RHQ7LCJ.webp",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2022-rye-hastings"}
      title={"Rye to Hastings, 2022"}
      extraDetails={[
        { label: "Length: 21.51km" },
        { label: "Elev. gain: 507m" },
        { label: "Moving time: 4:15:18" },
        { label: "Avg pace: 11:52" },
        { label: "Calories: 2,214" },
        { label: "Total time: 4:18:50" },
      ]}
    />
  );
};

export default SpecificItem;
