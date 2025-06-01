import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/aerial/2019/england-norfolk/04c8463ffd031c26bcbaed6ac1b59deb.jpg",
  "./static/img/aerial/2019/england-norfolk/4a94ed5be5eccbe85cbcd12d7e5acd1e.jpg",
  "./static/img/aerial/2019/england-norfolk/5aa1477a0b83604a1c2f681388b3286b.jpg",
  "./static/img/aerial/2019/england-norfolk/6df86867048725151fa0e8792f577d05.jpg",
  "./static/img/aerial/2019/england-norfolk/7ad07c9125776fb1a1d10350ce4f4de6.jpg",
  "./static/img/aerial/2019/england-norfolk/b0444879e547540e8e1938c05e68cb7e.jpg",
  "./static/img/aerial/2019/england-norfolk/be710e98d38c98fd8783299fa6888611.jpg",
  "./static/img/aerial/2019/england-norfolk/e6913ef46724952c4fc241a3846c6faf.jpg",
];

const VIDEOS = [
  "./static/video/aerial/2019/england-norfolk/6c49a16bd5b20f44c098ea0cc327c586.mp4",
  "./static/video/aerial/2019/england-norfolk/35edea82e3a23edb15ba4fe09af8ee77.mp4",
  "./static/video/aerial/2019/england-norfolk/52445270959efd763f6456c3276df628.mp4",
  "./static/video/aerial/2019/england-norfolk/b4b96e30f6317d0fdd6f7e30124ee1e7.mp4",
  "./static/video/aerial/2019/england-norfolk/b7174e5d572133f1b0f25e7535cedab3.mp4",
  "./static/video/aerial/2019/england-norfolk/e8a895304811e64eab847e2b09ad6a5b.mp4",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of english landscape"}
      id={"aerial-2019-england-norfolk"}
      title={"England, Norfolk, 2019"}
    />
  );
};
export default SpecificItem;
