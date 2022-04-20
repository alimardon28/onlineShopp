import React from 'react';
import { useContext , useEffect , useState } from 'react';
import { Link , useParams } from 'react-router-dom';
import heart from "../../Components/assets/images/heart.svg";
import heartFill from "../../Components/assets/images/heart-fill.svg";
import cart from "../../Components/assets/images/cart3.svg";
import { Context } from '../../Context/Context';





const Singleproducts = () => {

   const date = useParams()


    const [ singleProducts , setSingleProducts ] = useState([]);
    const [ singleProductsCorzinka , setSingleProductsCorzinka ] = useState([]);

   const { products } = useContext(Context);
   const { withLove , setWithLove } = useContext(Context);
   const { savedCorzinka , setSavedCorzinka } = useContext(Context);



   useEffect(() => {
    fetch(`https://authentiication.herokuapp.com/posts/:${date.productId}`)
    .then(response => response.json())
    .then(data => setSingleProducts(data))
     } , [ setSingleProducts ]);



    return (
        <>
            <section className="sectionProducts">
                <div className="container">
                    
                </div>
            </section>
        </>
    );
}

export default Singleproducts;
