


function Encounter({xpSum , pcThershold}){
    var answer = "";
    if (xpSum > (pcThershold*10)){
        answer = "TPK!!"
    }else if (xpSum > (pcThershold*5)){
        answer = "Deadly"
    }else if (xpSum > (pcThershold*4)){
        answer = "Hard"
    }else if (xpSum > (pcThershold*3)){
        answer = "Medium"
    }else if (xpSum > (pcThershold*2)){
        answer = "Easy"
    }else {
        answer = "Super Easy"
    }
    return(
        <div>
            <h1>{answer}</h1>
            
        </div>
    )
}

export default Encounter;