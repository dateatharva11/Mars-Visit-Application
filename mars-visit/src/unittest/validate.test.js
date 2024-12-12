import { validate } from './formValidation';

describe('Form Validation', () => {
  
  // Stage 1 Tests
  describe('Stage 1 Validation', () => {
    it('should return error if full name is missing', () => {
      const formData = { fullName: '', dob: '1990-01-01', nationality: 'American', email: 'test@example.com', phone: '1234567890' };
      const errors = validate(formData, 1);
      expect(errors.fullName).toBe('Full Name is required');
    });

    it('should return error if email is invalid', () => {
      const formData = { fullName: 'John Doe', dob: '1990-01-01', nationality: 'American', email: 'invalid-email', phone: '1234567890' };
      const errors = validate(formData, 1);
      expect(errors.email).toBe('Invalid email format');
    });

    it('should return error if phone is not 10 digits', () => {
      const formData = { fullName: 'John Doe', dob: '1990-01-01', nationality: 'American', email: 'test@example.com', phone: '12345' };
      const errors = validate(formData, 1);
      expect(errors.phone).toBe('Phone number must be 10 digits');
    });

    it('should not return any errors if all fields are valid', () => {
      const formData = { fullName: 'John Doe', dob: '1990-01-01', nationality: 'American', email: 'test@example.com', phone: '1234567890' };
      const errors = validate(formData, 1);
      expect(Object.keys(errors).length).toBe(0); // No errors
    });
  });

  // Stage 2 Tests
  describe('Stage 2 Validation', () => {
    it('should return error if departure date is missing', () => {
      const formData = { departureDate: '', returnDate: '2024-12-12', accommodation: 'spaceHotel' };
      const errors = validate(formData, 2);
      expect(errors.departureDate).toBe('Departure Date is required');
    });

    it('should return error if accommodation is not selected', () => {
      const formData = { departureDate: '2024-11-01', returnDate: '2024-12-01', accommodation: '' };
      const errors = validate(formData, 2);
      expect(errors.accommodation).toBe('Accommodation preference is required');
    });

    it('should not return any errors if all fields are valid', () => {
      const formData = { departureDate: '2024-11-01', returnDate: '2024-12-01', accommodation: 'spaceHotel' };
      const errors = validate(formData, 2);
      expect(Object.keys(errors).length).toBe(0); // No errors
    });
  });

  // Stage 3 Tests
  describe('Stage 3 Validation', () => {
    it('should return error if health declaration is missing', () => {
      const formData = { healthDeclaration: '', emergencyContactName: 'Jane Doe', emergencyContactPhone: '1234567890' };
      const errors = validate(formData, 3);
      expect(errors.healthDeclaration).toBe('Health Declaration is required');
    });

    it('should return error if emergency contact phone is not 10 digits', () => {
      const formData = { healthDeclaration: 'yes', emergencyContactName: 'Jane Doe', emergencyContactPhone: '12345' };
      const errors = validate(formData, 3);
      expect(errors.emergencyContactPhone).toBe('Phone must be 10 digits');
    });

    it('should not return any errors if all fields are valid', () => {
      const formData = { healthDeclaration: 'yes', emergencyContactName: 'Jane Doe', emergencyContactPhone: '1234567890' };
      const errors = validate(formData, 3);
      expect(Object.keys(errors).length).toBe(0); // No errors
    });
  });

});
