import PhotoAndVideoSection from "../src/layout/PhotoAndVideoSection";

const PHOTOS = [
  "./static/img/aerial/2020/scotland-glencoe/47d6ccf8443f4002ec673590a23be727.jpg",
  "./static/img/aerial/2020/scotland-glencoe/2c42f692f99d0ba49514e7187dd2bd87.jpg",
  "./static/img/aerial/2020/scotland-glencoe/f2435e66fccf545aec3a315d8e21183c.jpg",
  "./static/img/aerial/2020/scotland-glencoe/15a2df6da3b53e19f653ce02622c0520.jpg",
  "./static/img/aerial/2020/scotland-glencoe/6c90712fc0352664ef058b6a2c4a5fb6.jpg",
  "./static/img/aerial/2020/scotland-glencoe/c97edb50d5f821570aab68617680aef2.jpg",
  "./static/img/aerial/2020/scotland-glencoe/306f4c4619101712b6f799d3fa263451.jpg",
  "./static/img/aerial/2020/scotland-glencoe/c7ef3855ad77137d2d92ec3ea140d9fc.jpg",
  "./static/img/aerial/2020/scotland-glencoe/593b0cbc847cd907b6b87f3604c48e64.jpg",
  "./static/img/aerial/2020/scotland-glencoe/a09e3e630ae2d88e3731406d18aaf3c9.jpg",
  "./static/img/aerial/2020/scotland-glencoe/a5ac62bf01daa44b29258056bc0d45ee.jpg",
  "./static/img/aerial/2020/scotland-glencoe/6602a1b40443be0c60447108e184ec43.jpg",
  "./static/img/aerial/2020/scotland-glencoe/42a4ce89d99d420910d27d71d50e0b7d.jpg",
];

const VIDEOS = [
  "./static/video/aerial/2020/scotland-glencoe/0439eb25d59cfeda0e7d79713f85938e.mp4",
  "./static/video/aerial/2020/scotland-glencoe/873202f4ae984dcf5d9aa21354d20492.mp4",
  "./static/video/aerial/2020/scotland-glencoe/aaeeb070dc09e339e1adc7261aa6977f.mp4",
  "./static/video/aerial/2020/scotland-glencoe/e6b5ad2168017eb86ca55759f7660a1a.mp4",
  "./static/video/aerial/2020/scotland-glencoe/65117cbc0fd9b5331b4df05d5352c727.mp4",
];

const SpecificItem = () => {
  return (
    <PhotoAndVideoSection
      photos={PHOTOS}
      videos={VIDEOS}
      altForPhotos={"aerial photo of scottish landscape"}
      id={"aerial-2020-scotland-glencoe"}
      title={"Scotland, Glencoe, 2020"}
    />
  );
};
export default SpecificItem;
