import React, { useCallback } from "react";
import useFormValidation from "../../hooks/useFormValidation";
import Button from "../../components/button";

function FormValidation() {
  const initialFormState = {
    username: "",
    email: "",
    password: "",
  };

  const validationRules = {
    username: [
      {
        validator: (value) => value.length < 3,
        message: "Username must be at least 3 characters long.",
      },
    ],
    email: [
      {
        validator: (value) =>
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value),
        message: "Invalid email address.",
      },
    ],
    password: [
      {
        validator: (value) => value.length < 6,
        message: "Password must be at least 6 characters long.",
      },
    ],
  };

  const { formState, errors, handleChange, handleSubmit } = useFormValidation(
    initialFormState,
    validationRules
  );

  const inputs = [
    {
      type: "text",
      name: "username",
      value: formState.username,
      error: errors.username && errors.username[0],
    },
    {
      type: "text",
      name: "email",
      value: formState.email,
      error: errors.email && errors.email[0],
    },
    {
      type: "password",
      name: "password",
      value: formState.password,
      error: errors.password && errors.password[0],
    },
  ];

  const renderFormValidation = useCallback(() => {
    return (
      <div className="container">
        <h1>Form Validation Example</h1>
        <form onSubmit={handleSubmit} className="container">
          {inputs.map((item, i) => {
            const { type, name, value, error } = item;

            return (
              <div key={i}>
                <label>{name} : </label>
                <input
                  type={type}
                  name={name}
                  value={value}
                  onChange={handleChange}
                />
                <div className="error">{error}</div>
              </div>
            );
          })}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }, [formState]);
  return <>{renderFormValidation()}</>;
}

export default FormValidation;
