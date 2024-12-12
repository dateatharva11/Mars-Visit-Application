import React from 'react';

const Stage2 = ({ formData, handleChange, errors }) => (
  <div className="container">
    <h2 className="text-secondary mb-4">Stage 2: Travel Preferences</h2>
    <form>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Departure Date:</label>
          <input
            type="date"
            className={`form-control ${errors.departureDate ? 'is-invalid' : ''}`}
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
          />
          {errors.departureDate && <div className="invalid-feedback">{errors.departureDate}</div>}
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label">Return Date:</label>
          <input
            type="date"
            className={`form-control ${errors.returnDate ? 'is-invalid' : ''}`}
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
          />
          {errors.returnDate && <div className="invalid-feedback">{errors.returnDate}</div>}
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Accommodation Preference:</label>
        <select
          className={`form-select ${errors.accommodation ? 'is-invalid' : ''}`}
          name="accommodation"
          value={formData.accommodation}
          onChange={handleChange}
        >
          <option value="">Select Accommodation</option>
          <option value="spaceHotel">Space Hotel</option>
          <option value="martianBase">Martian Base</option>
        </select>
        {errors.accommodation && <div className="invalid-feedback">{errors.accommodation}</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Special Requests:</label>
        <textarea
          className="form-control"
          name="specialRequests"
          rows="4"
          value={formData.specialRequests}
          onChange={handleChange}
        />
      </div>
    </form>
  </div>
);

export default Stage2;
