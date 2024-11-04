import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaChevronRight } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";
import { LuShoppingCart } from "react-icons/lu";

function BottomNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`s ${isSticky ? 'sticky-active' : ''}`}>
    <Navbar
      expand="lg"
      className={`bg-body-tertiary text-[14px] ${isSticky ? "sticky-active" : ""} sticky-navbar`}
      expanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
    >
      <Container className="flex justify-between w-[100vw] p-2">
        <Navbar.Brand href="#home">
          <img src="https://preview.colorlib.com/theme/farmie/img/core-img/logo.png.webp" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="flex justify-between items-center">
          <Nav className="mx-auto flex gap-4" navbarScroll>
            <Nav.Link href="# ">HOME</Nav.Link>
            <Nav.Link href="#action2">ABOUT</Nav.Link>
            
            {!isExpanded && (
              <NavDropdown title="PAGES" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">HOME</NavDropdown.Item>
                <NavDropdown.Item href="#action4">ABOUT</NavDropdown.Item>
                <NavDropdown.Item href="#action5">OUR PRODUCTS</NavDropdown.Item>
                <NavDropdown.Item href="#action5">FARMING PRACTICE</NavDropdown.Item>
                <NavDropdown.Item href="#action5">NEWS</NavDropdown.Item>
                <NavDropdown.Item href="#action5" className="flex group">
                  <p className="flex justify-between relative group hover:cursor-pointer">
                    Shop <FaChevronRight />
                    <ol className="absolute -top-1 -right-[10.5rem] flex flex-col gap-2 border p-3 bg-white shadow-md hidden group-hover:flex z-1050">
                      <li>OUR PRODUCTS</li>
                      <li>SHOPS</li>
                    </ol>
                  </p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5" className="flex group">
                  <p className="flex justify-between relative group hover:cursor-pointer">
                    News <FaChevronRight />
                    <ol className="absolute -top-1 -right-[9.8rem] flex flex-col gap-2 border p-3 bg-white shadow-md hidden group-hover:flex z-1050">
                      <li>NEWS</li>
                      <li>NEWS DETAILS</li>
                    </ol>
                  </p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">Contact</NavDropdown.Item>
              </NavDropdown>
            )}

            <Nav.Link href="#">OUR PRODUCTS</Nav.Link>
            <Nav.Link href="#">FARMING PRACTICE</Nav.Link>
            <Nav.Link href="#">NEWS</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">
              <VscSearch className="text-lg ml-2" />
            </Nav.Link>
            <Nav.Link href="#">
              <LuShoppingCart className="text-lg ml-2" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
  );
}

export default BottomNav;
