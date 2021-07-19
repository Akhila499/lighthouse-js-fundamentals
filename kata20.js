const blocksAway = function(directions) {
  // Put your solution here
  let face='north';
  let north=0;
  let east=0;
  //console.log(directions.length);
  for(let i=0; i<directions.length; i=i+2){
    if ((directions[0]==='right')&&(i===0)){
      face = 'east';
      east += directions[i+1];
    
    }else if((directions[0]==='left')&&(i===0)){
      face = 'west';
      east -= directions[i+1];
      
    }else if((directions[i]==='left')&&(face==='north')){
      face = 'west';
      east -= directions[i+1];
      
    }else if((directions[i]==='left')&&(face==='east')){
      face= 'north';
      north += directions[i+1];
      
    }else if((directions[i]==='right') && (face==='west')){
      face = 'north';
      north += directions[i+1];
      
    }else if((directions[i]==='right') && (face === 'north')){
      face = 'east';
      east += directions[i+1];
      
    }else if ((directions[i]==='right')&&(face ==='east')){
      face = 'south';
      north -= directions[i+1];
      
    }else if((directions[i]==='left')&&(face==='south')){
      face = 'east';
      east += directions[i+1];
      
    }else if((directions[i]==='right')&&(face==='south')){
      face = 'west';
      east -= directions[i+1];
      
    }else if ((directions[i]==='left')&&(face==='west')){
      face ='north';
      north += directions[i+1];
      
    }
   
  }
  let req = {'east': Math.abs(east), 'north': Math.abs(north)};
  return req;


};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));