import React from 'react'
import Aim from '../components/Aim'
import Events from '../components/Events'
import Header from '../components/Header'
import LandingHero from '../components/LandingHero'
import Newsletter from '../components/Newsletter'
import Teams from '../components/Teams'

export default function Home() {
    return (

        <>

            <Header />
            <LandingHero />
            <Aim />


            <Events />
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

            <Teams />


            <Newsletter />


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
