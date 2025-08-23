import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_22_20_55_IMG_2744.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_05_20_IMG_2601.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_05_48_IMG_2524.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_16_18_IMG_2694.PNG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_05_56_IMG_2527.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_05_56_IMG_2528.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_05_56_IMG_2529.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_05_58_IMG_2530.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_06_01_IMG_2532.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_06_01_IMG_2533.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_06_01_IMG_2534.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_07_18_IMG_2546.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_07_19_IMG_2547.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_07_19_IMG_2548.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_07_22_IMG_2550.PNG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_07_24_IMG_2557.PNG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_07_31_IMG_2566.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_07_31_IMG_2567.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_07_35_IMG_2571.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_07_36_IMG_2572.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_07_40_IMG_2575.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_07_43_IMG_2576.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_08_12_IMG_2577.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_08_12_IMG_2578.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_08_18_IMG_2581.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_08_18_IMG_2582.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_08_18_IMG_2583.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_09_51_IMG_2585.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_10_04_IMG_2586.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_10_26_IMG_2587.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_12_06_IMG_2588.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_12_47_IMG_2590.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_13_11_IMG_2591.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_13_12_IMG_2592.JPG",
  "./static/img/hiking/2025/italy-sardinia-pedra-longa-santa-maria-navarrese-piggius/2025_08_16_13_29_IMG_2593.JPG",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"photo of nature"}
      id={
        "hiking-2025-italy-sardinia-pedra-longa-santa-maria-navarrese-piggius"
      }
      title={"Pedra Longa - Santa Maria Navarrese - US Piggius"}
      extraDetails={[
        { label: "Length: 22.02km" },
        { label: "Elev. gain: 1,301m" },
        { label: "Moving time: 6h 14m" },
        {
          label:
            "Description: Experience one of Sardinia's most spectacular hikes, traversing rugged limestone cliffs and lush Mediterranean landscapes from Pedra Longa to Santa Maria Navarrese and US Piggius. This challenging 22km route features dramatic coastal views, steep ascents totaling 1,301m elevation gain, and a rewarding sense of adventure through the heart of Baunei. Perfect for seasoned hikers seeking breathtaking scenery and an unforgettable journey.",
        },
      ]}
    />
  );
};

export default SpecificItem;
