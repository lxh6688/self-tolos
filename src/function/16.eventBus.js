const eventBus = {
  // 保存类型与回调的 容器
  callbacks: {}
}

eventBus.on = function(type,callbacks){
  if(this.callbacks[type]){
    this.callbacks[type].push(callbacks)
  }else {
    this.callbacks[type] = [callbacks]
  }
}

// 触发事件
eventBus.emit = function(type,data){
  if(this.callbacks[type] && this.callbacks[type].length > 0){
    this.callbacks[type].forEach(callback => {
      callback(data)
    })
  }
}

// 事件的解绑
eventBus.off = function(eventName){
  if(eventName){
    delete this.callbacks[eventName]
  }else {
    this.callbacks = {}
  }
}