  /*參考自張凱証的版本，再照著寫一遍*/ 
const V = require('./vector')
var v1 = new V([1,2,3])
var v2 = new V([1,1,1])
console.log('v1.add(v2)=', v1.add(v2))
console.log('v1.sub(v2)=', v1.sub(v2))
console.log('v1.dot(v2)=', v1.dot(v2))
console.log('v1.neg()=', v1.neg())
/*對這個檔案的原始碼我可以完全理解*/