import React from "react";
import "./Navbar.css";
import { Nav, NavDropdown } from "react-bootstrap";
import skilvulLogo from "../assets/skilvul.png";

const Navbar = () => {
  return (
    <Nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-logo">
          <img
            src={skilvulLogo} 
            className="navbar-logo img"
            alt="LogoAYO.png"
          />
          <span className="logo-text">ASEAN Youth Organization</span>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Cari" className="search-input" />
          <button className="search-button">Search</button>
        </div>
      </div>
      <div className="navbar-items">
        <Nav.Item className="navbar-item">
          <Nav.Link href="#beranda">Beranda</Nav.Link>
        </Nav.Item>

        <Nav.Item className="navbar-item">
          <NavDropdown title="Program" id="program-dropdown">
            <NavDropdown.Item href="beasiswa">Beasiwa</NavDropdown.Item>
            <NavDropdown.Item href="donasi">Donasi</NavDropdown.Item>
          </NavDropdown>
        </Nav.Item>

        <Nav.Item className="navbar-item">
        <NavDropdown title="Forum" id="program-dropdown">
          <Nav.Link href="forum-beasiswa1">Forum Beasiswa1</Nav.Link>
          <Nav.Link href="forum-beasiswa2">Forum Beasiswa2</Nav.Link>
          <Nav.Link href="forum-beasiswa3">Forum Beasiswa3</Nav.Link>
          <Nav.Link href="forum-donasi">Forum Donasi</Nav.Link>
          </NavDropdown>
        </Nav.Item>

        <Nav.Item className="navbar-item">
          <Nav.Link href="#tentang-kami">Tentang Kami</Nav.Link>
        </Nav.Item>
      </div>
      <div className="navbar-profile">
        <img
          src={skilvulLogo} 
          className="profile-image"
          alt="Profile"
        />
      </div>
    </Nav>
  );
};

export default Navbar;
