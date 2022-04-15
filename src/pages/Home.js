import React from 'react'

export default function Home() {
    return (

        <>
            {/* Header */}
            <header id="header">
                {/* Navbar */}
                <nav
                    data-aos="zoom-out"
                    data-aos-delay={800}
                    className="navbar navbar-expand"
                >
                    <div className="container header">
                        {/* Navbar Brand*/}
                        <a className="navbar-brand" href="index.htm">
                            Leverage<i className="version-number">2.1</i>
                            {/* 
                  Custom Logo
                  <img src="assets/images/logo.svg" alt="Leverage">
              */}
                        </a>
                        {/* Nav holder */}
                        <div className="ml-auto" />
                        {/* Navbar Items */}
                        <ul className="navbar-nav items">
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">
                                    Home <i className="icon-arrow-down" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="#">
                                            Multi-Page <i className="icon-arrow-right" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item dropdown">
                                                <a className="nav-link" href="#">
                                                    Agency <i className="icon-arrow-right" />
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="home-1.html" className="nav-link">
                                                            Demo 1
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-2.html" className="nav-link">
                                                            Demo 2
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-3.html" className="nav-link">
                                                            Demo 3
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-4.html" className="nav-link">
                                                            Demo 4
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-5.html" className="nav-link">
                                                            Demo 5
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-6.html" className="nav-link">
                                                            Demo 6
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-7.html" className="nav-link">
                                                            Demo 7
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-8.html" className="nav-link">
                                                            Demo 8
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-9.html" className="nav-link">
                                                            Demo 9
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-10.html" className="nav-link">
                                                            Demo 10
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link" href="#">
                                                    Portfolio <i className="icon-arrow-right" />
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="home-11.html" className="nav-link">
                                                            Demo 11
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-12.html" className="nav-link">
                                                            Demo 12
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-13.html" className="nav-link">
                                                            Demo 13
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-14.html" className="nav-link">
                                                            Demo 14
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-15.html" className="nav-link">
                                                            Demo 15
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-16.html" className="nav-link">
                                                            Demo 16
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-17.html" className="nav-link">
                                                            Demo 17
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-18.html" className="nav-link">
                                                            Demo 18
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-19.html" className="nav-link">
                                                            Demo 19
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-20.html" className="nav-link">
                                                            Demo 20
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="#">
                                            One-Page <i className="icon-arrow-right" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item dropdown">
                                                <a className="nav-link" href="#">
                                                    Agency <i className="icon-arrow-right" />
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="home-1-one-page.html" className="nav-link">
                                                            Demo 1
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-2-one-page.html" className="nav-link">
                                                            Demo 2
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-3-one-page.html" className="nav-link">
                                                            Demo 3
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-4-one-page.html" className="nav-link">
                                                            Demo 4
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-5-one-page.html" className="nav-link">
                                                            Demo 5
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-6-one-page.html" className="nav-link">
                                                            Demo 6
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-7-one-page.html" className="nav-link">
                                                            Demo 7
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-8-one-page.html" className="nav-link">
                                                            Demo 8
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-9-one-page.html" className="nav-link">
                                                            Demo 9
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-10-one-page.html" className="nav-link">
                                                            Demo 10
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link" href="#">
                                                    Portfolio <i className="icon-arrow-right" />
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <a href="home-11-one-page.html" className="nav-link">
                                                            Demo 11
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-12-one-page.html" className="nav-link">
                                                            Demo 12
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-13-one-page.html" className="nav-link">
                                                            Demo 13
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-14-one-page.html" className="nav-link">
                                                            Demo 14
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-15-one-page.html" className="nav-link">
                                                            Demo 15
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-16-one-page.html" className="nav-link">
                                                            Demo 16
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-17-one-page.html" className="nav-link">
                                                            Demo 17
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-18-one-page.html" className="nav-link">
                                                            Demo 18
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-19-one-page.html" className="nav-link">
                                                            Demo 19
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="home-20-one-page.html" className="nav-link">
                                                            Demo 20
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">
                                    Pages <i className="icon-arrow-down" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="#">
                                            About
                                            <i className="icon-arrow-right" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="page-about-1.html" className="nav-link">
                                                    About 1
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="page-about-2.html" className="nav-link">
                                                    About 2
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="page-services-1.html" className="nav-link">
                                            Services
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="page-single-service-1.html" className="nav-link">
                                            Single Service
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="#">
                                            Portfolio
                                            <i className="icon-arrow-right" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="page-portfolio-1.html" className="nav-link">
                                                    Portfolio 1
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="page-portfolio-2.html" className="nav-link">
                                                    Portfolio 2
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="#">
                                            Single Portfolio
                                            <i className="icon-arrow-right" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="page-single-portfolio-1.html" className="nav-link">
                                                    Single Portfolio 1
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="page-single-portfolio-2.html" className="nav-link">
                                                    Single Portfolio 2
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="page-pricing-1.html" className="nav-link">
                                            Pricing
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="page-contact-1.html" className="nav-link">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">
                                    Blog <i className="icon-arrow-down" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="#">
                                            Blog Posts
                                            <i className="icon-arrow-right" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="page-blog-1.html" className="nav-link">
                                                    Blog Posts 1
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="page-blog-2.html" className="nav-link">
                                                    Blog Posts 2
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="page-blog-3.html" className="nav-link">
                                                    Blog Posts 3
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="page-blog-4.html" className="nav-link">
                                                    Blog Posts 4
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="#">
                                            Single Post
                                            <i className="icon-arrow-right" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="page-single-post-1.html" className="nav-link">
                                                    Single Post 1
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="page-single-post-2.html" className="nav-link">
                                                    Single Post 2
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="page-single-post-3.html" className="nav-link">
                                                    Single Post 3
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="page-single-post-4.html" className="nav-link">
                                                    Single Post 4
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">
                                    Extra <i className="icon-arrow-down" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item">
                                        <a href="extra-preloader.html" className="nav-link">
                                            Preloader
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link" href="#">
                                            Navbar
                                            <i className="icon-arrow-right" />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="extra-navbar-relative.html" className="nav-link">
                                                    Relative
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="extra-navbar-flexible.html" className="nav-link">
                                                    Flexible
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="extra-navbar-fixed.html" className="nav-link">
                                                    Fixed
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/* Navbar Icons */}
                        <ul className="navbar-nav icons">
                            <li className="nav-item">
                                <a
                                    href="#"
                                    className="nav-link"
                                    data-toggle="modal"
                                    data-target="#search"
                                >
                                    <i className="icon-magnifier" />
                                </a>
                            </li>
                            <li className="nav-item social">
                                <a href="#" className="nav-link">
                                    <i className="icon-social-twitter" />
                                </a>
                            </li>
                            <li className="nav-item social">
                                <a href="#" className="nav-link">
                                    <i className="icon-social-instagram" />
                                </a>
                            </li>
                        </ul>
                        {/* Navbar Toggle */}
                        <ul className="navbar-nav toggle">
                            <li className="nav-item">
                                <a
                                    href="#"
                                    className="nav-link"
                                    data-toggle="modal"
                                    data-target="#menu"
                                >
                                    <i className="icon-menu m-0" />
                                </a>
                            </li>
                        </ul>
                        {/* Navbar Action */}
                        <ul className="navbar-nav action">
                            <li className="nav-item ml-3">
                                <a
                                    href="https://themeforest.net/item/leverage-creative-agency-corporate-and-startups-multipurpose-template/25988106"
                                    target="_blank"
                                    className="btn ml-lg-auto primary-button"
                                >
                                    <i className="icon-rocket" />
                                    BUY NOW
                                </a>
                                {/* 
                      Suggestion: Replace the purchase button above with a contact button.
                      
                      <a href="#contact" class="smooth-anchor btn ml-lg-auto primary-button"><i class="icon-rocket"></i>CONTACT US</a>
                  */}
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            {/* Hero */}
            <section id="slider" className="hero odd p-0 featured">
                <div className="swiper-container no-slider animation slider-h-100">
                    <div className="swiper-wrapper">
                        {/* Item 1 */}
                        <div className="swiper-slide slide-center">
                            {/* Particles */}
                            <div
                                id="particles-1"
                                className="particles full-image"
                                data-particle="bubble"
                                data-mask={70}
                            />
                            <div className="slide-content row">
                                <div className="col-12 d-flex inner">
                                    <div className="center align-self-center text-center">
                                        <h1
                                            data-aos="zoom-out-up"
                                            data-aos-delay={400}
                                            className="title effect-static-text"
                                        >
                                            # A Different
                                            <br />
                                            Digital Agency
                                        </h1>
                                        <p
                                            data-aos="zoom-out-up"
                                            data-aos-delay={800}
                                            className="description ml-auto mr-auto"
                                        >
                                            We work with a focus on creativity, combining design and
                                            results.
                                        </p>
                                        <a
                                            href="#contact"
                                            data-aos="zoom-out-up"
                                            data-aos-delay={1200}
                                            className="smooth-anchor ml-auto mr-auto mt-5 btn primary-button"
                                        >
                                            <i className="icon-cup" />
                                            GET STARTED
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </section>
            {/* Skills */}
            <section id="skills" className="section-1 counter skills">
                <div className="container">
                    <div className="row text-center intro">
                        <div className="col-12">
                            <h2 className="super effect-static-text">Main Skills</h2>
                            <p className="text-max-800">
                                We see all types of projects as if they were ours. This brings us
                                closer to our clients' projects bringing much more confidence and
                                commitment.
                            </p>
                        </div>
                    </div>
                    <div
                        data-aos-id="counter"
                        data-aos="fade-up"
                        data-aos-delay={200}
                        className="row justify-content-center text-center items"
                    >
                        <div className="col-12 col-md-6 col-lg-3 item">
                            <div data-percent={42} className="radial">
                                <span />
                            </div>
                            <h4>Marketing</h4>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item">
                            <div data-percent={60} className="radial">
                                <span />
                            </div>
                            <h4>Branding</h4>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item">
                            <div data-percent={84} className="radial">
                                <span />
                            </div>
                            <h4>Web Design</h4>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 item">
                            <div data-percent={100} className="radial">
                                <span />
                            </div>
                            <h4>WordPress</h4>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services */}
            <section id="services" className="section-2 odd offers featured custom">
                <div className="container">
                    <div className="row intro">
                        <div className="col-12 col-md-9 align-self-center text-center text-md-left">
                            <h2 className="super effect-static-text">Our Services</h2>
                            <p>Focused on results we seek to raise the level of our customers.</p>
                        </div>
                        <div className="col-12 col-md-3 align-self-end">
                            <a href="#" className="btn mx-auto mr-md-0 ml-md-auto primary-button">
                                <i className="icon-grid" />
                                VIEW ALL
                            </a>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center items">
                        <div className="col-12 col-md-6 col-lg-4 item">
                            <div className="card featured">
                                <i className="icon icon-globe" />
                                <h4>Website Pro</h4>
                                <p>
                                    We build professional responsive websites optimized for the most
                                    popular search engines.
                                </p>
                                <a href="page-single-service-1.html">
                                    <i className="btn-icon icon-arrow-right-circle" />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 item">
                            <div className="card">
                                <i className="icon icon-basket" />
                                <h4>E-Commerce</h4>
                                <p>
                                    Increase your sales with an incredible online store, full of
                                    features and functionality.
                                </p>
                                <a href="page-single-service-1.html">
                                    <i className="btn-icon icon-arrow-right-circle" />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 item">
                            <div className="card">
                                <i className="icon icon-screen-smartphone" />
                                <h4>Mobile Apps</h4>
                                <p>
                                    Follow the global trend and create your revolutionary mobile app
                                    built with the best technologies.
                                </p>
                                <a href="page-single-service-1.html">
                                    <i className="btn-icon icon-arrow-right-circle" />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 item">
                            <div className="card">
                                <i className="icon icon-layers" />
                                <h4>Web Application</h4>
                                <p>
                                    We build applications for different purposes using technologies
                                    that allow you more security.
                                </p>
                                <a href="page-single-service-1.html">
                                    <i className="btn-icon icon-arrow-right-circle" />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 item">
                            <div className="card">
                                <i className="icon icon-chart" />
                                <h4>Digital Marketing</h4>
                                <p>
                                    We work to promote your brand in partnership with the best
                                    marketing platforms today.
                                </p>
                                <a href="page-single-service-1.html">
                                    <i className="btn-icon icon-arrow-right-circle" />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 item">
                            <div className="card featured">
                                <i className="icon icon-bulb" />
                                <h4>Brand Creation</h4>
                                <p>
                                    We create your brand thinking about your target audience using
                                    design techniques.
                                </p>
                                <a href="page-single-service-1.html">
                                    <i className="btn-icon icon-arrow-right-circle" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Get */}
            <section id="get" className="section-3 hero odd p-0">
                <div className="swiper-container no-slider animation slider-h-75">
                    <div className="swiper-wrapper">
                        {/* Item 1 */}
                        <div className="swiper-slide slide-center">
                            <video
                                className="full-image"
                                data-mask={90}
                                playsInline=""
                                autoPlay=""
                                muted=""
                                loop=""
                            >
                                <source src="assets/videos/project.mp4" type="video/mp4" />
                            </video>
                            {/* 
                  Suggestion: Add a video to your assets folder and configure it here.

                  <video type="video/mp4" class="full-image" data-mask="70" src="assets/videos/yourvideo.mp4" autoplay muted loop></video> 
              */}
                            <div className="slide-content row">
                                <div className="col-12 d-flex inner">
                                    <div className="center align-self-center text-center">
                                        <h2
                                            data-aos="zoom-out-up"
                                            data-aos-delay={400}
                                            className="title effect-static-text"
                                        >
                                            ARE YOU READY?
                                        </h2>
                                        <p
                                            data-aos="zoom-out-up"
                                            data-aos-delay={800}
                                            className="description ml-auto mr-auto"
                                        >
                                            We are driven by creativity. We create innovative things to
                                            help you achieve better results and consolidate yourself in
                                            the market.
                                        </p>
                                        <a
                                            href="#contact"
                                            data-aos="zoom-out-up"
                                            data-aos-delay={1200}
                                            className="smooth-anchor ml-auto mr-auto mt-5 btn primary-button"
                                        >
                                            <i className="icon-rocket" />
                                            CONTACT US
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </section>
            {/* Team */}
            <section id="team" className="section-4 carousel featured card-white">
                <div className="overflow-holder">
                    <div className="container">
                        <div className="row text-center intro">
                            <div className="col-12">
                                <h2 className="super effect-static-text">Team of Experts</h2>
                                <p className="text-max-800">
                                    Our team will help you define a stand-out creative direction and
                                    will translate it into visual assets that will resonate with your
                                    audience.
                                </p>
                            </div>
                        </div>
                        <div className="swiper-container mid-slider-simple items">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide slide-center text-center item">
                                    <div className="row card">
                                        <div className="col-12">
                                            <img
                                                src="assets/images/team-1.jpg"
                                                alt="Adams Baker"
                                                className="person"
                                            />
                                            <h4>Adams Baker</h4>
                                            <p>CEO / CO-FOUNDER</p>
                                            <ul className="navbar-nav social share-list ml-auto">
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-instagram" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-facebook" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-linkedin" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-twitter" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide slide-center text-center item">
                                    <div className="row card">
                                        <div className="col-12">
                                            <img
                                                src="assets/images/team-2.jpg"
                                                alt="Mary Evans"
                                                className="person"
                                            />
                                            <h4>Mary Evans</h4>
                                            <p>CONTROLLING / FOUNDER</p>
                                            <ul className="navbar-nav social share-list ml-auto">
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-instagram" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-facebook" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-linkedin" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-twitter" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide slide-center text-center item">
                                    <div className="row card">
                                        <div className="col-12">
                                            <img
                                                src="assets/images/team-3.jpg"
                                                alt="Sarah Lopez"
                                                className="person"
                                            />
                                            <h4>Sarah Lopez</h4>
                                            <p>HUMAN RESOURCES</p>
                                            <ul className="navbar-nav social share-list ml-auto">
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-instagram" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-facebook" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-linkedin" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-twitter" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide slide-center text-center item">
                                    <div className="row card">
                                        <div className="col-12">
                                            <img
                                                src="assets/images/team-4.jpg"
                                                alt="Joseph Hills"
                                                className="person"
                                            />
                                            <h4>Joseph Hills</h4>
                                            <p>CFO / CHIEF FINANCIAL</p>
                                            <ul className="navbar-nav social share-list ml-auto">
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-instagram" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-facebook" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-linkedin" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-twitter" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide slide-center text-center item">
                                    <div className="row card">
                                        <div className="col-12">
                                            <img
                                                src="assets/images/team-5.jpg"
                                                alt="Karen Usman"
                                                className="person"
                                            />
                                            <h4>Karen Usman</h4>
                                            <p>CTO / CHIEF MARKETING</p>
                                            <ul className="navbar-nav social share-list ml-auto">
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-instagram" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-facebook" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-linkedin" />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="icon-social-twitter" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Subscribe */}
            <section id="subscribe" className="section-5 subscribe">
                <div className="container smaller">
                    <div className="row text-center intro">
                        <div className="col-12">
                            <h2 className="super effect-static-text">Newsletter</h2>
                            <p className="text-max-800">
                                Subscribe to our newsletter and follow our content closely. Receive
                                news based on what has to do with you. We promise not to send
                                promotions you don't like.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 p-0">
                            <form
                                action="php/form.php"
                                id="leverage-subscribe"
                                className="row m-auto items"
                            >
                                <input
                                    type="hidden"
                                    name="section"
                                    defaultValue="leverage_subscribe"
                                />
                                <input type="hidden" name="reCAPTCHA" />
                                {/* Remove this field if you want to disable recaptcha */}
                                <div className="col-12 col-lg-5 m-lg-0 input-group align-self-center item">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control field-name"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="col-12 col-lg-5 m-lg-0 input-group align-self-center item">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control field-email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="col-12 col-lg-2 m-lg-0 input-group align-self-center item">
                                    <a className="btn primary-button w-100">SUBSCRIBE</a>
                                </div>
                                <div className="col-12 text-center">
                                    <span className="form-alert mt-5 mb-0" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact */}
            <section id="contact" className="section-6 odd form featured">
                <div className="container">
                    <form
                        action="php/form.php"
                        id="leverage-form"
                        className="multi-step-form"
                    >
                        <input type="hidden" name="section" defaultValue="leverage_form" />
                        <input type="hidden" name="reCAPTCHA" />
                        {/* Remove this field if you want to disable recaptcha */}
                        <div className="row">
                            <div className="col-12 col-md-6 align-self-start text-center text-md-left">
                                {/* Success Message */}
                                <div className="row success message">
                                    <div className="col-12 p-0">
                                        <div className="wait">
                                            <div className="spinner-grow" role="status">
                                                <span className="sr-only">Loading</span>
                                            </div>
                                            <h3 className="sending">SENDING</h3>
                                        </div>
                                        <div className="done">
                                            <i className="icon bigger icon-check" />
                                            <h3>Your message was sent successful. Thanks.</h3>
                                            <a href="" className="btn mx-auto primary-button">
                                                <i className="icon-refresh" />
                                                REFRESH
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* Steps Message */}
                                <div className="row intro form-content">
                                    <div className="col-12 p-0">
                                        {/* Step Title */}
                                        <div className="step-title">
                                            <h2 className="super effect-static-text">Let's Talk?</h2>
                                            <p>
                                                Don't wait until tomorrow. Talk to one of our consultants
                                                today and learn how to start leveraging your business.
                                            </p>
                                        </div>
                                        {/* Step Title */}
                                        <div className="step-title">
                                            <h2 className="super effect-static-text">Almost There</h2>
                                            <p>
                                                We need some more important information to better understand
                                                how we can help you in the best possible way.
                                            </p>
                                        </div>
                                        {/* Step Title */}
                                        <div className="step-title">
                                            <h2 className="super effect-static-text">Are you Ready?</h2>
                                            <p>
                                                Tell us a little about the project you need to create. This
                                                is valuable so that we can direct you to the ideal team.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Steps Group */}
                                <div className="row text-center form-content">
                                    <div className="col-12 p-0">
                                        <ul className="progressbar">
                                            <li>Personal Details</li>
                                            <li>Company Budget</li>
                                            <li>Service Setup</li>
                                        </ul>
                                        {/* Group 1 */}
                                        <fieldset className="step-group">
                                            <div className="row">
                                                <div className="col-12 input-group p-0">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        data-minlength={3}
                                                        className="form-control field-email"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 input-group p-0">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        data-minlength={3}
                                                        className="form-control field-name"
                                                        placeholder="Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 input-group p-0">
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        data-minlength={3}
                                                        className="form-control field-phone"
                                                        placeholder="Phone"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 input-group p-0">
                                                <a className="step-next btn primary-button">
                                                    NEXT
                                                    <i className="icon-arrow-right-circle left" />
                                                </a>
                                            </div>
                                        </fieldset>
                                        {/* Group 2 */}
                                        <fieldset className="step-group">
                                            <div className="row">
                                                <div className="col-12 input-group p-0">
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        data-minlength={3}
                                                        className="form-control field-company"
                                                        placeholder="Company"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 input-group p-0">
                                                    <input
                                                        type="text"
                                                        name="manager"
                                                        data-minlength={3}
                                                        className="form-control field-manager"
                                                        placeholder="Manager"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 input-group p-0">
                                                    <i className="icon-arrow-down" />
                                                    <select
                                                        name="budget"
                                                        data-minlength={1}
                                                        className="form-control field-budget"
                                                    >
                                                        <option value="" selected="" disabled="">
                                                            What's your budget range?
                                                        </option>
                                                        <option>Less than $2.000</option>
                                                        <option>$2.000 — $5.000</option>
                                                        <option>$5.000 — $10.000</option>
                                                        <option>$10,000+</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 input-group p-0 d-flex justify-content-between justify-content-md-start">
                                                <a className="step-prev btn primary-button mr-4">
                                                    <i className="icon-arrow-left-circle" />
                                                    PREV
                                                </a>
                                                <a className="step-next btn primary-button">
                                                    NEXT
                                                    <i className="icon-arrow-right-circle left" />
                                                </a>
                                            </div>
                                        </fieldset>
                                        {/* Group 3 */}
                                        <fieldset className="step-group">
                                            <div className="row">
                                                <div className="col-12 input-group p-0">
                                                    <textarea
                                                        name="message"
                                                        data-minlength={3}
                                                        className="form-control field-message"
                                                        placeholder="Message"
                                                        required=""
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 input-group p-0 d-flex justify-content-between justify-content-md-start">
                                                <a className="step-prev btn primary-button mr-4">
                                                    <i className="icon-arrow-left-circle" />
                                                    PREV
                                                </a>
                                                <a className="step-next btn primary-button">
                                                    SEND
                                                    <i className="icon-arrow-right-circle left" />
                                                </a>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            <div className="content-images col-12 col-md-6 pl-md-5 d-none d-md-block">
                                {/* Step 1 */}
                                <div className="gallery">
                                    <a
                                        className="step-image"
                                        data-poster="assets/images/about-8.jpg"
                                        href="https://www.youtube.com/watch?v=7e90gBu4pas"
                                    >
                                        <i className="play-video icon-control-play" />
                                        <div className="mask-radius" />
                                        <img
                                            src="assets/images/about-8.jpg"
                                            className="fit-image"
                                            alt="Contact Us"
                                        />
                                    </a>
                                </div>
                                {/* Step 2 */}
                                <div className="gallery">
                                    <a className="step-image" href="assets/images/about-6.jpg">
                                        <img
                                            src="assets/images/about-6.jpg"
                                            className="fit-image"
                                            alt="Contact Us"
                                        />
                                    </a>
                                </div>
                                {/* Step 3 */}
                                <div className="gallery">
                                    <a className="step-image" href="assets/images/about-7.jpg">
                                        <img
                                            src="assets/images/about-7.jpg"
                                            className="fit-image"
                                            alt="Contact Us"
                                        />
                                    </a>
                                </div>
                                {/* Step 4 */}
                                <div className="gallery">
                                    <a className="step-image" href="assets/images/about-leverage.jpg">
                                        <img
                                            src="assets/images/about-leverage.jpg"
                                            className="fit-image"
                                            alt="Contact Us"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            {/* Footer */}
            <footer className="odd">
                {/* Footer [links] */}
                <section id="footer" className="footer">
                    <div className="container">
                        <div className="row items footer-widget">
                            <div className="col-12 col-lg-3 p-0">
                                <div className="row">
                                    <div className="branding col-12 p-3 text-center text-lg-left item">
                                        <div className="brand">
                                            <a href="index.htm" className="logo">
                                                Leverage.
                                                {/* 
                                      Custom Logo
                                      <img src="assets/images/logo.svg" alt="Leverage">
                                  */}
                                            </a>
                                        </div>
                                        <p>
                                            Authentic and innovative.
                                            <br />
                                            Built to the smallest detail
                                            <br />
                                            with a focus on usability
                                            <br />
                                            and performance.
                                        </p>
                                        <ul className="navbar-nav social share-list mt-0 ml-auto">
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="icon-social-instagram ml-0" />
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="icon-social-facebook" />
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="icon-social-linkedin" />
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="icon-social-twitter" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-9 p-0">
                                <div className="row">
                                    <div className="col-12 col-lg-4 p-3 text-center text-lg-left item">
                                        <h4 className="title">Get in Touch</h4>
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="icon-phone mr-2" />
                                                    +1 123 98765 4321
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="icon-envelope mr-2" />
                                                    <span
                                                        className="__cf_email__"
                                                        data-cfemail="7f171a1313103f1d0a0c16111a0c0c511c1012"
                                                    >
                                                        [email&nbsp;protected]
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i className="icon-location-pin mr-2" />
                                                    Office Street, 123
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    href="#contact"
                                                    className="mt-4 mr-auto ml-auto ml-lg-0 btn dark-button smooth-anchor"
                                                >
                                                    <i className="icon-speech" />
                                                    SEND A MESSAGE
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-lg-4 p-3 text-center text-lg-left item">
                                        <h4 className="title">Our Services</h4>
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    Website Development
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    Building Applications
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    SEO &amp; Digital Marketing
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    Branding and Identity
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    Digital Images &amp; Videos
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-12 col-lg-4 p-3 text-center text-lg-left item">
                                        <h4 className="title">Popular Tags</h4>
                                        <a href="#" className="badge tag">
                                            Mobile
                                        </a>
                                        <a href="#" className="badge tag">
                                            Development
                                        </a>
                                        <a href="#" className="badge tag">
                                            Technology
                                        </a>
                                        <a href="#" className="badge tag">
                                            App
                                        </a>
                                        <a href="#" className="badge tag">
                                            Education
                                        </a>
                                        <a href="#" className="badge tag">
                                            Business
                                        </a>
                                        <a href="#" className="badge tag">
                                            Health
                                        </a>
                                        <a href="#" className="badge tag">
                                            Industry
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Copyright */}
                <section id="copyright" className="p-3 copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 p-3 text-center text-lg-left">
                                <p>Enjoy the low price. We are tracking any intention of piracy.</p>
                                {/*
                      Suggestion: Replace the text above with a description of your website.
                   */}
                            </div>
                            <div className="col-12 col-md-6 p-3 text-center text-lg-right">
                                <p>
                                    © 2021 Leverage is Proudly Powered by{" "}
                                    <a href="https://codings.dev" target="_blank">
                                        Codings
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
            {/* #region Global ============================ */}
            {/* Modal [search] */}
            <div
                id="search"
                className="p-0 modal fade"
                role="dialog"
                aria-labelledby="search"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-slideout" role="document">
                    <div className="modal-content full">
                        <div className="modal-header" data-dismiss="modal">
                            Search <i className="icon-close" />
                        </div>
                        <div className="modal-body">
                            <form className="row">
                                <div className="col-12 p-0 align-self-center">
                                    <div className="row">
                                        <div className="col-12 p-0 pb-3">
                                            <h2>What are you looking for?</h2>
                                            <p>
                                                Search for services and news about the best that happens in
                                                the world.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 p-0 input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Keywords"
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 p-0 input-group align-self-center">
                                            <button className="btn primary-button">
                                                <i className="icon-magnifier" />
                                                SEARCH
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal [sign] */}
            <div
                id="sign"
                className="p-0 modal fade"
                role="dialog"
                aria-labelledby="sign"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-slideout" role="document">
                    <div className="modal-content full">
                        <div className="modal-header" data-dismiss="modal">
                            Sign In Form <i className="icon-close" />
                        </div>
                        <div className="modal-body">
                            <form action="/" className="row">
                                <div className="col-12 p-0 align-self-center">
                                    <div className="row">
                                        <div className="col-12 p-0 pb-3">
                                            <h2>Sign In</h2>
                                            <p>
                                                Don't have an account?{" "}
                                                <a
                                                    href="#"
                                                    className="primary-color"
                                                    data-toggle="modal"
                                                    data-target="#register"
                                                >
                                                    Register now
                                                </a>
                                                .
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 p-0 input-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-12 p-0 input-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 p-0 input-group align-self-center">
                                            <button className="btn primary-button">
                                                <i className="icon-login" />
                                                LOGIN
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal [register] */}
            <div
                id="register"
                className="p-0 modal fade"
                role="dialog"
                aria-labelledby="register"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-slideout" role="document">
                    <div className="modal-content full">
                        <div className="modal-header" data-dismiss="modal">
                            Register Form <i className="icon-close" />
                        </div>
                        <div className="modal-body">
                            <form action="/" className="row">
                                <div className="col-12 p-0 align-self-center">
                                    <div className="row">
                                        <div className="col-12 p-0 pb-3">
                                            <h2>Register</h2>
                                            <p>
                                                Have an account?{" "}
                                                <a
                                                    href="#"
                                                    className="primary-color"
                                                    data-toggle="modal"
                                                    data-target="#sign"
                                                >
                                                    Sign In
                                                </a>
                                                .
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 p-0 input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-12 p-0 input-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-12 p-0 input-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-12 p-0 input-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Confirm Password"
                                                required=""
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 p-0 input-group align-self-center">
                                            <button className="btn primary-button">
                                                <i className="icon-rocket" />
                                                REGISTER
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal [responsive menu] */}
            <div
                id="menu"
                className="p-0 modal fade"
                role="dialog"
                aria-labelledby="menu"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-slideout" role="document">
                    <div className="modal-content full">
                        <div className="modal-header" data-dismiss="modal">
                            Menu <i className="icon-close" />
                        </div>
                        <div className="menu modal-body">
                            <div className="row w-100">
                                <div className="items p-0 col-12 text-center">
                                    {/* Append [navbar] */}
                                </div>
                                <div className="contacts p-0 col-12 text-center">
                                    {/* Append [navbar] */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Scroll [to top] */}
            <div id="scroll-to-top" className="scroll-to-top">
                <a href="#header" className="smooth-anchor">
                    <i className="icon-arrow-up" />
                </a>
            </div>
        </>
    )
}
