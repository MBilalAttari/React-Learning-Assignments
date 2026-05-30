import { useState } from "react";

const InputSection = () => {
  const [value, setValue] = useState("");
  const [showVal, setShowVal] = useState(value);

  const inputChange = (e) => {
    setValue(e.target.value);
  };

  const showValue = () => {
    setShowVal(value);
  };

  const clearValue = () => {
    setValue("");
    setShowVal("");
  };

  const deleteLastLetter = () => {
    setValue(value.slice(0, -1));
    setShowVal(showVal.slice(0, -1));
  };

  return (
    <div className="input-section">
      <h3>{showVal} </h3>

      <input
        type="text"
        placeholder="Enter your name"
        onChange={inputChange}
        value={value}
      />

      <div className="btns">
        <button onClick={showValue}>Show Input value</button>
        <button onClick={clearValue}>Clear</button>
        <button onClick={deleteLastLetter}>Delete Last Letter</button>
      </div>
    </div>
  );
};
export default InputSection;
