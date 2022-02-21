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
  const [cart, setCart] = useState({
    "totalQty": 19,
    "YZZysBIAACkAvjFs": {
        "eachPrice": 572,
        "img": "https://images.prismic.io/wizeline-academy/d060046e-6699-437e-8e46-6208ef9076b8_1.webp?auto=compress,format",
        "name": "Bentley mirror",
        "qty": 7,
        "stock": 15
    },
    "YZZ_XhIAAC0AvmiA": {
        "eachPrice": 40,
        "img": "https://images.prismic.io/wizeline-academy/1c8883ca-2797-4138-a7e5-a7d2ae583192_1.jpeg?auto=compress,format",
        "name": "Fair Isle Snowflake Lumbar Cushion Cover",
        "qty": 12,
        "stock": 48
    }
});
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <GeneralContext.Provider value={{ cart, setCart, displaySidebar, setDisplaySidebar, search, setSearch }}>
      {children}
    </GeneralContext.Provider>
  );
}

export { useGeneralContext };
export default GeneralContextProvider;