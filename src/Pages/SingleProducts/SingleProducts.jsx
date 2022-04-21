import React from 'react';
import { useContext , useEffect , useState } from 'react';
import { Link , useParams } from 'react-router-dom';
import heart from "../../Components/assets/images/heart.svg";
import heartFill from "../../Components/assets/images/heart-fill.svg";
import { Context } from '../../Context/Context';
import Button from '@mui/material/Button';
import '../SingleProducts/SingleProducts.css';





const Singleproducts = () => {

   const date = useParams()


    const [ singleProducts , setSingleProducts ] = useState([]);
    const [ singleProductsCorzinka , setSingleProductsCorzinka ] = useState([]);

   const { products } = useContext(Context);
   const { withLove , setWithLove } = useContext(Context);
   const { savedCorzinka , setSavedCorzinka } = useContext(Context);



   useEffect(() => {
    fetch(`https://authentiication.herokuapp.com/posts/${date.productId}`)
    .then(response => response.json())
    .then(data => setSingleProducts(data))

     } , [])



    return (
        <>
            <section className="sectionProducts">
                <div className="container">
                     <div className="single-products">
                         <div className="singleHeartBox">
                             <button className='heartBtn'>
                                 <img src={heart} alt="images heart" />
                             </button>
                         </div>
                         <div className="imagesBox">
                             <img src={singleProducts.thumbnailUrl} alt={`${singleProducts.title} images`} />
                             <img src={singleProducts.thumbnail} alt={`${singleProducts.title} images`} />
                         </div>
                         <div className="sumBox">
                             <h2 className='sumBox-title'>{singleProducts.title}</h2>
                             <p className='sumBox-sum'>$ {singleProducts.sum}</p>
                         </div>
                     </div>
                    <div className="sinleProductsBox">
                        <div className="sinleProductsBox-left">
                            <div className="opitsaneBox">
                                <h3 className='opisaneBox-heading'>Описание и характеристики</h3>
                            </div>
                            <div className="opitsane-description">
                                <p className='opitsane-desc'>{singleProducts.description}</p>
                            </div>
                        </div>
                        <div className="buttonBox">
                            <Button  className='button' variant="contained">купить !</Button>
                            <Button  className='button' variant='contained'>
                            <i className="bi bi-cart3"></i>
                                добавить в корзину</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Singleproducts;
