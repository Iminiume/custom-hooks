import { useState, useCallback } from "react";

function useMultiStepForm(initialSteps = []) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const goToStep = (stepNumber) => {
    setCurrentStep(stepNumber);
  };

  const handleChange = useCallback(
    (name, value) => {
      setFormValues({ ...formValues, [name]: value });
    },
    [formValues]
  );

  const handleSubmit = () => {
    if (currentStep === initialSteps.length - 1) {
      setIsComplete(true);
      // Handle form submission here, e.g., send data to the server
      console.log("Form submitted with values:", formValues);
    } else {
      nextStep();
    }
  };

  const resetForm = () => {
    setCurrentStep(0);
    setFormValues({});
    setIsComplete(false);
  };

  return {
    currentStep,
    formValues,
    isComplete,
    nextStep,
    prevStep,
    goToStep,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export default useMultiStepForm;
