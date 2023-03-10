import React,{createContext, useContext, useReducer} from "react";
import { initialState } from "./reducer";


export const DataLayerContext = createContext();
console.log(initialState);
export const DataLayer = ({initialState, reducer, children}) => (
    <DataLayerContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider> 
); 

export const useDataLayerValue= () => useContext(DataLayerContext);

