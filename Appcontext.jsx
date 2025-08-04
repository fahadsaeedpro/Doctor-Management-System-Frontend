// AppContext.js
import { createContext } from "react";
import { doctors } from "../assets/assets/assets_frontend/assets";
// const { docSlots } = useContext(AppContext);



export const AppContext = createContext();

const AppContextProvider = (props) => {

  const currencySymbol='$'

  const value = {
    doctors,
    currencySymbol
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
