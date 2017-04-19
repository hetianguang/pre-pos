'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(let object of collectionA) {
    if(objectB.value.indexOf(object.key) != -1) {
      object.count--
    }
  }
  return collectionA;
}
