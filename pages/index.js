import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
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
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  {1 > 2 && (<h6>Hello, I am</h6>)}
                  <h1 className="font-alt">Aleksandrs Cudars</h1>
                  {1 > 2 && (<p className="lead">
                    I Am Passionate <TypingAnimation />
                  </p>)}
                  {1 > 2 && (<p className="desc">
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores.
                  </p>)}
                  {1 > 2 && (<div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#">
                      Download CV
                    </a>
                  </div>)}
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
      {/* End Home */}
      {/* about us */}
      { (<About />)}
      {/* End about us */}
      {/* Services */}
      {1 > 2 &&  (<Services />)}
      {/* End Services */}
      {/* Portfolio */}
      {1 > 2 &&  (<Portfolio />)}
      {/* End Portfolio */}
      {/* Blog */}
      {1 > 2 &&  (<Blog />)}
      {/* End Blog */}
      {/* Contact us */}
      {1 > 2 && (<Contact />)}
    </Layout>
  );
};
export default Index;
