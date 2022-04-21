import React from 'react';
import { useContext } from 'react';
import { useState , useEffect } from 'react';
import { Context } from '../../../Context/Context';
import '../CorzinkaProducts/CorzinkaProducts.css';
import trash from '../../../Components/assets/images/trash.png';




const Corzinkaproducts = () => {


    const { savedCorzinka , setSavedCorzinka } = useContext(Context);
    const { products , setProducts } = useContext(Context);


     const handleDelete = (id) => {
        setSavedCorzinka(state => state.filter(item => item.id !==  id))
     }











    return (
        <div>
              <section>
                   <div className="corzinkaProductsSaved">
                         {
                             savedCorzinka?.map(item => {
                                 return(
                                     <div className="savedCorzina">
                                         <div className="deleteBox">
                                             <button onClick={() => handleDelete(item.id)} className='delete'>
                                                 <img className='delete-trash' src={trash} alt="trash images" />
                                             </button>
                                         </div>
                                         <div className="saved">
                                             <img src={item.url} alt={`${item.title} images`} />
                                             <div className="savedSum">
                                                 <h3 className='savedSum-title'>{item.title}</h3>
                                                 <span className='savedSum-sum'>$ {item.sum}</span>
                                             </div>
                                         </div>

                                           <div className="savedCounter">
                                               <div className="counterSum">
                                                   <button className='counterBtn minus'>-</button>
                                                   <span className='counterZero'>0</span>
                                                   <button className='counterBtn plus'>+</button>
                                               </div>

                                               <span className='counter-sum'>$ {item.sum}</span>
                                           </div>
                                     </div>
                                 )
                             })
                         }
                   </div>
              </section>
        </div>
    );
}

export default Corzinkaproducts;
