import React from 'react';

const Stage1 = ({ formData, handleChange, errors }) => (
  <div className="container">
    <h2 className="text-secondary mb-4">Stage 1: Personal Information</h2>
    <form>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Full Name:</label>
          <input
            type="text"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Date of Birth:</label>
          <input
            type="date"
            className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Nationality:</label>
          <input
            type="text"
            className={`form-control ${errors.nationality ? 'is-invalid' : ''}`}
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
          {errors.nationality && <div className="invalid-feedback">{errors.nationality}</div>}
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Phone:</label>
        <input
          type="tel"
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>
    </form>
  </div>
);

export default Stage1;
