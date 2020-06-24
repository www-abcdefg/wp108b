var mean = [1,2,3,4,5,6,7,8,9];
var count = 0;
var add = 0;
for(i = 0; i < mean.length; i++)
{
    add += mean[i];
    count++;
}
add /= count;
console.log("mean=%d",add);