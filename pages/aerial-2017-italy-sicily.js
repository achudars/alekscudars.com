import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/aerial/2017/italy-sicily/2b50fb0403ddf60dac7eb10a35025fc0.jpg",
  "/static/img/aerial/2017/italy-sicily/2f840d3ea9b5328fa187b1b529d9b21e.jpg",
  "/static/img/aerial/2017/italy-sicily/03d69545b1135c8984b14118b8f49242.jpg",
  "/static/img/aerial/2017/italy-sicily/6ae48ff1265eb6d219b6368c0e0a833c.jpg",
  "/static/img/aerial/2017/italy-sicily/37fa886a089e7b9e1ae4029d04604202.jpg",
  "/static/img/aerial/2017/italy-sicily/97fdd654bd96dfaeb0e5c868c47e6f38.jpg",
  "/static/img/aerial/2017/italy-sicily/702c952ee68faba63b777b225b1fe119.jpg",
  "/static/img/aerial/2017/italy-sicily/966edbc3abb0dd7cf6f82d9304cee0d9.jpg",
  "/static/img/aerial/2017/italy-sicily/981b9d28f08c4cff614f16e28f2f1eee.jpg",
  "/static/img/aerial/2017/italy-sicily/5540dbd4712fd41806a74d983ee563a0.jpg",
  "/static/img/aerial/2017/italy-sicily/06187a0383c588198c19ac9ba4696f52.jpg",
  "/static/img/aerial/2017/italy-sicily/6692edc57e314fe5b1dd9b11fa3882a3.jpg",
  "/static/img/aerial/2017/italy-sicily/6769ce0297527a570eaf4a9565133aca.jpg",
  "/static/img/aerial/2017/italy-sicily/60217a5f2121a5110df6000abef38841.jpg",
  "/static/img/aerial/2017/italy-sicily/a1f157fce4fede2d7b45be5b0a9af112.jpg",
  "/static/img/aerial/2017/italy-sicily/a064dca990f5edabdb3da100fec36031.jpg",
  "/static/img/aerial/2017/italy-sicily/a8376da0a8b0526228444250b5e201e8.jpg",
  "/static/img/aerial/2017/italy-sicily/ae3d1eaf40f40a710e64d87bd390724e.jpg",
  "/static/img/aerial/2017/italy-sicily/c0b8c89aaffbb259dce47ab21efd4e03.jpg",
  "/static/img/aerial/2017/italy-sicily/dab942b9d63591d802be028cc5a0fcea.jpg",
];

const VIDEOS = [];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of sicilian landscape"}
      id={"aerial-2017-italy-sicily"}
      title={"Italy, Sicily, 2017"}
    />
  );
};
export default SpecificItem;
