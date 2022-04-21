import React from 'react';
import { useContext } from 'react';
import { useState , useEffect } from 'react';
import { Context } from '../../../Context/Context';
import '../CorzinkaProducts/CorzinkaProducts.css';
import trash from '../../../Components/assets/images/trash.png';





const Corzinkaproducts = () => {


    const { savedCorzinka , setSavedCorzinka } = useContext(Context);
    const { products , setProducts } = useContext(Context);


    let myProducts = []

    products?.map(item => {
        let moneyProducts = item.sum
        myProducts.push(Number(moneyProducts))
    })


    let counterMoney  = '';
    if(products.length > 0){
        counterMoney = myProducts?.reduce(function(item , index){
            return item + index
        })
    }


     const handleDelete = (id) => {
        setSavedCorzinka(state => state.filter(data => data.id !==  id))
     }


     const hanlePlus = (e) =>{
         let id = e.target.id
         products?.map(item => {
             if(item.id == id){
                 item.didmount = item.didmount +1

                 if(item.savedCorzinka){
                     setProducts(state => [...state , item])
                 }
             }else{
                 setSavedCorzinka(state => state.filter(element => element.id !== item.id))
             }
         })

     }

    const  hanleMinus = (e) =>{
        let id = e.target.id

        products?.map(item => {
            if(item.id == id){
                item.didmount = item.didmount -1

                if(item.savedCorzinka){
                    setProducts(state => [...state , item])
                }
            }else{
                setSavedCorzinka(state => state.filter(element => element.id !==  item.id))
                item.didmount = 0
            }
        })
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
                                                   <button className='counterBtn minus' onClick={e => hanleMinus(e)} id={item.id}>-</button>
                                                   <span className='counterZero'>{item.didmount}</span>
                                                   <button className='counterBtn plus' onClick={e => hanlePlus(e)} id={item.id}>+</button>
                                               </div>

                                               <span className='counter-sum'>$ {item.sum * item.didmount}</span>
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
