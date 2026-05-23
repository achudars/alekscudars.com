const PhotoItem = ({ src, alt }) => {
  const fileName = src.split("/").pop();
  return (
    <div className="col-lg-12 ml-auto m-15px-tb">
      <div className="skills-box">
        <img alt={alt} title={fileName} src={src} />
      </div>
    </div>
  );
};

export default PhotoItem;
