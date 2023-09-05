const Certifications = () => {
  return (
    <section
      id="certifications"
      data-nav-tooltip="Certifications"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="/static/img/badges.jpg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>Certifications.</h3>
              </div>
              <div className="about-text">
                <h3>When time permits I like to take online courses</h3>
                <p>
                  I currently hold certifications from Microsoft, AWS, The Linux
                  Foundation
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">17</span>
                      <div className="media-body">
                        Badges <br />
                        Earned.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">3</span>
                      <div className="media-body">
                        Vendors <br />
                        Covered.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                
                    <a className="px-btn px-btn-theme" href="/certification-details">
                      <span>See Details</span>
                    </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
      </div>
    </section>
  );
};

export default Certifications;
