import React from "react";

function DenominationResult({ result }) {
  return (
    <div className="result-section">
      {Object.keys(result).length > 0 ? (
        <div>
          <h3>Denominations:</h3>
          {Object.entries(result).map(([denom, count]) => (
            <p key={denom}>
              {denom} * {count}
            </p>
          ))}
        </div>
      ) : (
        <p>No Result</p>
      )}
    </div>
  );
}

export default DenominationResult;
