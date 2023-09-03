import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Interests";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const IndexGlitch = () => {
  return (
    <Layout>
      {" "}
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="glitch-box">
          <div
            className="glitch"
            style={{ backgroundImage: "url(static/img/home-banner-1.jpg)" }}
          />
        </div>
        <div className="home-banner-01 glitch-home">
          <div className="container">
            <div className="row full-screen align-items-center justify-content-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <div className="img">
                    <img src="static/img/home-banner.png" title="" alt="" />
                  </div>
                  <h1 className="font-alt">Aleksandrs Cudars</h1>


                  {1 > 2 && (<>
                  <p className="lead">
                    I Am <TypingAnimation />
                  </p>
                  <div className="nav justify-content-center social-icons">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest" />
                    </a>
                  </div>
                  </>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      <Portfolio />
      {/* End Portfolio */}
      {/* Blog */}
      <Blog />
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default IndexGlitch;
