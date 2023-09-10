import Layout from "../src/layout/Layout";

const HikingAndWalking = () => {

  const renderContainer = () => {
    return (
      <>
        <div className="title">
          <h3>Hiking and Walking.</h3>
        </div>
      </>
    );
  };

  return (
    <Layout showBackBtn>
      <section
        id="HikingAndWalking"
        data-nav-tooltip="HikingAndWalking"
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">{renderContainer()}</div>
      </section>
    </Layout>
  );
};
export default HikingAndWalking;
