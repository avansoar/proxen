'use client';

  
import  { useState } from 'react'
import menu_data from '../data/menu-data';
import Link from 'next/link';

interface OffCanvasProps {
  menuOpen: boolean; 
  setMenuOpen: (value: boolean) => void;
}


export default function OffCanvas({ menuOpen, setMenuOpen }: OffCanvasProps) {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const [navTitle2, setNavTitle2] = useState("");
  //openMobileMenu
  const openMobileMenu2 = (menu: string) => {
    if (navTitle2 === menu) {
      setNavTitle2("");
    } else {
      setNavTitle2(menu);
    }
  };

  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close only if clicked directly on wrapper (not inside content)
    if (e.target === e.currentTarget) {
      setMenuOpen(false);
    }
  };

  return (

    <div className={`proxenmenu-wrapper ${menuOpen ? 'proxenbody-visible' : ''}`} onClick={handleWrapperClick}>
      <div className="proxenmenu-area text-center">
        <div className="proxenmenu-mobile-top">
          <div className="mobile-logo">
            <Link href="/">
              <img src="/assets/images/logo/proxen-logo.svg" alt="logo" />
            </Link>
          </div>
          <button className="proxenmenu-toggle mobile" onClick={() => setMenuOpen(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="proxenmobile-menu">
          <ul>
            {menu_data.map((item, i) => (
              <li key={i} className={`menu-item-has-children proxenitem-has-children ${navTitle === item.title ? "proxenactive" : ""}`}>
                <Link href={item.link}>
                  {item.title}
                  {item.has_dropdown && <span onClick={() => openMobileMenu(item.title)} className="proxenmean-expand"></span>}
                </Link>
                {item?.has_dropdown &&
                  <ul className={`sub-menu proxensubmenu ${navTitle === item?.title ? "proxenopen" : ""}`} style={{ display: navTitle === item.title ? "block" : "none", }}>
                    {item.has_dropdown && item.sub_menus && item.sub_menus.map((sub_item, index) => (
                      <li className={`${sub_item?.has_sub_dropdown ? 'menu-item-has-children proxenitem-has-children' : ''} ${navTitle2 === sub_item.title ? "proxenactive" : ""}`} key={index}>
                        <Link href={sub_item.link}>
                          {sub_item.title}
                          {sub_item.has_sub_dropdown && <><span className="proxenmean-expand" onClick={() => openMobileMenu2(sub_item.title)}></span><span onClick={() => openMobileMenu2(sub_item.title)} className="proxenmean-expand"></span></>}
                        </Link>
                        {sub_item?.has_sub_dropdown &&
                          <ul className={`sub-menu proxensubmenu ${navTitle2 === sub_item?.title ? "proxenopen" : ""}`} style={{ display: navTitle2 === sub_item?.title ? "block" : "none", }}>
                            {sub_item.has_sub_dropdown && sub_item.sub_menus && sub_item.sub_menus.map((sub_inner_item, sub_index) => (
                              <li key={sub_index}><Link href={sub_inner_item.link}>{sub_inner_item.title}</Link></li>
                            ))}
                          </ul>
                        }
                      </li>
                    ))}
                  </ul>
                }
              </li>
            ))}
          </ul>
        </div>
        <div className="proxenmobile-menu-btn">
          <Link className="proxendefault-btn proxenheader-btn btn2" href="/contact-us">Contact us
            <span className="proxenbutton-icon">
              <img className="arry1" src="/assets/images/svg/arrow-right.png" alt="" />
              <img className="arry2" src="/assets/images/svg/arrow-right.png" alt="" />
            </span>
          </Link>
        </div>
      </div>
    </div>

  )
}
