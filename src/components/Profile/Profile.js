import { Link } from "react-router-dom";
import "../ExtraNav.css";
import profileImage from "../ProfileImage.jpg";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="Profile container py-5">
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-lg-7  pl-2 order-1 order-lg-0  text-left text-center text-md-left animate__animated animate__fadeInLeft">
          <p className="hello">Hello! I am</p>
          <h1 className="name">Md Mahin Bin Raihan</h1>
          <h3 className="designation mt-2">MERN Stack Web Developer</h3>
          <div className="social-links my-2">
            <a
              href="https://github.com/mdmahinpro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mdmahin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://medium.com/@mdmahin.pro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-medium-m"></i>
            </a>
            <a
              href="https://www.facebook.com/mdmahinbinraihan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <div className="d-flex justify-content-center align-items-center row">
            <p className="description mt-3 mb-4 ">
              I am a an enthusiastic JavaScript Programmer and professional MERN
              stack Developer.I love to code modern and responsive layouts for
              web application. I am experienced enough to work on any type of
              Web Application Based project.
            </p>

            <div>
              <Link to="/skills" className="mx-4">
                <span
                  className="btn  linkAt"
                  style={{ "--clr": "RGB(100, 255, 218)" }}
                  href="https://drive.google.com/file/d/1R43WfT5hodWWYj7k-5SSzlMTOA8nYUf3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <span>Get Resume</span>
                  <i className="italic-style"></i>
                </span>{" "}
              </Link>
              <Link to="/skills" className="mx-4">
                <span
                  className="btn  linkAt"
                  style={{ "--clr": "RGB(100, 255, 218)" }}
                >
                  <span>Skillset</span>
                  <i className="italic-style"></i>
                </span>{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-5 d-flex justify-content-center animate__animated animate__fadeInRight">
          <img className="img-fluid profile-image" src={profileImage} alt="" />
        </div>
      </div>
    </div>
  );
}
