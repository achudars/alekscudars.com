const PhotoItem = ({ src, alt }) => {
  return (
    <div className="col-lg-12 ml-auto m-15px-tb">
      <div className="skills-box">
        <img alt={alt} src={src} />
      </div>
    </div>
  );
};

export default PhotoItem;
