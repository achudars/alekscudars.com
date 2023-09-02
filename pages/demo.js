import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

const Demo = () => {
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="demo/css/style.css" />
      </Head>
      <main>
        <section id="home" className="section dark-bg">
          <div className="container">
            <div className="row justify-content-center p-100px-tb align-items-center">
              <div className="col-md-12 col-lg-9 text-center">
                <div className="text-center">
                  <h1 className="mb-4 font-weight-bold text-white">
                    Portfolio/CV/Resume React NextJS Template.
                  </h1>
                  <div className="btn-bar p-15px-t">
                    <a href="#" className="px-btn px-btn-theme">
                      <span>Buy Now</span>
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* col */}
            </div>{" "}
            {/* row */}
          </div>{" "}
          {/* container */}
        </section>
        <section className="page-section demo-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-6 col-lg-4">
                <div className="product">
                  <Link href="/">
                    <a target="_blank">
                      <div className="product-img">
                        <img src="demo/img/dark.jpg" title="" alt="" />
                      </div>
                      <div className="product-info">
                        <h2>Home Default</h2>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>{" "}
              {/* col */}
              <div className="col-sm-6 col-lg-4">
                <div className="product">
                  <Link href="/index-glitch">
                    <a target="_blank">
                      <div className="product-img">
                        <img src="demo/img/dark-glitch.jpg" title="" alt="" />
                      </div>
                      <div className="product-info">
                        <h2>Home Glitch</h2>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>{" "}
              {/* col */}
              <div className="col-sm-6 col-lg-4">
                <div className="product">
                  <Link href="/index-particles">
                    <a target="_blank">
                      <div className="product-img">
                        <img
                          src="demo/img/dark-particles.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="product-info">
                        <h2>Home Particles</h2>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>{" "}
              {/* col */}
              {/* <div className="col-sm-6 col-lg-4">
                <div className="product">
                  <Link href="/index-video">
                    <a target="_blank">
                      <div className="product-img">
                        <img src="demo/img/dark-video.jpg" title="" alt="" />
                      </div>
                      <div className="product-info">
                        <h2>Home Video</h2>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>{" "} */}
              {/* col */}
              <div className="col-sm-6 col-lg-4">
                <div className="product">
                  <Link href="/blog">
                    <a target="_blank">
                      <div className="product-img">
                        <img src="demo/img/dark-blog.jpg" title="" alt="" />
                      </div>
                      <div className="product-info">
                        <h2>Blog List</h2>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>{" "}
              {/* col */}
              <div className="col-sm-6 col-lg-4">
                <div className="product">
                  <Link href="/single-blog">
                    <a target="_blank">
                      <div className="product-img">
                        <img
                          src="demo/img/dark-blog-single.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="product-info">
                        <h2>Blog Single</h2>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>{" "}
              {/* col */}
            </div>
          </div>
        </section>
        <section className="purchase-section dark-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <span>You are at the right step now</span>
                <div className="clearfix" />
                <h3 className="text-white p-30px-b">
                  Make Your Own Bootstrap Based Landing Page Templates.
                </h3>
                <div className="clearfix" />
                <a href="#" className="px-btn px-btn-theme">
                  <span>Do it Now</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};
export default Demo;
