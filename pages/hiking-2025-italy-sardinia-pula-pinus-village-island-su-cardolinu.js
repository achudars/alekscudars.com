import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/italy-sardinia-pula-pinus-village-island-su-cardolinu/2025_08_22_20_54_IMG_2743.JPG",
  "./static/img/hiking/2025/italy-sardinia-pula-pinus-village-island-su-cardolinu/2025_08_17_07_51_IMG_2605.JPG",
  "./static/img/hiking/2025/italy-sardinia-pula-pinus-village-island-su-cardolinu/2025_08_17_08_07_IMG_2606.JPG",
  "./static/img/hiking/2025/italy-sardinia-pula-pinus-village-island-su-cardolinu/2025_08_17_08_25_IMG_2609.JPG",
  "./static/img/hiking/2025/italy-sardinia-pula-pinus-village-island-su-cardolinu/2025_08_17_08_31_IMG_2611.JPG",
  "./static/img/hiking/2025/italy-sardinia-pula-pinus-village-island-su-cardolinu/2025_08_17_10_19_IMG_2614.JPG",
  "./static/img/hiking/2025/italy-sardinia-pula-pinus-village-island-su-cardolinu/2025_08_17_10_20_IMG_2615.JPG",
  "./static/img/hiking/2025/italy-sardinia-pula-pinus-village-island-su-cardolinu/2025_08_17_10_20_IMG_2616.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-italy-sardinia-pula-pinus-village-island-su-cardolinu"}
      title={"Pinus Village - Island su Cardolinu"}
      extraDetails={[
        { label: "Length: 13.57km" },
        { label: "Elev. gain: 307m" },
        { label: "Moving time: 2h 36m" },
        {
          label:
            "Description: Explore the stunning coastline of Sardinia from Pinus Village to the enchanting Island su Cardolinu. This 13.57km hike follows an ancient Roman road, winding through lush Mediterranean landscapes and offering breathtaking sea views. With a gentle elevation gain of 307m and a moving time of 2h 36m, it's a perfect blend of history, nature, and adventure in Italy's beautiful Pula region. Along the way, you can also enjoy a refreshing swim in the crystal-clear waters, making the experience even more memorable.",
        },
      ]}
    />
  );
};

export default SpecificItem;
