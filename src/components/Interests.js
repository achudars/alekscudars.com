import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

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
                <h5>Aerial Photography</h5>
                <p>---</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mic" />
              <div className="feature-content media-body">
                <h5>Podcasts</h5>
                <p>---</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-newspaper" />
              <div className="feature-content media-body">
                <h5>Reading</h5>
                <p>---</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>Running and Aerobics</h5>
                <p>---</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-map" />
              <div className="feature-content media-body">
                <h5>Day Tripping / Walking / Hiking</h5>
                <p>---</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-focus" />
              <div className="feature-content media-body">
                <h5>Studying</h5>
                <p>---</p>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        {1 > 2 && <Testimonials />}
      </div>
    </section>
  );
};

export default Interests;
