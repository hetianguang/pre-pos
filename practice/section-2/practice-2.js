'use strict';

function countSameElements(collection) {
  let result = []
  let newCollection = collection.map(st => {
    if(st.includes('-')){
      st = st.split('-')
      result.push({
        'key': st[0],
        'count': parseInt(st[1])
      })
      return
    }
    let stringObject = findObject(result, st)
    if(stringObject != null) {
        stringObject.count++
    }else{
      result.push({
        'key': st,
        'count': 1
      })
    }

  })
  return result;
}

function findObject(result, st){
  for(let object of result){
    if(object.key === st){
      return object
    }
  }
  return null
}
