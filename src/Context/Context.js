import { createContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }){


    const [ products , setProducts ] = useState()


    useEffect(() => {
        fetch("https://authentiication.herokuapp.com/posts")
        .then(response => response.json())
        .then(data => setProducts(data))
    } , [ setProducts ]);


    return(
        <Context.Provider value={{ products , setProducts }}>
            { children }
        </Context.Provider>
    )
}

export { Context, Provider }