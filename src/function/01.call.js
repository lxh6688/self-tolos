function call(Fn, obj, ...args){
  if(obj === undefined || obj === null){
    obj = globalThis // 全局对象
  }
  // 为 obj 添加临时的方法
  obj.temp = Fn
  let result = obj.temp(...args)
  // 删除 temp 方法
  delete obj.temp
  return result
}