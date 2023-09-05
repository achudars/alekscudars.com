import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";

const Header = ({ blog }) => {
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
                <img src="static/img/about-me.jpg" title="photo of me" alt="photo of me" />
              </div>
              <h5>🇱🇻 🥔 🇬🇧</h5>
            </div>
          </div>
          {blog ? <MenuWithBlog /> : <MenuWithOutBlog />}
        </div>

        <div className="nav justify-content-center social-icons">
          <a href="https://www.linkedin.com/in/aleksandrs-cudars">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://www.instagram.com/aleks.cudars/">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </header>
    </Fragment>
  );
};
export default Header;

const MenuWithOutBlog = () => {
  return (
    <ul className="nav nav-menu" id="pp-menu">
      <li data-menuanchor="home" className="active">
        <a className="nav-link" href="#home">
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#about">
          <i className="ti-user" />
          <span>About</span>
        </a>
      </li>
      <li data-menuanchor="certifications">
        <a className="nav-link" href="#certifications">
          <i className="ti-medall" />
          <span>Certifications</span>
        </a>
      </li>
      <li data-menuanchor="interests">
        <a className="nav-link" href="#interests">
          <i className="ti-shine" />
          <span>Interests</span>
        </a>
      </li>
      {1 > 2 && (
        <>
          {" "}
          <li data-menuanchor="work">
            <a className="nav-link" href="#work">
              <i className="ti-bookmark-alt" />
              <span>Portfolio</span>
            </a>
          </li>
          <li data-menuanchor="blog" className="blog">
            <a className="nav-link" href="#blog">
              <i className="ti-layout-media-overlay-alt-2" />
              <span>Blogs</span>
            </a>
          </li>
          <li data-menuanchor="contactus">
            <a className="nav-link" href="#contactus">
              <i className="ti-map-alt" />
              <span>Contact Me</span>
            </a>
          </li>
        </>
      )}
    </ul>
  );
};

const MenuWithBlog = () => {
  useEffect(() => {
    window.addEventListener("scroll", () =>
      document.querySelector(".blog").classList.add("active")
    );
  });

  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        <li data-menuanchor="home">
          <Link legacyBehavior href="/#home">
            <a className="nav-link">
              <i className="ti-home" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="about">
          <Link legacyBehavior href="/#about">
            <a className="nav-link">
              <i className="ti-id-badge" />
              <span>About Me</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="interests">
          <Link legacyBehavior href="/#interests">
            <a className="nav-link">
              <i className="ti-panel" />
              <span>Interests</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="work">
          <Link legacyBehavior href="/#work">
            <a className="nav-link">
              <i className="ti-bookmark-alt" />
              <span>Portfolio</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="blog" className="blog active">
          <Link legacyBehavior href="/#blog">
            <a className="nav-link">
              <i className="ti-layout-media-overlay-alt-2" />
              <span>Blogs</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="contactus">
          <Link legacyBehavior href="/#contactus">
            <a className="nav-link">
              <i className="ti-map-alt" />
              <span>Contact Me</span>
            </a>
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};
