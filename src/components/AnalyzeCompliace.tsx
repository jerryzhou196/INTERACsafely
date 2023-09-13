import React, { Fragment } from "react";
import "./AnalyzeCompliance.css";

interface AnalyzeComplianceProps {
  isEmpty: boolean;
}

const AnalyzeCompliance: React.FC<AnalyzeComplianceProps> = ({ isEmpty }) => {
  const handleClick = () => {
    async function fetchCompletion() {
      const url = "https://api.openai.com/v1/chat/completions";
      const token = localStorage.getItem("token");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const body = JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant.",
          },
          {
            role: "user",
            content: "Hello!",
          },
        ],
      });

      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: body,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.error("Failed to fetch:", response.status, response.statusText);
      }
    }
    fetchCompletion();
  };

  return (
    <Fragment>
      {!isEmpty && (
        <div className="analyze-compliance-container">
          <button onClick={handleClick} className="analyze-compliance-button">
            Analyze Compliance
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default AnalyzeCompliance;
