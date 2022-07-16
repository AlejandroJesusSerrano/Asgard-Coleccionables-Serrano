import './ItemDetail.css'

export const ItemDetail = ({thumbnail, title, price, description, id})=> {
    
    return (
          <div className='fullDetailFormat'>
            <div className='fullDetailTitle'>
              <h2 className='objectDetailTitle'>{title}</h2>
            </div>
            <div className='detailImg container'>
              <img className='formatDetailImg mx-auto' src={thumbnail} alt={title}/>
            </div>
            <div className='moreDetailData'>
                <span>{description}</span> 
                <span className='detailPrice'>Precio de Venta: ${price}</span>
            </div>
            <div className='buyBtnCont'>
                <button className='buyBtn' href='#'>Comprar</button>
            </div>
          </div>
        )
      }

export default ItemDetail


