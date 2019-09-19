function pairs(inputarray,  given_sum_value){
  var output_array=[]
  for(var i=0; i<inputarray.length-1; i++){
    if(inputarray[i]<given_sum_value && ((given_sum_value-inputarray[i]) in inputarray===true)){
      output_array.push(inputarray[i]); 
      output_array.push(given_sum_value-inputarray[i]);
      //console.log(output_array);
      break;
    }
return output_array
    /* elseif((inputarray[i]>given_sum_value) && ((inputarray[i]-given_sum_value) in inputarray===true)){
      var output_array=[inputarray[i], -given_sum_value+inputarray[i]];
      console.log(output_array);
      break;
  }*/
}
}
console.log(pairs([10,5,-1000,50,27,15,10], 20))