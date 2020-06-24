var x = [[1, 2], [3, 4]];
var y = [[1, 1], [1, 1]];
var ans = [];
for(i = 0; i < 2; i++)
{
    ans[i] = [];
    for(j = 0; j < 2; j++)
    {
        ans[i][j] = x[i][j] + y[i][j];
    }
}
console.log(ans)