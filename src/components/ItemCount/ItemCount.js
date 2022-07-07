import React, { useState } from 'react'
import './ItemCount.css'
import CountButton from '../CountButton/CountButton'
import DisplayCount from '../DisplayCount/DisplayCount'

export const ItemCount = ({stock}) => {
    
    const [counter, setCounter] = useState (1)
    
        if (counter < 0){
            setCounter(counter + 1)   
        }

        if (counter > stock ){
            alert (`Lo sentimos no hay màs Stock de este producto`);
            setCounter(counter -1)
        }
    
    return(
        <div className='itemClassContainer'>
            <div className='itemCountContainer'>
                <CountButton className='countBtn' op = '-1' func={()=> setCounter (counter - 1)}/>
                <DisplayCount className='disCount' value={counter}/>
                <CountButton className='countBtn' op = '+1' func={()=> setCounter (counter + 1)}/>
            </div>
        </div>

    )
}

export default ItemCount