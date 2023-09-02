import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import Layout from "../src/layout/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const IndexVideo = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner ">
          {/* <div
            className="video-bg"
            data-property="{videoURL:'https://www.youtube.com/embed/V_ESIzSmoCc',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:.2, quality:'default'}"
          /> */}
          <div className="video-bg">
            <iframe
              src="https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ"
              frameBorder={0}
              allowFullScreen=""
            />
          </div>

          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Aleksandrs Cudars</h1>
                  <p className="lead">
                    I Am Passionate <span id="type-it" />
                  </p>
                  <p className="desc">
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web
                    services and online stores.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="#">
                      Download CV
                    </a>
                  </div>
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
export default IndexVideo;
