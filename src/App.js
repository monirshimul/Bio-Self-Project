import React from 'react';
//import './App.css';
import './Common.css';
import './mainArea.css';
import ProfilePic from './component/left/ProfileImage';
import { GrYoutube, GrSkype, GrGithub } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { GiArtificialIntelligence } from "react-icons/gi";
import { VscVmRunning } from "react-icons/vsc";
import { FaFacebook, FaLinkedin, FaInstagram, FaReact, FaNodeJs, FaEthereum } from "react-icons/fa";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import Bio from './component/right/Bio'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="sideArea imTwoWhite col-sm-3 col-md-3 col-lg-3" style={{ height: "100vh", background: "#f4f4f4", cursor: "pointer", overflowY: "auto", overflowX:"hidden" }}>
              <ProfilePic />
              <div className="imTwoWhite mt-3 row d-flex justify-content-center">
                <div className="imTwoWhite col-sm-6 mt-1 text-center"><h5 className="lightOne" style={{ color: "#16697a" }}><Link to="/bio"><span style={{ fontSize: "30px" }}><FaReact /></span> Bio</Link></h5></div>
                <div className="imTwoWhite col-sm-6 mt-1 text-center"><h5 className="lightTwo" style={{ color: "#16697a" }}><span style={{ fontSize: "30px" }}><FaReact /></span> React Projects</h5></div>
                <div className="imTwoWhite col-sm-6 mt-1 text-center"><h5 className="lightMain" style={{ color: "#16697a" }}><span style={{ fontSize: "30px" }}><FaReact /></span> React Projects</h5></div>
                <div className="imTwoWhite col-sm-6 mt-1 text-center"><h5 className="lightThree" style={{ color: "#16697a" }}><span style={{ fontSize: "30px" }}><FaNodeJs /></span> Node Projects</h5></div>
                <div className="imTwoWhite col-sm-6 mt-1 text-center"><h5 className="lightFour" style={{ color: "#16697a" }}><span style={{ fontSize: "30px" }}><SiRedux /></span> Redux Projects</h5></div>
                <div className="imTwoWhite col-sm-6 mt-1 text-center"><h5 className="lightMain" style={{ color: "#16697a" }}><span style={{ fontSize: "30px" }}><DiJavascript /></span> Vanilla Projects</h5></div>
                <div className="imTwoWhite col-sm-6 mt-1 text-center"><h5 className="lightTwo" style={{ color: "#16697a" }}><span style={{ fontSize: "30px" }}><GiArtificialIntelligence /></span> AI Projects</h5></div>
                <div className="imTwoWhite col-sm-6 mt-1 text-center"><h5 className="lightThree" style={{ color: "#16697a" }}><span style={{ fontSize: "30px" }}><VscVmRunning /></span> Live Projects</h5></div>
                <div className="imTwoWhite col-sm-6 mt-1 text-center"><h5 className="lightFour" style={{ color: "#16697a" }}><span style={{ fontSize: "30px" }}><FaEthereum /></span> Blockchain Projects</h5></div>
                <div className="imTwoWhite col-sm-6 mt-1 text-center"><h5 className="lightMain" style={{ color: "#16697a" }}><span style={{ fontSize: "30px" }}><FaReact /></span> React Native Projects</h5></div>
                <div className="imTwoWhite col-sm-6 mt-1 text-center"><h5 className="lightTwo" style={{ color: "#16697a" }}><span style={{ fontSize: "30px" }}><GiArtificialIntelligence /></span> AI Projects</h5></div>
                <div className="imTwoWhite col-sm-6 mt-1 text-center"><h5 className="lightThree" style={{ color: "#16697a" }}><span style={{ fontSize: "30px" }}><VscVmRunning /></span> Live Projects</h5></div>
                <div className="imTwoWhite col-sm-6 mt-1 text-center"><h5 className="lightFour" style={{ color: "#16697a" }}><span style={{ fontSize: "30px" }}><FaEthereum /></span> Blockchain Projects</h5></div>
                <div className="imTwoWhite col-sm-6 mt-1 text-center"><h5 className="lightMain" style={{ color: "#16697a" }}><span style={{ fontSize: "30px" }}><FaReact /></span> React Native Projects</h5></div>
                
              </div>

              <div className="mt-3 imTwoWhite d-flex justify-content-center align-items-center">
                <p className="mr-2" style={{ fontSize: "25px", color: "#f05454" }}><GrYoutube /></p>
                <p className="mr-2" style={{ fontSize: "25px", color: "#0278ae" }}><FaFacebook /></p>
                <p className="mr-2" style={{ fontSize: "25px", color: "#0278ae" }}><GrSkype /></p>
                <p className="mr-2" style={{ fontSize: "25px", color: "#16697a" }}><GrGithub /></p>
                <p className="mr-2" style={{ fontSize: "25px", color: "#16697a" }}><FaLinkedin /></p>
                <p className="mr-2" style={{ fontSize: "25px", color: "#16697a" }}><FaInstagram /></p>
              </div>
            </div>
            <div className="mainArea col-sm-9 col-md-9 col-lg-9" style={{ height: "100vh", overflowY: "auto" }}>
              <Switch>
                <Route exact path="/bio" component={Bio} />
              </Switch>
            </div>
          </div>

        </div>

      </div>
    </Router>
  );
}

export default App;
