import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
      aria-labelledby="blog-heading"
    >
      <div className="container">
        <div className="title">
          <h3 id="blog-heading">Latest Blog.</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <article className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog" aria-label="Read article: Five Solid Evidences Attending Design Is Good For Your Career Development">
                  <Image
                    src="static/img/blog-1.jpg"
                    alt="Design career development illustration"
                    title="Five Solid Evidences Attending Design Is Good For Your Career Development"
                    width={500}
                    height={300}
                  />
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta" aria-label="Posted on: 29 February 2022 in Website category with 1 comment">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <Link href="/single-blog">
                    Five Solid Evidences Attending Design Is Good For Your
                    Career Development.
                  </Link>
                </h6>
              </div>
            </article>
          </div>
          <div className="col-md-6 m-15px-tb">
            <article className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog" aria-label="Read article: Ten Mind-Blowing Reasons Why Design Is Using This Technique For Exposure">
                  <Image
                    src="/static/img/blog-2.jpg"
                    alt="Design technique exposure illustration"
                    title="Ten Mind-Blowing Reasons Why Design Is Using This Technique For Exposure"
                    width={500}
                    height={300}
                  />
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta" aria-label="Posted on: 29 February 2022 in Website category with 1 comment">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <Link href="/single-blog">
                    Ten Mind-Blowing Reasons Why Design Is Using This
                    Technique For Exposure.
                  </Link>
                </h6>
              </div>
            </article>
          </div>
          <div className="col-md-6 m-15px-tb">
            <article className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog" aria-label="Read article: I Will Tell You The Truth About Design In The Next 60 Seconds">
                  <Image
                    src="/static/img/blog-3.jpg"
                    alt="Design truth illustration"
                    title="I Will Tell You The Truth About Design In The Next 60 Seconds"
                    width={500}
                    height={300}
                  />
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta" aria-label="Posted on: 29 February 2022 in Website category with 1 comment">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <Link href="/single-blog">
                    I Will Tell You The Truth About Design In The Next 60
                    Seconds.
                  </Link>
                </h6>
              </div>
            </article>
          </div>
          <div className="col-md-6 m-15px-tb">
            <article className="blog-grid">
              <div className="blog-img">
                <Link href="/single-blog" aria-label="Read article: What You Know About Design And What You Don't Know About Design">
                  <Image
                    src="/static/img/blog-4.jpg"
                    alt="Design knowledge illustration"
                    title="What You Know About Design And What You Don't Know About Design"
                    width={500}
                    height={300}
                  />
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta" aria-label="Posted on: 29 February 2022 in Website category with 1 comment">29/FEB/2022 - WEBSITE - 1 COMMENT</div>
                <h6>
                  <Link href="/single-blog">
                    What You Know About Design And What You {`Don't`} Know
                    About Design.
                  </Link>
                </h6>
              </div>
            </article>
          </div>
          <div className="col-12 read-more-blog text-center">
            <Link href="/blog" className="px-btn px-btn-theme">More Blogs</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
