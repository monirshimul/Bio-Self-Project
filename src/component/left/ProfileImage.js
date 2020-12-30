import React, { Component } from 'react';
import logo from '../image/profile.png';
import { FaMobileAlt, FaMailBulk, FaLaptop } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
import { BsPeopleCircle } from "react-icons/bs";


export class ProfileImage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-sm-4 imTwoWhite d-flex justify-content-center align-items-center" style={{background:""}}>
                        <img
                            src={logo}
                            style={{
                                height: "120px",
                                width: "120px",
                                borderRadius:"50%"
                            }}
                            className=" img-fluid imPlainBlue"
                            id='SignaturePic'
                            alt=""
                        />
                    </div>
                    
                    <div className="col-sm-8 imTwoWhite">
                        <div className="mb-2 imTwoWhite " style={{background:"#f05454"}}>
                        <h1 className="" style={{fontSize:"20px", color:"#fff"}}><BsPeopleCircle/> Md. Monirul Islam</h1>
                        </div>
                        <h3 style={{fontSize:"17px", color:"#fbecec"}}><FaLaptop/> Software Engineer</h3>
                        <h5 style={{fontSize:"14px", color:"#e0ece4"}}><VscOrganization/> Era InfoTech Ltd.</h5>
                        <h5 style={{fontSize:"14px", color:"#cffffe"}}><FaMailBulk/> monirshimul@erainfotechbd.com</h5>
                        <h5 style={{fontSize:"14px", color:"#f9f7d9"}}><FaMobileAlt/> 01912991020</h5>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default ProfileImage
