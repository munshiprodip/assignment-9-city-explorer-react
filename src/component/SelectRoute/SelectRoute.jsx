import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FakeData } from "../../FakeData/FakeData";
import Ride from "../Ride/Ride";
import GoogleMap from "../GoogleMap/GoogleMap"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SelectRoute = () => {
  const { category } = useParams();

  const [routeLocation, setRouteLocation] = useState([])
  const [routeRide, setRouteRide] = useState([])
  const [isSearched, setIsSearched] = useState(()=>false)
  const [searchInput, setSearchInput] = useState({})
  
  const [ startDate, setStartDate ] = useState(new Date());

  useEffect(()=>{
    const data = FakeData;
    setRouteLocation(data.location)
    setRouteRide(data.ride.filter(rd => rd.type===category))
  },[category])

  const searchRideRoute = (e) =>{
    e.preventDefault()
    setIsSearched(true);
    console.log(e)
  }

  const handleSearchInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSearchInput({
      ...searchInput,
      [name]:value,
    })

  }


  return (
    <div className="container">
      <hr />
      <div className="row">
        <div className="col-md-3 card">
          {
            isSearched?
            <div>
              <div className="card bg-danger mt-4 text-center">
                <h3>{searchInput?.from}</h3>
                <h3>{searchInput?.to}</h3>
              </div>
              {
                routeRide.map((rideRoute, i) => <Ride key={i} category={category} rideRoute={rideRoute}></Ride>)
              }
            </div>
            :
            <form className="form" onSubmit={searchRideRoute}>
              <h5 className="mb-3">Search your destination</h5>
              <div className="form-group">
                
              <label>Date</label>
                <DatePicker className="form-control col-12" selected={startDate} onChange={date => setStartDate(date)} />
              </div>
              <div className="form-group">
                <label>Pick from</label>
                <select className="form-control" onChange={handleSearchInput} name="from" required>
                  <option value="">Select starting point</option>
                  {
                    routeLocation.map((rl, i) => <option key={i} value={rl}>{ rl }</option>)
                  }
                </select>
              </div>
              <div className="form-group">
                <label>Pick To</label>
                <select className="form-control" onChange={handleSearchInput} name="to" required>
                  <option value="">Select your destination</option>
                  {
                    routeLocation.map((rl, i) => <option key={i} value={rl}>{ rl }</option>)
                  }
                </select>
              </div>
              <div className="form-group">
                <input
                  className="btn btn-primary btn-block"
                  type="submit"
                  value="Find Route"
                />
              </div>
            </form>
          }
          
        </div>

        <div className="col-md-9">
          <GoogleMap></GoogleMap>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.410381852472!2d89.70117571499048!3d24.227421484356423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fde0a604c0a259%3A0xc3f1901ce95b20ad!2sKhwaja%20Yunus%20Ali%20Medical%20College%20and%20Hospital!5e0!3m2!1sen!2sbd!4v1616096427983!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%", height: "500px" }}
            allowFullScreen=""
            loading="lazy"
            title="kyamch"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
};

export default SelectRoute;
