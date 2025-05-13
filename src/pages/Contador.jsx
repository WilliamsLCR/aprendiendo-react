import React, { useState } from 'react';

export default function Contador() {
  const [clicks, setClicks] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleClick = () => {
    if (clicks < 10) {
      setClicks(clicks + 1);
      if (clicks + 1 === 10) {
        setShowAlert(true);
        setButtonDisabled(true);
      }
    }
  };

  return (
    <div>
      <h1>Contador</h1>
      <p>Clicks: {clicks}</p>
      <button onClick={handleClick} disabled={buttonDisabled}>
        Click me
      </button>

      {showAlert && (
        <div style={{ marginTop: '10px', color: 'red' }}>
          ¡Alerta! Has alcanzado los 10 clics.
        </div>
      )}
    </div>
  );
}