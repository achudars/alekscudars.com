import Image from "next/image";

const PhotoItem = ({ src, alt }) => {
  return (
    <div className="col-lg-12 ml-auto m-15px-tb">
      <div className="skills-box">
        <Image
          alt={alt}
          src={src}
          width={800}
          height={600}
        />
      </div>
    </div>
  );
};

export default PhotoItem;
