import React, { useState } from 'react'
import CountButton from '../CountButton/CountButton'
import DisplayCount from '../DisplayCount/DisplayCount'

export const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState (1)
    if (counter > stock) {
        
        alert (`Lo sentimos no hay màs Stock de este producto`);

    }
    return(
        
        <div>
            <DisplayCount value={counter}/>
            <CountButton op = '+1' func={()=> setCounter (counter + 1)}/>
            <CountButton op = '-1' func={()=> setCounter (counter - 1)}/>
        </div>

    )
}

export default ItemCount