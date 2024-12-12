import React from 'react';

const Stage3 = ({ formData, handleChange, errors }) => (
  <div className="container">
    <h2 className="text-secondary mb-4">Stage 3: Health and Safety</h2>
    <form>
      <div className="mb-3">
        <label className="form-label">Health Declaration:</label>
        <select
          className={`form-select ${errors.healthDeclaration ? 'is-invalid' : ''}`}
          name="healthDeclaration"
          value={formData.healthDeclaration}
          onChange={handleChange}
        >
          <option value="">Select Health Declaration</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        {errors.healthDeclaration && <div className="invalid-feedback">{errors.healthDeclaration}</div>}
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Emergency Contact Name:</label>
          <input
            type="text"
            className={`form-control ${errors.emergencyContactName ? 'is-invalid' : ''}`}
            name="emergencyContactName"
            value={formData.emergencyContactName}
            onChange={handleChange}
          />
          {errors.emergencyContactName && <div className="invalid-feedback">{errors.emergencyContactName}</div>}
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Emergency Contact Phone:</label>
          <input
            type="tel"
            className={`form-control ${errors.emergencyContactPhone ? 'is-invalid' : ''}`}
            name="emergencyContactPhone"
            value={formData.emergencyContactPhone}
            onChange={handleChange}
          />
          {errors.emergencyContactPhone && <div className="invalid-feedback">{errors.emergencyContactPhone}</div>}
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Medical Conditions (if any):</label>
        <textarea
          className="form-control"
          name="medicalConditions"
          rows="4"
          value={formData.medicalConditions}
          onChange={handleChange}
        />
      </div>
    </form>
  </div>
);

export default Stage3;
