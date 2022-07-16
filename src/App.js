import './App.css';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React, {useState} from 'react'
import {useEffect} from 'react';
import {products} from './data/products.jsx';





function App() {
  const [itemD, setItems] = useState([]);
    useEffect(() => {    
        const bringItemDetail = new Promise ((resolve) =>{
            setTimeout(()=> {
                resolve(products)
            }, 2000); 
        })
       
        bringItemDetail
        .then((data) => {
            setItems(data[Math.floor(Math.random()) * data.length])
        })
        .then()
        .catch((err)=>{
            console.log(err)
        });
    });

   


  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer itemD={itemD}/>
    </div>
  );
}

export default App;
