import React from "react";
import project1 from "../../tolet.png";
import project3 from "../../travel-guru.png";
import project2 from "../../vmart.png";
import "./Project.css";

export default function Projects() {
  return (
    <div className="Projects">
      <div className="container py-5">
        <div className="header text-center">
          <h2>
            MY LATEST <span>PROJECTS</span>
          </h2>
          <p>An eye for detail makes my works excellent</p>
          <div className="wrapper">
            <div className="divider div-transparent div-dot"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card mt-4 flex-fill">
              <img className="card-img-top img-contain" src={project1} alt="" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">To-Let Website</h4>
                <p className="card-text flex-grow-1">
                  A Mern Stack web application.A customer can search for rent
                  and they can listed their properties also. Authentication
                  system is also integrated their.
                </p>
                <div className="technology mb-4">
                  <span className="badge bg-secondary mx-1">React</span>
                  <span className="badge bg-secondary mx-1">React Router</span>
                  <span className="badge bg-secondary mx-1">Node.js</span>
                  <span className="badge bg-secondary mx-1">Express.js</span>
                  <span className="badge bg-secondary mx-1">MongoDB</span>
                  <span className="badge bg-secondary mx-1">Bootstrap</span>
                  <span className="badge bg-secondary mx-1">Firebase</span>
                  <span className="badge bg-secondary mx-1">Heroku</span>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://github.com/mdmahinpro/tolet-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://riyanmarket.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card mt-4 flex-fill">
              <img className="card-img-top" src={project2} alt="" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">Volunteer Network</h4>
                <p className="card-text flex-grow-1">
                  It's a volunteering service website with full
                  functionality.People can choose volunteer work for a specific
                  date and delete them if they want.
                </p>
                <div className="technology mb-4">
                  <span className="badge bg-secondary mx-1">React</span>
                  <span className="badge bg-secondary mx-1">React Router</span>
                  <span className="badge bg-secondary mx-1">Node.js</span>
                  <span className="badge bg-secondary mx-1">Express.js</span>
                  <span className="badge bg-secondary mx-1">MongoDB</span>
                  <span className="badge bg-secondary mx-1">Bootstrap</span>
                  <span className="badge bg-secondary mx-1">Firebase</span>
                  <span className="badge bg-secondary mx-1">Heroku</span>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://github.com/ShahadatShuvo/FullStack-Ecommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://vmart-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card mt-4 flex-fill">
              <img className="card-img-top" src={project3} alt="" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">Travel Guru</h4>
                <p className="card-text flex-grow-1">
                  It's a tour booking website. A customer can book a tour and
                  see hotels based on their destination.
                </p>
                <div className="technology mb-4">
                  <span className="badge bg-secondary mx-1">React</span>
                  <span className="badge bg-secondary mx-1">React Router</span>
                  <span className="badge bg-secondary mx-1">Bootstrap</span>
                  <span className="badge bg-secondary mx-1">Firebase</span>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://github.com/mdmahinpro/travel-guru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://travel-guru-visit.web.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat with other project cards in similar fashion */}
        </div>
      </div>
    </div>
  );
}
