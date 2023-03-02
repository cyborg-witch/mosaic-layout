import React from "react"
import Card from "./Card"
import { useState } from "react"


export default function Gallery() {

    const [isShown,setisShown] = useState(true)
    const [imgArray, setImgArray] = useState([])
    const [count, setCount] = useState(7)

    

    React.useEffect(() => {

    
       fetch(`https://api.unsplash.com/collections/907185/photos?page=19&per_page=10&client_id=GUOJSuCC3h67wLW1KgIFaXBbR43XKLZWKw4hSKpAkds`)
        .then(response => response.json())
          .then(data => {
             setImgArray(data)
             console.log(data)
          })
          
      
    }, [])
     
     

    const cards = imgArray.map(item => { 
        return (
        <Card
        key={item.id}
        alt={item.alt_description}
        url={item.urls.regular}
        description={item.description}
        desc2={item.user.bio}
        title={item.user.name}
        />)

    })
    
    function getCards() {
        const div = document.querySelectorAll('.card-box')
        setCount(count + 1)
        div[count].style.display = "block"
        if (count === 9)   {
           setisShown(false)
        } 
        
    }
   

    return (
        <div className="wrapper">
            <div className="box-text"><h3 className="wrapper-text">Connect people & spaces </h3> </div>
         {cards}
         {isShown ?  <button className="wrapper-btn" onClick={getCards} >Button</button> : ""} 
        </div>
    )
}