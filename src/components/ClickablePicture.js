import React, { useState } from 'react';



function ClickablePicture(props)  {
    let [clicked, setClicked ] = useState(false)

    function handleClick(){
        setClicked(!clicked)
    }

    let path = clicked ? props.imgClicked : props.img
    return(
        <div>
        <img onClick={handleClick} src={path} alt='man'/> 
        </div>
    )
}

export default ClickablePicture;