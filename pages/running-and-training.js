import Layout from "../src/layout/Layout";

const RunningAndTraining = () => {

  const renderContainer = () => {
    return (
      <>
        <div className="title">
          <h3>Running and Training.</h3>
        </div>
      </>
    );
  };

  return (
    <Layout showBackBtn>
      <section
        id="RunningAndTraining"
        data-nav-tooltip="RunningAndTraining"
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">{renderContainer()}</div>
      </section>
    </Layout>
  );
};
export default RunningAndTraining;
