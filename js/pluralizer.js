/*write code below*/

var pluralizer = function (howMany){
	var thing = 'cat';
	var count = howMany;
	if (count !== 1) {
	  console.log(count+" "+ thing+"s")
	} else { console.log(count+" "+ thing) }
}

console.log('')
console.log("I'm counting cats...")
pluralizer(5)
pluralizer(1)
pluralizer(100)
pluralizer(0)