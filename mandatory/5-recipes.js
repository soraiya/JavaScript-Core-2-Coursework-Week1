/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 

It should have properties for 

- Title (a string), 
- Servings (a number), and 
- Ingredients (an array of strings)

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

You should write and log at least 5 recipes

**/

let recipes = {
    title: "King Prawn Stir Fry",
    servings: 2,
    ingredients: ["rice noodles", "prawns", "beansprouts", "bell peppers", "mushrooms", "onions", "stir fry sauce"]
};

console.log(recipes.title);
console.log("Serves:", recipes.servings);
for (let i of recipes.ingredients) {
    if (i === 0) {
    console.log("Ingredients:");
  }
  console.log(i.toString());
}
