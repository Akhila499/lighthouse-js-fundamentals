const loopyLighthouse = function (range, multiples, words){
  
  for (let i = range[0] ; i <= range[1] ; i++){
    if ( i % 10 === 0){
      console.log("BattyBeacon");
    }else if ( i % 5 === 0){
      console.log("Beacon");
    }else if ( i % 2 === 0){
      console.log("Batty");
    }else{
    console.log(i);
    }
  }
}

loopyLighthouse([15, 90],[2, 5],["Batty", "Beacon"]);