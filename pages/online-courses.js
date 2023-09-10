import Layout from "../src/layout/Layout";

const OnlineCourses = () => {
  const renderRow = ({
    title,
    progress,
    moreDetailsOnProgress,
    linkToPublicProfile,
    width,
  }) => {
    return (
      <div className="row">
        <div className="col-lg-4 m-15px-tb">
          <ul className="education-box">
            <li>
              <span>{title}</span>
              <h6>
                <a
                  aria-label="link to instagram profile"
                  href={linkToPublicProfile}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Link to Public Profile
                </a>
              </h6>
              {moreDetailsOnProgress && <p>{moreDetailsOnProgress}</p>}
            </li>
          </ul>
        </div>
        <div className="col-lg-7 ml-auto m-15px-tb">
          <div className="skills-box">
            <h3>Progress</h3>
            <div className="skill-lt">
              <h6>{progress}</h6>
              <div className="skill-bar">
                <div className="skill-bar-in" style={{ width: `${width}%` }}>
                  <span data-toggle="tooltip" title={`${width}%`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContainer = () => {
    return (
      <>
        <div className="title">
          <h3>Online Courses.</h3>
        </div>
        {renderRow({
          title: "Pluralsight",
          progress: "43 Skill IQs obtained",
          moreDetailsOnProgress: "View time: 1813h 32m",
          width: "43",
          linkToPublicProfile:
            "https://app.pluralsight.com/profile/aleksandrs-cudars",
        })}
        {renderRow({
          title: "ImmersiveLabs",
          progress: "1319 labs completed",
          moreDetailsOnProgress: "Points: 137,990",
          width: "62",
          linkToPublicProfile:
            "https://immersivelabs.online/profile/alekscudars",
        })}
        {renderRow({
          title: "Coursera",
          progress: "4 courses completed",
          width: "20",
          linkToPublicProfile:
            "https://www.coursera.org/user/bd82dbe9c7d6768d82f10efafb18c09b",
        })}
        {renderRow({
          title: "HackerRank",
          progress: "3 badges collected",
          moreDetailsOnProgress: "Labs completed: 50",
          width: "3",
          linkToPublicProfile: "https://www.hackerrank.com/achudars",
        })}
        {renderRow({
          title: "Codecademy",
          progress: "407 badges collected",
          width: "100",
          linkToPublicProfile:
            "https://www.codecademy.com/users/aleks_cudars/achievements",
        })}
        {renderRow({
          title: "Hack The Box",
          progress: "0 challenges completed",
          width: "0",
          linkToPublicProfile:
            "https://www.hackthebox.eu/home/users/profile/476150",
        })}
        {renderRow({
          title: "LeetCode",
          progress: "0 challenges completed",
          width: "0",
          linkToPublicProfile: "https://leetcode.com/achudars",
        })}
        {renderRow({
          title: "Codewars",
          progress: "15 challenges completed",
          width: "15",
          linkToPublicProfile: "https://www.codewars.com/users/achudars",
        })}
      </>
    );
  };

  return (
    <Layout showBackBtn>
      <section
        id="OnlineCourses"
        data-nav-tooltip="OnlineCourses"
        className="pp-section pp-scrollable section counter"
      >
        <div className="container">{renderContainer()}</div>
      </section>
    </Layout>
  );
};
export default OnlineCourses;
