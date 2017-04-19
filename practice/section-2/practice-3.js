'use strict';

function countSameElements(collection) {
  let result = []
  let newCollection = collection.map(st => {
    let stKey = st.charAt(0);
    let oldCount = findNumber(st)
    let stringObject = findObject(result,stKey)
    if(stringObject != null) {
      if(!isNaN(oldCount)){
        stringObject.summary = stringObject.summary + oldCount
        return
      }
        stringObject.summary++
    }else{
      if( !isNaN(oldCount)){
        result.push({
        'name': stKey,
        'summary': oldCount
      })
      }else {
        result.push({
        'name': stKey,
        'summary': 1
      })
      }
    }

  })
  return result;
}

function findObject(result, st){
  for(let object of result){
    if(object.name === st){
      return object
    }
  }
  return null
}

function findNumber(st){
  for(let i = 0; i < st.length; i++){
    let number = parseInt(st.substring(i,st.length))
     if(!isNaN(number)){
       return Math.abs(number)
     }
  }
  return NaN
}
