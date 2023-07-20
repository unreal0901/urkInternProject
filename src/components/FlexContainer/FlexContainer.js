import React from "react";

const FlexContainer = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen relative">
      {children}
    </div>
  );
};

export default FlexContainer;
