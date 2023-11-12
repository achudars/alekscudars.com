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
            <Link href="/aerial-photography">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-camera" />
                <div className="feature-content media-body">
                  <h5>Aerial Photography & Videography</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <Link href="/podcasts">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-mic" />
                <div className="feature-content media-body">
                  <h5>Podcasts</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <Link href="/reading">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-newspaper" />
                <div className="feature-content media-body">
                  <h5>Reading</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <Link href="/running-and-training">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-target" />
                <div className="feature-content media-body">
                  <h5>Running and Training</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <Link href="/hiking-and-walking">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-map" />
                <div className="feature-content media-body">
                  <h5>Hiking and Walking</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <Link href="/online-courses">
              <div className="feature-box-01 media">
                <i className="icon theme-bg icon-focus" />
                <div className="feature-content media-body">
                  <h5>Online Courses</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="separated" />
      </div>
    </section>
  );
};

export default Interests;
