'use strict';

function collectSameElements(collectionA, objectB) {
  let result = []
   collectionA.map(number => {
     if(objectB.value.includes(number.key)){
       result.push(number.key)
     }
    });
   return result
}
