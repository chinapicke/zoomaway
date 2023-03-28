import React, { createContext, useState } from "react";

const CarContext = createContext();

function Provider({ children }) {
  // modal opening
  const [carInfo, setCarInfo] = useState();

  const valueToShare = {
    carInfo,
    setCarInfo,
  };


  return (
    <Cars.Provider value={valueToShare}>{children}</Cars.Provider>
  )
}

export { Provider };
export default CarContext;