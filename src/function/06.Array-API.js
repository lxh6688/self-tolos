// map
function map(arr,callback){
  let result = []
  for(let i=0;i<arr.length;i++){
    result.push(callback(arr[i],i))
  }
  return result
}

// reduce
function reduce(arr,callback,initValue){
  let result = initValue
  for(let i=0;i<arr.length;i++){
    result = callback(result,arr[i])
  }
  return result
}

// filter
function filter(arr,callback){
  let result = []
  for(let i=0;i<arr.length;i++){
    let res = callback(arr[i],i)
    if(res){
      result.push(arr[i])
    }
  }
  return result
}

// find
function find(arr,callback){
  for(let i=0;i<arr.length;i++){
    let res = callback(arr[i],i)
    if(res){
      return arr[i]
    }
  }
  return undefined
}

// findIndex
function findIndex(arr,callback){
  for(let i=0;i<arr.length;i++){
    let res = callback(arr[i],i)
    if(res){
      return i
    }
  }
  return -1
}

// every
function every(arr,callback){
  for(let i=0;i<arr.length;i++){
    if(!callback(arr[i],i)){
      return false
    }
  }
  return true
}

// some
function some(arr,callback){
  for(let i=0;i<arr.length;i++){
    if(callback(arr[i],i)){
      return true
    }
  }
  return false
}