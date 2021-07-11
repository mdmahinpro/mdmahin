import React from 'react';
import blog1 from '../../blog1.jpg';
import blog2 from '../../blog2.jpg';
import './Blogs.css';


export default function Blogs() {
    return (
        <div className="Blogs">
            <div className="container py-5">
                <div className="header text-center">
                    <h2>MY LATEST <span>BLOG</span></h2>
                    <p>I have tried to write something which could be helpful</p>
                    <div className="wrapper">
                        <div className="divider div-transparent div-dot"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={blog2} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Javascript Recap <span aria-label="" role="img"><i class="fab fa-js-square"></i></span></h4>
                                <p className="card-text">Javascript is the most loving programming language for a front end developer.But after a gap of 3-4 weeks,we forgot the syntax and basics.So I have tried to write something which could help you to recap JS. </p>
                                <a href="https://medium.com/@mdmahin.pro/javascript-recap-8d1368d5ff86" target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card mt-4">
                            <img className="card-img-top" src={blog1} alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Blogs are coming soon<span aria-label="" role="img">👓</span></h4>
                                <p className="card-text">Hello There,I am trying to write something whats could be helpful to you.Please be patient.Give me some times.I will be back very soon.</p>
                                <a href="www.google.com" target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
