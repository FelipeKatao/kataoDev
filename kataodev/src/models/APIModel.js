import {Articles} from  '../data/data.js'

function APIModel(type,tag,valueOf){
    if(type === "Article"){
        return Articles[0]["mainPage"][tag][valueOf]
    }
}

export default APIModel