count = 0;
function isPrime(n)
{
  for(i = 2; i < n; i++)
  {
    if (n % i == 0)
    return false;
  }
  return true;
}
for(j = 2; j <= 50; j++)
{
  if (isPrime(j))
  count = count + 1;
}
console.log('countPrime(2, 50) =', count);