import React from "react";
import Part from './Part'


 const Content = ({parts}) => {
  
    return (
        
        <div>
            <Part part= {parts[0].name} exercice={parts[0].exercises}/>
            <Part part= {parts[1].name} exercice={parts[1].exercises}/>
            <Part part= {parts[2].name} exercice={parts[2].exercises}/>
        </div>
  )
}

export default Content