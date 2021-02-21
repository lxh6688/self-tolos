function concat(arr, ...args){
  const result = [...arr]
  args.forEach(item => {
    if(Array.isArray(item)){
      result.push(...item)
    }else{
      result.push(item)
    }
  })
  return result
}

function silce(arr,begin,end){
  // 若arr数组长度为0
  if(arr.length === 0){
    return []
  }
  // 判断 begin end
  begin = begin || 0
  end = end || arr.length
  if(begin >= arr.length){
    return []
  }
  if(end < begin){
    end = arr.length
  }
  const result = []
  for(let i = 0;i<arr.length;i++){
    if(i >= begin && i < end){
      result.push(arr[i])
    }
  }
  return result
}