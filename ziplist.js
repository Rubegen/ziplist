const letters = ['a', 'b', 'c', 'd'];

const nums = [1, 2, 3, 4];

function zipList(arr1, arr2) {
  // code goes here
  const final = [];
  for (let i = 0; i < arr1.length; i++) {
    final.push(arr1[i], arr2[i]);
  }
  return final;
}

function zipListTheSimpleWay(arr1, arr2) {
  // code goes here
  const zipped = _.zip(arr1, arr2);
  return _.flatten(zipped);
}

console.log(zipList(letters, nums));
console.log(zipListTheSimpleWay(letters, nums));