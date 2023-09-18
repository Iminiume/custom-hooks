import { useState } from "react";

function useFormValidation(initialState, validationRules) {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    if (validationRules[fieldName]) {
      const rules = validationRules[fieldName];
      const fieldErrors = [];

      for (const rule of rules) {
        if (rule.validator(value, formState)) {
          fieldErrors.push(rule.message);
        }
      }

      setErrors({ ...errors, [fieldName]: fieldErrors });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update the form state
    setFormState({ ...formState, [name]: value });

    // Validate the field
    validateField(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate all fields before submitting
    const newErrors = {};
    for (const fieldName in validationRules) {
      const value = formState[fieldName];
      validateField(fieldName, value);
      if (errors[fieldName] && errors[fieldName].length > 0) {
        newErrors[fieldName] = errors[fieldName];
      }
    }

    if (Object.keys(newErrors).length === 0) {
      // Form is valid; you can submit the data here
      console.log("Form is valid. Submitting...");
    } else {
      // Form is invalid; you can handle the errors as needed
      console.error("Form has validation errors:", newErrors);
    }
  };

  return {
    formState,
    errors,
    handleChange,
    handleSubmit,
  };
}

export default useFormValidation;
