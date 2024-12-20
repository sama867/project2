import React from "react";
import { Link } from "react-router-dom";
// import img1 from "./assets"
  

export default function Navbar() {
  return (
    <>
    
    <nav className="navContainer navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
            <Link to="/" className="navbar-brand d-flex align-items-center">
                <h2 className="m-0 text-primary">Sky FORT</h2>
            </Link>
            <button
                type="button"
                className="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-4 py-lg-0">
                    <Link to="/" className="nav-item nav-link">Home</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <Link to="/service" className="nav-item nav-link">Service</Link>
                    <Link to="/project" className="nav-item nav-link active">Project</Link>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </div>
                <div className="h-100 d-lg-inline-flex align-items-center d-none">
                    <a className="btn btn-square rounded-circle bg-light text-primary me-2" href="#">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-square rounded-circle bg-light text-primary me-2" href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-square rounded-circle bg-light text-primary me-2" href="#">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="btn btn-square rounded-circle bg-light text-primary me-0" href="#">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </nav>
    </>
  );
}
