'use strict';

function collectSameElements(collectionA, objectB) {
   let result = []
   collectionA.map(number => {
    if(objectB.value.includes(number))
    {
      result.push(number)
    } 
  });
  return result
}
