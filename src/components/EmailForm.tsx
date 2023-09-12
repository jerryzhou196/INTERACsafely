import React, { useState, useEffect } from "react";
import "./emailform.css";
import logo from "../assets/logo.png";
import AnalyzeCompliance from "./AnalyzeCompliace";

const EmailForm: React.FC = () => {
  const [text, setText] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsEmpty(e.target.value === "");
    setText(e.target.value);
  };

  useEffect(() => {
    const fullPlaceholder =
      "Insert your possibly insecure Outlook Email here to see if it complies with Interac's Compliance Policy!";
    let currentText = "";

    const typing = setInterval(() => {
      if (currentText.length < fullPlaceholder.length) {
        currentText += fullPlaceholder[currentText.length];
        setPlaceholder(currentText);
      } else {
        clearInterval(typing);
      }
    }, 50);

    return () => {
      clearInterval(typing);
    };
  }, []);

  return (
    <div className="container">
      <img className="logo-background" src={logo} />
      <textarea
        placeholder={placeholder}
        value={text}
        onChange={handleChange}
        className="giant-textarea"
      />
      <AnalyzeCompliance isEmpty={isEmpty} />
    </div>
  );
};

export default EmailForm;
