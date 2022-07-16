import ItemDetail from '../ItemDetail/ItemDetail'

export const ItemDetailContainer = ({itemD}) => {
    
    return (
        <div className='DetailContainer'>
           {
               <ItemDetail
                    thumbnail={itemD.thumbnail}
                    title={itemD.title}
                    price={itemD.price}
                    description={itemD.description}/> 
           }
        </div>
    )
}

export default ItemDetailContainer
