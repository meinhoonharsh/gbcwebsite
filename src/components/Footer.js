import React from 'react'

export default function Footer() {
    return (
        <>

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
        </>
    )
}
