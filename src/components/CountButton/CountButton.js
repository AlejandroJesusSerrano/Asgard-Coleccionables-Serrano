import React from 'react'

export const CountButton = ({op, func}) => {
    
    return <button onClick={func}>{op}</button>    

}

export default CountButton