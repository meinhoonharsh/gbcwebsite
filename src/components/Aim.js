import React from 'react'

export default function Aim() {
    return (
        <>
            {/* Skills */}
            <section id="skills" className="section-1 counter skills">
                <div className="container">
                    <div className="row text-center intro">
                        <div className="col-12">
                            <h2 className="super effect-static-text">Main Skills</h2>
                            <p className="text-max-800">
                                The Gigabiters is the official club of Electronics and Communication Department of UIT RGPV. Our main aim is to organize various technical workshops and events, which can be beneficial for the overall development of the students. They will be provided with an opportunity to implement what they learn in their respective classrooms. We, at Gigabiters, are fully dedicated to provide technical skills, in addition to connecting other students who have similar interests.
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

        </>
    )
}
