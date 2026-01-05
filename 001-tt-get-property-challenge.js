//Tripleten whiteboard practice

function getProperty(obj, path) {
  // Tripleten suggested solution
  // split the path into an array and save the result in the arr variable
  const arr = path.split(".");
  // define the res variable and assign obj to it
  let res = obj;
  // iterate over the array from the first element to the last
  for (let i = 0; i < arr.length; i += 1) {
    // pick an array element
    // get the property from the res variable by key
    // save the retrieved property in the res variable
    res = res[arr[i]];
  }

  return res;
}

const object = {
  one: 1,
  two: {
    three: 3,
  },
  four: 4,
};

///
console.log(getProperty(object, "one")); // 1
console.log(getProperty(object, "two.three")); // 3

///////////////
function getPropertyIyad(obj, path) {
  // write your code here
  // My solution - Iyad
  const pathSplit = path.split(".");
  let variable = "obj";
  pathSplit.forEach((p) => {
    variable = variable + `["${p}"]`;
  });

  console.log(eval(variable));
}
getPropertyIyad(object, "one"); // 1
getPropertyIyad(object, "two.three"); // 3

// Process of solving with the inteviewer
// ---  Ask questions  --- examples:
// "But what if there is no property at the end of your specified path?
// What should the function return in that case?"

// Write Pseudocode:

/* function getProperty(obj, path) {
  split the path into an array and save the result in the arr variable

    define the res variable and assign obj to it

  for (iterate over the array from the first element to the last) {
    pick an array element
    get the property from the res variable by key
    save the retrieved property in the res variable
    start all over again
  }

  return res
} */
