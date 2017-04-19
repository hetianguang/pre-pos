'use strict';

function countSameElements(collection) {
 let newArray = []
  collection.forEach(number => {
    if(!newArray.includes(number)){
      newArray.push(number)
    }
  }) 
   newArray = newArray.map(s => {
    return {
      'key': s,
      'count':0
    }
 })
  for(let o of newArray) {
    for(let s of collection) {
      if(s === o.key){
        o.count++
      }
    }
  }
  return newArray;
}

function countSameElements1(collection) {
 let newArray = []
 newArray = collection.forEach(number => {
    return {
      'key':number,
      'count':0
    }
  }) 
  for(let o of new Set(newArray)) {
    for(let s of collection) {
      if(s === o.key){
        o.count++
      }
    }
  }
  return newArray;
}