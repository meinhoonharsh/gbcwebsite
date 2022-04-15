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
                            Giga Biters
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
                                    Home
                                </a>

                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">
                                    Aim
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">
                                    Events
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link">
                                    Team
                                </a>
                            </li>
                        </ul>
                        {/* Navbar Icons */}
                        <ul className="navbar-nav icons">

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
                                    Join Us
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
