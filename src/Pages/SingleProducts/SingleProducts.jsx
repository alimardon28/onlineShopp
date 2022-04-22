import React from 'react';
import { useContext , useEffect , useState } from 'react';
import { Link , useParams } from 'react-router-dom';
import heart from "../../Components/assets/images/heart.svg";
import heartFill from "../../Components/assets/images/heart-fill.svg";
import { Context } from '../../Context/Context';
import '../SingleProducts/SingleProducts.css';





const Singleproducts = () => {

   const date = useParams()


    const [ dataProducts , setDataProducts ] = useState([]);
    const [ singleProductsCorzinka , setSingleProductsCorzinka ] = useState([]);

   const { products } = useContext(Context);
   const { withLove , setWithLove } = useContext(Context);
   const { savedCorzinka , setSavedCorzinka } = useContext(Context);



   useEffect(() => {
    fetch(`https://authentiication.herokuapp.com/posts/${date.productId}`)
    .then(response => response.json())
    .then(data => setDataProducts(data))

     } , [])


const handleCorzinkaAdd = (id) =>{
    products?.map(item => {
       if(item.id == id){
        savedCorzinka.push(item)
       }
    })
}


const handleKupitCorzinka = (id) => {
    products?.map(item => {
        if(item.id == id){
            savedCorzinka.push(item)
        }
    })
}


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
                             <img src={dataProducts.thumbnailUrl} alt={`${dataProducts.title} images`} />
                             <img src={dataProducts.thumbnail} alt={`${dataProducts.title} images`} />
                         </div>
                         <div className="sumBox">
                             <h2 className='sumBox-title'>{dataProducts.title}</h2>
                             <p className='sumBox-sum'>$ {dataProducts.sum}</p>
                         </div>
                     </div>
                    <div className="sinleProductsBox">
                        <div className="sinleProductsBox-left">
                            <div className="opitsaneBox">
                                <h3 className='opisaneBox-heading'>Описание и характеристики</h3>
                            </div>
                            <div className="opitsane-description">
                                <p className='opitsane-desc'>{dataProducts.description}</p>
                            </div>
                        </div>
                        <div className="buttonBox">
                            <Link className='singliBtnLink' to='/corzinka'>
                            <button  className='button' id={dataProducts.id}  onClick={(e) => handleKupitCorzinka(e.target.id)}>купить !</button>
                            </Link>
                            <button id={dataProducts.id} onClick={(e) => handleCorzinkaAdd(e.target.id)} className='button'>
                            <i className="bi bi-cart3"></i>
                                добавить в корзину</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Singleproducts;
