var data = [1,2,3,4,5];
var ans = 0;
for(var i=0;i<data.length;i++)
{
    ans+=data[i];
}
var mean=ans/data.length;
ans=0;
for(var i=0;i<data.length;i++)
{ 
    var deviation=data[i]-mean;
    ans+=deviation*deviation;
}
var sd=Math.sqrt(ans/data.length); 
console.log("標準差=%d",sd); 