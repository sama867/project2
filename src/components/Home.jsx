import React from "react";
import "../home.css"
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import img2 from "./assets/security (1).png";
import img3 from "./assets/defensive-wall.png";
import img4 from "./assets/customer-service.png";
import img1 from "./assets/imgg.png";
import img5 from"./assets/cctv-camera.png";
import img6 from"./assets/video-calling.png";
import img7 from"./assets/server.png";
import img8 from"./assets/home.png";
import img9 from"./assets/security-camera.png";
import img10 from"./assets/fingerprint-scan.png";
import img11 from"./assets/security-camera.png";
import img12 from"./assets/burglar-alarm.png";
import img13 from"./assets/security-camera.png";
import img14 from"./assets/support.png";
import img15 from"./assets/security-camera.png";
import img16 from"./assets/security-camera.png";

const Home = () => {
    const projects = [
        {
          title: 'Smart Surveillance',
          category: 'Security System',
          image: 'img/innovation-1.jpg',
          description: 'Advanced security systems with AI detection.',
        },
        {
          title: 'Access Control Solutions',
          category: 'Control Systems',
          image: 'img/innovation-2.jpg',
          description: 'Next-gen access management for safe environments.',
        },
        {
          title: 'Fire Safety Systems',
          category: 'Safety Solutions',
          image: 'img/innovation-3.jpg',
          description: 'Real-time fire detection with emergency response.',
        },
        {
          title: 'Home Automation',
          category: 'Smart Home',
          image: 'img/innovation-4.jpg',
          description: 'Control your home systems from anywhere with ease.',
        },
        {
          title: 'Cloud Security Integration',
          category: 'Cloud Solutions',
          image: 'img/innovation-5.jpg',
          description: 'Seamless cloud integration for better scalability.',
        },
        {
          title: 'Video Analytics Systems',
          category: 'Analytics',
          image: 'img/innovation-6.jpg',
          description: 'AI-powered video analytics for enhanced security.',
        },
      ];

      const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        service: '',
        specialNote: '',
      });
  
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
  
      const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log(formData);
      };


    return (

        <>
            {/* // carousel */}
            <div id="carouselExampleDark">
                <Carousel variant="dark">
                    <Carousel.Item >
                        <img
                            src="https://www.shutterstock.com/image-photo/ip-wifi-wireless-cctv-support-260nw-2191503731.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <Carousel.Caption className="carousel-caption-center text-light">
                            <br></br><br></br><br></br><br></br>
                            <h3>Security Solution For You </h3>
                            <p>Expert Security Solutions for Your Systems
                                We offer advanced security services to protect your systems from vulnerabilities and cyber threats. Trust us to keep your data and assets safe with the latest technology</p>
                            <a href="" class="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                            <a href="" class="btn btn-light rounded-pill py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item >
                        <img
                            src="https://me.kaspersky.com/content/ar-ae/images/repository/isc/2020/cyber-security-article.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <Carousel.Caption className="carousel-caption-center text-light">
                            <br></br><br></br><br></br><br></br>
                            <h4>Smart Security Solution For All Business</h4>
                            <p>Secure your business with our advanced, AI-driven security systems. Equipped with smart cameras, remote monitoring, and automated alerts, our solutions provide 24/7 protection. Tailor your security system to meet your specific needs and safeguard your employees, assets, and property at all times."

                                Let me know if you need any further changes!</p>

                            <a href="" class="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                            <a href="" class="btn btn-light rounded-pill py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            src="https://techsecuritypro.com/wp-content/uploads/2024/08/what-is-cybersecurity.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <Carousel.Caption className="carousel-caption-center text-light">
                            <br></br><br></br><br></br><br></br>
                            <h4>Innovative Solution For Security System</h4>
                            <p>Revolutionary Security Solutions for the Future
                                Step into the future of security with our groundbreaking solutions.
                                By integrating cutting-edge technologies like facial recognition, motion detection, and real-time analytics, we offer intelligent, adaptive systems that grow with your needs. Rely on a security system that ensures exceptional reliability, efficiency, and peace of mind.</p>

                            <a href="" class="btn btn-primary rounded-pill py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                            <a href="" class="btn btn-light rounded-pill py-md-3 px-md-5 animated slideInRight">Free Quote</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* // About */}



            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        {/* Card 1 */}
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100 bg-gradient p-4 p-xl-5 shadow-lg rounded-3 transition-all duration-300 hover:scale-105 hover:bg-primary">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <img className="img-fluid" src={img2} style={{ width: "64px", height: "64px" }} alt="Icon" />
                                    <h1 className="display-1 mb-0" style={{ color: "#000000" }}>01</h1>
                                </div>
                                <h5 >Home</h5>
                                <hr />

                                <span >
                                    Safeguard your home with state-of-the-art security solutions, featuring surveillance cameras, alarm systems, and smart technology to provide you with ultimate peace of mind.
                                </span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div className="h-100 bg-gradient p-4 p-xl-5 shadow-lg rounded-3 transition-all duration-300 hover:scale-105 hover:bg-success">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <img className="img-fluid" src={img3} style={{ width: "64px", height: "64px" }} alt="Icon" />
                                    <h1 className="display-1 mb-0" style={{ color: "#000000" }}>02</h1>
                                </div>
                                <h5 >Firewall Protection</h5>
                                <hr />
                                <span >
                                    Shield your network from unauthorized access with our cutting-edge firewall protection solutions.
                                </span>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div className="h-100 bg-gradient p-4 p-xl-5 shadow-lg rounded-3 transition-all duration-300 hover:scale-105 hover:bg-danger">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <img className="img-fluid" src={img4} style={{ width: "64px", height: "64px" }} alt="Icon" />
                                    <h1 className="display-1 mb-0" style={{ color: "#000000" }}>03</h1>
                                </div>
                                <h5 >24/7 Support</h5>
                                <hr />
                                <span >
                                    Our expert team provides round-the-clock support, ensuring continuous monitoring of your security systems and swift resolution of any issues.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* about us */}
            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
                <div className="container about px-lg-0">
                    <div className="row g-0 mx-lg-0">


                        <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                            <div className="p-lg-5 pe-lg-0">
                                <div className="bg-primary mb-3" style={{ width: '60px', height: '2px' }}></div>
                                <h1 className="display-5 mb-4">About Us</h1>
                                <p className="mb-4 pb-2">
                                    We specialize in delivering high-quality security solutions designed specifically for your needs.
                                    Our cutting-edge systems provide real-time monitoring and protection, integrating the latest technology
                                    to keep you safe. Focused on dependability and customer satisfaction, we ensure the safety of your property,
                                    assets, and loved ones at all times.
                                </p>
                            </div>
                        </div>


                        <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
                            <div className="position-relative h-100">
                                <img
                                    className="position-absolute img-fluid w-100 h-100 rounded-3"
                                    src="https://plus.unsplash.com/premium_photo-1675016457613-2291390d1bf6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D"
                                    alt="Security Solutions"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center">
                        <div className="bg-primary mb-3 mx-auto" style={{ width: '60px', height: '2px' }}></div>
                        <h1 className="display-5 mb-5">Our Services</h1>
                    </div>
                    <div className="row g-0 service-row">
                        {/* Service Item 1 */}
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                                    <img className="img-fluid" src={img9} alt="CCTV Surveillance" />
                                </div>
                                <h4 className="mb-3">CCTV Surveillance Systems</h4>
                                <p className="mb-4">State-of-the-art high-definition cameras provide continuous monitoring to enhance security, ensure safety, and deter criminal activity. Designed for reliability, these systems operate seamlessly day and night, offering peace of mind and robust protection.</p>
                                <a className="btn btn-success" href="#" style={{ borderRadius: '50%' }}>
                                    Read More
                                </a>
                            </div>
                        </div>

                        {/* Service Item 2 */}
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                                    <img className="img-fluid" src={img10} alt="Access Control" />
                                </div>
                                <h4 className="mb-3">Access Control Systems</h4>
                                <p className="mb-4">Advanced entry management solutions featuring keyless access, biometric authentication, and remote control capabilities to secure and manage restricted areas efficiently.</p>
                                <br></br><br></br><br></br>
                                <a className="btn btn-success" href="#" style={{ borderRadius: '50%' }}>
                                    Read More
                                </a>
                            </div>
                        </div>

                        {/* Service Item 3 */}
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                                    <img className="img-fluid" src={img9} alt="Alarm Systems" />
                                </div>
                                <h4 className="mb-3">Alarm Systems</h4>
                                <p className="mb-4">Sophisticated detection and notification systems designed to identify unauthorized entry and provide instant alerts, enabling a swift and effective response to potential security threats.</p>
                                <br></br><br></br><br></br><br></br>
                                <a className="btn btn-success" href="#" style={{ borderRadius: '50%' }}>
                                    Read More
                                </a>
                            </div>
                        </div>

                        {/* Service Item 4 */}
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                                    <img className="img-fluid" src={img12} alt="Remote Monitoring" />
                                </div>
                                <h4 className="mb-3">Remote Monitoring Services</h4>
                                <p className="mb-4">Round-the-clock monitoring and remote surveillance of your property to guarantee uninterrupted security</p>
                                <br></br><br></br><br></br><br></br><br></br><br></br>
                                <a className="btn btn-success" href="#" style={{ borderRadius: '50%' }}>
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 service-row">
                        {/*  Item 5 */}
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                                    <img className="img-fluid" src={img13} alt="Security Patrol" />
                                </div>
                                <h4 className="mb-3">Security Patrol Services</h4>
                                <p className="mb-4">On-site security personnel and mobile patrols for active monitoring, threat prevention, and immediate incident response</p>
                                <br></br><br></br><br></br>
                                <a className="btn btn-success" href="#" style={{ borderRadius: '50%' }}>
                                    Read More
                                </a>
                            </div>
                        </div>

                        {/* Item 6 */}
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                                    <img className="img-fluid" src={img14} alt="Fire Detection" />
                                </div>
                                <h4 className="mb-3">Fire and Smoke Detection Systems</h4>
                                <p className="mb-4">Advanced early-warning systems that detect fire, smoke, or hazardous conditions to protect people and property.</p>
                                <br></br><br></br><br></br>
                                <a className="btn btn-success" href="#" style={{ borderRadius: '50%' }}>
                                    Read More
                                </a>
                            </div>
                        </div>

                        {/*  Item 7 */}
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                                    <img className="img-fluid" src={img14} alt="Smart Home" />
                                </div>
                                <h4 className="mb-3">Smart Home/Business Integration</h4>
                                <p className="mb-4">Seamless integration of security systems with smart devices, allowing for easy control and automation from any location</p>
                                <br></br><br></br>
                                <a className="btn btn-success" href="#" style={{ borderRadius: '50%' }}>
                                    Read More
                                </a>
                            </div>
                        </div>

                        {/*  Item 8 */}
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <div className="service-item border h-100 p-5">
                                <div className="btn-square bg-light rounded-circle mb-4" style={{ width: '64px', height: '64px' }}>
                                    <img className="img-fluid" src={img13} alt="Emergency Response" />
                                </div>
                                <h4 className="mb-3">Emergency Response Services</h4>
                                <p className="mb-4">Swift-response teams prepared to manage emergencies, such as break-ins, ensuring quick resolution</p>
                                <br></br><br></br><br></br><br></br>
                                <a className="btn btn-success" href="#" style={{ borderRadius: '50%' }}>
                                    Read More
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
    {/* start project */}
            <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
            <div className="container quote px-lg-0">
                <div className="row g-0 mx-lg-0">
                    <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
                        <div className="position-relative h-100">
                            <img
                                className="position-absolute img-fluid w-100 h-100"
                                src="https://img.freepik.com/premium-photo/closeup-cctv-camera-wall_53876-184969.jpg"
                                style={{ objectFit: 'cover' }}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                        <div className="p-lg-5 pe-lg-0">
                            <div className="bg-primary mb-3" style={{ width: '60px', height: '2px' }}></div>
                            <h1 className="display-5 mb-5">Start your project</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="text"
                                            className="form-control border-0"
                                            placeholder="Your Name"
                                            style={{ height: '55px' }}
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="email"
                                            className="form-control border-0"
                                            placeholder="Your Email"
                                            style={{ height: '55px' }}
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input
                                            type="text"
                                            className="form-control border-0"
                                            placeholder="Your Mobile"
                                            style={{ height: '55px' }}
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <select
                                            className="form-select border-0"
                                            style={{ height: '55px' }}
                                            name="service"
                                            value={formData.service}
                                            onChange={handleChange}
                                        >
                                            <option value="">Select A Service</option>
                                            <option value="1">Service 1</option>
                                            <option value="2">Service 2</option>
                                            <option value="3">Service 3</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            className="form-control border-0"
                                            placeholder="Special Note"
                                            name="specialNote"
                                            value={formData.specialNote}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">
                                            Get A Free Quote
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    {/* Footer Start */}
     <div className="footerContainer container-fluid bg-dark text-secondary footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    {/* Address Section */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Address</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2 social-icons">
                            <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    {/* Services Section */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Services</h5>
                        <a className="btn btn-link" href="#">Business Security</a>
                        <a className="btn btn-link" href="#">Fire Detection</a>
                        <a className="btn btn-link" href="#">Alarm Systems</a>
                        <a className="btn btn-link" href="#">CCTV & Video</a>
                        <a className="btn btn-link" href="#">Smart Home</a>
                    </div>
                    {/* Quick Links Section */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Quick Links</h5>
                        <a className="btn btn-link" href="#">About Us</a>
                        <a className="btn btn-link" href="#">Contact Us</a>
                        <a className="btn btn-link" href="#">Our Services</a>
                        <a className="btn btn-link" href="#">Terms & Condition</a>
                        <a className="btn btn-link" href="#">Support</a>
                    </div>
                    {/* Newsletter Section */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-light mb-4">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative w-100">
                            <input className="form-control bg-transparent border-secondary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;
