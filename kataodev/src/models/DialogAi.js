
function DialogAi(ElemetClick,ElementHover){
    let getElementA = document.getElementById(ElemetClick)
    document.addEventListener("click",getElementA,function(){document.getElementById("helpBox").style.visibility="visible"})
}


export default DialogAi