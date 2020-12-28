import React from  'react'
import '../CSS/App.css'
import '../CSS/animate.css'

function ArticlesMedium(props){
    const SquareBlue = <div key="t" className="recShape ShapeBlue"></div>
    const SquareAlice = <div key="a" className="recShape shapeAlice"></div>
    let squares = [SquareAlice,SquareBlue]
    return(
        <div className="articleBig" key={props.Id}>
            <h1 className="titleArticleBig">{props.title}</h1>
            <div className="squaresEFects">{squares}</div>
            <div className="squaresEFectsBotton">{squares}</div>
            <img className="imgbig" src={props.src}></img>
            <h3 key="a">{props.body}</h3>
            <div className="BtCenter btStyleStandart btArticleBig">{props.bt}</div>
        </div>
    )

}

export default ArticlesMedium