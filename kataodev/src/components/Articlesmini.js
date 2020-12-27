import React from 'react'
import '../CSS/animate.css'
import '../CSS/App.css'

function ArticlesMini(props){
    return(
        <>
        <div className="containerArticle">
            <img className="imgArticle" src={props.src}></img>
            <h1>{props.title}</h1>
            <h3>{props.content}</h3>
            <div className="BtStandart">{props.bt}</div>
        </div> 
        </>
    )
}

export default ArticlesMini