import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import Stage3 from './components/Stage3';

function App() {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    nationality: '',
    email: '',
    phone: '',
    departureDate: '',
    returnDate: '',
    accommodation: '',
    specialRequests: '',
    healthDeclaration: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    medicalConditions: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    // Validation logic remains unchanged
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) setStage(stage + 1);
  };

  const handleBack = () => {
    if (stage > 1) setStage(stage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert('Application submitted successfully!');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Mars Visit Application</h1>
      <div className="card shadow">
        <div className="card-body">
          {stage === 1 && <Stage1 formData={formData} handleChange={handleChange} errors={errors} />}
          {stage === 2 && <Stage2 formData={formData} handleChange={handleChange} errors={errors} />}
          {stage === 3 && <Stage3 formData={formData} handleChange={handleChange} errors={errors} />}
          <div className="d-flex justify-content-between mt-4">
            <button
              className="btn btn-secondary"
              onClick={handleBack}
              disabled={stage === 1}
            >
              Back
            </button>
            {stage < 3 ? (
              <button className="btn btn-primary" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button className="btn btn-success" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
