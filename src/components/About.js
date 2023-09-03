import Image from "next/image";

const About = () => {
  const renderAboutMe = () => {
    return (
      <div className="row">
        <div className="col-lg-6 m-15px-tb">
          <div className="title">
            <h3>About me.</h3>
          </div>
          <div className="about-text">
            <h3>{`I'm a Software Engineer with +10 years of experience.`}</h3>
            <p>
              Based in London, UK. Originally from Latvia. I use the power of
              magic and software engineering practices to solve complex problems
              in the fintech space.
            </p>
            {1 > 2 && (
              <>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">5k</span>
                      <div className="media-body">
                        Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">3k</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Portfolio</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderEducationAndSkills = () => {
    return (
      <>
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="education-box">
              <li>
                <span>2010-2012</span>
                <h6>Graphic Designer</h6>
                <p>International Design Institute</p>
              </li>
              <li>
                <span>2010-2012</span>
                <h6>Web Development</h6>
                <p>International Design Institute</p>
              </li>
              <li>
                <span>2010-2012</span>
                <h6>Search Engine Optimization</h6>
                <p>International Design Institute</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                {`I'm`} a Freelancer Front-end Developer with over 3 years of
                experience. I code and create web elements for amazing people
                around the world. I like work with new people. New people new
                Experiences.
              </p>
              <div className="skill-lt">
                <h6>HTML5</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "92%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>WordPress</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "72%" }}>
                    <span data-toggle="tooltip" title="72%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Magento</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>UI/UX</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderExperience = () => {
    return (
      <>
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image
                    src="/static/img/gs-logo.png"
                    title=""
                    alt=""
                    width={200}
                    height={150}
                  />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Engineer / Vice President</h6>
                  <label>Goldman Sachs | Feb 2020 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Software Engineer in <s>Investment Banking</s> Platform
                    Solutions, Corporate Cash Management. Transaction Banking
                    Channels Engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image
                    src="/static/img/gs-logo.png"
                    title=""
                    alt=""
                    width={200}
                    height={150}
                  />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Engineer / Vice President</h6>
                  <label>Goldman Sachs | Dec 2019 - Feb 2020</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Software Engineer in Securities Division, Trade Reporting.
                    Regulatory Engineering Technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image
                    src="/static/img/gs-logo.png"
                    title=""
                    alt=""
                    width={200}
                    height={150}
                  />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Engineer / Associate</h6>
                  <label>Goldman Sachs | Dec 2017 - Dec 2019 </label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Software Engineer in Securities Division, Regulatory
                    Engineering, Trade Reporting. Technology Division,
                    Regulatory Architecture and Controls.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image
                    src="/static/img/gs-logo.png"
                    title=""
                    alt=""
                    width={200}
                    height={150}
                  />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Engineer / Analyst</h6>
                  <label>Goldman Sachs | Jul 2015 - Dec 2017</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Full stack developer in Swap Derivative Reporting and
                    Regulatory Trade Reporting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image
                    src="/static/img/gs-logo.png"
                    title=""
                    alt=""
                    width={200}
                    height={150}
                  />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Engineer / Summer Intern</h6>
                  <label>Goldman Sachs | Jun 2014 - Aug 2014</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Software developer in the Sales Services Technology
                    department concentrating on search.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image
                    src="/static/img/arterys-logo.jpg"
                    title=""
                    alt=""
                    width={200}
                    height={150}
                  />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front End Developer</h6>
                  <label>
                    Arterys (formerly: Morpheus Medical, Inc.) | Remote | Aug
                    2013 - Jul 2014
                  </label>
                  <div className="rb-time">Part Time</div>
                  <p>
                    Software Engineer in Securities Division, Trade Reporting.
                    Regulatory Engineering Technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image
                    src="/static/img/amadeus-logo.jpg"
                    title=""
                    alt=""
                    width={200}
                    height={150}
                  />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Development Engineer</h6>
                  <label>Amadeus Services Ltd. | Jul 2012 - Aug 2013</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Front end developer of the standalone Offline Loadsheet
                    Tool.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        {renderAboutMe()}
        <div className="separated" />
        {renderExperience()}
        <div className="separated" />
        {1 > 2 && renderEducationAndSkills()}
      </div>
    </section>
  );
};
export default About;
