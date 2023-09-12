// Popup.tsx
import React, { useState } from "react";
import "./Popup.css";

type PopupProps = {
  onClose: () => void;
  onTokenSubmit: (token: string) => void;
};

const Popup: React.FC<PopupProps> = ({ onClose, onTokenSubmit }) => {
  const [token, setToken] = useState("");

  const handleSubmit = () => {
    if (token) {
      // Call parent's token submit handler
      onTokenSubmit(token);
      onClose();
    } else {
      alert("Please enter a valid API token");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h3>Enter API Token</h3>
        <input
          placeholder="API Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Popup;
