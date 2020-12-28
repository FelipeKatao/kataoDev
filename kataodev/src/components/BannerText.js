import React from 'react'
import '../CSS/App.css';
import BannerControl from '../models/BannerControl.js'

function BannerText(props){
    const content =["Ola pessoal","Loren inspum,loren loren loren","Acessar1"]
    let squares = []
    let keyUnique=props.Id+"a"
    for(var x=0;x<22;x++){
        squares.push(<div key={keyUnique+x} className="recShape ShapeBlue"></div>)
        squares.push(<div key={props.Id+x} className="recShape shapeAlice"></div>)
    }
    squares.push(<div key={props.Id+"b"} className="recShape shapeAlice"></div>)
    BannerControl()
    return(
        <>
        <div className="textBanner" key={props.Id}> 
            <h1 id="TitleTextBanner">{content[0]}</h1>
            <h3 id="AboutTextBanner">{content[1]}</h3>
            <div id="btBannerText" className="btbanner">{content[2]}</div>
        </div>
        <div id="containerShapes" key={props.Id+1}>
            {squares}
        </div>
        </>
    )
}

export default BannerText