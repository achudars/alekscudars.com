import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/2018/england-brighton/ee3f9cf3cb87184a9c047ae41abcceb3.jpg",
  "./static/img/2018/england-brighton/f119c58b6e775a6e5ba2150cea47aa2b.jpg",
];

const VIDEOS = [
  "./static/video/2018/england-brighton/1f9c84d6fe64294fd633799cca6d3657.mp4",
  "./static/video/2018/england-brighton/9d24299481284681ad45f8ca7338fb05.mp4",
  "./static/video/2018/england-brighton/fc5d07717474831da48b9c8ba4af929e.mp4",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of Brighton landscape"}
      id={"aerial-2018-england-brighton"}
      title={"England, Brighton, 2018"}
    />
  );
};
export default SpecificItem;
