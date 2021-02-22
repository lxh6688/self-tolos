function reverseString(str){
  // let arr = str.split('')
  let arr = [...str]
  arr.reverse()
  return arr.join('')
}

function palindrome(str){
  return reverseString(str) === str
}

function truncate(str,size){
  return str.slice(0,size)
}