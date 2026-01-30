import React from 'react';
import '../styles/header.scss';

import {CloseIcon, ComprasIcon, LogoBlackIcon, LogoWhiteIcon, MenuIcon, PersonIcon, SearchIcon } from '../utils/icons';
import useScrollPosition from '../hooks/useScrollPosition';
import menuItems from '../assets/menu';
import { useState } from 'react';


const Header = () => {
  const scrolled = useScrollPosition(10);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  const handleSubToggle = (label) => {
    setOpenSub((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <div className={`header${scrolled ? ' header--scrolled' : ''}${!menuOpen ? ' with-padding' : ''}`}>
      {!menuOpen && (
        <>
          <div>
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginRight: 8 }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Abrir menu"
            >
              <MenuIcon color={scrolled ? '#111' : '#fff'} />
            </button>
            <SearchIcon color={scrolled ? '#111' : '#fff'} />
          </div>
          {scrolled ? <LogoBlackIcon /> : <LogoWhiteIcon />}
          <div>
            <PersonIcon color={scrolled ? '#111' : '#fff'} />
            <ComprasIcon color={scrolled ? '#111' : '#fff'} />
          </div>
        </>
      )}

      {menuOpen && (
        <div className="dropdown-menu__header custom-padding">
          <div className="dropdown-menu__logo">
            <LogoBlackIcon /> {/* Logo maior aqui */}
          </div>
          <button 
            className="dropdown-menu__close" 
            onClick={() => setMenuOpen(false)}
          >
           <CloseIcon />
          </button>
        </div>
      )}

      {/* Dropdown menu */}
      <div className={`header ${scrolled ? 'header--scrolled' : ''} ${menuOpen ? 'header--open' : 'header--closed'}`}>
  
  {/* No banner/imagem, remova o inline style de width: 80% e deixe o SCSS controlar */}
  {menuOpen && (
    <>
      <div className="header-dropdown-container">
      <img
        src="/slides/slide1.png"
        alt="Banner"
        className="header-dropdown-image"
        style={{ objectPosition: "bottom", objectFit: "cover"}}
      />

    </div>
      <nav className="dropdown-menu">
            <div className="dropdown-menu__content">
              <div className="dropdown-menu__box" style={{ width: '100%', important: true }}>
                <ul style={{ width: '100%', important: true }}>
                  {menuItems.map((item) => (
                    <li key={item.label} style={{ position: 'relative' }}>
                      <span
                        className={`dropdown-menu__item${item.children ? ' has-children' : ''}`}
                        onClick={() => item.children && handleSubToggle(item.label)}
                        style={item.color ? { color: item.color } : {}}
                      >
                        {item.label}
                        {item.children && (
                          <span
                            className={`dropdown-menu__arrow${openSub === item.label ? ' open' : ''}`}
                          >
                            ▶
                          </span>
                        )}
                      </span>
                      {item.children && openSub === item.label && (
                        <ul className="dropdown-submenu">
                          {item.children.map((sub) => (
                            <li key={sub.label}>{sub.label}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
    </div>
    </>
  );
};

export default Header;
