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

            <div className="btn-bar">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="px-btn px-btn-theme"
                href="https://www.linkedin.com/in/aleksandrs-cudars"
              >
                <span>Find Me on LinkedIn</span>
              </a>
            </div>
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
                <span>Oct 2010 - Jul 2015</span>
                <h6>University of York</h6>
                <p>Master of Engineering</p>
                <p>Computer Science with Business Enterprise Systems</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>Skills</h3>
              <div className="skill-lt">
                <h6>Java</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "70%" }}>
                    <span data-toggle="tooltip" title="70%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>TypeScript / JavaScript / React</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }}>
                    <span data-toggle="tooltip" title="90%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>HTML5 &amp; CSS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }}>
                    <span data-toggle="tooltip" title="80%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>UI / UX / Accessibility</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "85%" }}>
                    <span data-toggle="tooltip" title="85%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Application Security</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "55%" }}>
                    <span data-toggle="tooltip" title="55%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>AWS</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "35%" }}>
                    <span data-toggle="tooltip" title="35%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>SQL</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "42%" }}>
                    <span data-toggle="tooltip" title="42%" />
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
                  <img
                    src="/static/img/gs-logo.png"
                    title="Goldman Sachs Logo"
                    alt="Goldman Sachs Logo"
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
                  <img
                    src="/static/img/gs-logo.png"
                    title="Goldman Sachs Logo"
                    alt="Goldman Sachs Logo"
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
                  <img
                    src="/static/img/gs-logo.png"
                    title="Goldman Sachs Logo"
                    alt="Goldman Sachs Logo"
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
                  <img
                    src="/static/img/gs-logo.png"
                    title="Goldman Sachs Logo"
                    alt="Goldman Sachs Logo"
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
                  <img
                    src="/static/img/gs-logo.png"
                    title="Goldman Sachs Logo"
                    alt="Goldman Sachs Logo"
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
                  <img
                    src="/static/img/arterys-logo.jpg"
                    title="Arterys Logo"
                    alt="Arterys Logo"
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
                  <img
                    src="/static/img/amadeus-logo.jpg"
                    title="Amadeus Logo"
                    alt="Amadeus Logo"
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
        {renderEducationAndSkills()}
        <div className="separated" />
      </div>
    </section>
  );
};

export default About;
