import React, {useState} from 'react'
import Monsters from './Monsters'

function PC ({sum}) {
    const [state, setState] = useState({
        count: '',
        level: ''
    });
    var xpThershold = 0;
    if (state.level === '1'){
        xpThershold = 25
    }else if (state.level === '2'){
        xpThershold = 50
    }else if (state.level === '3'){
        xpThershold = 75
    }else if (state.level === '4'){
        xpThershold = 125
    }else if (state.level === '5'){
        xpThershold = 250
    }else if (state.level === '6'){
        xpThershold = 300
    }else if (state.level === '7'){
        xpThershold = 350
    }else if (state.level === '8'){
        xpThershold = 450
    }else if (state.level === '9'){
        xpThershold = 550
    }else if (state.level === '10'){
        xpThershold = 600
    }else if (state.level === '11'){
        xpThershold = 800
    }else if (state.level === '12'){
        xpThershold = 1000
    }else if (state.level === '13'){
        xpThershold = 1100
    }else if (state.level === '14'){
        xpThershold = 1250
    }else if (state.level === '15'){
        xpThershold = 1400
    }else if (state.level === '16'){
        xpThershold = 1600
    }else if (state.level === '17'){
        xpThershold = 2000
    }else if (state.level === '18'){
        xpThershold = 2100
    }else if (state.level === '19'){
        xpThershold = 2400
    }else if (state.level === '20'){
        xpThershold = 2800
    }else{
        xpThershold = 0
    }
  xpThershold = xpThershold * state.count

    const handleChange = (event) => {
        setState((prevProps) => ({
        ...prevProps,
        [event.target.name]: event.target.value
        }));
    };
    return(
        <div>
           <label>Number of Players: </label>
           <input type="number" name="count" value={state.count} onChange={handleChange} required />
           <label>Level of Players: </label>
           <input type="range" min='1' max ='20' default="1" name="level" value={state.level} onChange={handleChange} required />
           <label>{state.level}</label>
           <Monsters pcThershold={xpThershold} />
        </div>
    )
}

export default PC;