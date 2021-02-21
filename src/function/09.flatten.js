// 递归 + forEach() + concat
function flatten(arr){
  let result = []
  arr.forEach(item => {
    if(Array.isArray(item)){
      result = result.concat(flatten(item))
    }else {
      result = result.concat(item)
    }
  })
  return result
}

//... + some() + concat
function flatten(arr){
  let result = [...arr]
  while(result.some(item => Array.isArray(item))){
    result = [].concat(...result)
    // console.log(result)
  }
  return result
}