import { createContext, useState, useEffect } from "react";
import { fashionItems } from "../assets/staticdata/Clothdata";
import { LogIn } from "lucide-react";

export const Cartcontext = createContext();

export const Cartprovider = ({ children }) => {
  const [cartdata, setcartdata] = useState([]);

  const addtocart = (id,quality) => {
    console.log(id);
    console.log('quality',quality);
    
    setcartdata((prev) => {
      const alreadyInCart = prev.find((item) => item.id == id);
     console.log("alreadyInCart",alreadyInCart);
     
      if (alreadyInCart) {
        return prev;
      }

      const productToAdd = fashionItems.find((item) => item.id == id);
      console.log("productToAdd",productToAdd);
      

      if (productToAdd) {
        return [...prev, { ...productToAdd ,quality}];
      }

      return prev;
    });
  
 console.log(cartdata);
 
};

const deleteitem=(id)=>{
  setcartdata(cartdata.filter((items=>items.id!=id)))
}
 

  return (
    <Cartcontext.Provider value={{ addtocart, cartdata ,deleteitem}}>
      {children}
    </Cartcontext.Provider>
  );
};
