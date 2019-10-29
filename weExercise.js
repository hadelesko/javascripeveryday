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

var printKeyValues= function(myObject){
	for (var[key, value] of Object.entries(myObject)){
		console.log(key+": "+value);
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
    this.speed=speed;
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

  if(position<0 || position >= word.length){
  
  tobeCapitalize_part= word.charAt(0); //word.substr(position, position+1); //
  sub_before_cap_sub = ""; // substring befor capital substring
  sub_after_cap_part = word.substr(1, word.length); 
  }
  else{
  tobeCapitalize_part= word.charAt(position);
  sub_before_cap_sub = word.substr(0, position);  // substring befor capital substring
  sub_after_cap_part = word.substr(position+1, word.length);
  }
  return  sub_before_cap_sub + tobeCapitalize_part.toUpperCase()+sub_after_cap_part;  
}

var capitalize=function(text, position){
  var newtext="";
  textlength=text.length;
  //for(var i=0; i<text.split(" ").length; i++){
  
  var word=text.split(" ")[0];
  var nextposition=word.length+1;
  var restTest=text.slice(word.length+1, textlength);
  newtext=capitalizesubstr(word, position) +" "+ capitalize(text.substr(word.length+1, textlength),position);
//}
return newtext;
}
		

/* Exercise 7: Fizz Buzz Exercise
Create a JavaScript function ‘fizzBuzz’ that takes 1 parameter, ‘n’.  
The function should return a string that contains the following for each number between 1 and n.
• If n <= 0
o Return an empty string
• If n > 0
o Print the number
o If the number is divisible by 3 write ‘fizz’
o If the number is divisible by 5 write ‘buzz’
o If the number is divisible by 3 and 5 write ‘fizzbuzz’
Example:
fizzBuzz(0);    // returns ‘’
fizzBuzz(15);  // returns  ‘1, 2, 3fizz, 4, 5buzz, 6fizz, 7, 8, 9fizz, 10buzz, 11, 12fizz, 13, 14, 15fizzbuzz’ */
var fizzBuzz=function(n){ // i use the recursion the result is reversed
  if(n<=0){
    //return "";
    return console.log("''");
  }else{
    if(n==1){
      return console.log(1);
    }else{
      if(n==2){
        return console.log(2) +fizzBuzz(1);
      }else{  
    
            b=(n%5==0 && n%3==0)?n+"fizzbuzz":(n%5==0?n+"buzz":(n%3==0?n+"fizz":n)); //operation ternair to reduce the if syntax
    
            return console.log(b)+fizzBuzz(n-1); 
      }
    }
  }
}

var fizBuz=function(n){// This one is does not use recursion but return the normal result as specified in the exercises 
  if(n<=0){
    console.log("");
  }else{
    for(var i=1; i<=n;i++){
      if(i%3==0 && i%5==0){
        console.log(i+"fizzbuzz");
      }else{
          if(i%5==0){
            console.log(i+"buzz");
          }else{
          if(i%3==0){
            console.log(i+"fizz");
          }else{
            console.log(i);
          }
          }
        }
    }
  } 
  }



/**
 * Exercise 8: Sum nested array
Create a function ‘sumNested’ that sums up all the numbers in an array and nested arrays.
Example:
sumNested([1, 1, 1, [3, 4, [8]], [5]]); // returns 23 (1 + 1 + 1 + 3 + 4 + 8 + 5 = 23
sumNested([]); // returns 0
 */
var sum_array=function(givenArray){
  
  if(givenArray.length==0){
    return 0;
  } 
  else{
      return givenArray.reverse().pop()+sum_array(givenArray);     
}
}

var sumNested=function(givenArray){
  /* 
  we check here if the element i of the given array is an array nested part.
  so we try to check the length of the element i by first reversing the array 
  and then pop it   ===array.reverse().pop().length==1 no nested
  the element i here is the first element of each resulting arrary because 
  the array is after each pop() method is reduced i.e  |array.length - 1|
  if the element to be added is nested ===> perform the adition interally in 
  this element and continue:sum_array(arrray):sum_array(array.reverse().pop()) + sumNested(array) 
  the *array* here in the added sumNested(*array*) is the new array after pop of the nested element i
   */
  var checkingArray=givenArray
  return checkingArray.reverse().pop().length==1?sum_array(givenArray):sum_array(givenArray.reverse().pop())+sumNested(givenArray);
}


/*
Exercise 9: Anagram Tester
Create a function ‘areTheseAnagrams’ that checks 
if the two strings passed to it are anagrams of each other.
Example:
areTheseAnagrams(“abc”, “bca”); // returns true
areTheseAnagrams(“abc”, “cde”); // returns false 
*/

var joinsortedArray=function(array){

/* joinsortedArray([])    //   ""
joinsortedArray(["a", "b", "c", "e"])  // "abce"
joinsortedArray(["a", "b", "c", "e", "m"]) //  "abcem"
  */
  if(array.length==0){
    return ""
  }else{
    return array.reverse().pop()+joinsortedArray(array);
  }
  }
  
var areTheseAnagrams=function(a,b){
  // How do i want to slve this?
  // 1-split a and b    ---2: sort a and b ---3 : return the comparison  a == b
  var ars=a.split("").sort();
  var brs=b.split("").sort();

  if(a.lengh!=b.length){
    return false;
  }else{
    var res=joinsortedArray(ars).localeCompare(joinsortedArray(brs));
    return res-1==0;

  //return a.split("").sort()==b.split("").sort(); // This return **false** every time even if a and b are anagrams.  WHY?
  
  //for(var i=0; i<b.split("").length; i++){
    //if(charCodeAt(a.split("").sort()[i])-charCodeAt(b.split("").sort()[i])==0){
 
}}




























