'use client';

// src/layouts/headers/HeaderOne.tsx


import { useState } from "react";
import Link from "next/link";
import menu_data from "../../data/menu-data";
import OffCanvas from "../../common/OffCanvas";

const HeaderOne = () => {
  // mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="site-header proxenheader-section" id="sticky-menu">
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            
            {/* Logo */}
            <div className="col-8 col-sm-auto">
              <div className="header-logo">
                <Link href="/">
                  <img
                    src="/assets/images/logo/proxen-logo.svg"
                    alt="Proxen logo"
                  />
                </Link>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="col">
              <div className="proxenmain-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block menu-left">
                  <ul>
                    {menu_data.map((item, i) => (
                      <li
                        key={i}
                        className={item.has_dropdown ? "menu-item-has-children" : ""}
                      >
                        <Link href={item.link}>{item.title}</Link>

                        {/* Submenu */}
                        {item.has_dropdown && (
                          <ul className="sub-menu">
                            {item.sub_menus?.map((sub_item, index) => (
                              <li
                                key={index}
                                className={
                                  sub_item.has_sub_dropdown
                                    ? "menu-item-has-children"
                                    : ""
                                }
                              >
                                <Link
                                  href={sub_item?.link || "/"}
                                  className={
                                    sub_item.has_sub_dropdown ? "no-border" : ""
                                  }
                                >
                                  {sub_item.title}
                                </Link>

                                {/* Nested Submenu */}
                                {sub_item.has_sub_dropdown && (
                                  <ul className="sub-menu">
                                    {sub_item.sub_menus?.map(
                                      (sub_inner_item, sub_index) => (
                                        <li key={sub_index}>
                                          <Link
                                            href={sub_inner_item?.link || "/"}
                                          >
                                            {sub_inner_item.title}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Contact Button + Mobile Menu */}
            <div className="col-auto d-flex align-items-center proxencta-btn">
              <Link
                className="proxendefault-btn proxenheader-btn"
                href="/contact-us"
              >
                Contact us
                <span className="proxenbutton-icon">
                  <img
                    className="arry1"
                    src="/assets/images/svg/arrow-right.png"
                    alt="Right Arrow"
                  />
                  <img
                    className="arry2"
                    src="/assets/images/svg/arrow-right.png"
                    alt="Right Arrow"
                  />
                </span>
              </Link>

              <div className="proxenheader-menu">
                <nav className="navbar site-navbar justify-content-between">
                  <button
                    onClick={toggleMenu}
                    className="proxenmenu-toggle d-inline-block d-lg-none"
                  >
                    <span></span>
                  </button>
                </nav>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* OffCanvas Mobile Menu */}
      <OffCanvas menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default HeaderOne;
