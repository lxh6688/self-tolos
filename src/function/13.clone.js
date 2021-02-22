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

function deepClone1(target){
  let str = JSON.stringify(target)
  let data = JSON.parse(str)
  return data
}

function deepClone2(target){
 if(typeof target === 'object' && target !== null){
   const result = Array.isArray(target) ? [] : {}
   for(let key in target){
    //  检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)
     if(target.hasOwnProperty(key)){
       result[key] = deepClone2(target[key])
     }
   }
   return result
 }else {
    return target
 }
}

function deepClone3(target,map=new Map()){
 if(typeof target === 'object' && target !== null){
    // 克隆数据之前，进行判断，数据之前是否克隆过  
    let cache = map.get(target)
    if(cache){
     return cache
    }
    const result = Array.isArray(target) ? [] : {}
    // 将新的结果存入到容器中
    map.set(target, result)
   for(let key in target ){
    //  检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)
     if(target.hasOwnProperty(key)){
       result[key] = deepClone3(target[key],map)
     }
   }
   return result
 }else {
    return target
 }
}

function deepClone4(target,map=new Map()){
  if(typeof target === 'object' && target !== null){
    // 克隆数据之前，进行判断，数据之前是否克隆过  
    let cache = map.get(target)
    if(cache){
    return cache
    }
    let isArray = Array.isArray(target)
    const result = isArray ? [] : {}
    // 将新的结果存入到容器中
    map.set(target, result)
    if(isArray){
      target.forEach((item,index) => {
        result[index] = deepClone4(item,map)
      })
    }else {
      Object.keys(target).forEach(key => {
        result[key] = deepClone4(target[key],map)
      })
    }
    return result
  }else {
     return target
  }
 }