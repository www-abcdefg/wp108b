var x = [[1, 2], [3, 4]];
var y = [];
for(i = 0; i < 2; i++)
{
    y[i] = [];
    for(j = 0; j < 2; j++)
    {
        y[i][j] = 0 - x[i][j];
    }
}
console.log(y);