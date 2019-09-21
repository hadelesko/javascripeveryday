function pairs(inputarray,  given_sum_value){
    var inputarray=[10,5,-1000,50,27,15,10];
    //var inputarray=[12,6,-120,140, 50,27,18,10];
    var given_sum_value= 20;
    var i=0;
    var output_array=[];
    //var remaining_array=[];
    //while((i<inputarray.length-2)&&(inputarray.length>=2)){
    for(i=0; i<inputarray.length-1; i++){
        var actuel_element = inputarray[i];  // indexed element
        //the complement or the rest or the value to be added 
        //to the actuel_elemen so that we can get the given_sum_value 
         var complement_val  = given_sum_value-actuel_element;

        inputarray.pop(inputarray[i]);
        //remaining_array=inputarray;
        

        if((complement_val in inputarray)==true){   //condition ***i***: if the the complement can be found in the rest of the array
            output_array.push(actuel_element);  // inserting the element to the output_array
            output_array.push(complement_val);
            //remaining_array.pop(complement_val);
            //output_array=[complement_val, actuel_element]; 

            inputarray.pop(complement_val);
            //inputarray=remaining_array;
            //document.getElementById("demo").innerHTML = output_array;
            break; // stop the loop if the condition ***i*** is ok 
        }else{}
        
  }
  return output_array;
}
var inputarray=[10,5,-1000,50,27,15,10];
pairs(inputarray);

function npairs(inputarray){
    var disired_sum_value;
    disired_sum_value=20;
    var indexer=0;
    var output_array=[];
    var actuel_element = inputarray[indexer]; 
    var complementar_value=desired_value - actuel_element;
    while((inputarray.length>=2)
        &&(complementar_value in(inputarray.filter(function(actuel_element, remaining_arr){
        return remaining_arr != actuel_element;
    })))){
        output_array.push(actuel_element);
        output_array.push(complementar_value);
    }
return output_array;
}

function wspairs(inputarray){
    var disired_sum_value=20;
    var indexer=1;
    var output_array=[];
    var actuel_element = inputarray[indexer-1]; 
    var complementar_value=desired_sum_value - actuel_element;
    var remaining_array=inputarray.filter(function(actuel_element, remaining_arr){
        return remaining_arr!= actuel_element;
    });  

    while(!(inputarray.length>=indexer+1)
        ||(complementar_value in remaining_array==false)){
        /*(inputarray.filter(function(actuel_element, remaining_arr){
        return remaining_arr!= actuel_element;}))))*/
        inputarray=remaining_array;
    }
    output_array.push(actuel_element);
    output_array.push(complementar_value);
return output_array;
}

function wespairs(inputarray){
    var desired_sum_value=20;
    var complementar_array=[];
    var output_array=[];
    for(let i=0; i<inputarray.length-1; i++){
        complementar_array[i]=desired_sum_value-inputarray[i];
      };

    for(let j=0;j<inputarray.length-1; j++){
        if((complementar_array[i] !=inputarray[i]) 
            && ((complementar_array[i] in inputarray)===true)){
                output_array=[inputarray[i],complementar_array[i]];   
            }
         else{
             continue;
         }   
    }
    return output_array;
}


function wesspaars(inputarray){
    //var inpty=[12, 5, -1000, 50, 1020, 27, 8, 15, 10];
    //var inpt=[12, 5, -1000, 50, 1020, 27, 15, 10, 8]; 
    //inputarray= [ 10, 5, -1000, 50, 27, 15, 10 ];
    var desired_sum_value=20;
    var complementar_array=[];
    var output_array=[];
    for(let i=0; i<inputarray.length; i++){
        complementar_array[i]=desired_sum_value-inputarray[i];
        var remaining_array = inputarray.filter(function(value){
            return value != inputarray[i];
        });

        if((complementar_array[i]!=inputarray[i]) 
        && ((complementar_array[i] in remaining_array)==true)){

                    output_array=[inputarray[i],complementar_array[i]]; 
                    return output_array;
                }          
        }
}



function wesspaiirs(inputarray){
    //var inpt=[12, 5, -1000, 50, 1020, 27, 15, 10, 8]; 
    //inputarray= [ 10, 5, -1000, 50, 27, 15, 10 ];
    var desired_sum_value=20;
    var complementar_array=[];
    var output_array=[];

    for(var i=0; i<inputarray.length; i++){
        complementar_array[i]=desired_sum_value-inputarray[i];
      };

    for(var j=0;j<inputarray.length; j++){

        var remaining_array = inputarray.filter(function(value){
            return value !== inputarray[j];
        });

        if((complementar_array[j] in remaining_array)===false){
            //continue;
                output_array=output_array; // No update   
            }
         else{
             //if((complementar_array[i] in remaining_array)===true) {
             
            output_array=[inputarray[j],complementar_array[j]];
            break; //stop the loop after the first output.length==2 
         }
         
    }
    return output_array;
}


function wessjspairs(inputarray){
    //var inpt=[12, 5, -1000, 50, 1020, 27, 15, 10, 8]; 
    //inputarray= [ 10, 5, -1000, 50, 27, 15, 10 ];
    var desired_sum_value=20;
    //var complementar_array=[];
    var output_array=[];
    /*we create an array with the same length as the inputarray containing the 
    remaining values for each element to get the given sum (here 20)*/
    var complementar_array=(function complementar(given_array, desired_sum_value){
        var coarr=[];
            for(var i=0; i<given_array.length; i++){
                coarr[i]=desired_sum_value-inputarray[i];
            }; return coarr;
    }(inputarray, desired_sum_value)); //complementar_arr funtion is created and directly invoked

    for(var j=0;j<inputarray.length; j++){

        var remaining_array = inputarray.filter(function(value){
            return value != inputarray[j];
        });
        var complement_val= desired_sum_value - inputarray[j]
        // check if the remaining array contains the required complement_value
        var arraycontains_value= (function(complement_val){
    
            for(let k=0;k<remaining_array.length; k++){
             if(remaining_array[k]-complement_val==0){
                 //decision_array.push[0];
                 break;
                }
            return true;        
        }
        }(complement_val));

        if(arraycontains_value==true){
            output_array=[inputarray[j],complementar_array[j]];
        }else {
            output_array=[];
        }
        return output_array;
    }
}
/*         if((complementar_array[j] in remaining_array)==false){
            //continue;
                output_array= output_array; // No update   
            }
         else{
             //if((complementar_array[i] in remaining_array)===true) {
             
            output_array=[inputarray[j],complementar_array[j]];
            break; //stop the loop after the first output.length==2 
         } 
        }    
    }*/
    



/*var i=0; var n= (function(){ var booly; while(i<inpt.length-1){if(inpt[i]===27){return booly= true;} else{return booly=false;}; i+=1; } }());
undefined
n
false
*/

// Function to find  an element in an array or to see if an element cn be found in the array 
var array_residus= (function(){
    decision_array=[];
    for(let k=0;k<remaining_array.length-1; k++){
     if(remaining_array[k]-complement_val==0){
         decision_array.push[0];
        }; 
    return decision_array;
}}())
//================================================================
var arraycontains_value= (function(complement_val){
    
    for(let k=0;k<remaining_array.length; k++){
     if(remaining_array[k]-complement_val==0){
         //decision_array.push[0];
         break;
        }
    return true;        
}
//return decision_array.length>=1;
}(complement_val))
//=================================================================

var arraycontains_complement= (function(){
    var decision_array=[];
    var complement_val=8;
    for(var k=0;k<remaining_array.length; k++){
     if(remaining_array[k]-complement_val==0){
         //decision_array.push[0]; 
         break;
    }
    return "at the position " +k       
}
 
}());




function wessjspair(inputarray){
    //var inpt=[12, 5, -1000, 50, 1020, 27, 15, 10, 8]; 
    //inputarray= [ 10, 5, -1000, 50, 27, 15, 10 ];
    var desired_sum_value=20;
    //var complementar_array=[];
    var output_array=[];
    /*we create an array with the same length as the inputarray containing the 
    remaining values for each element to get the given sum (here 20)*/
    var complementar_array=(function complementar(given_array, desired_sum_value){
        var coarr=[];
            for(var i=0; i<given_array.length; i++){
                coarr[i]=desired_sum_value-inputarray[i];
            }; return coarr;
    }(inputarray, desired_sum_value)); //complementar_arr funtion is created and directly invoked

    for(var j=0;j<inputarray.length; j++){

        var remaining_array = inputarray.filter(function(value){
            return value != inputarray[j];
        });
        var complement_val= desired_sum_value - inputarray[j]
        // check if the remaining array contains the required complement_value
        var arraycontains_value= (function(complement_val){
            var ispartof=false;
            for(let k=0;k<remaining_array.length; k++){
             if(remaining_array[k]-complement_val!=0){
               continue;
                }
/*                 else{
                   ispartof=true;
                } */

                ispartof=true;    
            return ispartof;        
        }
        }(complement_val));
        
        if(arraycontains_value==true){
            output_array=[inputarray[j],complementar_array[j]];
        }else {
            output_array=[];
        }
        return output_array;
    }    
}




// ==============================================================================================================//
// check if the an element is in an array

function hasValue(arrayx, value){
    for(let i=0; i<=arrayx.length; i++){
        if(arrayx[i]==value){
            return true;
        }
    }
}

//================================================================================================================//

function countelement(arrayx, element){
    count_element=0;
    for(let i=0; i<arrayx.length; i++){
        if(arrayx[i]!=element){ 
            // we jump to arrayx[i+1]  if array[i+1] is NOT equal to the element with the "continue" statment
            // continue   to jump over i+1 if the condition(arrayx[i]!=value) is true
            continue;
        } 
        count_element++;
    }
    return count_element;
}

// Alternative vuncktion count specific element in an array
function countelement(arrayx, element){
    count=0;
    for(let i=0; i<arrayx.length; i++){
        if(arrayx[i]==element){// we count if arrayx[i]== element 
            count++;     
        }  
    }
    //return the value of the count element function
    return count; 
}

//======================================================================================================================
function arrayElementfrequency(arrayx){
    //var elementcounter=1;
    var frequencyArray=[];
    for(var i=0; i<arrayx.length; i++){
        var element=arrayx[i];
        var elementcounter=1;
        
        for(var j=0; j<arrayx.length; j++){
            if((j==i)&&(arrayx[j]!=arrayx[i])||(j!=i)&&(arrayx[j]!=arrayx[i])){
                continue;
            }
            elementcounter+=1;
        }
        // How to eliminate the duplicate?
        //if((("{"+arrayx[i]+" : "+elementcounter+"}") in frequencyArray)==false){
            frequencyArray.push("{"+arrayx[i]+" : "+elementcounter+"}");
        //}               
    }
    return frequencyArray;
}

//=====================================================================================================================

//====================================Verifier s'il y a duplicate dans l' array========================================
function elementHasDuplicate(arrayx, element){
    var decision_value=false;
    if (countelement(arrayx, elemrnt)>=2){
        decision_value=true;
    } 
    return decision_value
}





//=====================================================================================================================
//This code will exit the loop after the first iteration in a for of loop:

const objc = [{ name: 1 }, { name: 2 }, { name: 3 }];
for (const iterator of objc) {
  if (iterator.name == 2) {
    return;
  }
  console.log(iterator.name);// 1
}

//the below code will jump on the condition and continue on a for of loop:

const objc = [{ name: 1 }, { name: 2 }, { name: 3 }];

for (const iterator of objc) {
  if (iterator.name == 2) {
    continue;
  }
  console.log(iterator.name); // 1  , 3
}
//=====================================================================================================================

