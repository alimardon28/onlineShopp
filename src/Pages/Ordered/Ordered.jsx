import React from 'react';
import '../Ordered/Ordered.css';
import gif from '../../Components/assets/images/happy.gif';


const Ordered = () => {




    return (
        <div className='container'>
            <div className="orderidHero">

            <img className='orderidHero-gif' src={gif} alt="happy gif" />
                 <div className="orderedBox">
                     <p className='ordered-desc'>Номер вашего заказа  <span className='ordered-desc-span'>№ {Math.floor(Math.random() * 1000000)}</span> , с Вами свяжется наш менеджер.</p>
                 </div>
            </div>
        </div>
    );
}

export default Ordered;
