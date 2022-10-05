import React from 'react'

const Total = ({parts}) => {
    console.log(parts)
    return (
        <div><p>Total: <span> {parts[0].exercises + parts[1].exercises + parts[2].exercises}</span></p></div>
    )
}

export default Total
