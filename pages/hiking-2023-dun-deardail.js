import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
"/static/img/hiking/2023/dun-deardail/img.png",
"/static/img/hiking/2023/dun-deardail/DDQ4LCJ.webp",
"/static/img/hiking/2023/dun-deardail/DDQ5LCJ.webp",
"/static/img/hiking/2023/dun-deardail/DDQ6LCJ.webp",
"/static/img/hiking/2023/dun-deardail/DDQ7LCJ.webp",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2023-dun-deardail"}
      title={"Dun Deardail, 2023"}
      extraDetails={[
        { label: "Length: 10.86km" },
        { label: "Elev. gain: 537m" },
        { label: "Moving time: 2:18:25" },
        { label: "Avg pace: 12:45" },
        { label: "Calories: 1,308" },
        { label: "Total time: 2:35:45" },
      ]}
    />
  );
};

export default SpecificItem;
