import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import {useEffect} from 'react';
import  React, {useState} from 'react';
import {products} from '../../data/products.jsx';

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const productList = new Promise ((res, rej) =>{
            setTimeout(()=>{
                res(products);
            }, 2000);
        });
        
        productList
        .then((data)=>{
            setItems(data)
        })
        .catch((err)=>{
            console.log(err)
        });
    }, []); 
    
    return (
        <div>
            <ItemList items = {items}/>
            <ItemCount stock = {5}/>
        </div>
    )
}
export default ItemListContainer
