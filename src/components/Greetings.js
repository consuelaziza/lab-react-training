import React, { Component } from 'react'

const Greetings = ({lang, children}) =>{ 
    
   let text = ''; 

        // You will get all the props in 'this.props'
        
        
        
         
        if (lang == 'en') {
            text = 'Hello'
        }
        else if (lang == 'es') {
            text = 'Hola'
        }
        else if (lang == 'de'){
            text = 'Hallo'
        }
        else if (lang == 'fr'){
            text = 'Bonjour'
        }

        return (
            <div className="box right">
               <div>{text}</div> 
                <div>{children}</div>
            </div>
        )
    
;}

export default Greetings