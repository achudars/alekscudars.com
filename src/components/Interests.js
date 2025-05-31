import Link from "next/link";

const Interests = () => {
  return (
    <section
      id="interests"
      data-nav-tooltip="Interests"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Interests</h3>
        </div>
        <div className="row">
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-camera" />
              <div className="feature-content media-body">
                <Link href="/aerial-photography">
                  <h5>Aerial Photography & Videography</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-newspaper" />
              <div className="feature-content media-body">
                <Link href="/reading">
                  <h5>Reading</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <Link href="/running-and-training">
                  <h5>Running</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-map" />
              <div className="feature-content media-body">
                <Link href="/hiking-and-walking">
                  <h5>Hiking and Walking</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-focus" />
              <div className="feature-content media-body">
                <Link href="/online-courses">
                  <h5>Online Courses</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-pencil" />
              <div className="feature-content media-body">
                <Link href="/drawing">
                  <h5>Drawing</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
      </div>
    </section>
  );
};

export default Interests;
