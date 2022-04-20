import './App.css';
import { Routes , Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Products from './Pages/Products/Products';
import Card from './Pages/Card/Card';
import Contacts from './Pages/Contacts/Contacts';
import Ordered from './Pages/Ordered/Ordered';
import Selected from './Pages/Selected/Selected';
import Service from './Pages/Service/Service';
import SingleProducts from './Pages/SingleProducts/SingleProducts';
import Ordering from './Pages/Ordering/Ordering';

function App() {
  return (
    <div className="App">

      <Header/>
    <Routes>

         <Route path='/' element={<Products/>} />
         <Route path='/card' element={<Card/>}/>
         <Route path='/contacts' element={<Contacts/>}/>
         <Route path='/ordered' element={<Ordered/>}/>
         <Route path='/selected' element={<Selected/>}/>
         <Route path='/service' element={<Service/>}/>
         <Route path='/posts/:productId' element={<SingleProducts/>}/>
         <Route path='/ordering' element={<Ordering/>}/>


    </Routes>

    <Footer/>

    </div>
  );
}

export default App;
