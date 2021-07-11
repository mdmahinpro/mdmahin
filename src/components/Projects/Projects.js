import React from 'react';
import project1 from '../../creative-agency.png';
import project4 from '../../e-school.png';
import project5 from '../../musicLyrics.png';
import project3 from '../../travel-guru.png';
import project2 from '../../volunteer.png';
import './Project.css';


export default function Projects() {
    return (
        <div className="Projects">
            <div className="container py-5">
                <div className="header text-center">
                    <h2>MY LATEST <span>PROJECTS</span></h2>
                    <p>An eye for detail makes my works excellent</p>
                    <div className="wrapper">
                        <div className="divider div-transparent div-dot"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project1} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Creative Agency</h4>
                                <p className="card-text">A Mern Stack web application.A customer can order and review for service. An admin can see orders add a new service from the dashboard.</p>
                                <div className="technology mb-4"><span>React</span> <span>React Router</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span> <span>Bootstrap</span> <span>Firebase</span> <span>Heroku</span></div>
                                <a href="https://github.com/mdmahinpro/creative12" target="_blank" rel="noopener noreferrer" className="p-3"><i className="fab fa-github"></i></a>
                                <a href="https://creative-agency-12.web.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project2} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Volunteer Network</h4>
                                <p className="card-text">It's a volunteering service website with full functionality.People can choose volunteer work for a specific date and delete them if they want. An admin can add new volunteer work.</p>
                                <div className="technology mb-4"><span>React</span> <span>React Router</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span> <span>Bootstrap</span> <span>Firebase</span> <span>Heroku</span></div>
                                <a href="https://github.com/mdmahinpro/volunteer-network-client" target="_blank" rel="noopener noreferrer" className="p-3"><i className="fab fa-github"></i></a>
                                <a href="https://volunteer-client.web.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project3} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Travel Guru</h4>
                                <p className="card-text">It's a tour booking website. A customer can book a tour and see hotels based on their destination.Our database will save there date and serve them accoroding to there booking.It's totally responsive for every device.</p>
                                <div className="technology mb-4"><span>React</span> <span>React Router</span> <span>Bootstrap</span><span>Firebase</span></div>
                                <a href="https://github.com/mdmahinpro/travel-guru" target="_blank" rel="noopener noreferrer" className="p-3"><i className="fab fa-github"></i></a>
                                <a href="https://travel-guru-visit.web.app/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project4} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">E-School</h4>
                                <p className="card-text">A static online learning website.This is just the frontend version and it's responsive in every type of device.</p>
                                <div className="technology mb-4"><span>Bootstrap</span> <span>HTML</span> <span>CSS</span> <span>Figma</span> <span>GitHub</span></div>
                                <a href="https://github.com/mdmahinpro/e-school" target="_blank" rel="noopener noreferrer" className="p-3"><i className="fab fa-github"></i></a>
                                <a href="https://mdmahinpro.github.io/e-school/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={project5} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">Lyrics Finder</h5>
                                <p className="card-text">A dynamic website which I have made with api.You can search any music lyrics from the search bar.Just input the name of the music and you will get the lyrics.</p>
                                <div className="technology mb-4"><span>Bootstrap</span> <span>HTML</span> <span>CSS</span> <span>Figma</span> <span>GitHub</span></div>
                                <a href="https://github.com/mdmahinpro/music-lyrics" target="_blank" rel="noopener noreferrer" className="p-3"><i className="fab fa-github"></i></a>
                                <a href="https://mdmahinpro.github.io/music-lyrics/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
