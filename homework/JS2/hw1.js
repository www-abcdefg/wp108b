/*參考自老師的範例，再照著寫一遍*/ 
var c2e={一隻:'a',狗:'dog',追:'chase',貓:'cat'};
function ma(b){
    var a=[];
    for(let i in b){
        var eword=b[i];
        var cword=c2e[eword];
        b.push(cword);
    }
    return a;
}
var a=ma(process.argv.slice(2));
console.log(a);
/*對這個檔案的原始碼我可以完全理解*/