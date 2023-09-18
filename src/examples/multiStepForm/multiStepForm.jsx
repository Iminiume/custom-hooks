import React from "react";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import Button from "../../components/button/";

function MultiStepForm() {
  const initialSteps = [
    // Define your form steps here
    {
      label: "Step 1",
      fields: [
        { name: "name", label: "Name", type: "text" },
        { name: "email", label: "Email", type: "email" },
      ],
    },
    {
      label: "Step 2",
      fields: [
        { name: "address", label: "Address", type: "text" },
        { name: "phone", label: "Phone", type: "tel" },
      ],
    },
  ];

  const {
    currentStep,
    formValues,
    isComplete,
    nextStep,
    prevStep,
    goToStep,
    handleChange,
    handleSubmit,
    resetForm,
  } = useMultiStepForm(initialSteps);

  const renderFormStep = (stepIndex) => {
    const step = initialSteps[stepIndex];
    return (
      <div key={stepIndex}>
        <h2>{step.label}</h2>
        {step.fields.map((field, index) => (
          <div key={index}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={formValues[field.name] || ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      {isComplete ? (
        <div className="container">
          <h2>Form Completed</h2>
          <Button onClick={resetForm}>Start Over</Button>
        </div>
      ) : (
        <div className="container">
          {renderFormStep(currentStep)}
          <Button onClick={prevStep} disabled={currentStep === 0}>
            Previous
          </Button>
          <Button
            onClick={nextStep}
            disabled={currentStep === initialSteps.length - 1}
          >
            Next
          </Button>
          {currentStep === initialSteps.length - 1 && (
            <Button onClick={handleSubmit}>Submit</Button>
          )}
        </div>
      )}
    </div>
  );
}

export default MultiStepForm;
