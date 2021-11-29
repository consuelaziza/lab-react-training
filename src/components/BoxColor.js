import React from 'react'
import "./BoxColor.css"

function BoxColor({r, g, b}) {
    
    
        return (
            <div style={{ 
                backgroundColor: `rgb(${r}, ${g}, ${b})` ,
                height: 78, 
                padding: 10}}>
               rgb({r}, {g}, {b})
            </div>
        )
    }


export default BoxColor