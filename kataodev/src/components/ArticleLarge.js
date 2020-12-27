import  React from 'react'
import '../CSS/animate.css'

function ArticleLarge(props){
    const SquareBlue = <div className="recShape ShapeBlue"></div>
    const SquareAlice = <div className="recShape shapeAlice"></div>
    let squares = [SquareAlice,SquareBlue]
    return(
        <div className="articleLarge">
            <div className="AnimationLarge">{squares}{squares}</div>
            <div className="AnimationLargeBottom">{squares}{squares}</div>
            <h1 className="titleArticleLarge">{props.title}</h1>
            <div className="aboutArticleLarge">{props.about}</div>
            <div className="btStyleStandart posAuto">{props.bt}</div>
            <img className="imgLarge" src={props.src}></img>
        </div>
    )
}

export default ArticleLarge