// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//Strategy
//  declare output array = [];
//  search body if it has a className
//  if the className === targetClassName
//     output.push(body);
// loop through the body children
    // if the children div has className, push
    // it the children has deeper childen
    // recursion
//  return output array;

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className, parent, output) {
  var output = output || [];
  parent = parent || document.body;
  if (parent === document.body && parent.className === className) {
    output.push(parent);
  }
  var childrens = parent.children;
  for(let i = 0; i < childrens.length; i++){
    if (childrens[i].classList.contains(className)) {
      output.push(childrens[i]);
    }
    if (childrens[i].children.length > 0) {
      getElementsByClassName(className, childrens[i], output);
    }
  }
  return output;
};
