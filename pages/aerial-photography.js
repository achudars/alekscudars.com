import Layout from "../src/layout/Layout";

const AerialPhotography = () => {

  const renderContainer = () => {
    return (
      <>
        <div className="title">
          <h3>Aerial Photography.</h3>
        </div>
      </>
    );
  };

  return (
    <Layout showBackBtn>
      <section
        id="AerialPhotography"
        data-nav-tooltip="AerialPhotography"
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">{renderContainer()}</div>
      </section>
    </Layout>
  );
};
export default AerialPhotography;
