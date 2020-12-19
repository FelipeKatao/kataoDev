import React from 'react'
import Banner from '../components/Banner.js'
import Rodape from '../components/Rodape.js'
import ArticlesMini from '../components/Articlesmini.js'

function MainPage(){
    var elements = []
    for (var i=0;i<5;i++){
        elements.push(<ArticlesMini></ArticlesMini>)
    }
    return(
        <>
        <Banner></Banner>
        <div className="gridColuns">
            <div className="articlesCreated">
                {elements}
            </div>
            <div className="articlesCreated"></div>
        </div>
        <Rodape></Rodape>
        </>
    )
}

export default MainPage


