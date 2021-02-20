function debounce(callback, time){
  let timeId = null
  return function(e){
    if(timeId !== null){
      clearTimeout(timeId)
    }
    timeId = setTimeout(() =>{
      callback.call(this,e)
      timeId = null
    },time)
  }
}