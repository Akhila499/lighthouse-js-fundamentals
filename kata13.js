const talkingCalendar = function(date) {
  // Your code here
  let split_date=date.split('/');
  //console.log(split_date[1]);

  if (split_date[1]==='12'){
    split_date[1]='December';
  }else if(split_date[1]==='11'){
    split_date[1]='November';
  }else if(split_date[1]==='10'){
    split_date[1]='October';
  }else if(split_date[1]==='9'){
    split_date[1]='September';
  }else if(split_date[1]==='8'){
    split_date[1]='August';
  }else if(split_date[1]==='7'){
    split_date[1]='July';
  }else if(split_date[1]==='6'){
    split_date[1]='June';
  }else if(split_date[1]==='5'){
    split_date[1]='May';
  }else if(split_date[1]==='4'){
    split_date[1]='April';
  }else if(split_date[1]==='3'){
    split_date[1]='March';
  }else if(split_date[1]==='2'){
    split_date[1]='February';
  }else{
    split_date[1]='January';
  }
  //console.log(split_date[2]);
  let day = Number(split_date[2]);
  let year = Number(split_date[0]);
  //console.log(day);
    
  if(day===1){
    day = i + 'st';
  }else if (day===2){
    day = day +'nd';
  }else if(day===3){
    day = day + 'rd';
  }else if(day===21){
    day = day + 'st';
  }else if(day===22){
    day = day + 'nd';
  }else if(day===23){
    day = day + 'rd';
  }else if(day===31){
    day = day + 'st';
  }else {
    day = day + 'th';
  }
   
  let final = split_date[1]+' '+ day +', '+ year;
  //console.log(final);
  return final;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));