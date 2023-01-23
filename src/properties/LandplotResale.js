import React, { useState } from "react";
import './propertyDetailsFrom.css';
import {addPostPropertyDetails} from '../service/api';

const defaultLandflotData = {
    plotArea : "",
    floorsAllowed : "",
    length: "",
    width : "",
    BoundaryWall : "",
    isTheLandplotInsideAGatedProject: ""
}

const LandplotResale = () => {
    const [landplotData, setLandplotData] = useState(defaultLandflotData);
    const [wallYesBtn, setWallYesBtn] = useState({bg_color: "rgb(211, 207, 207)", color:"black"});
    const [wallNoBtn, setWallNoBtn] = useState({bg_color: "rgb(211, 207, 207)", color:"black"});
    const [gatedYesBtn, setGatedYesBtn] = useState({bg_color: "rgb(211, 207, 207)", color:"black"});
    const [gatedNoBtn, setGatedNoBtn] = useState({bg_color: "rgb(211, 207, 207)", color:"black"});
    
    const onWallYesBtn = () => {
        setLandplotData({ ...landplotData, BoundaryWall : "YES" });
        setWallYesBtn({bg_color: "rgb(75, 3, 75)", color:"white"});
        setWallNoBtn({bg_color:  "rgb(211, 207, 207)", color:"black"});
    };

    const onWallNoBtn = () => {
        setLandplotData({ ...landplotData, BoundaryWall : "NO" });
        setWallNoBtn({bg_color:  "rgb(75, 3, 75)", color:"white"});
        setWallYesBtn({bg_color: "rgb(211, 207, 207)", color:"black"});
    };

    const onGatedYesBtn = () => {
        setLandplotData({ ...landplotData, isTheLandplotInsideAGatedProject : "YES" });
        setGatedYesBtn({bg_color: "rgb(75, 3, 75)", color:"white"});
        setGatedNoBtn({bg_color:  "rgb(211, 207, 207)", color:"black"});
    };

    const onGatedNoBtn = () => {
        setLandplotData({ ...landplotData, isTheLandplotInsideAGatedProject : "NO" });
        setGatedYesBtn({bg_color: "rgb(211, 207, 207)", color:"black"});
        setGatedNoBtn({bg_color:  "rgb(75, 3, 75)", color:"white"});
    };

    const onValueChange = (e) => {
        setLandplotData({ ...landplotData, [e.target.name]: e.target.value });
    };

    const submitLandplotPropertyData = (e) => {
        e.preventDefault();
        addPostPropertyDetails(landplotData);
    };

    return(   
        <form onSubmit={submitLandplotPropertyData}>
            <div className="details-con">
                <h1 className="property-heading">Fill the Land/Plot Resale Property Details</h1>
                <div className="container-order">
                    <div className="drop-down-container">                   
                        <label htmlFor="plotArea" className="user-lable">Plot Area sq.ft</label>
                        <input id="plotArea" name="plotArea" onChange={(e)=> onValueChange(e)} type="text" className="input-field" placeholder="Enter Here"/>                   
                    </div> 

                    <div className="drop-down-container">                   
                        <label htmlFor="floors_allowed" className="user-lable">Floors allowed for construction</label>
                        <input id="floors_allowed" name="floorsAllowed" onChange={(e)=> onValueChange(e)} type="text" className="input-field" placeholder="Enter Here"/>                   
                    </div>
                </div>
                <div className="container-order">
                    <div className="drop-down-container">                   
                        <label htmlFor="Length" className="user-lable">Length</label>
                        <input id="Length" name="length" onChange={(e)=> onValueChange(e)} type="text" className="input-field" placeholder="Enter Here"/>                   
                    </div>

                    <div className="drop-down-container">                   
                        <label htmlFor="Width" className="user-lable">Width</label>
                        <input id="Width" name="width" onChange={(e)=> onValueChange(e)} type="text" className="input-field" placeholder="Enter Here"/>                   
                    </div>
                </div>
                <div className="container-order">
                    <div className="drop-down-container btn-box">
                        <h3>Boundary Wall?</h3>
                        <div className="">
                            <button onClick={onWallYesBtn} style={{backgroundColor: `${wallYesBtn.bg_color}`, color: `${wallYesBtn.color}`}} className="select-btn">Yes</button>
                            <button onClick={onWallNoBtn} style={{backgroundColor: `${wallNoBtn.bg_color}`, color: `${wallNoBtn.color}`}} className="select-btn">No</button>
                        </div>
                    </div>
                    <div className="drop-down-container btn-box">
                        <h3>Is the Land/Plot inside a gated project?</h3>
                        <div className="">
                            <button onClick={onGatedYesBtn} style={{backgroundColor: `${gatedYesBtn.bg_color}`, color: `${gatedYesBtn.color}`}} className="select-btn">Yes</button>
                            <button onClick={onGatedNoBtn} style={{backgroundColor: `${gatedNoBtn.bg_color}`, color: `${gatedNoBtn.color}`}} className="select-btn">No</button>
                        </div>
                    </div>
                </div>
                <button className="property-post-btn">Save & Continue</button>
                
            </div>
        </form>
    )
}

export default LandplotResale;