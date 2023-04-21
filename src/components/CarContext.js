import React, { createContext, useState } from "react";

const CarContext = createContext();

function Provider({ children }) {
  // modal opening
  const [showModal, setShowModal] = useState(false);

  const valueToShare = {
    setShowModal,
    showModal,
  };


  return (
    <CarContext.Provider value={valueToShare}>{children}</CarContext.Provider>
  )
}

export { Provider };
export default CarContext;