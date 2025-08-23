import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_22_20_52_IMG_2741.JPG",
  "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_17_13_23_IMG_2622.JPG",
  "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_17_13_25_IMG_2623.JPG",
  "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_17_13_56_IMG_2624.JPG",
  "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_17_14_04_IMG_2625.JPG",
  "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_17_14_11_IMG_2629.JPG",
  "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_17_14_11_IMG_2630.JPG",
  "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_17_14_12_IMG_2631.JPG",
  "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_17_14_19_IMG_2632.JPG",
  "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_17_17_18_IMG_2636.JPG",
  "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_17_17_19_IMG_2637.JPG",
  "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_17_17_23_IMG_2638.JPG",
  "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_18_16_02_IMG_2680.JPG",
  "./static/img/hiking/2025/italy-sardinia-iglesias-nebida-masua/2025_08_18_16_03_IMG_2682.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={"hiking-2025-italy-sardinia-iglesias-nebida-masua"}
      title={"Nebida - Masua - Anello 5 Faraglioni"}
      extraDetails={[
        { label: "Length: 12.80km" },
        { label: "Elev. gain: 500m" },
        { label: "Moving time: 3h 2m" },
        {
          label:
            "Description: Experience the breathtaking coastal landscapes of Sardinia on the Nebida - Masua - Anello 5 Faraglioni hike. Starting from Iglesias, this 12.8km loop takes you along dramatic cliffs, past the iconic Faraglioni sea stacks, and through lush Mediterranean scenery. With 500m of elevation gain and a moving time of just over 3 hours, it's a perfect blend of challenge and beauty for nature lovers. Along the way, you'll find inviting spots to swim in the crystal-clear waters, making the adventure even more memorable.",
        },
      ]}
    />
  );
};

export default SpecificItem;
