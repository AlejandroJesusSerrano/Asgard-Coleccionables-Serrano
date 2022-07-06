import React from 'react'

export const CountButton = (op, func) => {
    
    return <button onClick={op}>{func}</button>    

}

export default CountButton