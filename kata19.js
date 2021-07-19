const generateBoard = function (whiteQueen, blackQueen){
  
  let x = blackQueen[0];
  let x_w = whiteQueen[0];
  let y = blackQueen[1];
  let y_w = whiteQueen[1];
  board = [];
  for(i=0; i<8 ; i++){
    board[i] = [];
    for (j=0; j<8; j++){
      if((x===i && y===j) || (x_w ===i && y_w === j)){
        board[i][j]=1;
      }else{
        board[i][j] = 0;
      }
      
    }
    //console.log(board[i][j]);
  }
  
  
  return board;
  //console.log(board[0])

};

const queenThreat = function(generateBoard){
  //console.log(generateBoard);
  let x1='';
  let x2='';
  let y2='';
  let y1='';
  for(let i=0; i<generateBoard.length; i++){
    for(let j=0; j<generateBoard[i].length; j++){
      console.log(generateBoard[i][j]);
      if(generateBoard[i][j]===1){
        if(x1===''&& y1===''){
          //console.log('in x1,y1');
          //console.log('i,j='+ i,j);
          x1=i;
          y1=j;
        }else if(x1!==''&&y1!==''){
          
          x2=i;
          y2=j;
          //console.log('x2,y2='+x2,y2);
        }
       
      }
    }
  }
  
  
  for (let i=0;i<generateBoard.length;i++){
    for(let j=0; j<generateBoard[i].length; j++){
      if(x1 === i && y1 !== j || x1!==i && y1===j ){
        if(generateBoard[i][j]===1){
          //console.log(i,j);
          //console.log(true);
          return true;
        }
      }else if(((y1-x1 === j-i) || (y1+x1 === j+i)) && ((x1!==i) && (y1!==j)))
      {
        //console.log(i,j);
        //console.log('diagonal');
        if(generateBoard[i][j]===1){
          return true;
        }
       
      }

    }
    
  }
    return false;
};





let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

