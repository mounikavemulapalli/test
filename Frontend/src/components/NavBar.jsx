import React, { useEffect, useState } from "react";
import Button from "./premium/premiumButton";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "../Styles/NavBar.css";
import logo from "../assets/images/footer/logo.webp"; // Adjust the path based on where your logo image is stored

export default function NavBar({ inputState, setSearchedKeyword }) {
  const location = useLocation();
  const homeRouteNames = [
    "/",
    "/home",
    "/research",
    "/contact-us",
    "/super_daily_app_program",
  ];

  const [currentPage, setCurrentPage] = useState(() => {
    if (homeRouteNames.includes(location.pathname)) {
      return "home";
    } else if (location.pathname.startsWith("/blog")) {
      return "blog";
    } else if (location.pathname.startsWith("/premium")) {
      return "premium";
    } else {
      return location.pathname.substring(1);
    }
  });

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchClicked, setSearchClicked] = useState(false);
  const { inputKeyword, setInputKeyword } = inputState;

  useEffect(() => {
    const enterKey = (e) => {
      if (e.key === "Enter") {
        toggleSearchBtn();
      }
    };

    document.addEventListener("keydown", enterKey);

    return () => {
      document.removeEventListener("keydown", enterKey);
    };
  }, [inputKeyword]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    setInputKeyword(e.target.value);
  };

  const toggleSearchBtn = () => {
    setSearchedKeyword(inputKeyword);
    setSearchClicked(!isSearchClicked);
  };

  useEffect(() => {
    if (homeRouteNames.includes(location.pathname)) {
      setCurrentPage("home");
    } else if (location.pathname.startsWith("/blog")) {
      setCurrentPage("blog");
    } else if (location.pathname.startsWith("/premium")) {
      setCurrentPage("premium");
    } else {
      setCurrentPage(location.pathname.substring(1));
    }
  }, [location.pathname]);

  const premiumPageNav = (link) => {
    if (location.hash === link) {
      return "active";
    }
    if (!location.hash && link === "#root") {
      return "active";
    }
    return ""; // Return an empty string for non-active links
  };

  const links =
       [
          { to: "/home", label: "Home" },
          { to: "/premium", label: "Premium" },
          { to: "/success story", label: "Success Story" },
          { to: "/about", label: "About" },
          { to: "/blog", label: "Blog" },
        ];

  const isDesktopScreen = useMediaQuery({ minWidth: 850 });

  return (
    <>
      <nav
        className="navBar"
        style={{
          background: currentPage === "blog" ? "#f5f5f5" : "white",
          position: "sticky",
          maxWidth: "100%",
        }}
        aria-label="Main Navigation"
      >
        <img
          className="hamburger"
          style={currentPage !== "blog" ? { order: "0" } : { order: "2" }}
          onClick={toggleMenu}
          src="https://www.uptodd.com/images/newWebsite/hamburger-icon.svg"
          alt="Menu Icon"
        ></img>
        {!isDesktopScreen && currentPage === "blog" && (
          <div id="search">
            <div>
              {isSearchClicked && (
                <input
                  type="text"
                  onChange={handleSearch}
                  placeholder="Search..."
                />
              )}
              <img
                src="https://e7.pngegg.com/pngimages/461/616/png-clipart-web-development-real-estate-search-engine-optimization-multiple-listing-service-business-search-search-engine-optimization-web-design.png"
                height="15"
                onClick={toggleSearchBtn}
                alt="Search Icon"
              />
            </div>
          </div>
        )}
        <div className="logo">
          <a href={currentPage === "blog" ? "/blog" : "/"}>
            <img
              src={
                currentPage !== "blog"
                  ? logo
                  : "https://blog.uptodd.com/wp-content/uploads/2023/06/cropped-cropped-cropped-uptodd-logo1-150x48.png"
              }
              alt="Logo"
            />
          </a>
        </div>

        {isMenuOpen && currentPage !== "blog" && (
          <ul className="mobileNavLinks">
            {links.map((link) => (
              <li key={link.to || link.href} className="mobileNavLink">
                {link.href ? (
                  <a href={link.href} className={premiumPageNav(link.href)}>
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    className={
                      decodeURIComponent(currentPage) ===
                      link.label.toLowerCase()
                        ? "active"
                        : ""
                    }
                    target={currentPage !== "premium" ? "_blank" : ""}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        )}

        <ul className="navLinks">
          {links.map((link) => (
            <li
              key={link.to || link.href}
              className="navLink"
              style={isDesktopScreen ? { display: "flex" } : { display: "none" }}
            >
              {link.href ? (
                <a href={link.href} className={premiumPageNav(link.href)}>
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.to}
                  className={
                    decodeURIComponent(currentPage) ===
                    link.label.toLowerCase()
                      ? "active"
                      : ""
                  }
                  target={currentPage !== "premium" ? "_blank" : ""}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li>
            <a
              href={currentPage === "blog" ? "/" : "/super_daily_app_program"}
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentPage !== "blog" ? (
                <Button text="Start for INR 449" />
              ) : (
                <button className="blogPageBtn">EXPLORE PROGRAMS</button>
              )}
            </a>
          </li>
        </ul>
      </nav>
      {isMenuOpen && currentPage === "blog" && (
        <div className="blog-page-mobile-navlink">
          <a href="/blog">Home</a>
        </div>
      )}
    </>
  );
}