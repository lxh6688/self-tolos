// 浅拷贝 clone1
function clone1(target){
  if(typeof target === 'object' && target !== null){
    if(Array.isArray(target)){
      return [...target]
    }else {
      return {...target}
    }
  }else{
    return target
  }
}

// 浅拷贝 clone2 es5
function clone2(target){
  if(typeof target === 'object' && target !== null){
    const result = Array.isArray(target) ? [] : {}
    for(let key in target){
      // 判断当前对象身上是否包含该属性
      if(target.hasOwnProperty(key)){
        result[key] = target[key]
      }
    }
    return result
  }else{
    return target
  }
}