import React, { Fragment } from "react";
import "./AnalyzeCompliance.css";

interface AnalyzeComplianceProps {
  prompt: string;
  handleClick: () => void;
}

const AnalyzeCompliance: React.FC<AnalyzeComplianceProps> = ({
  prompt,
  handleClick,
}) => {
  return (
    <Fragment>
      <div className="analyze-compliance-container">
        <button onClick={handleClick} className="analyze-compliance-button">
          Get Compliance and Data Privacy Score
        </button>
      </div>
    </Fragment>
  );
};

export default AnalyzeCompliance;
