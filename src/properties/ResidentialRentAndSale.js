import React, { useState } from "react";
import './propertyDetailsFrom.css';
import {addPostPropertyDetails} from '../service/api';

const defaultResidentialData = {
    apartmentName : "",
    apartmentType : "",
    bhkType : "",
    floor: "",
    totalFloor : "",
    propertyAge : "",
    facing: "",
    buildupArea: ""
};

const ResidentialRentAndSale = () => {
    const [residentialData, setResidentialData] = useState(defaultResidentialData);

    const rows = [];
    const makeFloors = () => {
        for (var i=1; i < 100; i++) {    
            rows.push(<option key={i} className="dropdown-item" value={i}>{i}</option>)
        };
    };

    makeFloors();

    const onValueChange = (e) => {
        setResidentialData({ ...residentialData, [e.target.name]: e.target.value });
    };

    const submitResidentialPropertyData = (e) => {
        e.preventDefault();
        addPostPropertyDetails(residentialData);
    };

    return(
        <form onSubmit={submitResidentialPropertyData}>
            <div className="details-con">
                <h1 className="property-heading">Fill the Residentail Property Details</h1> 
                    <div className="container-order">
                        <div className="drop-down-container">
                            <label htmlFor="apartmentName" className="user-lable">Apartment Name</label>
                            <input id="apartmentName"  name="apartmentName" type="text" onChange={(e) =>onValueChange(e)} className="input-field" placeholder="Enter Here"/>
                        </div>

                        <div id="apartment_type" className="drop-down-container">
                            <label htmlFor="apartment" className="user-lable">Apartment Type</label>
                            <select name="apartmentType" onChange={(e)=> onValueChange(e)} id="apartment" className="choose-apartment">
                                <option defaultValue="" hidden >Please Choose...</option>
                                <option className="dropdown-item" value="Apartment">Apartment</option>
                                <option className="dropdown-item" value="Independent House / Villa">Independent House / Villa</option>
                                <option className="dropdown-item" value="gated community villa">gated community villa</option>
                                <option className="dropdown-item" value="Standalone Property">Standalone Property</option>                      
                            </select>
                        </div>
                    </div>
    
                    <div className="container-order">
                        <div id="bhk_type" className="drop-down-container">
                            <label htmlFor="bhk" className="user-lable">BHK Type</label>
                            <select name="bhkType" id="bhk" onChange={(e)=> onValueChange(e)} className="choose-apartment">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="BHK Type">BHK Type</option>
                                <option className="dropdown-item" value="1 rks">1 RKS</option>
                                <option className="dropdown-item" value="1 BHK">1 BHK</option>
                                <option className="dropdown-item" value="2 BHK">2 BHK</option>  
                                <option className="dropdown-item" value="3 BHK">3 BHK</option>  
                                <option className="dropdown-item" value="4+ BHK">4+ BHK</option>                    
                            </select>
                        </div>

                        <div id="floor" className="drop-down-container">
                            <label htmlFor="Floor" className="user-lable">Floor</label>
                            <select name="floor"  onChange={(e)=> onValueChange(e)} id="Floor" className="choose-apartment">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="ground">Ground</option>
                                {rows}
                            </select>
                        </div>

                        <div id="total_floor" className="drop-down-container">
                            <label htmlFor="totalFloor" className="user-lable">Total Floor</label>
                            <select name="totalFloor"  onChange={(e)=> onValueChange(e)} id="totalFloor" className="choose-apartment">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="ground">Ground</option>
                                {rows}
                            </select>
                        </div>
                    </div>
                    <div className="container-order">
                        <div id="property_age" className="drop-down-container">
                            <label htmlFor="propertyAge" className="user-lable">Property Age</label>
                            <select name="propertyAge"  onChange={(e)=> onValueChange(e)} id="propertyAge" className="choose-apartment">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Less than a Year">Less than a Year</option>
                                <option className="dropdown-item" value="1 to 3 Year">1 to 3 Year</option>
                                <option className="dropdown-item" value="3 to 5 Year">3 to 5 Year</option>
                                <option className="dropdown-item" value="5 to 10 Year">5 to 10 Year</option>
                                <option className="dropdown-item" value="More then 10 years">More then 10 years</option>           
                            </select>
                        </div>

                        <div id="facing" className="drop-down-container">
                            <label htmlFor="facing" className="user-lable">Facing</label>
                            <select name="facing"  onChange={(e)=> onValueChange(e)} id="facing" className="choose-apartment">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="East">East</option>
                                <option className="dropdown-item" value="West">West</option>
                                <option className="dropdown-item" value="North">North</option>
                                <option className="dropdown-item" value="South">South</option>
                                <option className="dropdown-item" value="North East">North East</option>
                                <option className="dropdown-item" value="South East">South East</option>
                                <option className="dropdown-item" value="North West">North West</option>
                                <option className="dropdown-item" value="South West">South West</option>
                                <option className="dropdown-item" value="Don't Know">Don't Know</option>
                            </select>
                        </div>

                        <div id="buildup_area" className="drop-down-container">
                            <label htmlFor="buildArea" className="user-lable">Build up Area sq.ft</label>
                            <input name="buildupArea" onChange={(e)=> onValueChange(e)} id="buildArea" type="text" className="input-field" placeholder="Enter Here"/>
                        </div>
                    </div>
                    <button className="property-post-btn">Save & Continue</button>
                    
                    
            </div>
        </form>
    )
};

export default ResidentialRentAndSale;

  
  