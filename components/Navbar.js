// react bootstrap
import { Navbar, Container, Nav } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header id="header">
        <Navbar expand="lg">
          <Container>
            <Link href="/">
              <a className="nav_logo">Agency</a>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Link href="/products/design">
                  <a className="nav-link">Design</a>
                </Link>
                <Link href="/products/development">
                  <a className="nav-link">Development</a>
                </Link>
                <Link href="/products/production">
                  <a className="nav-link">Production</a>
                </Link>
                <Link href="/products/photography">
                  <a className="nav-link">Photography</a>
                </Link>
                <Link href="/contact">
                  <a className="nav-link"> Contact</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
