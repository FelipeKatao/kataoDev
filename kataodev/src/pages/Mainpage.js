import React from 'react'
import Banner from '../components/Banner.js'

function MainPage(){
    return(
        <>
        <Banner></Banner>
        <div className="gridColuns">
            <div className="articlesCreated"></div>
            <div className="articlesCreated"></div>
        </div>
        </>
    )
}

export default MainPage