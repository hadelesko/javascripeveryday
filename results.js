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
                 
                 break;
                }
            return true;        
        }
        }(complement_val));

        if(arraycontains_value==true && complement_val!=inputarray[j]){ 
            output_array=[inputarray[j],complementar_array[j]];
        }else {
            continue;
        }
        return output_array;
    }
}
// undefined
// wessjspairs(inputarray)
// (2) [5, 15]
// inputarray
// (7) [10, 5, -1000, 50, 27, 15, 10]
// var m=[10, 22, -2, 56, 20, 0, 5, -1000, 50, 27, 15, 10]
// undefined
// wessjspairs(m)
// (2) [22, -2]

/* QUESTION  
In the line 18 I  have created the remaining_array, which is intended to return a an 
array that does not contains the element inputarr[j]
At the line 26, I iterate through the remaining_array which should not contain inputarr[j].
But at the line 34 i was obliged to repeat the same condition to make the array get the 
right answer. What do i need to do to avoid this repetition  
*/

/*==========================================================================================================================
This part is not in the work but i would like to improve the functionality of my function, 
so Wes, how an i elimitate the duplicate in my output*/
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
/*=========================================================================================================================
inpet=[12, 5, -1000, 8, 50, 1020, 27, 15, 10, 23, 10, 8, 27, 12, 5]
arrayElementfrequency(inpet) ====>
(15) ["{12 : 3}", "{5 : 3}", "{-1000 : 2}", "{8 : 3}", "{50 : 2}", "{1020 : 2}", "{27 : 3}", "{15 : 2}", "{10 : 3}", 
"{23 : 2}", "{10 : 3}", "{8 : 3}", "{27 : 3}", "{12 : 3}", "{5 : 3}"]
QUESTION: How do I manupulate my function to eliminate the duplicated value in the output of my function? 
===========================================================================================================================*/