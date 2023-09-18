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

  const renderFormValidation = useCallback(() => {
    return (
      <div>
        <h1>Form Validation Example</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formState.username}
              onChange={handleChange}
            />
            {errors.username && (
              <div className="error">{errors.username[0]}</div>
            )}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email[0]}</div>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="error">{errors.password[0]}</div>
            )}
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }, []);
  return <>{renderFormValidation()}</>;
}

export default FormValidation;
