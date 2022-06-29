import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return (
      <p>
        The water would <span style={{ color: "red" }}>BOIL</span>.
      </p>
    );
  }
  return (
    <p>
      The water would not <span style={{ color: "blue" }}>BOIL</span>.
    </p>
  );
}

export default BoilingVerdict;
