import { NavLink } from 'react-router-dom';
import './propertyDetailsFrom.css';


const PgDetails = () => {
    return(
        <div className="details-con">
            <h1 className="property-heading">Fill the PG/Hostle Details</h1> 
            <div className="radio-inputs-container">
            <div className="radio-input-con">
              <label className="user-lable" htmlFor="radioinput" >Single</label>
              <input id="radioinput" type="radio" value="builder" className="user-radio-input" name="user" />
            </div>
            <div className="radio-input-con">
              <label className="user-lable" htmlFor="radio" >Double</label>
              <input id="radio" type="radio" value="agent" className="user-radio-input" name="user" />
            </div>
            <div className="radio-input-con">
              <label className="user-lable" htmlFor="radioinput" >Three Shearing</label>
              <input id="radioinput" type="radio" value="builder" className="user-radio-input" name="user" />
            </div>
            <div className="radio-input-con">
              <label className="user-lable" htmlFor="radio" >Four Shearing</label>
              <input id="radio" type="radio" value="agent" className="user-radio-input" name="user" />
            </div>
          </div>
          <button className="property-post-btn">Save & Continue</button>
          
        </div>     
    )
};

export default PgDetails;