const calculateChange = function(total, cash) {
  // Your code here
  let output={};
  let currency ={
    twenty : 20,
    ten: 10,
    five: 5,
    two: 2,
    onedollar: 1,
    quarter: 0.25,
    dime:0.1,
    nickel: 0.05,
    penny: 0.01
  }
  let change =  cash - total;
  bills=['twenty','ten','five','one','quarter'];
  bill_denomination = [2000, 1000, 500, 100, 25]
  bill_counts= {twenty:0,ten:0,five:0,one:0,quarter:0}
  for (bill in bills)
  {
    bill_counts[bills[bill]]=Math.floor(change/bill_denomination[bill])
    change=change-bill_counts[bills[bill]]*bill_denomination[bill]
    
  }
  console.log(bill_counts);
  // let twenty = Math.floor(change/2000);
  // let ten = Math.floor((change%2000)/1000);
  // let five =Math.floor(((change%2000)%1000)/500);
  // let one =Math.floor((((change%2000)%1000)%500)/100);
  // let quarter =Math.floor(((((change%2000)%1000)%500)%100)/25);
  // let dime =Math.floor((((((change%2000)%1000)%500)%100)%25)/10);
  // console.log(twenty,ten, five,one, quarter,dime);
  }
  
  //output['onedollar'] = Math.floor(change/100); //one dollars
  //console.log(output['onedollar'])
  //for(i=0; i)
  
//};

console.log(calculateChange(377, 20000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000)); 