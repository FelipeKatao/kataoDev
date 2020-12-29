import React from 'react'
//import DialogAi from "../models/DialogAi.js"

function Robot(){
    return(
        <div id="robot">
            <img id="robotImg" alt="Ai inteligencia" src="https://img1.gratispng.com/20180529/gsx/kisspng-robot-youtube-kissoro-tribal-game-cute-robot-5b0d1b75e57a24.57913442152758565394.jpg" height="100vh" width="100vh"></img>
            <img href="#" onClick={box} alt="Sppeak" className="robotClass" id="speekRobot" src="https://img.icons8.com/cotton/64/000000/communication--v1.png"/>
            <div id="helpBox">
                <div className="close" onClick={box2}>X</div>
                <div className="responseAi"></div>
                <input className="InputAi" value="Fale algo comigo..."></input>
            </div>
        </div>
    )
}

function box(){
        document.getElementById("helpBox").style.visibility="visible"
}
function box2(){
    document.getElementById("helpBox").style.visibility="hidden"
}
export default Robot