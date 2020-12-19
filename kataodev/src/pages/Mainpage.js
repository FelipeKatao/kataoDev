import React from 'react'
import Banner from '../components/Banner.js'
import Rodape from '../components/Rodape.js'

function MainPage(){
    return(
        <>
        <Banner></Banner>
        <div className="gridColuns">
            <div className="articlesCreated">
            </div>
            <div className="articlesCreated"></div>
        </div>
        <Rodape></Rodape>
        </>
    )
}

export default MainPage


