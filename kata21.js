let prompt = require("prompt-sync")({sigint:true});
let num = 34;
let answer ;

let count = 0;
let ans=[];
//console.log(ans);
while(num!==answer){
  
  let answer = parseInt(prompt("Guess a number: "));
  //console.log(ans.includes(answer));

  if(ans.includes(answer)){
    console.log('Already guessed');
  }else if(answer < num){
    console.log("Too Low!");
    count +=1;
   
  }else if(answer>num){
    console.log("Too High!");
    count +=1;
    
  }else if(isNaN(answer)){
    console.log("Not a number! Try again");
    count +=1;
    
  }else if(answer == num){
    count +=1;
    console.log('You got it!You took '+ count + 'attempts' );
    
    break;
   
  }
  ans.push(answer);
  //console.log(ans);
}
