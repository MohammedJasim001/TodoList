import React from "react";

const Alert = (props) => {
  return (
    <div className="green">
      <div className="purple">
        <div className="red">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Alert;
