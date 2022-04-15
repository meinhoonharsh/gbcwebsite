import React from 'react'

export default function LandingHero() {
    return (
        <>

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
                                            Departmental Club <br /> of ECE
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
        </>
    )
}
