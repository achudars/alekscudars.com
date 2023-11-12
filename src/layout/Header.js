import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../paginationUtils";

const Header = ({ blog, isLandingPage }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
    if (!blog) {
      activeSection();
    }
  }, [blog]);

  return (
    <Fragment>
      <div className="mob-header">
        <div className="d-flex">
          <div className="navbar-brand">
            <Link legacyBehavior href="/">
              <a className="logo-text">Aleksandrs Čudars</a>
            </Link>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${
          sideBarToggle ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img
                  src="static/img/about-me.jpg"
                  title="photo of Aleks"
                  alt="photo of Aleks"
                />
              </div>
              <h5>🇱🇻 🥔 🇬🇧</h5>
            </div>
          </div>
          <MenuForLandingPage isChild={!isLandingPage} />
        </div>

        <div className="nav justify-content-center social-icons">
          <a
            aria-label="link to linkedin profile"
            href="https://www.linkedin.com/in/aleksandrs-cudars"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a
            aria-label="link to github profile"
            href="https://github.com/achudars"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>
          <a
            aria-label="link to stackoverflow profile"
            href="https://stackoverflow.com/users/1912213/achudars"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fab fa-stack-overflow" />
          </a>
          <a
            aria-label="link to instagram profile"
            href="https://www.instagram.com/aleks.cudars/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            aria-label="link to code pen profile"
            href="https://codepen.io/achudars/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fab fa-codepen" />
          </a>
          <a
            aria-label="link to Speaker Deck profile"
            href="https://speakerdeck.com/achudars"
            rel="noreferrer noopener"
            target="_blank"
          >
            <i className="fab fa-speaker-deck" />
          </a>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;

const MenuForLandingPage = (isChild) => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <a className="nav-link" href={`${isChild ? "/" : ""}${"#home"}`}>
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href={`${isChild ? "/" : ""}${"#about"}`}>
          <i className="ti-user" />
          <span>About</span>
        </a>
      </li>
      <li data-menuanchor="certifications">
        <a
          className="nav-link"
          href={`${isChild ? "/" : ""}${"#certifications"}`}
        >
          <i className="ti-medall" />
          <span>Certifications</span>
        </a>
      </li>
      <li data-menuanchor="interests">
        <a className="nav-link" href={`${isChild ? "/" : ""}${"#interests"}`}>
          <i className="ti-shine" />
          <span>Interests</span>
        </a>
      </li>
      {1 > 2 && (
        <>
          {" "}
          <li data-menuanchor="work">
            <a className="nav-link" href={`${isChild ? "/" : ""}${"#work"}`}>
              <i className="ti-bookmark-alt" />
              <span>Portfolio</span>
            </a>
          </li>
          <li data-menuanchor="blog" className="blog">
            <a className="nav-link" href={`${isChild ? "/" : ""}${"#blog"}`}>
              <i className="ti-layout-media-overlay-alt-2" />
              <span>Blogs</span>
            </a>
          </li>
          <li data-menuanchor="contactus">
            <a
              className="nav-link"
              href={`${isChild ? "/" : ""}${"#contactus"}`}
            >
              <i className="ti-map-alt" />
              <span>Contact Me</span>
            </a>
          </li>
        </>
      )}
    </ul>
  );
};
