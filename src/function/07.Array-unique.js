// forEach() + indexOf()
function unique(arr){
  const result = []
  arr.forEach(item => {
    if(result.indexOf(item) === -1){
      result.push(item)
    }
  });
  return result
}

// forEach() + 对象容器
function unique(arr){
  const result = []
  const obj = {}
  arr.forEach(item => {
    // 将 item 作为下标存储在 obj 中
    if(obj[item] === undefined){
      obj[item] = true
      result.push(item)
    }
  })
  return result
}

// set
function unique(arr){
  let set = new Set(arr)
  let array = [...set]
  return array

  // return [...new Set(arr)]
}