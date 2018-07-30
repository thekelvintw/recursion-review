// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// Strategy:
// declare the output varible emtpy string
// check is the type of num, blooean, null, array, object, strings,  
// function && undefined


var stringifyJSON = function(obj) {
// var obj = [2,3];
  var output = '';
  if (typeof obj === 'number') {
    output += obj;
  } else if (typeof obj === 'string') {
    output += `"${obj}"`;
  }else if (typeof obj === 'boolean') {
    output += obj;
  } else if (obj === null) {
    output = 'null';
  } else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]'
    }
    output += '[';
    obj.forEach(function(element){
      output += stringifyJSON(element);
      output += ','
    });
    output = output.substring(0,output.length-1);
    output += ']'
  }
  console.log('line 28', output)
  return output;
};
