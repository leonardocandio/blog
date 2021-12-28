import * as React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.png";
import { Container, Navbar, Nav } from "react-bootstrap";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  if (isRootPath || location.pathname.includes("/accounting")) {
    header = (
      <Container>
        <Navbar expand="lg" collapseOnSelect={true}>
          <Link to="/">
            <img src={logo} alt={title} width={"350"} />
          </Link>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse
            id="navbarResponsive"
            className="justify-content-center"
          >
            <Nav>
              <ul className="navbar-nav justify-content-around">
                <li>
                  <Link to="/" className="nav-link" activeClassName="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/accounting"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Accounting
                  </Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
