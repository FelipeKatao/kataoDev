
let times = 0
let titles =["Ola pessoal","teste","Tenta aqui","rodar novamente"]
let About = ["Loren inspum,loren loren loren","Loren inspum,loren loren loren","Loren inspum,loren loren loren","Loren inspum,loren loren loren"]
let btBanner =["Acessar1","Acessar2","Acessar3","Acessar4"]

function ResolveTimer(x){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(x)
        }, 9000)
    })
}

async function AddTimer(x){
    let a = ResolveTimer(9000)
    return a

}

function ChangeTextRender(value){

    AddTimer(2000).then(v =>{
        if(times>=4){
            times=0
        }
        document.getElementById("TitleTextBanner").innerHTML=titles[times]
        document.getElementById("AboutTextBanner").innerHTML=About[times]
        document.getElementById("btBannerText").innerHTML=btBanner[times]
        times++
        ChangeTextRender()
    })
}

export default ChangeTextRender