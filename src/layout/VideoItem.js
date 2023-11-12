const VideoItem = ({ src }) => {
  return (
    <div className="col-lg-6 ml-auto m-15px-tb">
      <div className="skills-box">
        <video controls height="auto" width="94.5%">
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoItem;
