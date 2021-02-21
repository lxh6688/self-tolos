function mergeObject(...objs){
  const result = {}
  // 遍历所有参数对象
  objs.forEach(obj => {
    Object.keys(obj).forEach(key => {
      // 检测 result 中是否存在 key 属性
      if(result.hasOwnProperty(key)){
        result[key] = [].concat(result[key],obj[key])
      }else {
        result[key] = obj[key]
      }
    })
  })
  return result
}