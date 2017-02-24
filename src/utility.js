const mapObj = (mapFunc, obj) =>
	Object
		.keys(obj) // [a, b, c]
		.reduce((acc, key, index) => {
			const value = obj[key];
            return Object.assign(acc, { [key]: mapFunc(value) })
		}, {});

const input = { a: 1, b: 2, c: 3, d: 4 };
const mapFunc = elem => elem * 2;

console.log('MAP OBJ', mapObj(mapFunc, input))

/*
  input: { a: 1, b: 2, c: 3 }
  const mapFunc = element => element * 2
  output: { a: 2, b: 4, c: 6 }
*/

// const mapObj = (mapFunc, obj) =>
//  Object
//    .keys(obj) // [a, b, c]
//    .reduce((acc, key, index) => {
//      const value = obj[key];
//      return { ...acc, [key]: mapFunc(value) }
//    }, {});


// Object.filter = function( obj, predicate) {
//     var result = {}, key;
//     // ---------------^---- as noted by @CMS, 
//     //      always declare variables with the "var" keyword

//     for (key in obj) {
//         if (obj.hasOwnProperty(key) && !predicate(obj[key])) {
//             result[key] = obj[key];
//         }
//     }

//     return result;
// };

// function filterAllSelected(data) {
//  // if (data.children) {
//  //  for (let i = 0; i < data.children.length; i++) {
//  //    data.children[i] = filterSelected(data.children[i]);
//  //  }
//  // }
//  // data = data.filter(child => {
//  //  return child.status === 1;
//  // });

//  return data;
// }

function filterNode(node) {                               // current node doesn't change, only filter children
  return Object.keys(node.children).reduce((acc, key, index) => {
          const value = node.children.key;
          if value.status !== 0
            return Object.assign(acc, { [key]: tree  })
          else 
            return acc  
		}, {
      "id": node.id,
      "filename": node.filename,
      "category": node.category,
      "status": node.status,
    });
}

function filterAllSelected(node) {
  if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      node.children[i] = filterNode(node.children[i]);
    }
  }
  return filterNode(node);
}

console.log('FILTER OBJ', filterObj(filterFunc, input))