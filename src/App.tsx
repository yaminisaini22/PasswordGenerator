import "./styles.css";
import { useState } from "react";
import usePasswordGenerator from "./password.tsx";

export default function App() {
  const [inputBoxes, setInputBoxes] = useState([
    { title: "UpperCase", id: 1, checked: false },
    { title: "LowerCase", id: 2, checked: false },
    { title: "Inlcude Numbers", id: 3, checked: false },
    { title: "Inlcude Symbols", id: 4, checked: false },
  ]);

  const [passwordLen, setPasswordLen] = useState(2);
  const { password, generatePassword, copyPasswordToClipboard } =
    usePasswordGenerator(inputBoxes, passwordLen);
  console.log("password is", password);
  const handleInputCheck = (id) => {
    setInputBoxes((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div className="container">
        <div className="header">
          <span>Password: {password}</span>
          <button onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="char-len">
          <span> Character Length : {passwordLen}</span>
          <input
            type="range"
            max={20}
            min={0}
            value={passwordLen}
            onChange={(e) => setPasswordLen(Number(e.target.value))}
          />
        </div>
        <div className="options">
          {inputBoxes.map((condition) => (
            <label key={condition.id} className="option">
              <input
                type="checkbox"
                checked={condition.checked}
                onChange={() => handleInputCheck(condition.id)}
              />
              <span>{condition.title}</span>
            </label>
          ))}
        </div>
        <div className="generate-password">
          <button onClick={generatePassword}>Generate Password</button>
        </div>
      </div>
    </div>
  );
}
