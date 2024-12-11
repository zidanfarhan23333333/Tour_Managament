import React, { useRef, useEffect, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { AuthContext } from "../../context/AuthContext";

const nav__links = [
  { path: "/home", display: "Home" },
  { path: "/about", display: "About" },
  { path: "/tours", display: "Tours" },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  console.log("User in Header:", user); // Debugging statement

  const logout = () => {
    console.log("Logging out...");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const stickyHeaderFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeaderFunc);
    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <Link to="/home">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            {/* Menu */}
            <div className="navigation" ref={menuRef}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li key={index} className="nav__item">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? "active__link" : undefined
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>{" "}
                    {/* Display username */}
                    <Button className="mb-0" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      tag={Link}
                      to="/login"
                      className="btn secondary__btn"
                    >
                      Login
                    </Button>
                    <Button
                      tag={Link}
                      to="/register"
                      className="btn primary__btn"
                    >
                      Register
                    </Button>
                  </>
                )}
              </div>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
