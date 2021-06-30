const finalPosition = function (moves){
  let x=0 , y=0;
  for (let move of moves) {
    
    if (move === 'north') {
      y+=1;
      //return y;
    }
    else if(move === 'east'){
      x+=1;
      //return x;
    } else if(move === 'south'){
      y-=1;
      //return y;
    }else if(move === 'west'){
      x-=1;
      //return x;
    }
    
  }
  cord = [x,y];
  return cord;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));
