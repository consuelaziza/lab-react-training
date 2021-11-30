import React from 'react'
import { useState} from 'react'

 function LikeButton() {
 let [count, setCount] = useState(0)
    

    function handleClick(event){
        console.log('Clicked', event)
        setCount(count+1)
    }
    let colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red']
    let randomColor = colors[Math.floor(Math.random()* colors.length)]
    return (
        <button style= {{backgroundColor: randomColor}}onClick={handleClick}>
            Like{count}
        </button>
    )
}

export default LikeButton