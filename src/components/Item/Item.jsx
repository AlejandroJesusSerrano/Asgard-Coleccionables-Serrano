import './Item.css'

export const Item = ({thumbnail, title, price, description, id}) => {
  return (
    <div className='cardFormat'>
      <div className='cardTitle'>
        <h3 className='objectTitle'>{title}</h3>
      </div>
      <div className='cardImg container'>
        <img className='formatImg' src={thumbnail} alt={title}/>
      </div>
      <div className='moreData'>
          <span>{description}</span>
          <span className='price'> ${price}</span>
      </div>
      <div className='moreBtn'>
          <a className='detailBtn' href='#'>Mostrar Detalles</a>
      </div>
    </div>
  )
}

export default Item