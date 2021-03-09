
exports.min = function min (array) {
  if (arguments.length == 0 || array.length == 0){
    return 0;
  }
  else{
    mi=array[0]
    for (i=0; i<array.length;i++){
     if(mi>array[i]){
      mi=array[i]
     }
    }
    return(mi)
  }
}

exports.max = function max (array) {
  if (arguments.length == 0 || array.length == 0){
    return 0;
  }
  else{
    ma=array[0]
    for (i=0; i<array.length;i++){
     if(ma<array[i]){
      ma=array[i]
     }
    }
    return(ma)
  }
}


exports.avg = function avg (array) {
  if (arguments.length == 0 || array.length == 0){
    return 0;
  }
  else{
    sum=0;
    for (i=0; i<array.length;i++){
     sum+=array[i]
    }
    return(sum/array.length)
  }
}

