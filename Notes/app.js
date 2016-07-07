//Create function for process.argv property 
function grab(flag) {
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}

//Create variables to grab user and greeting values in array
var greeting = grab('--greeting');
var user = grab('--user');

//Conditional statement based on user and greeting values provided. Values are places in template strings
if (!user || !greeting) {
	console.log("You Blew it!");
} else {
	console.log(`Welcome ${user}, ${greeting}`);
}
