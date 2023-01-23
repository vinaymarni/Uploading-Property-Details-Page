import React, { useState, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import "./component.css";

//Individual Property Details Forms
import ResidentialRentAndSale from '../properties/ResidentialRentAndSale';
import ResidentialResale from '../properties/ResidentialResale';
import PgDetails from '../properties/PgDetails';
import CommercialRentAndSale from '../properties/CommercialRentAndSale';
import LandplotResale from '../properties/LandplotResale';
import countryNames from './countries';



const ApplicationForm = () => {
    const [postProperty, setPostProperty] = useState([]);
    const [propertyPath, setPropertyPath] = useState("");
    const [MDImage, setMDImage] = useState(null);
    const [floorPlan, setfloorPlan] = useState(null);
    const [companyLogo, setCompanyLogo] = useState(null);
    const [selectedImage, setSelectedImage] = useState([]);
    

    const inputRef = useRef();
    const [source, setSource] = useState();

    const [residential, setResidential] = useState({display: "none", bg_color: "rgb(211, 207, 207)", color:"black"})
    const [commercial, setCommercial] = useState({display: "none", bg_color: "rgb(211, 207, 207)", color:"black"})
    const [landPlot, setLandPlot] = useState({display: "none", bg_color: "rgb(211, 207, 207)", color:"black"})
    
    const [residentialRent, setResidentialRent] = useState({bg_color: "rgb(211, 207, 207)", color:"black"});
    const [commercialRent, setCommercialRent] = useState({bg_color: "rgb(211, 207, 207)", color:"black"});
    const [sale, setSale] = useState({bg_color: "rgb(211, 207, 207)", color:"black"});
    const [residentialResale, setResidentialResale] = useState({bg_color: "rgb(211, 207, 207)", color:"black"});
    const [landplotResale, setlandplotResale] = useState({bg_color: "rgb(211, 207, 207)", color:"black"});
    const [pg, setPg] = useState({bg_color: "rgb(211, 207, 207)", color:"black"});
    const [flatmates, setFlatmates] = useState({bg_color: "rgb(211, 207, 207)", color:"black"});

    const amenities = ["Local Address","Power Back Up", "Rain Water Harvesting", "Club House", "Swimming Pool", "Private pool", "Park", "Jogging and Strolling Track", "Outdoor Tennis Courts", "Security", "Reserved Parking",
                        "Visitor Parking", "Intercom Facility", "Maintenance Staff", "Bank & ATM", "Gymnasium", "Indoor Games Room", "Flower Gardens", "Library And Business Centre", "Piped Gas", "Rentable Community Space",
                        "Indoor Squash & Badminton Courts", "Multipurpose Courts", "Meditation Area", "Internet/Wi-Fi Connectivity", "AC in each room", "Theme based Architectures", "Health club with Steam / Jaccuzi",
                        "Large Open space", "Grand Entrance lobby", "Multipurpose Hall", "Horticulture", "Event Space & Amphitheatre", "Fire Fighting Equipment"];



                  
    let saveButton = "none";
    propertyPath === "" ? saveButton = "none" : saveButton = "block";


    //property type Main Buttons//
    const onResidential = () => {
        setPostProperty({ ...postProperty, propertyType : "Residential" });
        setResidential({display: "block", bg_color: "rgb(75, 3, 75)", color:"white"});
        setCommercial({display: "none", bg_color: "rgb(211, 207, 207)", color:"black"});
        setLandPlot({display: "none", bg_color: "rgb(211, 207, 207)", color:"black"});
    };

    const onCommercial = () => {
        setPostProperty({ ...postProperty, propertyType : "Commercial" });
        setResidential({display: "none", bg_color: "rgb(211, 207, 207)", color:"black"})
        setCommercial({display: "block", bg_color: "rgb(75, 3, 75)", color:"white"})
        setLandPlot({display: "none", bg_color: "rgb(211, 207, 207)", color:"black"})
    };

    const onLandPlot = () => {
        setPostProperty({ ...postProperty, propertyType : "LandPlot" });
        setResidential({display: "none", bg_color: "rgb(211, 207, 207)", color:"black"});
        setCommercial({display: "none", bg_color: "rgb(211, 207, 207)", color:"black"});
        setLandPlot({display: "block", bg_color: "rgb(75, 3, 75)", color:"white"});
    };

    //Selected Property Buttons Functions//
    const onResidentialRent = () => {
        setPostProperty({ ...postProperty, typeOfTheProperty : "Rent" });
        setPropertyPath(<ResidentialRentAndSale/>);
        setResidentialRent({bg_color: "rgb(75, 3, 75)", color:"white"});
        setCommercialRent({bg_color:  "rgb(211, 207, 207)", color:"black"});
        setlandplotResale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setResidentialResale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setSale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setPg({bg_color: "rgb(211, 207, 207)", color:"black"});
        setFlatmates({bg_color: "rgb(211, 207, 207)", color:"black"});

    };

    const onCommercialRent = () => {
        setPostProperty({ ...postProperty, typeOfTheProperty : "Rent" });
        setPropertyPath(<CommercialRentAndSale/>);
        setResidentialRent({bg_color: "rgb(211, 207, 207)", color:"black"});
        setResidentialResale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setCommercialRent({bg_color: "rgb(75, 3, 75)", color:"white"});
        setlandplotResale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setSale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setPg({bg_color: "rgb(211, 207, 207)", color:"black"});
        setFlatmates({bg_color: "rgb(211, 207, 207)", color:"black"});
    };

    const onRisdentialResale = () => {
        setPostProperty({ ...postProperty, typeOfTheProperty : "Resale" });
        setPropertyPath(<ResidentialResale/>);
        setResidentialResale({bg_color: "rgb(75, 3, 75)", color:"white"});
        setlandplotResale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setResidentialRent({bg_color: "rgb(211, 207, 207)", color:"black"});
        setCommercialRent({bg_color:  "rgb(211, 207, 207)", color:"black"});
        setSale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setPg({bg_color: "rgb(211, 207, 207)", color:"black"});
        setFlatmates({bg_color: "rgb(211, 207, 207)", color:"black"});
    };

    const onLandplotResale = () => {
        setPostProperty({ ...postProperty, typeOfTheProperty : "Resale" });
        setPropertyPath(<LandplotResale/>);
        setlandplotResale({bg_color: "rgb(75, 3, 75)", color:"white"});
        setResidentialResale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setResidentialRent({bg_color: "rgb(211, 207, 207)", color:"black"});
        setCommercialRent({bg_color:  "rgb(211, 207, 207)", color:"black"});
        setSale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setPg({bg_color: "rgb(211, 207, 207)", color:"black"});
        setFlatmates({bg_color: "rgb(211, 207, 207)", color:"black"});
    };

    const onSale = () => {
        setPostProperty({ ...postProperty, typeOfTheProperty : "Sale" });
        setPropertyPath(<CommercialRentAndSale/>);
        setSale({bg_color: "rgb(75, 3, 75)", color:"white"});
        setResidentialRent({bg_color: "rgb(211, 207, 207)", color:"black"});
        setCommercialRent({bg_color:  "rgb(211, 207, 207)", color:"black"});
        setResidentialResale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setlandplotResale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setPg({bg_color: "rgb(211, 207, 207)", color:"black"});
        setFlatmates({bg_color: "rgb(211, 207, 207)", color:"black"});

    };
    const onPg = () => {
        setPostProperty({ ...postProperty, typeOfTheProperty : "PG/Hostle" });
        setPropertyPath(<PgDetails />);
        setPg({bg_color: "rgb(75, 3, 75)", color:"white"});
        setResidentialRent({bg_color: "rgb(211, 207, 207)", color:"black"});
        setCommercialRent({bg_color:  "rgb(211, 207, 207)", color:"black"});
        setResidentialResale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setlandplotResale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setSale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setFlatmates({bg_color: "rgb(211, 207, 207)", color:"black"});
    };
    const onFlatmates = () => {
        setPostProperty({ ...postProperty, typeOfTheProperty : "Flatmates" });
        setPropertyPath(<ResidentialRentAndSale/>);
        setFlatmates({bg_color: "rgb(75, 3, 75)", color:"white"});
        setResidentialRent({bg_color: "rgb(211, 207, 207)", color:"black"});
        setCommercialRent({bg_color:  "rgb(211, 207, 207)", color:"black"});
        setResidentialResale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setlandplotResale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setSale({bg_color: "rgb(211, 207, 207)", color:"black"});
        setPg({bg_color: "rgb(211, 207, 207)", color:"black"});
    };

    const removeImage = (e) => {
        setSelectedImage(selectedImage.filter(item => item.imageId !== e.imageId));
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
    };
    
    
    return(
        <div className="main-container">          
            <h1 className="main-heading">Property Details Form</h1>           
            <h2 className="sub-heading">Builder Personal Details</h2>
            <div className="input-box">
                <label className="inpit-label" htmlFor="name">Name</label>
                <span id="icon" className="glyphicon glyphicon-user"></span>
                <input id="name" type="text" className="input-field" placeholder="Enter Name..." />                   
            </div>
            <div className="input-box">
                <label className="inpit-label" htmlFor="name">Mobile Number</label>
                <span id="icon" className="glyphicon glyphicon-phone"></span>
                <input id="name" type="text" className="input-field" placeholder="Enter Number..." />               
            </div>
            <div className="input-box">
                <label className="inpit-label" htmlFor="name">Email Id</label>
                <span id="icon" className="glyphicon glyphicon-envelope"></span>
                <input id="name" type="email" className="input-field" placeholder="Enter Email id..." />                
            </div>
            
            <h2 className="sub-heading">Property Details</h2>
            <div id="hori-con">
                <div className="VideoInput" style={{marginRight: "100px"}}>
                        <div className="input-box">
                            <label htmlFor="city" className="inpit-label">Choose a City</label>
                            <select name="cityName" id="city" onChange={(e)=> console.log(e)} className="input-field">
                                <option defaultValue="Please Choose..." hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Bengaluru">Bengaluru</option>
                                <option className="dropdown-item" value="Delhi">Delhi</option>
                                <option className="dropdown-item" value="Pune">Pune</option>
                                <option className="dropdown-item" value="Chennai">Chennai</option>
                                <option className="dropdown-item" value="Hyderabad">Hyderabad</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label className="inpit-label" htmlFor="name">Local Address</label>
                            <input id="name" type="text" className="input-field" placeholder="Enter Here..." />                
                        </div>
                        <div className="input-box">
                            <label className="inpit-label" htmlFor="name">State/Province</label>
                            <input id="name" type="text" className="input-field" placeholder="Enter State id..." />                
                        </div>
                        <div className="input-box">
                            <label htmlFor="country" className="inpit-label">Country</label>
                            <select name="country" id="country" onChange={(e)=> console.log(e)} className="input-field">
                                <option defaultValue="Please Choose..." hidden>Please Choose...</option>
                                {
                                 countryNames.map((eachCountry)=>{
                                    return(<option key ={eachCountry.code} className="dropdown-item" value={eachCountry.name}>{eachCountry.name}</option>)
                                    })
                                };
                                
                                
                                
                            </select>
                        </div>
                        <div className="input-box">
                            <label className="inpit-label" htmlFor="name">Pincode/Postal code</label>
                            <input id="name" type="text" className="input-field" placeholder="Enter Here..." />                
                        </div>
                        
                </div>
                <div className="VideoInput" style={{marginRight: "100px"}}>
                        <div className="input-box">
                            <label htmlFor="headOffice" className="inpit-label">Head Office</label>
                            <select name="cityName" id="headOffice" onChange={(e)=> console.log(e)} className="input-field">
                                <option defaultValue="Please Choose..." hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Bengaluru">Bengaluru</option>
                                <option className="dropdown-item" value="Delhi">Delhi</option>
                                <option className="dropdown-item" value="Pune">Pune</option>
                                <option className="dropdown-item" value="Chennai">Chennai</option>
                                <option className="dropdown-item" value="Hyderabad">Hyderabad</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label htmlFor="branchOffice" className="inpit-label">Branch Office</label>
                            <select name="cityName" id="branchOffice" onChange={(e)=> console.log(e)} className="input-field">
                                <option defaultValue="Please Choose..." hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Bengaluru">Bengaluru</option>
                                <option className="dropdown-item" value="Delhi">Delhi</option>
                                <option className="dropdown-item" value="Pune">Pune</option>
                                <option className="dropdown-item" value="Chennai">Chennai</option>
                                <option className="dropdown-item" value="Hyderabad">Hyderabad</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label className="inpit-label" htmlFor="companyName">Company Name</label>
                            <input id="companyName" type="text" className="input-field" placeholder="Enter Here..." />                
                        </div>
                        <div className="input-box">
                            <label className="inpit-label" htmlFor="MDName">Managing Director Name</label>
                            <input id="MDName" type="text" className="input-field" placeholder="Enter Here..." />                
                        </div>
                        <div className="input-box">
                            <label className="inpit-label" htmlFor="startingDate">Company Starting Date</label>
                            <input id="startingDate" type="date" className="input-field" placeholder="Enter Here..." />                
                        </div>                        
                </div>
                <div className="VideoInput">
                        <div className="input-box">
                            <label className="inpit-label" htmlFor="foundedBy">Founded By</label>
                            <input id="foundedBy" type="text" className="input-field" placeholder="Enter Here..." />                
                        </div>
                        <div className="input-box">
                            <label className="inpit-label" htmlFor="totalProjects">Total Projects</label>
                            <input id="totalProjects" type="text" className="input-field" placeholder="Enter Here..." />                
                        </div>
                        <div className="input-box">
                            <label className="inpit-label" htmlFor="totalProjectsComplted">Total Projects Complited</label>
                            <input id="totalProjectsComplted" type="text" className="input-field" placeholder="Enter Here..." />                
                        </div>
                        <div className="input-box">
                            <label className="inpit-label" htmlFor="ProjectsOngoing">Projects Ongoing</label>
                            <input id="ProjectsOngoing" type="text" className="input-field" placeholder="Enter Here..." />                
                        </div>
                        <div className="input-box">
                            <label className="inpit-label" htmlFor="opertedIn">Operated In</label>
                            <input id="opertedIn" type="date" className="input-field" placeholder="Enter Here..." />                
                        </div>
                </div>
            </div>

            <div className="hori-con">
    {/* Uploading Managing Director Photo */}
            <div style={{marginRight: "150px"}}>
                        <label className="inpit-label" htmlFor="">Managing Director Photo</label>                                                               
                            <div>                                  
                                <img alt="not fount" width={"240px"} height={"240px"} src={MDImage} />
                                <br/>
                                <button type="button" className="del-btn" onClick={()=>setMDImage(null)}>Remove</button>
                            </div>                                                                       
                        <input
                            style={{display: "none"}}
                            id = "uploadMdImage"
                            type="file"
                            name="myImage"
                            onChange={(event) => {
                            setMDImage(URL.createObjectURL(event.target.files[0]))
                            }}
                        />
                        <button className="upload-btn" type="file"><label htmlFor="submitMdImage"><label htmlFor="uploadMdImage">Upload Managing Director Photo</label></label></button>
                        <input style={{display: 'none'}} id="submitMdImage" type="submit"></input> 
            </div>

    {/* Uploading Company Logo */}
                    <div>
                        <label className="inpit-label" htmlFor="">Company Logo</label>                                             
                            <div>
                                <img alt="not fount" width={"240px"} height={"240px"} src={companyLogo} />
                                <br/>
                                <button type="button" className="del-btn" onClick={()=>setCompanyLogo(null)}>Remove</button>
                            </div>                                                                         
                        <input
                            style={{display: "none"}}
                            id = "uploadLogo"
                            type="file"
                            name="companyLogo"
                            onChange={(event) => {
                            setCompanyLogo(URL.createObjectURL(event.target.files[0]))
                            }}
                        />
                        <button className="upload-btn" type="file"><label htmlFor="submitLogo"><label htmlFor="uploadLogo">Upload Company Logo</label></label></button>
                        <input style={{display: 'none'}} id="submitLogo" type="submit"></input> 
                    </div>
            </div>

            <h2 className="sub-heading">Property Type</h2>
            <div className="property-type-con">
                <div className="property-type" style={{backgroundColor: `${residential.bg_color}`, color: `${residential.color}`}} onClick={onResidential}>Residential</div>
                <div className="property-type"  style={{backgroundColor: `${commercial.bg_color}`, color: `${commercial.color}`}} onClick={onCommercial}>Commercial</div>
                <div className="property-type" style={{backgroundColor: `${landPlot.bg_color}`, color: `${landPlot.color}`}} onClick={onLandPlot}>Land/Plot</div>
            </div>
            <div className="property-types-main-con">
                <h3>Select Property Type</h3>
                <div id="Residential-block" style={{display: `${residential.display}`}}>
                    <button style={{backgroundColor: `${residentialRent.bg_color}`, color: `${residentialRent.color}`}} onClick={onResidentialRent} className="select-property-btn">Rent</button>
                    <button style={{backgroundColor: `${residentialResale.bg_color}`, color: `${residentialResale.color}`}} onClick={onRisdentialResale} className="select-property-btn">Resale</button>
                    <button style={{backgroundColor: `${pg.bg_color}`, color: `${pg.color}`}} onClick={onPg} className="select-property-btn">Pg/Hostle</button>
                    <button style={{backgroundColor: `${flatmates.bg_color}`, color: `${flatmates.color}`}} onClick={onFlatmates} className="select-property-btn">Flatmates</button>
                </div>
                <div id="Commercial-block" style={{display: `${commercial.display}`}}>
                    <button style={{backgroundColor: `${commercialRent.bg_color}`, color: `${commercialRent.color}`}} onClick={onCommercialRent} className="select-property-btn">Rent</button>
                    <button style={{backgroundColor: `${sale.bg_color}`, color: `${sale.color}`}} onClick={onSale} className="select-property-btn">Sale</button>
                </div>
                <div id="Land/Plot-block" style={{display: `${landPlot.display}`}}>
                    <button style={{backgroundColor: `${landplotResale.bg_color}`, color: `${landplotResale.color}`}} onClick={onLandplotResale} className="select-property-btn">Resale</button>
                </div>                       
            </div>
            
            {propertyPath}
            <button style={{display:`${saveButton}`}} className="property-post-btn" onClick={() => setPropertyPath("")} >Close & Continue</button>
            
            <h2 className="sub-heading">Amenities</h2>
            <div className="amenities-container">
                {
                    amenities.map((each)=>{
                        return(
                            <div key={each} className="checkbox-con">
                                <input id={each} type="checkbox" className="check-box" value={each} />
                                <label className="checkbox-label" htmlFor={each}>{each}</label>                 
                            </div>
                        )
                    })
                };
            </div>
            
            <h2 className="sub-heading">About The Empyrean</h2>
            <div className="input-box">
                <label htmlFor="city" className="inpit-label">Property Status</label>
                <select name="cityName" id="city" onChange={(e)=> console.log(e)} className="input-field">
                    <option defaultValue="Please Choose..." hidden>Please Choose...</option>
                    <option className="dropdown-item" value="Bengaluru">Ready To Move</option>
                    <option className="dropdown-item" value="Bengaluru">Wait for Move</option>
                </select>
            </div>
            <div className="input-box">
                <label className="inpit-label" htmlFor="name">launch date</label>
                <input id="name" type="date" className="input-field" placeholder="Enter Here..." />                
            </div>
            <div className="input-box">
                <label className="inpit-label" htmlFor="name">Possession by</label>
                <input id="name" type="date" className="input-field" placeholder="Enter Here..." />                
            </div>
            <div className="input-box">
                <label className="inpit-label" htmlFor="name">Total units</label>
                <input id="name" type="text" className="input-field" placeholder="Enter Here..." />                
            </div>
            <div className="input-box">
                <label className="inpit-label" htmlFor="name">Project Area</label>
                <input id="name" type="text" className="input-field" placeholder="Enter Here..." />                
            </div>                   
            <div className="hori-con">
                <div className="radio-con">
                            <label className="inpit-label">Occupancy Certificate</label>
                                <div className="radios-container">
                                    <div className="radio-con" style={{marginRight: "80px"}}>
                                        <label className="inpit-label" htmlFor="">Yes</label>
                                        <input id="name" type="radio" className="select-radio-input" name="wall" />  
                                    </div>
                                    <div className="radio-con">
                                        <label className="inpit-label" htmlFor="">No</label> 
                                        <input id="name" type="radio" className="select-radio-input" name="wall" /> 
                                    </div>                                   
                                </div>    
                </div> 
                <div className="radio-con">
                                <label className="inpit-label">Commencement Certificate</label>
                                <div className="radios-container">
                                    <div className="radio-con" style={{marginRight: "80px"}}>
                                        <label className="inpit-label" htmlFor="">Yes</label>
                                        <input id="name" type="radio" className="select-radio-input" name="Commencement" />  
                                    </div>
                                    <div className="radio-con">
                                        <label className="inpit-label" htmlFor="">No</label> 
                                        <input id="name" type="radio" className="select-radio-input" name="Commencement" /> 
                                    </div>                                   
                                </div> 
                </div>
            </div>
            <div className="input-box">
                <label className="inpit-label" style={{fontSize: "25px", marginLeft:"20px"}} htmlFor="aboutProperty">About Property</label>
                <textarea type="text" id="aboutProperty" rows="10" cols="200"  className="textarea-con" placeholder="Text Here..." />
            </div>

            <h2 className="sub-heading">Specifications of The Empyrean</h2>
            <div id="hori-con">
                <div style={{marginRight: "100px"}}>
                    <h2>Type of Floor</h2>
                    <div className="input-box">
                            <label htmlFor="floor_type" className="user-lable">Master Bedroom</label>
                            <select name="floorType" onChange={(e)=> console.log(e)} id="floor_type" className="input-field">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Vitrified Tiles">Vitrified Tiles</option>
                                <option className="dropdown-item" value="Mosaic">Mosaic</option>
                                <option className="dropdown-item" value="Marble/Granite">Marble/Granite</option> 
                                <option className="dropdown-item" value="Wooden">Laminated Wooden Flooring</option>
                                <option className="dropdown-item" value="Cement">Cement</option>  
                                <option className="dropdown-item" value="Carpeting">Carpeting</option> 
                                <option className="dropdown-item" value="Hardwood Flooring">Hardwood Flooring</option> 
                                <option className="dropdown-item" value="Bamboo Flooring">Bamboo Flooring</option> 
                                <option className="dropdown-item" value="Cork Flooring">Cork Flooring</option> 
                                <option className="dropdown-item" value="Laminate Flooring">Laminate Flooring</option> 
                                <option className="dropdown-item" value="Ceramic or Stone Tile">Ceramic or Stone Tile</option> 
                                <option className="dropdown-item" value="Area Rugs">Area Rugs</option> 
                                <option className="dropdown-item" value="Rubber Flooring">Rubber Flooring</option> 
                                <option className="dropdown-item" value="Vinyl or Linoleum Flooring">Vinyl or Linoleum Flooring</option>                           
                            </select>
                    </div>
                    <div className="input-box">
                            <label htmlFor="floor_type" className="user-lable">Balcony</label>
                            <select name="floorType" onChange={(e)=> console.log(e)} id="floor_type" className="input-field">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Vitrified Tiles">Vitrified Tiles</option>
                                <option className="dropdown-item" value="Mosaic">Mosaic</option>
                                <option className="dropdown-item" value="Marble/Granite">Marble/Granite</option> 
                                <option className="dropdown-item" value="Wooden">Laminated Wooden Flooring</option>
                                <option className="dropdown-item" value="Cement">Cement</option>                            
                            </select>
                    </div>
                    <div className="input-box">
                            <label htmlFor="floor_type" className="user-lable">Kitchen</label>
                            <select name="floorType" onChange={(e)=> console.log(e)} id="floor_type" className="input-field">
                                        <option value="" hidden>Please Choose...</option>
                                        <option className="dropdown-item" value="Vitrified Tiles">Vitrified Tiles</option>
                                        <option className="dropdown-item" value="Mosaic">Mosaic</option>
                                        <option className="dropdown-item" value="Marble/Granite">Marble/Granite</option> 
                                        <option className="dropdown-item" value="Wooden">Laminated Wooden Flooring</option>
                                        <option className="dropdown-item" value="Cement">Cement</option>                            
                            </select>
                    </div>
                    <div className="input-box">
                            <label htmlFor="floor_type" className="user-lable">Other Bedroom</label>
                            <select name="floorType" onChange={(e)=> console.log(e)} id="floor_type" className="input-field">
                            <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Vitrified Tiles">Vitrified Tiles</option>
                                <option className="dropdown-item" value="Mosaic">Mosaic</option>
                                <option className="dropdown-item" value="Marble/Granite">Marble/Granite</option> 
                                <option className="dropdown-item" value="Wooden">Laminated Wooden Flooring</option>
                                <option className="dropdown-item" value="Cement">Cement</option>  
                                <option className="dropdown-item" value="Carpeting">Carpeting</option> 
                                <option className="dropdown-item" value="Hardwood Flooring">Hardwood Flooring</option> 
                                <option className="dropdown-item" value="Bamboo Flooring">Bamboo Flooring</option> 
                                <option className="dropdown-item" value="Cork Flooring">Cork Flooring</option> 
                                <option className="dropdown-item" value="Laminate Flooring">Laminate Flooring</option> 
                                <option className="dropdown-item" value="Ceramic or Stone Tile">Ceramic or Stone Tile</option> 
                                <option className="dropdown-item" value="Area Rugs">Area Rugs</option> 
                                <option className="dropdown-item" value="Rubber Flooring">Rubber Flooring</option> 
                                <option className="dropdown-item" value="Vinyl or Linoleum Flooring">Vinyl or Linoleum Flooring</option>                         
                            </select>
                    </div>
                    <div className="input-box">
                            <label htmlFor="floor_type" className="user-lable">Living/Dining</label>
                            <select name="floorType" onChange={(e)=> console.log(e)} id="floor_type" className="input-field">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Vitrified Tiles">Vitrified Tiles</option>
                                <option className="dropdown-item" value="Mosaic">Mosaic</option>
                                <option className="dropdown-item" value="Marble/Granite">Marble/Granite</option> 
                                <option className="dropdown-item" value="Wooden">Laminated Wooden Flooring</option>
                                <option className="dropdown-item" value="Cement">Cement</option>                            
                            </select>
                    </div>
                    <div className="input-box">
                            <label htmlFor="floor_type" className="user-lable">Toilet</label>
                            <select name="floorType" onChange={(e)=> console.log(e)} id="floor_type" className="input-field">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Vitrified Tiles">Vitrified Tiles</option>
                                <option className="dropdown-item" value="Mosaic">Mosaic</option>
                                <option className="dropdown-item" value="Marble/Granite">Marble/Granite</option> 
                                <option className="dropdown-item" value="Wooden">Laminated Wooden Flooring</option>
                                <option className="dropdown-item" value="Cement">Cement</option>     
                                <option className="dropdown-item" value="Anti Skid Tiles">Anti Skid Tiles</option>                       
                                Anti Skid Tiles
                            </select>
                    </div>
                </div>

                <div style={{marginRight: "100px"}}>
                        <h2>Fittings</h2>
                        <div className="input-box">
                            <label htmlFor="floor_type" className="user-lable">Kitchen</label>
                            <select name="floorType" onChange={(e)=> console.log(e)} id="floor_type" className="input-field">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Granite / Marble Sink">Granite / Marble Sink</option>
                                <option className="dropdown-item" value="Stainless Steel(SS) Sink">Stainless Steel(SS) Sink</option>
                                <option className="dropdown-item" value="Quartz Sink">Quartz Sink</option> 
                                <option className="dropdown-item" value="Granite Platform with SS Double Bowl Sink">Granite Platform with SS Double Bowl Sink</option>                                                       
                            </select>
                        </div>
                        <div className="input-box">
                            <label htmlFor="floor_type" className="user-lable">Internal Door</label>
                            <select name="floorType" onChange={(e)=> console.log(e)} id="floor_type" className="input-field">
                            <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="TIMBER/WOOD DOORS">TIMBER/WOOD DOORS</option>
                                <option className="dropdown-item" value="BATTENED AND LEDGED DOORS">BATTENED AND LEDGED DOORS</option>
                                <option className="dropdown-item" value="FRAMED AND PANELED DOORS">FRAMED AND PANELED DOORS</option> 
                                <option className="dropdown-item" value="FLUSH DOORS">FLUSH DOORS</option>
                                <option className="dropdown-item" value="GLASS DOORS">GLASS DOORS</option>  
                                <option className="dropdown-item" value="STEEL DOORS">STEEL DOORS</option> 
                                <option className="dropdown-item" value="PVC DOORS">PVC DOORS</option> 
                                <option className="dropdown-item" value="FIBERGLASS DOORS"> FIBERGLASS DOORS</option> 
                                <option className="dropdown-item" value="FIBER REINFORCED PLASTICS DOORS"> FIBER REINFORCED PLASTICS DOORS</option> 
                                <option className="dropdown-item" value="ALUMINUM DOORS"> ALUMINUM DOORS</option> 
                                <option className="dropdown-item" value="BAMBOO-JUTE COMPOSITE DOORS">BAMBOO-JUTE COMPOSITE DOORS</option>
                            </select>
                        </div>
                        <div className="input-box">
                            <label htmlFor="floor_type" className="user-lable">Electrical</label>
                            <select name="floorType" onChange={(e)=> console.log(e)} id="floor_type" className="input-field">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="EMT Fittings">EMT Fittings</option>
                                <option className="dropdown-item" value="Rigid Fittings">Rigid Fittings</option>
                                <option className="dropdown-item" value="Flex AC/MC Fittings">Flex AC/MC Fittings</option> 
                                <option className="dropdown-item" value="Liquid Tight Fittings"> Liquid Tight Fittings</option>
                                <option className="dropdown-item" value="EMT and Rigid Elbows and Nipples">EMT and Rigid Elbows and Nipples</option>  
                                <option className="dropdown-item" value="Cast Device Boxes and Covers">Cast Device Boxes and Covers</option>  
                                <option className="dropdown-item" value="Conduit Supports, Straps, Clamps & Hangers">Conduit Supports, Straps, Clamps & Hangers</option>
                                <option className="dropdown-item" value="Concealed Copper Wiring with Modular Switches">Concealed Copper Wiring with Modular Switches</option>                        
                            </select>
                        </div>
                        <div className="input-box">
                            <label htmlFor="floor_type" className="user-lable">Main Door</label>
                            <select name="floorType" onChange={(e)=> console.log(e)} id="floor_type" className="input-field">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="TIMBER/WOOD DOORS">TIMBER/WOOD DOORS</option>
                                <option className="dropdown-item" value="BATTENED AND LEDGED DOORS">BATTENED AND LEDGED DOORS</option>
                                <option className="dropdown-item" value="FRAMED AND PANELED DOORS">FRAMED AND PANELED DOORS</option> 
                                <option className="dropdown-item" value="FLUSH DOORS">FLUSH DOORS</option>
                                <option className="dropdown-item" value="GLASS DOORS">GLASS DOORS</option>  
                                <option className="dropdown-item" value="STEEL DOORS">STEEL DOORS</option> 
                                <option className="dropdown-item" value="PVC DOORS">PVC DOORS</option> 
                                <option className="dropdown-item" value="FIBERGLASS DOORS"> FIBERGLASS DOORS</option> 
                                <option className="dropdown-item" value="FIBER REINFORCED PLASTICS DOORS"> FIBER REINFORCED PLASTICS DOORS</option> 
                                <option className="dropdown-item" value="ALUMINUM DOORS"> ALUMINUM DOORS</option> 
                                <option className="dropdown-item" value="BAMBOO-JUTE COMPOSITE DOORS">BAMBOO-JUTE COMPOSITE DOORS</option>
                            </select>
                        </div>
                </div>

                <div style={{marginRight: "40px"}}>
                        <h2>Walls</h2>
                        <div className="input-box">
                            <label htmlFor="floor_type" className="user-lable">Interior</label>
                            <select name="floorType" onChange={(e)=> console.log(e)} id="floor_type" className="input-field">
                                <option value="" hidden>Please Choose...</option>
                                <option className="dropdown-item" value="Matte Finish">Matte Finish</option>
                                <option className="dropdown-item" value="Textured Finish">Textured Finish</option>
                                <option className="dropdown-item" value="Satin Finish">Satin Finish</option> 
                                <option className="dropdown-item" value="Semi-gloss">Semi-gloss</option>  
                                <option className="dropdown-item" value="Eggshell Finish">Eggshell Finish</option>
                                <option className="dropdown-item" value="High-gloss Finish">High-gloss Finish</option>
                                <option className="dropdown-item" value="Super-matte - Speciality paints">Super-matte - Speciality paints</option>                                                    
                            </select>
                        </div>
                        <div className="input-box">
                            <label htmlFor="floor_type" className="user-lable">Exterior</label>
                            <select name="floorType" onChange={(e)=> console.log(e)} id="floor_type" className="input-field">
                                <option value="" hidden>Please Choose...</option>                    
                                <option className="dropdown-item" value="Matte Finish">Matte Finish</option>
                                <option className="dropdown-item" value="Textured Finish">Textured Finish</option>
                                <option className="dropdown-item" value="Satin Finish">Satin Finish</option> 
                                <option className="dropdown-item" value="Semi-gloss">Semi-gloss</option>  
                                <option className="dropdown-item" value="Eggshell Finish">Eggshell Finish</option>
                                <option className="dropdown-item" value="High-gloss Finish">High-gloss Finish</option>
                                <option className="dropdown-item" value="Super-matte - Speciality paints">Super-matte - Speciality paints</option>                                                    
                            </select>
                        </div>
                </div>
            </div>
{/* Uploading Property Images */}
            <h2 className="sub-heading">Adding Photos & Videos</h2>
            <div>
                <div className="images-container">   
                        {
                            selectedImage.map((eachImage)=>{
                                return(
                                    <div id={eachImage.imageId} style={{margin: "20px"}}>
                                        <img alt="not fount" width={"250px"} height={"250px"} src={eachImage.imageUrl} />
                                        <br />
                                        <button type="button" className="del-btn" onClick={()=>removeImage(eachImage)}>Remove</button>
                                    </div>
                                )
                            })
                        }                         
                </div>

                <input
                    style={{display: "none"}}
                            id = "uploadImage"
                            type="file"
                            name="myImage"
                            onChange={(event) => {
                            setSelectedImage( oldImages => [...oldImages, { imageId: oldImages.length  , imageUrl :(URL.createObjectURL(event.target.files[0]))}])
                    }}
                />
                <button className="upload-btn" type="file"><label htmlFor="submit"><label htmlFor="uploadImage">Upload Image</label></label></button>
                <input style={{display: 'none'}} id="submit" type="submit"></input>
            </div>                
{/* Uploading Property Video */}                   
            <div className="VideoInput">
                <button className="upload-btn" type="file"><label htmlFor="videoSubmit"><label htmlFor="uploadVideo">Upload Video</label></label></button>
                <input style={{display: 'none'}} id="videoSubmit" type="videoSubmit"></input>
                <input
                    ref={inputRef}
                    className="VideoInput_input"
                    type="file"
                    onChange={handleFileChange}
                    accept=".mov,.mp4"
                    style={{display: "none"}}
                    id = "uploadVideo"
                />                   
                {source && (
                    <video
                    className="VideoInput_video"
                    width="100%"
                    height={300}
                    controls
                    src={source}
                    />
                )}
                <div className="VideoInput_footer">{source || "Nothing selected"}</div>                            
            </div>
{/* Uploading Floor Plan */} 
            <h2 className="sub-heading">Upload Floor Plan</h2>
            <div>
                <label className="inpit-label" htmlFor="">Upload Floor Plan</label>                                                               
                    <div>                                  
                        <img alt="not fount" width={"240px"} height={"240px"} src={floorPlan} />
                        <br/>
                        <button type="button" className="del-btn" onClick={()=>setfloorPlan(null)}>Remove</button>
                    </div>                                                                       
                <input
                    style={{display: "none"}}
                    id = "FloorPlan"
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                        setfloorPlan(URL.createObjectURL(event.target.files[0]))
                    }}
                />
                <button className="upload-btn" type="file"><label htmlFor="submitFloorPlan"><label htmlFor="FloorPlan">Upload Floor Plan</label></label></button>
                <input style={{display: 'none'}} id="submitFloorPlan" type="submit"></input> 
            </div>                   
        </div>
    )
};

export default ApplicationForm;