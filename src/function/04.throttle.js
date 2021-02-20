function throttle(callback, wait){
  let start = 0
  return function(e){
    let now = Date.now()
    if(now - start >= wait){
      callback.call(this,e)
      start = now
    }
  }
}