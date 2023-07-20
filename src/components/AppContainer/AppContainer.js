import React from "react";

const AppContainer = ({ children }) => {
  return (
    <div className="md:flex md:w-full md:justify-between  md:max-h-screen ">
      {children}
    </div>
  );
};

export default AppContainer;
