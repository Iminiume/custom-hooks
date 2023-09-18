import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import Button from "../../components/button";

function LocalStorage() {
  const [name, setName, removeName] = useLocalStorage("name", "John");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="container">
      <h1>LocalStorage Example</h1>
      <input type="text" value={name} onChange={handleChange} />
      <Button onClick={removeName}>Remove Name</Button>
    </div>
  );
}

export default LocalStorage;
