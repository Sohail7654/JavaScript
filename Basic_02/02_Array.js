const marvel_heros=["thor","IronMan", "spiderMan"]
const dc_heros=["Superman","flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros)

// const all_New_Heros=[...marvel_heros,...dc_heros]
// console.log(all_New_Heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
let real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Sohail")); 
console.log(Array.from("Sohail"))
console.log(Array.from({namr:"Sohail"}));   //Intresting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))