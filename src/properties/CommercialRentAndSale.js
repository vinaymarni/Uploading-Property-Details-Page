import React, { useState } from "react";
//import { NavLink } from 'react-router-dom';
import './propertyDetailsFrom.css';
import {addPostPropertyDetails} from '../service/api';

const defaultResidentialData = {
    propertyType : "",
    ownershipType : "",
    carpetArea: "",
    furnishing : "",
    floor: "",
    totalFloor : "",
    propertyAge : "",
    buildingType: "",
    buildupArea: "",
    otherFeatures: "",
};

const CommercialRentAndSale = () => {
    const [commercialData, setCommercialData] = useState(defaultResidentialData);

    const rows = [];
    const makeFloors = () => {
        for (var i=0; i < 100; i++) {    
            rows.push(<option key={i} className="dropdown-item" value={i}>{i}</option>)
        };
    };

    const onValueChange = (e) => {
        setCommercialData({ ...commercialData, [e.target.name]: e.target.value });
    };
    
    const submitCommercialPropertyData = (e) => {
        e.preventDefault();
        addPostPropertyDetails(commercialData);

    };
    
    makeFloors()
    return(
        <form onSubmit={submitCommercialPropertyData}>
            <div className="details-con">
                    <h1 className="property-heading">Fill the Commercial Property Details</h1>
                    <div className="container-order">
                        <div className="drop-down-container">
                            <label htmlFor="proper_type" className="user-lable">Property Type</label>
                            <select name="propertyType"  onChange={(e)=> onValueChange(e)} id="proper_type" className="choose-apartment">
                                <option defaultValue="Please Choose..." hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Office Space">Office Space</option>
                                <option className="dropdown-item" value="Co-Working">Co-Working</option>
                                <option className="dropdown-item" value="Shop">Shop</option>
                                <option className="dropdown-item" value="Showroom">Showroom</option>     
                                <option className="dropdown-item" value="Godown/Warehouse">Godown/Warehouse</option>
                                <option className="dropdown-item" value="Industrial Building">Industrial Building</option>
                                <option className="dropdown-item" value="Industrail She">Industrail Shed</option>
                                <option className="dropdown-item" value="Resturent/Cafe">Resturent/Cafe</option>
                                <option className="dropdown-item" value="Other Bussiness">Other Bussiness</option>
                            </select>
                        </div>

                        <div className="drop-down-container">
                            <label htmlFor="ownership_type" className="user-lable">Ownership Type</label>
                            <select name="ownershipType" onChange={(e)=> onValueChange(e)} id="ownership_type" className="choose-apartment">
                                <option defaultValue="Please Choose..." hidden>Please Choose...</option>
                                <option className="dropdown-item" value="on lease">on lease</option>
                                <option className="dropdown-item" value="Self owned">Self owned</option>
                            </select>
                        </div>

                        <div className="drop-down-container">
                            <label htmlFor="carpet_area" className="user-lable">Carpet Area</label>
                            <input id="carpet_area" name="carpetArea" onChange={(e)=> onValueChange(e)} type="text" className="input-field" placeholder="Enter Here"/>
                        </div>
                    </div>
                    
                    <div className="container-order">
                        <div className="drop-down-container">
                            <label htmlFor="floor_type" className="user-lable">Furnishing</label>
                            <select name="furnishing" onChange={(e)=> onValueChange(e)} id="floor_type" className="choose-apartment"> 
                                <option defaultValue="Please Choose..." hidden>Please Choose...</option>                           
                                <option className="dropdown-item" value="Fully Furnished">Fully Furnished</option>
                                <option className="dropdown-item" value="Semi Furnished">Semi Furnished</option>
                                <option className="dropdown-item" value="Unfurnished">Unfurnished</option>                            
                            </select>
                        </div>

                        <div className="drop-down-container">
                            <label htmlFor="Floor" className="user-lable">Floor</label>
                            <select name="floor" onChange={(e)=> onValueChange(e)} id="Floor" className="choose-apartment">
                                <option defaultValue="Please Choose..." hidden>Please Choose...</option>
                                <option className="dropdown-item" value="ground">Ground</option>
                                <option className="dropdown-item" value="1 RKS">1</option>
                                {rows}
                            </select>
                        </div>

                        <div className="drop-down-container">
                            <label htmlFor="totalFloor" className="user-lable">Total Floor</label>
                            <select name="totalFloor" onChange={(e)=> onValueChange(e)} id="totalFloor" className="choose-apartment">
                                <option defaultValue="Please Choose..." hidden>Please Choose...</option>
                                <option className="dropdown-item" value="ground">Ground</option>
                                <option className="dropdown-item" value="1 RKS">1</option>
                                {rows}
                            </select>
                        </div>
                    </div>

                    <div className="container-order">
                        <div id="property_age" className="drop-down-container">
                            <label htmlFor="propertyAge" className="user-lable">Property Age</label>
                            <select name="propertyAge" onChange={(e)=> onValueChange(e)} id="propertyAge" className="choose-apartment">
                                <option defaultValue="Please Choose..." hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Less than a Year">Less than a Year</option>
                                <option className="dropdown-item" value="1 to 3 Year">1 to 3 Year</option>
                                <option className="dropdown-item" value="3 to 5 Year">3 to 5 Year</option>
                                <option className="dropdown-item" value="5 to 10 Year">5 to 10 Year</option>
                                <option className="dropdown-item" value="More then 10 years">More then 10 years</option>           
                            </select>
                        </div>

                        <div className="drop-down-container">
                            <label htmlFor="building_type" className="user-lable">Building Type</label>
                            <select name="buildingType" onChange={(e)=> onValueChange(e)} id="building_type" className="choose-apartment">
                                <option defaultValue="Please Choose..." hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Residential Buildings">Residential Buildings</option>
                                <option className="dropdown-item" value="Educational Buildings">Educational Buildings</option>
                                <option className="dropdown-item" value="Institutional Buildings">Institutional Buildings</option>
                                <option className="dropdown-item" value="Showroom">Showroom</option>     
                                <option className="dropdown-item" value="Assembly Buildings">Assembly Buildings</option>
                                <option className="dropdown-item" value="Business Buildings">Business Buildings</option>
                                <option className="dropdown-item" value="Mercantile Buildings">Mercantile Buildings</option>
                                <option className="dropdown-item" value="Industrial Buildings">Industrial Buildings</option>
                                <option className="dropdown-item" value="Storage Buildings">Storage Buildings</option>
                            </select>
                        </div>
                        <div className="drop-down-container">                   
                            <label htmlFor="buildArea" className="user-lable">Build up Area sq.ft</label>
                            <input id="buildupArea" name="buildupArea" onChange={(e)=> onValueChange(e)} type="text" className="input-field" placeholder="Enter Here"/>                   
                        </div> 

                    </div>
                    

                    <div className="details-con">
                        <h2 className="property-heading">Other Features</h2> 
                        <div className="radio-inputs-container">
                            <div className="radio-input-con">
                                <label className="user-lable" htmlFor="onMianRoad" >On Mian Road</label>
                                <input id="onMianRoad" onChange={(e)=> onValueChange(e)} type="radio" value="On Mian Road" className="user-radio-input" name="otherFeatures" />
                            </div>
                            <div className="radio-input-con">
                                <label className="user-lable" htmlFor="Corner_Property" >Corner Property</label>
                                <input id="Corner_Property" onChange={(e)=> onValueChange(e)} type="radio" value="Corner Property" className="user-radio-input" name="otherFeatures" />
                            </div>
                        </div>
                    </div>    
                    <button className="property-post-btn">Save & Continue</button>    
                       
            </div>
        </form>
    )
};

export default CommercialRentAndSale;