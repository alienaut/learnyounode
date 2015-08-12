var sum = process.argv.slice(2).reduce(function(pv, cv) { return pv + Number(cv); }, 0);

console.log(sum);
