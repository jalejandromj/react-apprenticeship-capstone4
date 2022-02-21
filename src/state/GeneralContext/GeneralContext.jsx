import React, { useState, useContext } from 'react';

const GeneralContext = React.createContext(null);

function useGeneralContext() {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error(`Can't use "useGeneralContext" without an GeneralContextProvider!`);
  }
  return context;
}

function GeneralContextProvider({ children }) {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <GeneralContext.Provider value={{ displaySidebar, setDisplaySidebar, search, setSearch }}>
      {children}
    </GeneralContext.Provider>
  );
}

export { useGeneralContext };
export default GeneralContextProvider;