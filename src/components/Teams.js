import React from 'react'
import TeamMembers from '../teams.json'
export default function Teams() {
    console.log(TeamMembers)
    return (
        <>

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



                                {
                                    TeamMembers.map((member, index) => {
                                        return (

                                            <div className="swiper-slide slide-center text-center item" >
                                                <div className="row card">
                                                    <div className="col-12">
                                                        <img
                                                            src={require("../assets/team/" + member.image)}
                                                            alt="Adams Baker"
                                                            className="person"
                                                        />
                                                        <h4>{member.name}</h4>
                                                        <p>{member.position}</p>
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
                                        )
                                    })

                                }


                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
