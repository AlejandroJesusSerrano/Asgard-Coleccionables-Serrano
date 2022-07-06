import React from 'react'

export const CountButton = ({func, op}) => {
    
    return <button onClick={op}>{func}</button>    

}

export default CountButton