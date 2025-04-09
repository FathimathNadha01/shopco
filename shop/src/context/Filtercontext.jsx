// ThemeContext.js
import { createContext, useState } from "react";
import { fashionItems } from "../assets/staticdata/Clothdata";

// Create the Context
export const FilterContext = createContext();

// Create the Provider Component
export const FilterProvider = ({ children }) => {
  const [filterdata, setfilterdata] = useState([]);
  const [occassiondata,setoccassiondata] = useState([]);


  
const fetchoccasion =(occassion)=>{
    console.log('occassion',occassion);
    const filters=fashionItems.filter((items)=>{
        return  items.occasion==occassion;
       })
     setoccassiondata(filters)  
    
}

  const fetchfilterdata = (categogary) => {
     console.log(categogary);
     const filters=occassiondata.filter((items)=>{
      return  items.category==categogary;
     })
     console.log(filterdata.length);
     setfilterdata(filters);
    //  if (filterdata.length==0) {
    //     alert('no data')
    //  }
     
     console.log(filterdata);
     
  };

  

  return (
    <FilterContext.Provider value={{  fetchfilterdata,filterdata,fetchoccasion,occassiondata }}>
      {children}
    </FilterContext.Provider>
  );
};