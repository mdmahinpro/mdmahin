import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="Footer container text-center pt-5 pb-3">
            <div className="social-links my-3">
                <a href="https://github.com/mdmahinpro" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/mdmahinpro" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://medium.com/@mdmahin.pro" target="_blank" rel="noopener noreferrer"><i className="fab fa-medium-m"></i></a>
                <a href="https://www.facebook.com/mahinbinraihanmukto" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            </div>
            <p className="main"><a href="https://github.com/mdmahinpro">Made with <span><i className="fas fa-heart"></i></span> by Mahin Bin Raihan <i class="fas fa-snowman"></i> {new Date().getFullYear()} <i class="fas fa-snowman"></i></a></p>
        </div>
    );
}