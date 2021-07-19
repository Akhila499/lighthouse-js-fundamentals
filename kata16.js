const makeCase = function(input, caseh){
  //Put your solution here
  const split = function(arr,caseh){
    let temp='';
    let temp_vowel='';
    let temp2='';
    let temp_cons='';
    for(let i=0; i<arr.length; i++){

        //console.log(arr[i]);
        if(caseh === 'vowel'){
          let vowels = ['a', 'e', 'i', 'o', 'u'];
          
          for(let word of arr[i]){
            if(vowels.includes(word)){
              temp+= word.toUpperCase();
            }else{
              temp+= word;
            }
           
          }
         temp = temp + ' '; 

          
        }else if(caseh === 'consonant'){
          let vowels = ['a', 'e', 'i', 'o', 'u'];
          
          for(let word of arr[i]){
            if(vowels.includes(word)){
              temp2+= word;
            }else{
              temp2+= word.toUpperCase();
            }
          }
          temp2 = temp2 + ' ';

        }
        
        else{
          arr[i] = arr[i].charAt(0).toUpperCase()+ arr[i].slice(1);
          
        }
        
        
    
    }
    temp_vowel +=temp;
    temp_cons += temp2;   
    if(caseh==='vowel'){
      return temp_vowel;
    }
    else if (caseh==='consonant')
    {
      return temp_cons;
    }
    else{
      return arr;
    }
    
  }

  let str_split=input.split(" ");

  if (caseh === "camel"){
    let rem = str_split.splice(1);
    let x=split(rem);
    x.unshift(str_split[0]);
    str_split=x;
    str_split = str_split.join("");
    return str_split;
  }
  else if (caseh ==='pascal'){
    let y=split(str_split);
    str_split=y;
    str_split = str_split.join("");
    return str_split;

  } else if (caseh === 'snake'){
    let snak = input.replaceAll(' ',"_");
    return snak;
  }else if(caseh === 'kebab'){
    let keb = input.replaceAll(' ', "-");
    return keb;
  }else if(caseh === 'title'){
    let y=split(str_split);
    str_split=y;
    str_split = str_split.join(" ");
    return str_split;
  }else if(caseh === 'vowel'){
    let x = split(str_split, 'vowel');
    return x;
  }
  else if(caseh==='consonant')
  {
    let cons_out=split(str_split,caseh);
    return cons_out;
  }
  else if(typeof caseh === 'object'){
    let snak_up = input.replaceAll(' ',"_");
    snak_upper = snak_up.toUpperCase();
    //console.log('hello');
    return snak_upper;
  }


  
  
 
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));