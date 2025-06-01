import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
"/static/img/hiking/2023/didcot-appleford-culham-abingdon-oxford/img.png",
"/static/img/hiking/2023/didcot-appleford-culham-abingdon-oxford/AOQ2LCJ.webp",
"/static/img/hiking/2023/didcot-appleford-culham-abingdon-oxford/AOQ4LCJ.webp",
"/static/img/hiking/2023/didcot-appleford-culham-abingdon-oxford/AOQ6LCJ.webp",
"/static/img/hiking/2023/didcot-appleford-culham-abingdon-oxford/AOQ1LCJ.webp",
"/static/img/hiking/2023/didcot-appleford-culham-abingdon-oxford/AOQ7LCJ.webp",
"/static/img/hiking/2023/didcot-appleford-culham-abingdon-oxford/AOQ8LCJ.webp",
"/static/img/hiking/2023/didcot-appleford-culham-abingdon-oxford/AOQ5LCJ.webp",
"/static/img/hiking/2023/didcot-appleford-culham-abingdon-oxford/AOQ3LCJ.webp",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2023-didcot-appleford-culham-abingdon-oxford"}
      title={"Didcot - Appleford - Culham - Abingdon - Oxford, 2023"}
      extraDetails={[
        { label: "Length: 25.69km" },
        { label: "Elev. gain: 588m" },
        { label: "Moving time: 4:18:20" },
        { label: "Avg pace: 10:03" },
        { label: "Calories: 1,424" },
        { label: "Total time: 4:41:30" },
      ]}
    />
  );
};

export default SpecificItem;
