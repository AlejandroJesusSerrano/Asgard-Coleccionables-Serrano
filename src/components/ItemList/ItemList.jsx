import Item from '../Item/Item';

import './ItemList.css'


export const ItemList = ({items}) => {
    
   return (
     <div className='cardContainer'>
        {
            items.map((item) => (
               <Item
                  key = {item.id} 
                  thumbnail={item.thumbnail}
                  title={item.title}
                  price={item.price}
                  description={item.description}/>
            ))
        }
     </div>
   )
};
   export default ItemList
