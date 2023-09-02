import Link from "next/link";

const Blog = () => {
  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Latest Blog.</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <img src="static/img/blog-1.jpg" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <Link href="/single-blog">
                    <a>
                      Five Solid Evidences Attending Design Is Good For Your
                      Career Development.
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <img src="static/img/blog-2.jpg" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <Link href="/single-blog">
                    <a>
                      Ten Mind-Blowing Reasons Why Design Is Using This
                      Technique For Exposure.
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <img src="static/img/blog-3.jpg" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <Link href="/single-blog">
                    <a>
                      I Will Tell You The Truth About Design In The Next 60
                      Seconds.
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog">
                  <a>
                    <img src="static/img/blog-4.jpg" title="" alt="" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <Link href="/single-blog">
                    <a>
                      What You Know About Design And What You {`Don't`} Know
                      About Design.
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 read-more-blog text-center">
            <Link href="/blog">
              <a className="px-btn px-btn-theme">More Blogs</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
