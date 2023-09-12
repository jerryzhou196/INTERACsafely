import React, { Fragment } from "react";
import "./AnalyzeCompliance.css";

interface AnalyzeComplianceProps {
  isEmpty: boolean;
}

const AnalyzeCompliance: React.FC<AnalyzeComplianceProps> = ({ isEmpty }) => {
  const handleClick = () => {};

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
