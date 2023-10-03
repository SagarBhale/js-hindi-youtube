const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash","batman"];

//marvel_heros.push(dc_heros);
//console.log(marvel_heros);
//console.log(marvel_heros[3][2]);

//concate
// const allHeros = marvel_heros.concat(dc_heros);
//  console.log(allHeros);

//spread
const all_new_heros = [...marvel_heros, ...dc_heros];
//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity); //give depth
console.log(real_another_array);

//this is array?
console.log(Array.isArray("Sagar"));
//if not ,so covert this string into arrray using "from"
console.log(Array.from("Sagar"));
console.log(Array.from({name: "sagar"}));//interesting case for interw..

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));