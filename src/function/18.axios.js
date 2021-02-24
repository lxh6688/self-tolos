function axios({method,url,params,data}){
  method = method.toUpperCase()
  return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest()
    let str = ''
    for(let k in params){
      str += `${k}=${params[k]}&`
    }
    str = str.slice(0,-1)
    xhr.open(method,url+'?'+str)
    if(method === 'POST' || method === 'put' || method === "DELETE"){
      // Content-type mime类型设置
      xhr.setRequestHeader('Content-type','application/json')
      // 设置请求体
      xhr.send(JSON.stringify(data))
    }else{
      xhr.send()
    }
    // 设置响应结果的类型为 JSON
    xhr.responseType = 'json'
    xhr.onreadystatechange = function(){
      if(xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 300){
          resolve({
            status: xhr.status,
            message: xhr.statusText,
            body: xhr.response
          })
        }else{
          reject(new Error('请求失败，失败的状态码为'+xhr.status))
        }
      }
    }
  })
}