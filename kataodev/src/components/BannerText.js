import React from 'react'
import '../CSS/App.css';
import BannerControl from '../models/BannerControl.js'

function BannerText(){
    const content =["Ola pessoal","Loren inspum,loren loren loren","Acessar1"]
    BannerControl()
    return(
        <>
        <div className="textBanner"> 
            <h1 id="TitleTextBanner">{content[0]}</h1>
            <h3 id="AboutTextBanner">{content[1]}</h3>
            <div id="btBannerText" className="btbanner">{content[2]}</div>
        </div>
        </>
    )
}

export default BannerText