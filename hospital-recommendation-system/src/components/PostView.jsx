import React, { useState } from 'react';
import './PostView.css';


const PostView = () => {

  const [city, setCity] = useState("");
  const [hospital, setHospital] = useState("");
  const [patientStatus, setPatientStatus] = useState("");
  const [admissionDate, setAdmissionDate] = useState("");
  const [dischargeDate, setDischargeDate] = useState("");


  return (
    <div className="post-view-container">
      <div className='row mt-5 '>
        <div className='col-lg-4 col-sm-12 col-md-6'>
          <h2> Post a Review </h2>
        </div>
        <div className='col-lg-8 col-sm-12 col-md-6 border-3 border-start border-danger'>
          <h5>
            Note: You must provide a legit Supportive Document and an ID of patient against your review
          </h5>
        </div>
      </div>


      <div className='row d-flex mt-5'>
        <div className='col-lg-4 col-sm-12'>
          <div>
            <label style={{ width: '100px' }}> City: </label>
          </div>

          <div>
            <select className='select p-2' value={city} onchange={(e) => setCity(e.target.value)} >
              <option value=""> Select City </option>
              <option value="Kolkata"> Kolkata </option>
              <option value="Mumbai"> Mumbai </option>
              <option value="Pune"> Pune </option>
              <option value="Delhi"> Delhi </option>
              <option value="Hyderabad"> Hyderabad </option>
              <option value="Ahmedabad"> Ahmedabad </option>
              <option value="Vellore"> Vellore </option>
              <option value="Jaipur"> Jaipur </option>
              <option value="Chennai"> Chennai </option>
              <option value="Bangalore"> Bangalore </option>
              <option value="Kerala"> Kerala </option>
            </select>
          </div>
        </div>

        <div className='col-lg-4 col-sm-12'>
          <div>
            <label> Hospital</label>
          </div>

          <div>
            <select className='select p-2' value={hospital} onChange={(e) => setHospital(e.target.value)}>
              <option value="">Select a Hospital</option>
              <option value="Hospital A">Hospital A</option>
              <option value="Hospital B">Hospital B</option>
              <option value="Hospital C">Hospital C</option>
            </select>
          </div>

        </div>



        <div className='col-lg-4 col-sm-12'>

          <div>
            <label>Are you a patient?</label>
          </div>

          <div>
            <select className="select p-2" value={patientStatus} onChange={(e) => setPatientStatus(e.target.value)}>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-lg-6 col-sm-12'>

          <div>
            <label >Date of Admission: <span className="text-danger-500">*</span></label>
          </div>

          <div>
            <input type="date" className=" select w-full p-2 border rounded" value={admissionDate}
              onChange={(e) => setAdmissionDate(e.target.value)} />
          </div>

        </div>


        <div className='col-lg-6 col-sm-12'>

          <div>
            <label >Date of Discharge: <span className="text-danger-500">*</span></label>
          </div>

          <div>
            <input type="date" className=" select w-full p-2 border rounded" value={dischargeDate}
              onChange={(e) => setDischargeDate(e.target.value)} />
          </div>

        </div>
      </div>

    </div>

  );
};


export default PostView;

