import React,{useState} from "react";
import {Link} from "react-router-dom"
import {  Container, Image} from 'react-bootstrap';
import {RiMenuFoldFill} from "react-icons/ri";
import {IoClose} from "react-icons/io5";
import logo from "../../assets/images/component/common/digital-payment-logo.png";
const Header = () => {
  const [click, setClick] = useState(false);
        return (
          <>
             <nav className="navbar">
  <Container className="container">
    <Link className="navbar-brand" to="/"><Image src={logo} className="logo_img"/></Link>
      <ul className={ click ? "nav-mobile" : "nav"} onClick={() => setClick(false)}>
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
    <button className="toggle" onClick={() => setClick(!click)}>
      {click ? <IoClose/> : <RiMenuFoldFill/>}
    </button>
  </Container>
</nav>
</>
        )}
      

export default Header
      