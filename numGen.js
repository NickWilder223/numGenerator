const array = [];

for(let i = 1; i <= 10000; i++){
	array.splice(Math.floor(Math.random() * array.length), 0, i);
}

console.log(array);