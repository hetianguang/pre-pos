'use strict';

function collectSameElements(collectionA, collectionB) {
  const result = []

  collectionA.map(number => {
    if (collectionB.indexOf(number) != -1) {
      result.push(number)
    }
  })

  return result;
}
