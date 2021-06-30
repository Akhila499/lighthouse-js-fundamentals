const ageCalculator = function (name, yob, currentyear) {
  let age = currentyear - yob;
  let temp = name + " is " + age + " years old.";
  return temp;
};


console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Akhila",1995,2021));
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));