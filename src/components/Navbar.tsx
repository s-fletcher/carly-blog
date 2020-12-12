import React, { useState, useEffect, useRef } from 'react';
import '../styles/navbar.scss';
import { Location } from 'history';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import useWindowDimensions from '../lib/useWindowDimensions';

/**
 * Navigation bar rendered on every page
 */
const Navbar: React.FC<RouteComponentProps> = ({ location }) => {
  const { isMobile } = useWindowDimensions();
  const [open, setOpen] = useState(false) as [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ];
  const hamburgerMenu = useRef() as React.MutableRefObject<HTMLDivElement>;
  const hamburger = useRef() as React.MutableRefObject<HTMLButtonElement>;

  useEffect(() => {
    document.body.classList.toggle('hamburger-open', open);

    /**
     * Checks if user clicked outside hamburger menu
     */
    function hasClickedOutside(e: MouseEvent): void {
      // If user has clicked outside of navigation menu or the hamburger icon, close hamburger menu
      if (
        !hamburgerMenu.current.contains(e.target as Node)
        && !hamburger.current.contains(e.target as Node)
      ) {
        setOpen(false);
        document.removeEventListener('click', hasClickedOutside, true);
      }
    }

    // If mobile menu has been opened, add hasClickedOutside function as listener
    if (open) {
      document.addEventListener('click', hasClickedOutside, true);
    }

    // Clean up!
    return (): void => {
      document.removeEventListener('click', hasClickedOutside, true);
    };
  }, [open]);

  // On render and user is not mobile, close mobile menu.
  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);

  return (
    <div id="navbar">
      <div className="container">
        <a href="/" className="cursive">carly</a>
        {isMobile
          ? (
            <>
              <Hamburger hamburger={hamburger} open={open} setOpen={setOpen} />
              <HamburgerMenu
                hamburgerMenu={hamburgerMenu}
                setOpen={setOpen}
                open={open}
                location={location}
              />
            </>
          )
          : <NavItems setOpen={setOpen} location={location} />}
      </div>
    </div>
  );
};

type NavItemsProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  location: Location;
}

/**
 * Navigation items for top navbar and hamburger menu
 */
const NavItems: React.FC<NavItemsProps> = ({ setOpen, location }) => {
  /**
   * Closes hamburger menu, scrolls to top, and closes dropdowns
   */
  const onClickLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
    setOpen(false);
    const targetName = e.currentTarget.children[0].innerHTML.toLowerCase();
    const target = document.getElementById(targetName);
    if (target) {
      window.scrollTo({
        behavior: 'smooth',
        top:      target.offsetTop - 125,
      });
    }
  };

  const path = location.pathname;

  return (
    <ul id="nav-items">
      <Link to="/" onClick={onClickLink}>
        <li className={`item ${path === '/' ? 'active' : ''}`}>
          <p>Home</p><div className="underline" />
        </li>
      </Link>
      <Link to="/blog" onClick={onClickLink}>
        <li className={`item ${path === '/blog' ? 'active' : ''}`}>
          <p>Blog</p><div className="underline" />
        </li>
      </Link>
      <Link to="/recipes" onClick={onClickLink}>
        <li className={`item ${path === '/recipes' ? 'active' : ''}`}>
          <p>Recipes</p><div className="underline" />
        </li>
      </Link>
    </ul>
  );
};

type HamburgerProps = {
  open: boolean;
  hamburger: React.RefObject<HTMLButtonElement>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Hamburger button
 */
const Hamburger: React.FC<HamburgerProps> = ({ open, setOpen, hamburger }) => (
  <button ref={hamburger} type="button" onClick={(): void => setOpen(!open)} id="hamburger" className={open ? 'open' : ''}>
    <div className={`line ${open && 'open'}`} />
    <div className={`line ${open && 'open'}`} />
    <div className={`line ${open && 'open'}`} />
  </button>
);

type HamburgerMenuProps = {
  open: boolean;
  hamburgerMenu: React.RefObject<HTMLDivElement>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  location: Location;
}

/**
 * Mobile menu, opened when pressing hamburger
 */
const HamburgerMenu: React.FC<HamburgerMenuProps> = (
  { open, hamburgerMenu, setOpen, location },
) => (
  <div id="hamburger-menu" ref={hamburgerMenu} className={open ? 'open' : 'closed'}>
    <NavItems setOpen={setOpen} location={location} />
  </div>
);

export default withRouter(Navbar);
