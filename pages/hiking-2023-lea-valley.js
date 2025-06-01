import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
"/static/img/hiking/2023/lea-valley/img.png",
"/static/img/hiking/2023/lea-valley/LVQ7LCJ.webp",
"/static/img/hiking/2023/lea-valley/LVQ4LCJ.webp",
"/static/img/hiking/2023/lea-valley/LVQ5LCJ.webp",
"/static/img/hiking/2023/lea-valley/LVQ6LCJ.webp",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2023-lea-valley"}
      title={"Lea Valley Walk (Waltham Cross - Proplar), 2023"}
      extraDetails={[
        { label: "Length: 23.25km" },
        { label: "Elev. gain: 256m" },
        { label: "Moving time: 3:50:32" },
        { label: "Avg pace: 9:55" },
        { label: "Calories: 1,271" },
        { label: "Total time: 3:51:16" },
      ]}
    />
  );
};

export default SpecificItem;
