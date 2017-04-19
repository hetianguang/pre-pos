'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = countCollectionA(collectionA);
  for (let object of collectionC) {
    if (objectB.value.indexOf(object.key) != -1) {
      object.count = object.count - Math.floor(object.count / 3)
    }
  }
  return collectionC;
}

function countCollectionA(collectionA) {
  let result = []
  for (let st of collectionA) {
    if (st.indexOf('-') != -1) {
      let st_A = st.split('-')
      result.push({
        'key': st_A[0],
        'count': parseInt(st_A[1])
      })
      continue
    }
    let object = findObject(result, st)
    if (object != null) {
      object.count++
    } else {
      result.push({'key': st, 'count': 1})
    }
  }
  return result
}

function findObject(result, st) {
  for (let object of result) {
    if (object.key === st) {
      return object
    }
  }
  return null
}
