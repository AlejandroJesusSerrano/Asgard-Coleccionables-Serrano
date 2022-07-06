import React, { useState } from 'react'
import CountButton from '../CountButton/CountButton'
import DisplayCount from '../DisplayCount/DisplayCount'

export const ItemCount = () => {
    const [counter, setCounter] = useState (0)
    return(
        
        <div>
            <CountButton op = '+1' func={()=> setCounter (counter + 1)}/>
            <DisplayCount value={counter}/>
            <CountButton op = '-1' func={()=> setCounter (counter - 1)}/>
        </div>

    )
}

export default ItemCount