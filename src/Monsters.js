import React, {useState} from 'react'

import Encounter from './EncounterLevel';

function Monsters({pcThershold}) {
const [pc, setPc] = useState([{Name: "", PC: "", Level:""}])

//handle input change
const handleInputChange = (e, index) => {
  const { name, value} = e.target;
  const list = [...pc];
  list[index][name] =value;
  setPc(list);
}

//handle click event of the Remove button
const handleRemoveClick = index => {
  const list = [...pc];
  list.splice(index, 1);
  setPc(list);
}

//handle click event of the Add button
const handelAddClick = () => {
  setPc([...pc, {PC: "", Level: ""}])
}

const xp = (x , y) =>{
  var z = 0;
  if (y<2){
    z = 1;
  } else if (y>1 && y<3){
    z= 1.5;
  } else if (y>2 && y<7){
    z = 2
  } else if (y>6 && y<11){
    z = 2.5
  }else if (y>10&& y<15){
    z=3
  }else {
    z =4
  }
 

  if (x === '.1'){
      x = 25
  }
  else if (x==='.25'){
      x = 50
  }
  else if (x==='.5'){
      x = 100
  }
  else if (x==='1'){
    x = 200
  }else if (x==='2'){
    x = 450
  }
  else if (x==='3'){
    x = 700
  }
  else if (x==='4'){
    x = 1100
  }
  else if (x==='5'){
    x = 1800
  }
  else if (x==='6'){
    x = 2300
  }
  else if (x==='7'){
    x = 2900
  }
  else if (x==='8'){
    x = 3900
  }
  else if (x==='9'){
    x = 5000
  }
  else if (x==='10'){
    x = 5900
  }
  else if (x==='11'){
    x = 7200
  }
  else if (x==='12'){
    x = 8400
  }
  else if (x==='13'){
    x = 10000
  }
  else if (x==='14'){
    x = 11500
  }
  else if (x==='15'){
    x = 13000
  }
  else if (x==='16'){
    x = 15000
  }
  else if (x==='17'){
    x = 18000
  }
  else if (x==='18'){
    x = 20000
  }
  else if (x==='19'){
    x = 22000
  }
  else if (x==='20'){
    x = 25000
  }
  else if (x==='21'){
    x = 33000
  }
  else if (x==='22'){
    x = 41000
  }
  else if (x==='23'){
    x = 50000
  }
  else if (x==='24'){
    x = 62000
  }
  else if (x==='25'){
    x = 75000
  }
  else if (x==='26'){
    x = 90000
  }
  else if (x==='27'){
    x = 105000
  }
  else if (x==='28'){
    x = 120000
  }
  else if (x==='29'){
    x = 135000
  }
  else if (x==='30'){
    x = 155000
  }else{
    x = 88
  }
  
  
  x = (x*z) * y
  return(x)

}

var sum = pc.reduce((total , currentValue)=> total = total + (xp(currentValue.Level, currentValue.PC) ),0)

  return (
    <div className="Monsters">
      {pc.map((x, i) =>{
        return(
          <div className="box">
          {pc.length -1 !== i  && 
            <p>Monster Type <strong>{x.Name}</strong> the amount of monsters is/are <strong>{x.PC}</strong> </p> }
            
            {pc.length - 1 === i && <div>
              <p>Add a Monster to Encounter</p>
              <input 
              name="Name"
              placeholder="Name of Monster"
              value={x.Name}
              onChange={e=>handleInputChange(e,i)}
              />
            <input
              type="number"
              name="PC"
              placeholder="Number of Monsters"
              value={x.PC}
              onChange={e => handleInputChange(e,i)}
              />
              <input
              type="number"
              className="ml10"
              name="Level"
              placeholder="CR Level"
              value={x.Level}
              onChange={e => handleInputChange(e,i)}
              />
              <p>For cr 1/8 please type .1 for cr 1/4 type .25 for cr 1/2 please type .5</p>

            </div>}
            
            
              <div className="btn-box">
                {pc.length -1 !== i && <button 
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
                {pc.length - 1 === i && <button onClick={handelAddClick}>Add</button>}
              </div>
            </div>
        )
      })}
      <div style={{ marginTop: 20}}>
      <h1>The total XP given out to the party is {sum}  </h1></div>
      <Encounter xpSum={sum} pcThershold={pcThershold} />
    </div>
    
  );
}

export default Monsters;
/* <select onChange={e=> handleInputChange(e,i)}>
                   <option value='.2'>.2</option>
                   <option value={x.Level}>.25</option>
                   <option value={x.Level}>.5</option>
                   <option value={x.Level}>1</option>
                   <option value={x.Level}>2</option>
                   <option value={x.Level}>3</option>
                   <option value={x.Level}>4</option>
                   <option value={x.Level}>5</option>
                   <option value={x.Level}>6</option>
                   <option value={x.Level}>7</option>
                   <option value={x.Level}>8</option>
                   <option value={x.Level}>9</option>
                   <option value={x.Level}>10</option>
                   <option value={x.Level}>11</option>
                   <option value={x.Level}>12</option>

               </select>
              */