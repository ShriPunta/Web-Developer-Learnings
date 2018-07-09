//set interval is a higher order function.
//we send functions to the set interval functions and it calls them
//syntax setInterval(<functionName>, <int interval>);
//this returns a number which is later used to stop it
//clearInterval(<number returned by the setinterval function>);

setInterval(function(){
	console.log("This is a dynamically defined function!");

},2000); //Every 2 seconds

