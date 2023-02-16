let min = +prompt("Введите число от 0 до 59");

if (min >= 0 && min <= 14) {
	console.log('В первую');
}

if (min >= 15 && min <= 30) {
	console.log('Во вторую');
}

if (min >= 31 && min <= 45) {
	console.log('В третью');
}

if (min >= 46 && min <= 59) {
	console.log('В четвертую');
}