/*
const instructorWithLongestName = function(instructors){
  let name =[];
  for (let i=0; i<instructors.length ; i++){
    name.push(instructors[i].name)
  }
  let temp=[];
  let req=[];
  let result =[];
  for (let char=0; char<name.length; char++){
    if (char===0){
      temp.push(name[char].length);
      req.push(name[char]);
    }else {
      if(temp[0]>=name[char].length){
        continue;
      }else{
        temp.pop();
        req.pop();
        temp.push(name[char].length);
        req.push(name[char]);
      }
    }
  }
  for (let res=0 ; res<instructors.length; res++){
    //console.log(instructors[res]);
    if (instructors[res].name === req[0]){
      result.push(instructors[res]);
      //console.log(result);
    }
  }
  //console.log(req);
  return result[0];
  
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

*/

/*
const instructorWithLongestName = function(instructors){
  let longest_len=0;
  let lenth = {'longest_len':0, 'index':100}
  for (let i=0; i<instructors.length; i++){

    lenth['longest_len']=instructors[i]['name'].length;
    
    if (
      longest_len<lenth['longest_len'])
      {
        longest_len=lenth['longest_len'];
        lenth['index']=i;
      }
    
  }
  console.log(instructors[lenth['index']]);
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
])); 

*/


const instructorWithLongestName = function(instructors){
  let length=0;
  let index=0;
  for (let i = 0; i < instructors.length; i++){
    if (instructors[i]['name'].length >= length){
      length = instructors[i]['name'].length;
      index = i;
    }
  }
  return instructors[index];

};


console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
])); 
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));