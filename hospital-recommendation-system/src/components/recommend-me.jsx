import './recommend-me.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect  } from 'react';

const Dropdown = () => {
  
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedTreatment, setSelectedTreatment] = useState("All Treatments");
  const [selectedBudget, setSelectedBudget] = useState("All Budgets");
  const [selectedHospitalType, setSelectedType] = useState("All Types");


  // State for loader and hospital data
  const [loading, setLoading] = useState(false);
  const [hospitalData, setHospitalData] = useState([]);
  const [recommendations, setRecommendations] = useState("");  // Adjusted to be a string

  const cities = [
    "All Cities",
    "Kolkata",
    "Mumbai",
    "Pune",
    "Delhi",
    "Hyderabad",
    "Ahmedabad",
    "Vellore",
    "Jaipur",
    "Chennai",
    "Bangalore",
    "Kerala",    
  ];


  
  const treatment = [
    "All Treatments",
    "Abdominal Aortic Aneurysm",
    "Abdominoperineal Resection",
    "ACL Reconstruction Surgery",
    "ACL Surgery",
    "Acne",
    "Acute intervention after birth (TGA, PDA opening)",
    "Acute peritoneal dialysis",
    "Acute Renal Failure",
    "Addition and removal of blood components as needed",
    "Adenoidectomy",
    "Adolescent & Menopausal Counselling",
    "Adrenal Disorders",
    "Adrenal Tumours",
    "Adrenal Venous Sampling",
    "Advance fixation techniques for complex and neglected trauma fracture",
    "Advanced Gynaecological Laparoscopic Surgery",
    "Advanced Neonatal Intensive Care Unit (Level I, II, III)",
    "Amblyopia",
    "Amputation",
    "Anal Fissure Surgery",
    "Anasplastogy prosthesis like Eye, Ear, Nose and other surgical defect on the face",
    "Aneurysms",
    "Angina Pectoris",
    "Angiography",
    "Angioplasty",
    "Ankle Arthroscopy",
    "Ankle Fracture Surgery",
    "Ankle Fusion Surgery",
    "Anorectal Manometry",
  ];


  const budget = [
    "All Budgets",
    "Within 50 Thousands",
    "Within 1 Lakh",
    "Within 2 Lakhs",
    "Within 5 Lakhs",
    "Within 7 Lakhs",
    "Within 9 Lakhs",
    "Within 10 Lakhs",
    "Within 15 Lakhs",
    "Within 20 Lakhs",
    "Within 25 Lakhs",
    "Within 30 Lakhs",
    "Within 35 Lakhs",
    "Within 40 Lakhs",
    "Within 45 Lakhs",
    "Within 50 Lakhs",
  ];

  
  const hospitaltype = [
    "All Types",
    "Government",
    "Private",
    "Charitable",
  ];

  // const handleCityChange = (event) => {
  //   setSelectedCity(event.target.value);
  // };


  // const handleTreatmentChange = (event) => {
  //   setSelectedTreatment(event.target.value);
  // };

  // const handleBudgetChange = (event) => {
  //   setSelectedBudget(event.target.value);
  // };


  // const handleHospitalTypeChange = (event) => {
  //   setSelectedType(event.target.value);
  // };



    // Handle change for each select element
    const handleSelectChange = (event, setter) => {
      setter(event.target.value);
    };
  
    // useEffect for fetching and filtering hospital data
    useEffect(() => {
      const fetchHospitalData = () => {
        setLoading(true);
  
        // Simulating an API call with a timeout
        setTimeout(() => {
          setLoading(false);
  
          // Example hospital data (replace with actual data or API response)
          const fetchedData = [
            { name: 'Hospital A', city: 'Mumbai', type: 'Private', budget: 'Within 2 Lakhs', treatment: 'Abdominal Aortic Aneurysm' },
            { name: 'Hospital B', city: 'Delhi', type: 'Govt', budget: 'Within 5 Lakhs', treatment: 'Acne' },
            { name: 'Hospital C', city: 'Kolkata', type: 'Private', budget: 'Within 1 Lakh', treatment: 'Angioplasty' },
          ];
  
          // Filter the hospital data based on user selections
          const filteredData = fetchedData.filter(hospital => {
            return (
              (selectedTreatment === 'All Treatments' || hospital.treatment === selectedTreatment) &&
              (selectedCity === 'All Cities' || hospital.city === selectedCity) &&
              (selectedBudget === 'All Budgets' || hospital.budget === selectedBudget) &&
              (selectedHospitalType === 'All Types' || hospital.type === selectedHospitalType)
            );
          });
  
          setHospitalData(filteredData);
          // Setting recommendations message based on filtered data
          setRecommendations(filteredData.length > 0 ? 'Here are some recommended hospitals based on your criteria.' : 'No recommendations found');
        }, 2000);
      };
  
      // Fetch hospital data when dropdown values change
      fetchHospitalData();
    }, [selectedTreatment, selectedCity, selectedBudget, selectedHospitalType]); // Re-run whenever dropdown values change

    

  

    return (
      <div className="col-sm-12 col-lg-12 mt-5">
        <div className="row">
          <div className="col-12 p-col-left p-col-right">
            <div className="row m-1 p-1 aos-init aos-animate" data-aos="fade-right" style={{ width: '100%', borderRadius: '5px' }}>
              {/* Treatment Dropdown */}
              <div className="form-group col-12 col-sm-6 col-md-6 col-lg-3" data-select2-id="859">
                <label htmlFor="treatname">
                  Treatment <span style={{ color: 'red' }}>*</span>
                </label>
                <select
                  name="treatname"
                  className="form-group col-12 col-sm-6 col-md-6 col-lg-3"
                  id="treatname"
                  value={selectedTreatment}
                  onChange={(e) => handleSelectChange(e, setSelectedTreatment)}
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  {treatment.map((treatment, index) => (
                    <option key={index} value={treatment}>
                      {treatment}
                    </option>
                  ))}
                </select>
              </div>
  
              {/* City Dropdown */}
              <div className="form-group col-12 col-sm-6 col-md-6 col-lg-3">
                <label htmlFor="city">City</label>
                <select
                  id="city"
                  name="city"
                  value={selectedCity}
                  onChange={(e) => handleSelectChange(e, setSelectedCity)}
                >
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
  
              {/* Budget Dropdown */}
              <div className="form-group col-12 col-sm-6 col-md-6 col-lg-3">
                <label htmlFor="budget">Budget</label>
                <select
                  id="budget"
                  name="budget"
                  value={selectedBudget}
                  onChange={(e) => handleSelectChange(e, setSelectedBudget)}
                >
                  {budget.map((budget, index) => (
                    <option key={index} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>
  
              {/* Hospital Type Dropdown */}
              <div className="form-group col-12 col-sm-6 col-md-6 col-lg-3">
                <label htmlFor="type">Hospital Type (Govt or Private)</label>
                <select
                  id="type"
                  name="type"
                  value={selectedHospitalType}
                  onChange={(e) => handleSelectChange(e, setSelectedType)}
                >
                  {hospitaltype.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
  
            {/* Loader */}
            <div id="loader" style={{ display: loading ? 'block' : 'none', margin: '0 auto' }}>
              <img src="https://dilseheal.com/images/Spinner.gif" alt="Loading..." />
            </div>
  
            {/* Recommendations */}
            {recommendations && (
              <div className="text-center d-flex justify-content-center" style={{ width: '100%' }}>
                <p>{recommendations}</p>
              </div>
            )}
  
            {/* Hospital Data Placeholder */}
            <ul className="row hosData" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginRight: '8px' }}>
              {hospitalData.map((hospital, index) => (
                <li key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <div>{hospital.name}</div>
                  <div>{hospital.city}</div>
                  <div>{hospital.type}</div>
                  <div>{hospital.budget}</div>
                  <div>{hospital.treatment}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
export default Dropdown;
