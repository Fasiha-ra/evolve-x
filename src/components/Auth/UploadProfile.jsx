import React, { useState, useRef } from "react";
import { ProfileWrap } from "./Profile.styles";
import Icon from "../../assets/authentication/profile.png";
import TextField from "../TextField/TextField";
import Button from "../Button/index";
import { useNavigate } from "react-router-dom";

const UploadProfile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    designation: "Sr. Analyst",
    corporateEmail: "",
    employeeId: "",
    personalEmail: "",
    contactNumber: "",
    city: "",
    country: "",
    profileImage: null,
  });

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("file", file);
      setFormData((prevData) => ({
        ...prevData,
        profileImage: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard')
    console.log("Form Data:", formData);
  };

  return (
    <ProfileWrap>
      <div className="container">
        <div className="profile">
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {!formData.profileImage ? (
            <img src={Icon} alt="profileIcon" />
          ) : (
            <img src={formData.profileImage} alt="profile" />
          )}
          <button
            style={{ color: "white" }}
            onClick={() => fileInputRef.current.click()}
          >
            Upload Profile
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid">
            <TextField
              className="input-field"
              label="First Name *"
              name="firstName"
              type="text"
              placeholder="Mehra"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <TextField
              className="input-field"
              label="Last Name *"
              name="lastName"
              type="text"
              placeholder="Anish"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {/* <Select /> */}
            <div className="selectHolder">
              <label htmlFor="Designation">Designation *</label>

              <select name="designation"
                id="designation"
                value={formData.designation}
                onChange={handleInputChange}>
                <option value="Analyst 1">Sr. Analyst</option>
                <option value="Analyst 2">Analyst 1</option>
                <option value="Analyst 3">Analyst 2</option>
                <option value="Analyst 4">Analyst 3</option>
              </select>
            </div>
            <TextField
              className="input-field"
              label="Corporate E-mail ID *"
              name="corporateEmail"
              type="email"
              placeholder="Aanishmehra@tcs.in"
              value={formData.corporateEmail}
              onChange={handleInputChange}
            />
            <TextField
              className="input-field"
              label="Employee Id  *"
              name="employeeId"
              type="text"
              placeholder="ASDFGHJL1234567"
              value={formData.employeeId}
              onChange={handleInputChange}
            />
            <TextField
              className="input-field"
              label="Personal E-mail ID *"
              name="personalEmail"
              type="email"
              placeholder="anishmehra85@gmail.com"
              value={formData.personalEmail}
              onChange={handleInputChange}
            />
            <TextField
              className="input-field"
              label="Contact Number *"
              name="contactNumber"
              type="number"
              placeholder="8756349867"
              value={formData.contactNumber}
              onChange={handleInputChange}
            />
            <TextField
              className="input-field"
              label="City *"
              name="city"
              type="text"
              placeholder="Mumbai"
              value={formData.city}
              onChange={handleInputChange}
            />
            <TextField
              className="input-field"
              label="Country *"
              name="country"
              type="text"
              placeholder="India"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="btn">
            <Button width="172px" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </ProfileWrap>
  );
};

export default UploadProfile;
