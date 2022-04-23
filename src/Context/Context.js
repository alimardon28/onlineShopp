import { createContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  const [savedCorzinka, setSavedCorzinka] = useState([]);
  const [withLove, setWithLove] = useState([]);
  const [products, setProducts] = useState();

  useEffect(() => {
    window.localStorage.setItem("product", JSON.stringify(withLove));
  }, [withLove]);

  useEffect(() => {
    fetch("https://authentiication.herokuapp.com/posts")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [setProducts]);

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        withLove,
        setWithLove,
        savedCorzinka,
        setSavedCorzinka,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
