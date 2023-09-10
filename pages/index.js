import dynamic from "next/dynamic";
import About from "../src/components/About";
import Certifications from "../src/components/Certifications";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import ParticlesBackground from "../src/components/ParticlesBackground";
import Interests from "../src/components/Interests";
import Layout from "../src/layout/Layout";

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <ParticlesBackground />
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h1 className="font-alt">Aleksandrs Čudars</h1>
                  <p className="desc">Every challange is an opportunity</p>
                  {1 > 2 && (
                    <div className="btn-bar">
                      <a className="px-btn px-btn-theme" href="#">
                        Download CV
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/home-banner.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {<About />}
      {<Certifications />}
      {<Interests />}
      {1 > 2 && <Portfolio />}
      {1 > 2 && <Blog />}
      {1 > 2 && <Contact />}
    </Layout>
  );
};
export default Index;
