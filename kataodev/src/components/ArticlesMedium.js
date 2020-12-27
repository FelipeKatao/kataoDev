import React from  'react'
import '../CSS/App.css'
import '../CSS/animate.css'

function ArticlesMedium(props){
    const SquareBlue = <div className="recShape ShapeBlue"></div>
    const SquareAlice = <div className="recShape shapeAlice"></div>
    let squares = [SquareAlice,SquareBlue]
    return(
        <div className="articleBig">
            <h1 className="titleArticleBig">{props.title}</h1>
            <div className="squaresEFects">{squares}</div>
            <div className="squaresEFectsBotton">{squares}</div>
            <img className="imgbig" src={props.src}></img>
            <h3>{props.body}</h3>
            <div className="BtCenter btStyleStandart">{props.bt}</div>
        </div>
    )

}

export default ArticlesMedium