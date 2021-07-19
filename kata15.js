const organizeInstructors = function(instructors) {
  // Put your solution here
  let expected ={};
  for(var i=0 ; i<instructors.length ; i++){
     
     if (instructors[i]['course'] in expected){
       expected[instructors[i]['course']].push(instructors[i]['name']);
     }else{
       expected[instructors[i]['course']] =[ instructors[i]['name'] ];
      }
  }
  console.log(expected);


};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
// console.log(organizeInstructors([
//   {name: "Brendan", course: "Blockchain"},
//   {name: "David", course: "Web"},
//   {name: "Martha", course: "iOS"},
//   {name: "Carlos", course: "Web"}
// ]));