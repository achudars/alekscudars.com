import Layout from "../src/layout/Layout";
import badges from "./api/certifications.json";

const CertificationDetails = () => {
  const renderCertifications = () => {
    return (
      <>
        <div className="title">
          <h3>Certifications.</h3>
        </div>
        <div className="resume-box">
          {badges.map((badge) => {
            return (
              <div key={badge.badgeId} className="resume-row">
                <div className="row">
                  <div className="col-sm-3 col-md-3 col-xl-2">
                    <div className="rb-left">
                      <a
                        href={badge.badgePublicUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={badge.badgeImageUrl}
                          title={badge.title}
                          alt={badge.title}
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-9 col-md-9 col-xl-10">
                    <div className="rb-right">
                      <h6>{badge.title}</h6>
                      <label>Issued by: {badge.issuedBy}</label>
                      <div className="rb-time">{badge.issuedOn}</div>
                      <p>{badge.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <Layout showBackBtn>
      <section
        id="certifications"
        data-nav-tooltip="Certifications"
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">
          {renderCertifications()}
          <div className="separated" />
        </div>
      </section>
    </Layout>
  );
};
export default CertificationDetails;
