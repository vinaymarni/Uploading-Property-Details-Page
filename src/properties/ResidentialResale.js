import React, { useState } from "react";
import './propertyDetailsFrom.css';
import {addPostPropertyDetails} from '../service/api';

const defaultResidentialData = {
    propertyType : "",
    ownershipType : "",
    carpetArea: "",
    floorType : "",
    floor: "",
    bhkType: "",
    totalFloor : "",
    propertyAge : "",
    facing: "",
    buildupArea: "",
};

const ResidentialResale = () => {
    const [residentialResaleData, setResidentialResaleData] = useState(defaultResidentialData);

    const rows = [];
    const makeFloors = () => {
        for (var i=1; i < 100; i++) {    
            rows.push(<option key={i} className="dropdown-item" value={i}>{i}</option>)
        };
    };

    const onValueChange = (e) => {
        setResidentialResaleData({ ...residentialResaleData, [e.target.name]: e.target.value });
    };

    makeFloors()

    const submitResidentialResalePropertyData = (e) => {
        e.preventDefault();
        addPostPropertyDetails(residentialResaleData);
    };

    return(
        <form onSubmit={submitResidentialResalePropertyData}>
            <div className="details-con">
                    <h1 className="property-heading">Fill the Resale Property Details</h1>
                    <div className="container-order">
                        <div className="drop-down-container">
                            <label htmlFor="proper_type" className="user-lable">Property Type</label>
                            <select name="propertyType" onChange={(e)=> onValueChange(e)} id="proper_type" className="choose-apartment">
                                <option value="" hidden>Please Choose...</option>
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
                            <select name="ownershipType"  onChange={(e)=> onValueChange(e)} id="ownership_type" className="choose-apartment">
                                <option value="" hidden>Please Choose...</option>
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
                            <label htmlFor="floor_type" className="user-lable">Floor Type</label>
                            <select name="floorType" onChange={(e)=> onValueChange(e)} id="floor_type" className="choose-apartment">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Vitrified Tiles">Vitrified Tiles</option>
                                <option className="dropdown-item" value="Mosaic">Mosaic</option>
                                <option className="dropdown-item" value="Marble/Granite">Marble/Granite</option> 
                                <option className="dropdown-item" value="Wooden">Wooden</option>
                                <option className="dropdown-item" value="Cement">Cement</option>                            
                            </select>
                        </div>

                        <div className="drop-down-container">
                            <label htmlFor="Floor" className="user-lable">Floor</label>
                            <select name="floor" onChange={(e)=> onValueChange(e)} id="Floor" className="choose-apartment">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="ground">Ground</option>
                                {rows}
                            </select>
                        </div>

                        <div className="drop-down-container">
                            <label htmlFor="totalFloor" className="user-lable">Total Floor</label>
                            <select name="totalFloor" onChange={(e)=> onValueChange(e)} id="totalFloor" className="choose-apartment">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="ground">Ground</option>
                                {rows}
                            </select>
                        </div>
                    </div>

                    <div className="container-order">
                        <div className="drop-down-container">
                            <label htmlFor="bhk" className="user-lable">BHK Type</label>
                            <select name="bhkType" onChange={(e)=> onValueChange(e)} id="bhk" className="choose-apartment">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="1 rks">1 RKS</option>
                                <option className="dropdown-item" value="1 BHK">1 BHK</option>
                                <option className="dropdown-item" value="2 BHK">2 BHK</option>  
                                <option className="dropdown-item" value="3 BHK">3 BHK</option>  
                                <option className="dropdown-item" value="4+ BHK">4+ BHK</option>                    
                            </select>
                        </div>

                        <div className="drop-down-container">
                            <label htmlFor="propertyAge" className="user-lable">Property Age</label>
                            <select name="propertyAge" onChange={(e)=> onValueChange(e)} id="propertyAge" className="choose-apartment">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Less than a Year">Less than a Year</option>
                                <option className="dropdown-item" value="1 to 3 Year">1 to 3 Year</option>
                                <option className="dropdown-item" value="3 to 5 Year">3 to 5 Year</option>
                                <option className="dropdown-item" value="5 to 10 Year">5 to 10 Year</option>
                                <option className="dropdown-item" value="More then 10 years">More then 10 years</option>           
                            </select>
                        </div>

                        <div className="drop-down-container">
                            <label htmlFor="facing" className="user-lable">Facing</label>
                            <select name="facing" onChange={(e)=> onValueChange(e)} id="facing" className="choose-apartment">
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
                    </div>
                    <div className="drop-down-container">                   
                        <label htmlFor="buildArea" className="user-lable">Build up Area sq.ft</label>
                        <input id="buildArea" name="buildupArea" onChange={(e)=> onValueChange(e)} type="text" className="input-field" placeholder="Enter Here"/>                   
                    </div>                
                    <button className="property-post-btn">Save & Continue</button>    
                        
            </div>
        </form>
    )
};

export default ResidentialResale;