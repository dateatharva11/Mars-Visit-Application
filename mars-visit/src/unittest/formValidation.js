export const validate = (formData, stage) => {
  const newErrors = {};

  if (stage === 1) {
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.nationality) newErrors.nationality = 'Nationality is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
  }

  if (stage === 2) {
    if (!formData.departureDate) newErrors.departureDate = 'Departure Date is required';
    if (!formData.returnDate) newErrors.returnDate = 'Return Date is required';
    if (!formData.accommodation) newErrors.accommodation = 'Accommodation preference is required';
  }

  if (stage === 3) {
    if (!formData.healthDeclaration) newErrors.healthDeclaration = 'Health Declaration is required';
    if (!formData.emergencyContactName) newErrors.emergencyContactName = 'Emergency Contact Name is required';
    if (!formData.emergencyContactPhone) newErrors.emergencyContactPhone = 'Emergency Contact Phone is required';
    if (!/^\d{10}$/.test(formData.emergencyContactPhone)) newErrors.emergencyContactPhone = 'Phone must be 10 digits';
  }

  return newErrors;
};
