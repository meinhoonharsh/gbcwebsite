import React from 'react'

export default function Events() {
    return (
        <>

            {/* Services */}
            <section id="services" className="section-2 odd offers featured custom">
                <div className="container">
                    <div className="row intro">
                        <div className="col-12 col-md-9 align-self-center text-center text-md-left">
                            <h2 className="super effect-static-text">Previous Events</h2>
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
                            <div className="card featured">
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
        </>
    )
}
