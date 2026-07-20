import { useState } from "react";
export default function usePasswordGenerator(inputBoxes, passwordLen) {
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const isUpperCase = inputBoxes.find(
      (item) => item.title === "UpperCase"
    ).checked;
    console.log("isuppercase", isUpperCase);
    const isLowerCase = inputBoxes.find(
      (item) => item.title === "LowerCase"
    ).checked;
    const isNumberIncluded = inputBoxes.find(
      (item) => item.title === "Inlcude Numbers"
    ).checked;
    const isSymbolInlcuded = inputBoxes.find(
      (item) => item.title === "Inlcude Symbols"
    ).checked;

    if (
      !isUpperCase &&
      !isLowerCase &&
      !isNumberIncluded &&
      !isSymbolInlcuded
    ) {
      alert("Please select at least one option");
      return;
    }
    let charSet = "";
    if (isUpperCase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isLowerCase) charSet += "abcdefghijklmnopqrstuvwxyz";
    if (isNumberIncluded) charSet += "1234567890";
    if (isSymbolInlcuded) charSet += "!@#$%^&*()_+";
    let generatedPassword = "";

    for (let i = 0; i < passwordLen; i++) {
      generatedPassword += charSet.charAt(
        Math.floor(Math.random() * charSet.length)
      );
    }

    setPassword(generatedPassword);
  };
  const copyPasswordToClipboard = () => {
    navigator.clipboard.writeText(password);
  };
  return {
    password,
    generatePassword,
    copyPasswordToClipboard,
  };
}
