import Layout from "../src/layout/Layout";

const Podcasts = () => {

  const renderContainer = () => {
    return (
      <>
        <div className="title">
          <h3>Podcasts.</h3>
        </div>
      </>
    );
  };

  return (
    <Layout showBackBtn>
      <section
        id="Podcasts"
        data-nav-tooltip="Podcasts"
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">{renderContainer()}</div>
      </section>
    </Layout>
  );
};
export default Podcasts;
