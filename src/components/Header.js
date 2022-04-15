import React from 'react'

export default function Header() {
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
        </>
    )
}
