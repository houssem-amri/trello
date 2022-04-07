import React, { useState } from "react";
import axios from "axios";
export default function Formu() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");

  const ChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    let data = {
      Email: Email,
      Password: Password,
      Address: Address,
      City: City,
    };

    console.log("here data", data);
    axios.post("http://localhost:3200/houssem", data).then((res) => {
      console.log(res.data.message);
    });
  };

  return (
    <div className="container">
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            onChange={(e) => ChangeEmail(e)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
