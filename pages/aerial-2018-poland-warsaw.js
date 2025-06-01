import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "/static/img/aerial/2018/poland-warsaw/2ebf357592e33806c6b308a750a53433.jpg",
  "/static/img/aerial/2018/poland-warsaw/15f3e8d00a7ca20a613eea1bacbe6a10.jpg",
  "/static/img/aerial/2018/poland-warsaw/55b7ddff051e4bc57ef3733af305ae96.jpg",
  "/static/img/aerial/2018/poland-warsaw/f2ace7bc38f3e5407e7bd3ec3ec669b8.jpg",
];

const VIDEOS = [
  "/static/video/aerial/2018/poland-warsaw/3ddce138ba7d7b6c5f2322a7a58468c9.mp4",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Warsaw landscape"}
      id={"aerial-2018-poland-warsaw"}
      title={"Poland, Warsaw, 2018"}
    />
  );
};
export default SpecificItem;
