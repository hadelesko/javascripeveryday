/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function pairs(inputarray,  given_sum_value){
    var i=0;
    var output_array=[];
    var remaining_array=inputarray;
    while((i<inputarray.length)&&(inputarray.length>=2)){
        var actuel_element = inputarray[i];
        var complement_val  = given_sum_value-actuel_element; 
        if((complement_val in remaining_array)==true){
            //output_array.push(actuel_element);
            //output_array.push(complement_val);
            remaining_array.pop(inputarray[i]);
            remaining_array.pop(complement_val);

            console.write([actuel_element, complement_val]);

        }
                     
  }
}

console.log(pairs([10,5,-1000,50,27,15,10], 20))