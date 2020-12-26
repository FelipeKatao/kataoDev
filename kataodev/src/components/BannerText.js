import React from 'react'
import '../CSS/App.css';
import BannerControl from '../models/BannerControl.js'

function BannerText(){
    const content =["Ola pessoal","Loren inspum,loren loren loren","Acessar1"]
    const SquareBlue = <div className="recShape ShapeBlue"></div>
    const SquareAlice = <div className="recShape shapeAlice"></div>
    let squares = []
    for(var x=0;x<22;x++){
        squares.push(SquareAlice)
        squares.push(SquareBlue)
    }
    squares.push(SquareAlice)
    BannerControl()
    return(
        <>
        <div className="textBanner"> 
            <h1 id="TitleTextBanner">{content[0]}</h1>
            <h3 id="AboutTextBanner">{content[1]}</h3>
            <div id="btBannerText" className="btbanner">{content[2]}</div>
        </div>
        <div id="containerShapes">
            {squares}
        </div>
        </>
    )
}

export default BannerText