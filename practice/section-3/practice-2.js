'use strict';

function createUpdatedCollection(collectionA, objectB) {
   for(let object of collectionA) {
    if(objectB.value.indexOf(object.key) != -1) {
      object.count = object.count - Math.floor(object.count/3)
    }
  }
  return collectionA;
}
