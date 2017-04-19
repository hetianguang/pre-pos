'use strict';

function collectSameElements(collectionA, collectionB) {
  let result = []
  collectionA.map(number => {
    if (collectionB[0].includes(number)) {
      result.push(number)
    }
  })
  return result
}
