const { validate } = require('./App');

describe('Form Validation', () => {
  
  // Stage 1 validation tests
  describe('Stage 1 Validation', () => {
    it('should return errors if Full Name is missing', () => {
      const formData = {
        fullName: '',
        dob: '1990-01-01',
        nationality: 'American',
        email: 'test@example.com',
        phone: '1234567890',
        departureDate: '',
        returnDate: '',
        accommodation: '',
        specialRequests: '',
        healthDeclaration: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
        medicalConditions: '',
      };
      
      const errors = validate(1, formData); // Assume validate takes stage number and form data
      expect(errors.fullName).toBe('Full Name is required');
    });

    it('should return errors if Email is invalid', () => {
      const formData = {
        fullName: 'John Doe',
        dob: '1990-01-01',
        nationality: 'American',
        email: 'invalid-email',
        phone: '1234567890',
        departureDate: '',
        returnDate: '',
        accommodation: '',
        specialRequests: '',
        healthDeclaration: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
        medicalConditions: '',
      };
      
      const errors = validate(1, formData);
      expect(errors.email).toBe('Invalid email format');
    });

    it('should return errors if Phone is invalid', () => {
      const formData = {
        fullName: 'John Doe',
        dob: '1990-01-01',
        nationality: 'American',
        email: 'test@example.com',
        phone: '12345',
        departureDate: '',
        returnDate: '',
        accommodation: '',
        specialRequests: '',
        healthDeclaration: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
        medicalConditions: '',
      };
      
      const errors = validate(1, formData);
      expect(errors.phone).toBe('Phone number must be 10 digits');
    });
  });

  // Stage 2 validation tests
  describe('Stage 2 Validation', () => {
    it('should return errors if Departure Date is missing', () => {
      const formData = {
        fullName: 'John Doe',
        dob: '1990-01-01',
        nationality: 'American',
        email: 'test@example.com',
        phone: '1234567890',
        departureDate: '',
        returnDate: '2025-01-01',
        accommodation: 'spaceHotel',
        specialRequests: '',
        healthDeclaration: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
        medicalConditions: '',
      };
      
      const errors = validate(2, formData);
      expect(errors.departureDate).toBe('Departure Date is required');
    });

    it('should return errors if Return Date is missing', () => {
      const formData = {
        fullName: 'John Doe',
        dob: '1990-01-01',
        nationality: 'American',
        email: 'test@example.com',
        phone: '1234567890',
        departureDate: '2025-01-01',
        returnDate: '',
        accommodation: 'spaceHotel',
        specialRequests: '',
        healthDeclaration: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
        medicalConditions: '',
      };
      
      const errors = validate(2, formData);
      expect(errors.returnDate).toBe('Return Date is required');
    });

    it('should return errors if Accommodation is missing', () => {
      const formData = {
        fullName: 'John Doe',
        dob: '1990-01-01',
        nationality: 'American',
        email: 'test@example.com',
        phone: '1234567890',
        departureDate: '2025-01-01',
        returnDate: '2025-01-10',
        accommodation: '',
        specialRequests: '',
        healthDeclaration: '',
        emergencyContactName: '',
        emergencyContactPhone: '',
        medicalConditions: '',
      };
      
      const errors = validate(2, formData);
      expect(errors.accommodation).toBe('Accommodation preference is required');
    });
  });

  // Stage 3 validation tests
  describe('Stage 3 Validation', () => {
    it('should return errors if Health Declaration is missing', () => {
      const formData = {
        fullName: 'John Doe',
        dob: '1990-01-01',
        nationality: 'American',
        email: 'test@example.com',
        phone: '1234567890',
        departureDate: '2025-01-01',
        returnDate: '2025-01-10',
        accommodation: 'spaceHotel',
        specialRequests: '',
        healthDeclaration: '',
        emergencyContactName: 'Jane Doe',
        emergencyContactPhone: '1234567890',
        medicalConditions: '',
      };
      
      const errors = validate(3, formData);
      expect(errors.healthDeclaration).toBe('Health Declaration is required');
    });

    it('should return errors if Emergency Contact Phone is invalid', () => {
      const formData = {
        fullName: 'John Doe',
        dob: '1990-01-01',
        nationality: 'American',
        email: 'test@example.com',
        phone: '1234567890',
        departureDate: '2025-01-01',
        returnDate: '2025-01-10',
        accommodation: 'spaceHotel',
        specialRequests: '',
        healthDeclaration: 'yes',
        emergencyContactName: 'Jane Doe',
        emergencyContactPhone: '1234',
        medicalConditions: '',
      };
      
      const errors = validate(3, formData);
      expect(errors.emergencyContactPhone).toBe('Phone must be 10 digits');
    });

    it('should return errors if Emergency Contact Name is missing', () => {
      const formData = {
        fullName: 'John Doe',
        dob: '1990-01-01',
        nationality: 'American',
        email: 'test@example.com',
        phone: '1234567890',
        departureDate: '2025-01-01',
        returnDate: '2025-01-10',
        accommodation: 'spaceHotel',
        specialRequests: '',
        healthDeclaration: 'yes',
        emergencyContactName: '',
        emergencyContactPhone: '1234567890',
        medicalConditions: '',
      };
      
      const errors = validate(3, formData);
      expect(errors.emergencyContactName).toBe('Emergency Contact Name is required');
    });
  });
});
