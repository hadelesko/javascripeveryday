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


function wesspairs(inputarray){
    var desired_sum_value=20;
    var complementar_array=[];
    var output_array=[];
    for(let i=0; i<inputarray.length-1; i++){
        complementar_array[i]=desired_sum_value-inputarray[i];
      };

    //for(let j=0;j<inputarray.length-1; j++)
    while(j<inputarray.length && (complementar_array[i] ===inputarray[i]) && ((complementar_array[i] in inputarray)===false)){

                output_array=[inputarray[i],complementar_array[i]]; 

            }
         
    }
    return output_array;
}}}



function wesspairs(inputarray){
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
                output_array===output_array; // No update   
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

        if((complementar_array[j] in remaining_array)==false){
            //continue;
                output_array= output_array; // No update   
            }
         else{
             //if((complementar_array[i] in remaining_array)===true) {
             
            output_array=[inputarray[j],complementar_array[j]];
            break; //stop the loop after the first output.length==2 
         }    
    }
    return output_array;
}


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

var array_residus= (function(){
    decision_array=[];
    for(let k=0;k<remaining_array.length-1; k++){
     if(remaining_array[k]-complement_val==0){
         decision_array.push[0];
        }; 
    return decision_array;
}}())