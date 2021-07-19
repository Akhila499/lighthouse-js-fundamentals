const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let recipe_nameA='';
  let recipe_nameB='';
  let final='';

  for ( let recipe of recipes){
    for (let recipe_ing of recipe['ingredients'])
    {
      for (let ing_a of bakeryA){
        if (ing_a===recipe_ing)
        {
          recipe_nameA=recipe['name'];
        }
      }
      for (let ing_b of bakeryB)
      {
        if (ing_b===recipe_ing){
          recipe_nameB=recipe['name'];
        }

      }
      if(recipe_nameA === recipe_nameB){
        final = recipe_nameA;
      }
    }
  }
  return final;

}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    
   
    {
      name: 'Persian Cheesecake',
      ingredients: ['saffron', 'cream cheese']
    },
    {
      name: 'Custard Surprise',
      ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));