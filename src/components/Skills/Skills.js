import React from 'react';
import bootstrap from '../../bootstrap.png';
import cdt from '../../chrome.png';
import cPanel from '../../cpanel.png';
import css from '../../css.png';
import express from '../../expressjs.png';
import figma from '../../figma.png';
import firebase from '../../firebase.png';
import git from '../../git.png';
import github from '../../github.png';
import heroku from '../../heroku.png';
import html from '../../html.png';
import js from '../../js.png';
import material from '../../meta-ui.png';
import mongo from '../../mongodb.png';
import netlify from '../../netlify.png';
import node from '../../nodejs.png';
import npm from '../../npm.png';
import postman from '../../postman.svg';
import react from '../../react.png';
import redux from '../../redux.png';
import sass from '../../sass.png';
import vs from '../../vscode.png';
import wp from '../../wp.png';
import './Skills.css';

export default function About() {
    return (
        <div className="Skills container text-center py-5 mt-5 animate__animated animate__zoomIn">
            <div className="header">
                <h2>TECHNICAL <span>SKILLS</span></h2>
                <p>Skills I am familar with</p>
                <div className="wrapper">
                    <div className="divider div-transparent div-dot"></div>
                </div>
            </div>
            <div className="comfortable">
                <h3>Comfortable</h3>
                <div className="d-flex flex-row bd-highlight flex-wrap mb-3 justify-content-center align-items-center">
                    <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={react} alt=""/>
                        <figcaption style={{marginTop:'4px'}}>React</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'40px', paddingTop:'8px'}} src={js} alt=""/>
                        <figcaption style={{marginTop:'7px'}}>JavaScript</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'67px'}} src={bootstrap} alt=""/>
                        <figcaption>Bootstrap</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'55px', paddingTop:'10px'}} src={sass} alt=""/>
                        <figcaption style={{marginTop:'4px'}}>Sass</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={html} alt=""/>
                        <figcaption style={{marginTop:'5px'}}>HTML</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'46px'}} src={css} alt=""/>
                        <figcaption style={{marginTop:'4px'}}>CSS</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'55px'}} src={wp} alt=""/>
                        <figcaption>WordPress</figcaption>
                    </div>
                </div>
            </div>
            <div className="familiar mt-5">
                <h3>Familiar</h3>
                <div className="d-flex flex-wrap flex-row bd-highlight mb-3 justify-content-center align-items-center"> 
                     <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={redux} alt=""/>
                        <figcaption style={{marginTop:'13px'}}>Redux</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'43px'}} src={node} alt=""/>
                        <figcaption style={{marginTop:'13px'}}>Node.js</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'55px'}} src={express} alt=""/>
                        <figcaption style={{marginTop:'6px'}}>Express.js</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'60px'}} src={mongo} alt=""/>
                        <figcaption>MongoDB</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'38px'}} src={firebase} alt=""/>
                        <figcaption style={{marginTop:'8px'}}>Firebase</figcaption>
                    </div>
                    <div>
                        <img className="mx-5 my-3" style={{width:'45px', paddingTop:'15px'}} src={material} alt=""/>
                        <figcaption style={{marginTop:'9px'}}>Material-UI</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'48px'}} src={netlify} alt=""/>
                        <figcaption style={{marginTop:'12px'}}>Netlify</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={heroku} alt=""/>
                        <figcaption style={{marginTop:'10px'}}>Heroku</figcaption>
                    </div>
                </div>
            </div>
            <div className="tools mt-5">
                <h3>Tools</h3>
                <div className="d-flex flex-wrap flex-row bd-highlight mb-3 justify-content-center align-items-center"> 
                    <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={vs} alt=""/>
                        <figcaption style={{marginTop:'4px'}}>Visual Studio Code</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'53px'}} src={git} alt=""/>
                        <figcaption>Git</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={github} alt=""/>
                        <figcaption style={{marginTop:'4px'}}>GitHub</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'85px', paddingTop:'10px'}} src={npm} alt=""/>
                        <figcaption style={{marginTop:'10px'}}>npm</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={cPanel} alt=""/>
                        <figcaption style={{marginTop:'4px'}}>cPanel</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'50px'}} src={cdt} alt=""/>
                        <figcaption style={{marginTop:'4px'}}>Chrome Dev Tools</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'48px'}} src={postman} alt=""/>
                        <figcaption style={{marginTop:'6px'}}>Postman</figcaption>
                    </div>
                    <div>
                        <img className="mx-4 my-3" style={{width:'29px'}} src={figma} alt=""/>
                        <figcaption style={{marginTop:'10px'}}>Figma</figcaption>
                    </div>
                </div>
            </div>
        </div>
    );
}
