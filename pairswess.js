/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

//var inputarray=[2, 4, 40, 20, 16];
//var given_sum_value=44;
function pairs(inputarray, given_sum_value){
  var output_array=[]
  for(var i=0; i<inputarray.length-1; i++){
    if(inputarray[i]<given_sum_value && ((given_sum_value-inputarray[i]) in inputarray===true)){
      output_array.push(inputarray[i]); 
      output_array.push(given_sum_value-inputarray[i]);
      //console.log(output_array);
      break;
    }
    else{ 
      continue;
    }
return output_array
    /* elseif((inputarray[i]>given_sum_value) && ((inputarray[i]-given_sum_value) in inputarray===true)){
      var output_array=[inputarray[i], -given_sum_value+inputarray[i]];
      console.log(output_array);
      break;
  }*/
}
}
console.log(pairs([10,5,-1000,50,27,15,10], 20)