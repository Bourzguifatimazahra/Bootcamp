const menu = [
  { type: "starter", name: "Houmous with Pita" },
  { type: "starter", name: "Vegetable Soup with Houmous peas" },
  { type: "dessert", name: "Chocolate Cake" }
];

const hasDessert = menu.some(item => item.type === "dessert");
console.log(hasDessert ? "Il y a un dessert." : "Pas de dessert.");
// Output: "Il y a un dessert."

const allStarters = menu.every(item => item.type === "starter");
console.log(allStarters ? "Tous sont des starters." : "Il y a d'autres types.");
// Output: "Il y a d'autres types."
const hasMainCourse = menu.some(item => item.type === "main");
if (!hasMainCourse) {
  menu.push({ type: "main", name: "Grilled Chicken with Vegetables" });
}
console.log(menu);

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

menu.forEach(item => {
  item.vegetarian = vegetarian.some(veg => item.name.toLowerCase().includes(veg));
});

console.log(menu);
/*
Output:
[
  { type: "starter", name: "Houmous with Pita", vegetarian: true },
  { type: "starter", name: "Vegetable Soup with Houmous peas", vegetarian: true },
  { type: "dessert", name: "Chocolate Cake", vegetarian: false },
  { type: "main", name: "Grilled Chicken with Vegetables", vegetarian: false }
]
*/
