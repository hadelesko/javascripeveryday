var simulateNormaleSumme=function(x,y){
  startvalue=x<y?x:y;// get the min arg.
  endvalue=x<y?y:x;  // get the max arg.
  if(x!=y){return startvalue+simulateSumme(startvalue+1, endvalue);
         }return startvalue;
}

/*Exercise 1: Summation
Create a JavaScript function ‘summation’ that takes 2 parameters, 
‘num1’ and ‘num2’.  The function should return the sum of all
whole numbers between num1 and num2 inclusive.
Example:
summation(4, 10); // returns ‘49’
summation(10, 4); // returns ‘0’
*/

var sum_a_range=function(x,y){
  startvalue=x<y?x:y;// get the min arg.
  endvalue=x<y?y:x;  // get the max arg.
  summ=x>y?0:startvalue
  if(x<y){
	return startvalue+sum_a_range(startvalue+1, endvalue);
         }
	return startvalue;
}
/**/
var simulation=function(x,y){
	//simulation(1, 4)=10; simulation(4, 4)=0;  simulation(4, 1)=0; simulation(4, 10)=49  
	ssum=x<y?sum_a_range(x,y):0;// lambda expression to simplify the syntax of if condition
return ssum;
}
  
/******************************************************************************************************************/
/******************************************************************************************************************/

/*Exercise 2: Object Key Value Properties
Create a function ‘printKeyValues’ that takes in a single parameter.
The function should log all the key value pairs in the passed in object to the console in the format shown in the example.
Example:
var myObj = {
“key1”: “value1”,
“key2”: “value2”,
“key three”: “value3”
};
printKeyValues(myObj);  // prints the text below to the console

key1: value1
key2: value2
key three: value3 

*/

var printKeyValues: function(myObject){
	for (var[key, value] of Object.entries(myObject)){
		console.log(key+": "+value)
	}
}
/******************************************************************************************************************/
/*Exercise 3: Pythagorean Theorem
Use the Pythagorean Theorem to create a function ‘getHypotenuseLength’ that uses parameters ‘a’ and ‘b’ to calculate
the length of the hypotenuse of a right triangle. If a or b is less or equal to 0, then return 0. 
Example:
getHypotenuseLength(3,4); // returns 5  */

var getHypotenuseLength=function(a,b){
	h=Mat.pow((Mat.pow(a,2)+Mat.pow(b, 2)),0.5);
	hypothenus=a<=0||b<=0?0:h;
return hypothenus;

/******************************************************************************************************************/

/******************************************************************************************************************/
/*Exercise 4: Object Exercise
Create a constructor function, named Car, which defines an object with the following methods:
• getSpeed() – returns the current speed of the car
• setSpeed(speed) – sets the current speed of the car. If the value of the ‘speed’ 
  parameter is greater than or equal to 0, set the speed of the car.
• stop() – sets the current speed of the car to 0
Example:
var car = new Car();
console.log(car.getSpeed());  // displays 0
car.setSpeed(10);
console.log(car.getSpeed()); // displays 10
car.stop();
console.log(car.getSpeed()); // displays 0  */

function Car() {
    speed: speed;
    getSpeed(speed) = function(){
		return this.speed;
		};
    setSpeed(speed)=function(speed){
		this.speed=speed;
		};
    stop()=function(){
		this.speed=0;
		}
}

/******************************************************************************************************************/
/*Exercise 6: String Capitalization
Create a function ‘capitalize’ that takes a single string parameter.  												
The function should return a string with the first letter in each word from the input string capitalized.
Example:
capitalize(“i love to code!”); // returns “I Love To Code!”

/******************************************************************************************************************/ 
var capitalizesubstr=function(word, position){ 
    // capitalizesubstr("home", 0) //return Home
    // capitalizesubstr("home", 3) //return hoMe
    // capitalizesubstr("home", -3)//return Home . 
    // This might return error but we replace every position less than 0
    // or higher than length of the word with the position =0 
    // in reality the position<0 or position>word.length does not exist

    var sub_before_cap_sub; // substring before capital substring
    var sub_after_cap_part; // substring after capital substring
    var tobeCapitalize_part;

    if(position<=0 || position > word.length){
    
    tobeCapitalize_part= word.charAt(0); //word.substr(position, position+1); //
    sub_before_cap_sub = ""; // substring befor capital substring
    sub_after_cap_part = word.substr(1, word.length); 
    }
    else{
    tobeCapitalize_part= word.charAt(position);
    sub_before_cap_sub = word.substr(0, position-1);  // substring befor capital substring
    sub_after_cap_part = word.substr(position, word.length);
    }
    return  sub_before_cap_sub + tobeCapitalize_part.toUpperCase()+sub_after_cap_part;  
}

var capitalize=function(text, position){
	

	for(var i=0; i<text.split(" ").length; i++){
	   	text.replace(text.split(" ")[i], capitalizesubstr(text.split(" ")[i], position)) + capitalize(text.split(" ")[i+1]);
	  }
	return text;
}

	/*textarray=text.split(" ").reverse();
	
	if(textarray.length==0){
			return capitalizesubstr(text, position);
       }else{ 
			capitalizesubstr(textarray.pop(),position)+capitalize*/
	
	

		

































